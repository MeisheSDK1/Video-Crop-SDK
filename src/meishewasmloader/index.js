import { simd } from "wasm-feature-detect"
import axios from 'axios'

export function WASMLoader(config)
{
    // The Emscripten module and module configuration object. The module
    // object is created in completeLoadEmscriptenModule().
    self.module = undefined;
    self.moduleConfig = {};

    function webAssemblySupported() {
        return typeof WebAssembly !== "undefined"
    }

    function webGLSupported() {
        // We expect that WebGL is supported if WebAssembly is; however
        // the GPU may be blacklisted.
        try {
            var canvas = document.createElement("canvas");
            return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
        } catch (e) {
            return false;
        }
    }

    function cacheStorageSupported (filePath) {
        if (
            !/\d+_\d+_\d+\.\d+/.test(filePath) &&
            !/^https:\/\/alieasset\.meishesdk\.com\/NvWasm\//.test(filePath)
        ) {
            return false
        }
        return 'caches' in window && window.caches instanceof CacheStorage;
    }

    config.restartMode = config.restartMode || "DoNotRestart";
    config.restartLimit = config.restartLimit || 10;

    if (config.stdoutEnabled === undefined) config.stdoutEnabled = true;
    if (config.stderrEnabled === undefined) config.stderrEnabled = true;

    // Make sure config.path is defined and ends with "/" if needed
    if (config.path === undefined)
        config.path = "";
    if (config.path.length > 0 && !config.path.endsWith("/"))
        config.path = config.path.concat("/");

    if (config.environment === undefined)
        config.environment = {};

    var publicAPI = {};
    publicAPI.webAssemblySupported = webAssemblySupported();
    publicAPI.webGLSupported = webGLSupported();
    publicAPI.status = undefined;
    publicAPI.loadEmscriptenModule = loadEmscriptenModule;
    publicAPI.module = module;

    self.restartCount = 0;

    function handleError(error) {
        self.error = error;
        setStatus("Error");
        console.error(error);
    }

    /**
     * 缓存wasm文件
     * @param {*} filename
     * @returns
     */
    async function writeCacheFile (filename) {
        if (!filename) {
            return;
        }
        const cache = await caches.open('cache_ms');
        const response = await fetch(filename);
        if (!response.ok) {
            let err =
                response.status + ' ' + response.statusText + ' ' + response.url;
            handleError(err);
            return Promise.reject(err);
        } else {
            cache.put(filename, response.clone());
            return response;
        }
    }

    /**
     * 读取缓存的wasm值
     * @param {*} filename
     * @returns
     */
    async function readCacheFile (filename) {
        if (!cacheStorageSupported(filename)) {
            return false;
        }
        const cache = await caches.open('cache_ms');
        const response = await cache.match(filename);
        return response;
    }

    async function fetchResource (filePath) {
        const fullPath = config.path + filePath;
        const cacheFile = await readCacheFile(filePath);
        // 如果cache有，从cache直接读取
        if (cacheFile) {
            return cacheFile;
        } else {
            if (cacheStorageSupported(filePath)) {
                return writeCacheFile(fullPath);
            } else {
                const response = await fetch(fullPath);
                if (!response.ok) {
                    let err =
                        response.status + ' ' + response.statusText + ' ' + response.url;
                    handleError(err);
                    return Promise.reject(err);
                } else {
                    return response;
                }
            }
        }
    }

    function fetchText(filePath) {
        return fetchResource(filePath).then(function(response) {
            return response.text();
        });
    }

    function fetchThenCompileWasm(response) {
        return response.arrayBuffer().then(function(data) {
            self.loaderSubState = "Compiling";
            setStatus("Loading") // trigger loaderSubState update
            return WebAssembly.compile(data);
        });
    }

    function fetchCompileWasm(filePath) {
        return fetchResource(filePath).then(function(response) {
            if (typeof WebAssembly.compileStreaming !== "undefined") {
                self.loaderSubState = "Downloading/Compiling";
                setStatus("Loading");
                return WebAssembly.compileStreaming(response).catch(function(error) {
                    // compileStreaming may/will fail if the server does not set the correct
                    // mime type (application/wasm) for the wasm file. Fall back to fetch,
                    // then compile in this case.
                    return fetchThenCompileWasm(response);
                });
            } else {
                // Fall back to fetch, then compile if compileStreaming is not supported
                return fetchThenCompileWasm(response);
            }
        });
    }

    function needLowerMemory () {
        if (navigator.platform !== 'Win32' && navigator.platform !== 'Windows') {
          return false
        }
        var ua = navigator.userAgent
        var uaLowerCase = ua.toLowerCase()
        if (uaLowerCase.indexOf('win64') === -1 && uaLowerCase.indexOf('wow64') === -1) {
          return true
        }
        if (
          ua.indexOf('Windows NT 5.0') > -1 ||
          ua.indexOf('Windows 2000') > -1 ||
          ua.indexOf('Windows NT 5.1') > -1 ||
          ua.indexOf('Windows XP') > -1 ||
          ua.indexOf('Windows NT 5.2') > -1 ||
          ua.indexOf('Windows 2003') > -1 ||
          ua.indexOf('Windows NT 6.0') > -1 ||
          ua.indexOf('Windows Vista') > -1 ||
          ua.indexOf('Windows NT 6.1') > -1 ||
          ua.indexOf('Windows 7') > -1
        ) {
          return true
        }
        return false
    }

    async function getApplicationName(effectSdk) {
		const simdSupported = await simd();
        const is64Bit = () => {
          return (
            navigator.userAgent.toLowerCase().indexOf("win64") > -1 ||
            navigator.userAgent.toLowerCase().indexOf("mac os") > -1
          );
        };
        if (needLowerMemory()) {
            return effectSdk ? "NvWasmEffectRenderer" : "NvWasmPlayer_lower_memory";
        } else if (is64Bit() && simdSupported) {
            return effectSdk ? "NvWasmEffectRenderer_simd" : "NvWasmPlayer_simd";
        } else {
            return effectSdk ? "NvWasmEffectRenderer" : "NvWasmPlayer";
        }
    }

    async function loadEmscriptenModule(applicationNameBaseUrl, 
                                        { enableMultithreadDecoding = false,
                                          enableDropFrameMode = false,
                                          effectSdk = false,
                                          audioOutputWorkletScriptUrl,
                                          workerScriptUrl
                                        } = {}) {
        // Check for Wasm & WebGL support; set error and return before downloading resources if missing
        if (!webAssemblySupported()) {
            handleError("Error: WebAssembly is not supported");
            return;
        }
        if (!webGLSupported()) {
            handleError("Error: WebGL is not supported");
            return;
        }

        // Continue waiting if loadEmscriptenModule() is called again
        if (publicAPI.status == "Loading")
            return;
        self.loaderSubState = "Downloading";
        setStatus("Loading");

        if (!applicationNameBaseUrl) {
            applicationNameBaseUrl = "https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/4/"
        } else if (!applicationNameBaseUrl.endsWith("/")) {
            applicationNameBaseUrl += "/";
        }

        if (effectSdk) {
            if (!workerScriptUrl) {
                const response = await axios.get(applicationNameBaseUrl + "NvWasmEffectRenderer.worker.js");
                const workerSource = response.data;
                workerScriptUrl = URL.createObjectURL(new Blob([workerSource], {type: 'text/javascript'}));    
            }
        } else {
            if (!workerScriptUrl) {
                const response = await axios.get(applicationNameBaseUrl + "NvWasmPlayer.worker.js");
                const workerSource = response.data;
                workerScriptUrl = URL.createObjectURL(new Blob([workerSource], {type: 'text/javascript'}));    
            }
            
            if (!audioOutputWorkletScriptUrl) {
                const response = await axios.get(applicationNameBaseUrl + "NvAudioOutputWorklet.js");
                const audioOutputWorkletSource = response.data;
                audioOutputWorkletScriptUrl = URL.createObjectURL(new Blob([audioOutputWorkletSource], {type: 'text/javascript'}));
            }
        }
        
        let applicationName = await getApplicationName(effectSdk);
        applicationName = applicationNameBaseUrl + applicationName;

        // 如果cache里面没有匹配的，删除历史数据
        if (cacheStorageSupported(applicationName)) {
            const cacheFile = await readCacheFile(applicationName + ".js");
            if (!cacheFile) {
                await caches.delete('cache_ms');
            }
        }

        self.moduleConfig.audioOutputWorkletScriptUrl = audioOutputWorkletScriptUrl;
        self.moduleConfig.workerScriptUrl = workerScriptUrl;

        // Fetch emscripten generated javascript runtime
        var emscriptenModuleSource = undefined
        var emscriptenModuleSourcePromise = fetchText(applicationName + ".js").then(function(source) {
            emscriptenModuleSource = source
        });

        // Fetch and compile wasm module
        var wasmModule = undefined;
        var wasmModulePromise = fetchCompileWasm(applicationName + ".wasm").then(function (module) {
            wasmModule = module;
        });

        // Wait for all resources ready
        Promise.all([emscriptenModuleSourcePromise, wasmModulePromise]).then(function(){
            completeLoadEmscriptenModule(applicationName, emscriptenModuleSource, wasmModule, enableMultithreadDecoding, enableDropFrameMode);
        }).catch(function(error) {
            handleError(error);
            // An error here is fatal, abort
            self.moduleConfig.onAbort(error)
        });
    }

    function completeLoadEmscriptenModule(applicationName, emscriptenModuleSource, wasmModule, enableMultithreadDecoding, enableDropFrameMode) {
        self.moduleConfig.Meishe = {};
        self.moduleConfig.Meishe.NvsEnableMultithreadDecoding = enableMultithreadDecoding;
        self.moduleConfig.Meishe.NvsEnableDropFrameMode = enableDropFrameMode;
        // The wasm binary has been compiled into a module during resource download,
        // and is ready to be instantiated. Define the instantiateWasm callback which
        // emscripten will call to create the instance.
        self.moduleConfig.instantiateWasm = function(imports, successCallback) {
            WebAssembly.instantiate(wasmModule, imports).then(function(instance) {
                successCallback(instance, wasmModule);
            }, function(error) {
                handleError(error)
            });
            return {};
        };

        self.moduleConfig.locateFile = self.moduleConfig.locateFile || function(filename) {
            return config.path + filename;
        };

        // Attach status callbacks
        self.moduleConfig.setStatus = self.moduleConfig.setStatus || function(text) {
            // Currently the only usable status update from this function
            // is "Running..."
            if (text.startsWith("Running"))
                setStatus("Running");
        };
        self.moduleConfig.monitorRunDependencies = self.moduleConfig.monitorRunDependencies || function(left) {
          //  console.log("monitorRunDependencies " + left)
        };

        // Attach standard out/err callbacks.
        self.moduleConfig.print = self.moduleConfig.print || function(text) {
            if (config.stdoutEnabled)
                console.log(text)
        };
        self.moduleConfig.printErr = self.moduleConfig.printErr || function(text) {
            if (config.stderrEnabled)
                console.warn(text)
        };

        // Error handling: set status to "Exited", update crashed and
        // exitCode according to exit type.
        // Emscripten will typically call printErr with the error text
        // as well. Note that emscripten may also throw exceptions from
        // async callbacks. These should be handled in window.onerror by user code.
        self.moduleConfig.onAbort = self.moduleConfig.onAbort || function(text) {
            publicAPI.crashed = true;
            publicAPI.exitText = text;
            setStatus("Exited");
        };
        self.moduleConfig.quit = self.moduleConfig.quit || function(code, exception) {
            if (code == 0)
                return;

            if (exception.name == "ExitStatus") {
                // Clean exit with code
                publicAPI.exitText = undefined
                publicAPI.exitCode = code;
            } else {
                publicAPI.exitText = exception.toString();
                publicAPI.crashed = true;
            }
            setStatus("Exited");
        };

        self.moduleConfig.preRun = self.moduleConfig.preRun || []
        self.moduleConfig.preRun.push(function(module) {
            // Set environment variables
            for (var [key, value] of Object.entries(config.environment)) {
                module.ENV[key.toUpperCase()] = value;
            }
        });

        self.moduleConfig.mainScriptUrlOrBlob = new Blob([emscriptenModuleSource], {type: 'text/javascript'});

        config.restart = function() {

            // Restart by reloading the page. This will wipe all state which means
            // reload loops can't be prevented.
            if (config.restartType == "ReloadPage") {
                location.reload();
            }

            // Restart by readling the emscripten app module.
            ++self.restartCount;
            if (self.restartCount > config.restartLimit) {
                handleError("Error: This application has crashed too many times and has been disabled. Reload the page to try again.");
                return;
            }
            loadEmscriptenModule(applicationName);
        };

        publicAPI.exitCode = undefined;
        publicAPI.exitText = undefined;
        publicAPI.crashed = false;

        // Load the Emscripten application module. This is done by eval()'ing the
        // javascript runtime generated by Emscripten, and then calling
        // createQtAppInstance(), which was added to the global scope.
        window.eval(emscriptenModuleSource);
        if (typeof createMeisheAppInstance!="undefined") {
            createMeisheAppInstance(self.moduleConfig).then(function(module) {
                self.module = module;
            });
        } else {
            createQtAppInstance(self.moduleConfig).then(function(module) {
                self.module = module;
            });
        }
    }

    function setErrorContent() {
        if (config.containerElements === undefined) {
            if (config.showError !== undefined)
                config.showError(self.error);
            return;
        }

        for (container of config.containerElements) {
            var errorElement = config.showError(self.error, container);
            container.appendChild(errorElement);
        }
    }

    function setLoaderContent() {
        if (config.containerElements === undefined) {
            if (config.showLoader !== undefined)
                config.showLoader(self.loaderSubState);
            return;
        }

        for (container of config.containerElements) {
            var loaderElement = config.showLoader(self.loaderSubState, container);
            container.appendChild(loaderElement);
        }
    }

    function setExitContent() {

        // publicAPI.crashed = true;

        if (publicAPI.status != "Exited")
            return;

        if (config.containerElements === undefined) {
            if (config.showExit !== undefined)
                config.showExit(publicAPI.crashed, publicAPI.exitCode);
            return;
        }

        if (!publicAPI.crashed)
            return;

        for (container of config.containerElements) {
            var loaderElement = config.showExit(publicAPI.crashed, publicAPI.exitCode, container);
            if (loaderElement !== undefined)
                container.appendChild(loaderElement);
        }
    }

    var committedStatus = undefined;
    function handleStatusChange() {
        if (publicAPI.status != "Loading" && committedStatus == publicAPI.status)
            return;
        committedStatus = publicAPI.status;

        if (publicAPI.status == "Error") {
            setErrorContent();
        } else if (publicAPI.status == "Loading") {
            setLoaderContent();
        } else if (publicAPI.status == "Running") {
            if (config.loadingFinished !== undefined)
                config.loadingFinished();
        } else if (publicAPI.status == "Exited") {
            if (config.restartMode == "RestartOnExit" ||
                config.restartMode == "RestartOnCrash" && publicAPI.crashed) {
                    committedStatus = undefined;
                    config.restart();
            } else {
                setExitContent();
            }
        }

        // Send status change notification
        if (config.statusChanged)
            config.statusChanged(publicAPI.status);
    }

    function setStatus(status) {
        if (status != "Loading" && publicAPI.status == status)
            return;
        publicAPI.status = status;

        window.setTimeout(function() { handleStatusChange(); }, 0);
    }

    function module() {
        return self.module;
    }

    setStatus("Created");

    return publicAPI;
}
