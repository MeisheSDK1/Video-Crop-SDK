import api from "../api";
import OSS from 'ali-oss'
import Axios from 'axios'

// 时间戳格式转换
export function convertTimeCode(us, needFrame) {
  const seconds = us / 1000000;
  let sec = parseInt(seconds);
  let frame = Math.round((seconds - sec) * 25);
  let min;
  let hour = parseInt(sec / 3600);
  if (hour > 0) {
    sec %= 3600;
    min = parseInt(sec / 60);
    if (min > 0) {
      sec %= 60;
    }
  } else {
    min = parseInt(sec / 60);
    if (min > 0) {
      sec %= 60;
    }
  }
  return (
    buildNumberString(hour) +
    ":" +
    buildNumberString(min) +
    ":" +
    buildNumberString(sec) +
    (needFrame ? ":" + buildNumberString(frame) : "")
  );
}

export function buildNumberString(number) {
  let numberString = "";
  if (number < 10) {
    numberString += "0";
  }
  return numberString + number.toString();
}

export function getQueryStringByName(name) {
  const result = location.search.match(
    new RegExp("[?&]" + name + "=([^&]+)", "i")
  );
  if (result == null || result.length < 1) {
    return "";
  }
  return result[1];
}

export function escapeXmlValue(textValue) {
  return textValue
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
    .replaceAll("\n", "&#10;")
    .replaceAll("\r", "&#13;");
}

export function unescapeXML(content) {
  return content.replace(
    /&amp;|&lt;|&gt;|&apos;|&quot;|&#10;|&#13;/g,
    (tag) =>
      ({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&apos;": "'",
        "&quot;": '"',
        "&#10;": "\n",
        "&#13;": "\r",
      }[tag] || tag)
  );
}

export function generateUUID() {
  var s = []
  var hexDigits = '0123456789abcdef'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'
  var uuid = s.join('')
  return uuid
}

export function upload(options) {
  return new Promise((resolve, reject) => {
    uploadAliOss({
      extension: options.extension,
      uploadModule: options.uploadModule,
      keyUUID: options.keyUUID || generateUUID(),
      file: options.file,
      uuid: options.uuid,
      projectId: options.projectId,
      callback: (data) => {
        if (data.uploadFinish) {
          resolve("https://" + data.location);
        }
      },
      errorCb: reject,
    });
  });
}

export async function uploadAliOss(options = {}) {
  const {
    projectId,
    keyUUID,
    file,
    isNeedCallback = 0, // 后端是否支持回调
    extension,
    isDir = 0,
    isMXF = 0,
    uploadModule,
    callback,
    errorCb,
    uuid,
  } = options;
  try {
    const requestParams = {
      type: 3,
      extension,
      isNeedCallback,
      uploadModule,
      isDir,
      ...(isMXF ? { callbackTimes: Array.from(file).length } : {}),
    };
    if (uploadModule === 'bs_project') {
      requestParams.projectId = projectId;
    }
    if (
      ['material_template', 'multi_project'].includes(
        uploadModule
      )
    ) {
      requestParams.uuid = uuid;
    }
    // It needs to be used in conjunction with the backend service.
    const { data: { data } } = await api.sts_info2(requestParams);
    if (!data) {
      if (errorCb && typeof errorCb === "function") {
        console.error("upload failed");
        errorCb();
      }
      return
    }
    try {
      const client = new OSS({
        region: data.region,
        accessKeyId: data.accessKeyId,
        accessKeySecret: data.secretAccessKey,
        stsToken: data.securityToken,
        bucket: data.bucket,
        cname: true,
        endpoint: 'https://alieasset.meishesdk.com',
      });
      let fileOrBlob = file;
      if (typeof file === "string") {
        fileOrBlob = new Blob([file], { type: "text/plain;charset=utf-8" });
      }
      if (isNeedCallback === 0) {
        const result = await client.put(data.relativePath, fileOrBlob, {
          headers: {
            "Cache-Control": "public",
          },
        });
        callback({
          resourceId: data.objectId,
          location: result.url.replace(/https:\/\/|http:\/\//, ""),
          uploadFinish: true,
          projectId: data.projectId,
        });
      }
    } catch (e) {
      console.error(e);
      // 捕获超时异常。
      if (e.code === "ConnectionTimeoutError") {
        console.log("TimeoutError");
        // do ConnectionTimeoutError operation
      }
      if (errorCb && typeof errorCb === "function") {
        console.error("upload failed:", e.code);
        errorCb(e);
      }
    }
  } catch (message) {
    if (errorCb && typeof errorCb === "function") errorCb(message);
  }
}

function setXMLData (xmlStreamWriter, key, value) {
  if (value !== undefined && typeof value !== 'function' && key !== 'raw' && key !== 'params' && value !== null && typeof value !== 'object') {
    xmlStreamWriter.writeAttribute(key, value.toString())
  }
}

export function writeCompileXml (innerAssets, footageInfos, projectUuid, projectUrl, projectXmlFileName) {
  if (!projectUrl || !projectUuid || !innerAssets || !footageInfos) {
    console.error('Invalid data to compile video!');
    return;
  }
  let xmlStreamWriter = new NvsXmlStreamWriter(projectXmlFileName);
  if (!xmlStreamWriter.open()) {
    console.error('xmlStreamWriter open failed!');
    return;
  }
  xmlStreamWriter.writeStartDocument();
  xmlStreamWriter.writeStartElement('interactpro');
  setXMLData(xmlStreamWriter, 'aspectRatio', '16:9');
  setXMLData(xmlStreamWriter, 'sizeLevel', '1080');
  setXMLData(xmlStreamWriter, 'fps', '25');
  setXMLData(xmlStreamWriter, 'outputType', 'mp4');
  setXMLData(xmlStreamWriter, 'nvenc', 'true');
  setXMLData(xmlStreamWriter, 'encoderMode', 'cbr');
  setXMLData(xmlStreamWriter, 'videoBitrate', '16000000');
  setXMLData(xmlStreamWriter, 'projectUuid', projectUuid);
  setXMLData(xmlStreamWriter, 'projectUrl', projectUrl);
  xmlStreamWriter.writeStartElement('assets');
  innerAssets.forEach(ele => {
    xmlStreamWriter.writeStartElement('asset');
    setXMLData(xmlStreamWriter, 'id', ele);
    xmlStreamWriter.writeEndElement(); // asset
  });
  xmlStreamWriter.writeEndElement(); // assets
  xmlStreamWriter.writeStartElement('footages');
  footageInfos.forEach(ele => {
    xmlStreamWriter.writeStartElement('footage');
    setXMLData(xmlStreamWriter, 'footageId', ele.footageId);
    setXMLData(xmlStreamWriter, 'path', ele.path);
    xmlStreamWriter.writeEndElement(); // footage
  })
  xmlStreamWriter.writeEndElement(); // footages
  xmlStreamWriter.writeEndElement(); // interactpro
  xmlStreamWriter.writeEndDocument();
  xmlStreamWriter.close();
}

export async function installAsset(packageUrl) {
  const response = await Axios.get(packageUrl, {
    responseType: 'arraybuffer',
  })
  const packageInFS = '/' + packageUrl.split('/').pop()
  await FS.writeFile(packageInFS, new Uint8Array(response.data))
  const list = packageInFS.split('.')
  const assetUuid = list[0].split('/').pop()
  const suffix = list.pop()
  // 根据不同的包后缀区分不同的包类型，注意：特效包不允许修改名称
  // Different package suffix need different type to install. Note: package name can not be modified.
  let assetType
  if (suffix === 'videofx') {
    assetType = NvsAssetPackageTypeEnum.VideoFx
  } else if (suffix === 'captionstyle') {
    assetType = NvsAssetPackageTypeEnum.CaptionStyle
  } else if (suffix === 'animatedsticker') {
    assetType = NvsAssetPackageTypeEnum.AnimatedSticker
  } else if (suffix === 'videotransition') {
    assetType = NvsAssetPackageTypeEnum.VideoTransition
  } else if (suffix === 'makeup') {
    assetType = NvsAssetPackageTypeEnum.Makeup
  } else if (suffix === 'facemesh') {
    assetType = NvsAssetPackageTypeEnum.FaceMesh
  } else if (suffix === 'captionrenderer') {
    assetType = NvsAssetPackageTypeEnum.CaptionRenderer
  } else if (suffix === 'captioncontext') {
    assetType = NvsAssetPackageTypeEnum.CaptionContext
  } else if (suffix === 'template') {
    assetType = NvsAssetPackageTypeEnum.Template
  }
  return new Promise((resolve, reject) => {
    if (assetType === undefined) {
      reject(assetUuid)
      return
    }
    // 检查包状态，如果已经安装，则不需要再次安装
    // Check the status of asset package first. If it has been installed, don't need install it again.
    const status = nvsGetStreamingContextInstance().getAssetPackageManager().getAssetPackageStatus(assetUuid, assetType)
    if (status !== NvsAssetPackageStatusEnum.NotInstalled) {
      resolve(assetUuid)
      return
    }
    // 通过安装包的回调判断是否成功
    // This callback function means installation finished
    nvsGetStreamingContextInstance().getAssetPackageManager().onFinishAssetPackageInstallation = (
      assetPackageId,
      assetPackageFilePath,
      assetPackageType,
      error
    ) => {
      FS.unlink(assetPackageFilePath, 0)
      // error为0表示成功
      // error is 0 means success
      if (error === 0 && assetPackageId === assetUuid) {
        resolve(assetUuid)
      } else {
        reject(assetUuid)
      }
    }
    nvsGetStreamingContextInstance().getAssetPackageManager().installAssetPackage(packageInFS, '', assetType)
  })
}

export async function saveAndInstallPackage(packageData) {
 return  installAsset(packageData.packageUrl)
}
