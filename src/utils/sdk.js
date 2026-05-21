// import { WASMLoader } from '../meishewasmloader'
import { WASMLoader } from 'meishewasmloader'

export async function initSDK() {
  await initPlayerWasm();
  await ensureMeisheModule();
  await verifySdkLicenseFile();
  resumeAudio();
  createFSDir();
}

// 初始化wasm
// Initialize wasm SDK
function initPlayerWasm() {
  return new Promise(async (resolve, reject) => {
    const loader = WASMLoader({
      showError: reject,
      loadingFinished: resolve,
    });
    
    try {
      loader.loadEmscriptenModule("https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/4/");
    } catch (e) {
      console.error(e);
      reject;
    }
  });
}

// 确保wasm加载完成
// Ensure SDK module loading and compiling finish
function ensureMeisheModule() {
  const poll = (resolve, reject) => {
    if (
      Module.Meishe !== undefined &&
      Module.Meishe.streamingContext !== undefined
    ) {
      resolve();
    } else {
      setTimeout(() => poll(resolve, reject), 400);
    }
  };
  return new Promise(poll);
}

// SDK 鉴权
// Verify SDK license
function verifySdkLicenseFile() {
  return new Promise((resolve, reject) => {
    const streamingContext = nvsGetStreamingContextInstance();
    streamingContext.onWebRequestAuthFinish = (success) => {
      resolve();
    };
    streamingContext.verifySdkLicenseFile('https://eapi.meishesdk.com:7443/app/auth');
  });
}

// 添加音频上下文
// Start audio output context and resume it, you must call it from inside a user gesture
function resumeAudio() {
  function slot() {
    nvsResumeAudioContextWithPromise()
      .then(() => {
        document.body.removeEventListener("mousedown", slot);
        window.removeEventListener("keydown", slot);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  document.body.addEventListener("mousedown", slot);
  window.addEventListener("keydown", slot);
}

// 处理FS, 创建目录
// Create FS directory to save m3u8 files
function createFSDir() {
  const dirs = FS.readdir("/");
  const folders = ["/m3u8", "/font", "/template", "/interactproject", '/localmedia'];
  folders.map((item) => {
    if (!dirs.includes(item)) {
      FS.mkdir(item);
    }
  });
}

let footageIndex = 0
export async function setTimelineAttachment(timeline, footageInfoList) {
  for (let i = 0; i < timeline.videoTrackCount(); i++) {
    const videoTrack = timeline.getVideoTrackByIndex(i)
    for (let j = 0; j < videoTrack.getClipCount(); j++) {
      const videoClip = videoTrack.getClipByIndex(j)
      if (videoClip.isTimelineClip()) {
        await setTimelineAttachment(videoClip.getInternalTimeline(), footageInfoList)
      } else {
        const type = videoClip.getVideoType() === NvsVideoClipTypeEnum.AV ? 'videoImage' : 'image'
        videoClip.setTemplateAttachment('MSTemplate-FootageType', type)
        videoClip.setTemplateAttachment('MSTemplate-FootageCanReplace', 'false')
        videoClip.setTemplateAttachment('MSTemplate-FootageId', `footage${footageIndex}`)
        videoClip.setTemplateAttachment('MSTemplate-FootageName', 'https://alieasset.meishesdk.com/test/resource/video/2022/07/20/26946/58319c5e3af64a83afc8f376b439010d.mp4')
        footageIndex++
      }
    }
  }
}
