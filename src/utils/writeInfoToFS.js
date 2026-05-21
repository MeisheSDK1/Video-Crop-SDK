import ExifReader from 'exifreader';
import MP4Box from 'mp4box';


export async function getFileFromUrl(
  url,
  fileName = '',
) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Invalid network address');
    }
    const blob = await response.blob();
    if (!fileName) {
      fileName = url.substring(url.lastIndexOf('/') + 1);
    }
    return new File([blob], fileName, { type: blob.type });
  } catch (error) {
    console.error('Error converting URL to File:', error);
    return null;
  }
}

export async function createLocalFile(options){
  const data = {
    webLocalPath: '',
    webLocalString: '',
  };
  let { file, webAssetUrl } = options;
  if (!file && !webAssetUrl) {
    console.error('Failed to get file info from null file object');
    return data;
  }
  let webLocalString = '';
  let fileName = '';
  if (webAssetUrl) {
    fileName = webAssetUrl;
  } else if (file) {
    fileName = file.name;
  }
  const fileSuffix = fileName.split('.').pop().toLowerCase();
  const nvStreamingContext = nvsGetStreamingContextInstance();
  if (fileSuffix === 'mp4' || fileSuffix === 'mov' || fileSuffix === 'm4a') {
    try {
      const videoMp4BoxInfo = await getVideoMp4BoxInfo(options);
      console.log('videoMp4BoxInfo', videoMp4BoxInfo);
      if (videoMp4BoxInfo) {
        if (!checkLocalFileInfoSupported(videoMp4BoxInfo, fileSuffix)) {
          return data;
        }
        if (file) {
          const localFileId = nvStreamingContext.registerLocalFile(file);
          if (localFileId) {
            webLocalString = getWebLocalStringFromVideoMp4BoxInfo({
              videoMp4BoxInfo,
              localFileId,
            });
          }
        } else {
          webLocalString = getWebLocalStringFromVideoMp4BoxInfo({
            videoMp4BoxInfo,
            webAssetUrl,
          });
        }
      } else {
        console.warn('Invalid weblocal video file: ', fileName);
        return data;
      }
    } catch (error) {
      // 处理mp4bbox 简析错误情况
      console.error(error);
      return data;
    }
  } else if (
    fileSuffix === 'jpg' ||
    fileSuffix === 'jpeg' ||
    fileSuffix === 'png'
  ) {
    if (webAssetUrl) {
      const _file = await getFileFromUrl(webAssetUrl);
      if (_file) {
        file = _file;
      }
    }
    if (file) {
      const exifInfo = await getExifInfo(file);
      if (exifInfo) {
        const localFileId = nvStreamingContext.registerLocalFile(file);
        if (localFileId) {
          console.log('Registered local image file id=' + localFileId);
          webLocalString = getWebLocalStringFromExifInfo(exifInfo, localFileId);
        }
      }
    }
  } else {
    console.warn('Unsupported file suffix for local: ' + fileSuffix);
    return data;
  }
  return createWebLocalFile({
    ...options,
    webLocalString,
  });
}

// 音视频
async function getVideoMp4BoxInfo(options) {
  return new Promise((resolve, reject) => {
    const { file, webAssetUrl } = options;
    const mp4boxFile = MP4Box.createFile();
    let parsed = false;

    mp4boxFile.onReady = function (info) {
      parsed = true;
      // console.log('音视频', info);
      resolve(info);
    };

    let nextBufferStart = 0;
    if (file) {
      if (
        navigator.deviceMemory &&
        file.size > navigator.deviceMemory * 1024 * 1024 * 1024
      ) {
        console.warn(
          'This file is larger than the memory size and there may be problems with MP4box profiling',
        );
        resolve(null);
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        try {
          const ab = e.target.result ;
          ab.fileStart = nextBufferStart;
          nextBufferStart = mp4boxFile.appendBuffer(e.target.result);
          if (!parsed) {
            if (ab.fileStart === nextBufferStart) {
              console.warn('This is a spicial video');
              resolve(null);
              return;
            }
            if (nextBufferStart && nextBufferStart < file.size) {
              console.warn('read file size: ', nextBufferStart);
              fileReader.readAsArrayBuffer(
                file.slice(
                  nextBufferStart,
                  Math.min(nextBufferStart + 32768, file.size),
                ),
              );
            } else {
              resolve(null);
            }
          }
        } catch (error) {
          reject(error);
        }
      };
      fileReader.readAsArrayBuffer(
        file.slice(
          nextBufferStart,
          Math.min(nextBufferStart + 32768, file.size),
        ),
      );
    } else if (webAssetUrl) {
      const fetchBuffer = async () => {
        const response = await fetch(webAssetUrl, {
          method: 'GET',
          headers: {
            Range: `bytes=${nextBufferStart}-${nextBufferStart + 32767}`,
          },
        });
        if (!response.ok) {
          console.error('Invalid network address');
          resolve(null);
          return;
        }
        const buffer = await response.arrayBuffer();
        buffer.fileStart = nextBufferStart;
        nextBufferStart = mp4boxFile.appendBuffer(buffer);
        if (!parsed) {
          if (buffer.fileStart === nextBufferStart) {
            console.warn('This is a spicial video');
            resolve(null);
            return;
          }
          if (nextBufferStart) {
            await fetchBuffer();
          } else {
            resolve(null);
          }
        }
      };

      fetchBuffer().catch(() => {
        resolve(null);
      });
    }
  });
}

// 图片
async function getExifInfo(file) {
  const exifInfo = await ExifReader.load(file);
  console.log('图片', exifInfo);
  return exifInfo;
}

function checkLocalFileInfoSupported(videoMp4BoxInfo, fileSuffix) {
  let hasVideoTrack = false;
  let hasAudioTrack = false;
  for (let i = 0; i < videoMp4BoxInfo.tracks.length; ++i) {
    const track = videoMp4BoxInfo.tracks[i];
    if (track.video) {
      hasVideoTrack = true;
      if (track.codec.indexOf('avc1') < 0 && track.codec.indexOf('avc3') < 0) {
        console.warn('Codec is not supported!', track.codec);
        return false;
      }
      if (track.video.width * track.video.height > 1920 * 1080) {
        console.warn('Video size is too large!', track.video);
        return false;
      }
    } else if (track.audio) {
      hasAudioTrack = true;
      if (track.codec.indexOf('mp4a') < 0 && track.codec.indexOf('aac') < 0) {
        console.warn('Codec is not supported!', track.codec);
        return false;
      }
    }
  }
  if (fileSuffix === 'mp4' || fileSuffix === 'mov') {
    if (!hasVideoTrack) {
      console.warn('There is no video track');
      return false;
    }
  } else if (fileSuffix === 'm4a') {
    if (!hasAudioTrack) {
      console.warn('There is no audio track');
      return false;
    }
  }
  return true;
}

function createWebLocalFile(options) {
  const { webLocalString, uuid = '', localPath = '' } = options;
  if (!FS.analyzePath('/localmedia').exists) {
    FS.mkdir('/localmedia');
  }
  const webLocalPath = localPath || '/localmedia/' + uuid + '.weblocal';
  FS.writeFile(webLocalPath, webLocalString);

  return {
    webLocalPath,
    webLocalString,
  };
}

function getWebLocalStringFromVideoMp4BoxInfo(options) {
  const { videoMp4BoxInfo, localFileId, webAssetUrl } = options;
  const webLocalInfo = {
    mediaType: 'video',
    webLocalFileId: '',
    webAssetUrl: '',
    duration: (videoMp4BoxInfo.duration / videoMp4BoxInfo.timescale) * 1000000,
    bitrate: 0,
    videoStreams: [],
    audioStreams: [],
  };
  // 对齐到40ms，和转码器保持一致
  webLocalInfo.duration =
    webLocalInfo.duration + 20000 - ((webLocalInfo.duration + 20000) % 40000);
  for (let i = 0; i < videoMp4BoxInfo.tracks.length; ++i) {
    const track = videoMp4BoxInfo.tracks[i];
    if (track.video) {
      const videoTrackInfo = {
        duration: (track.duration / track.timescale) * 1000000,
        width: track.video.width,
        height: track.video.height,
        displayRotation:
          Math.atan2(track.matrix[1], track.matrix[0]) * (180 / Math.PI),
      };
      videoTrackInfo.duration =
        videoTrackInfo.duration +
        20000 -
        ((videoTrackInfo.duration + 20000) % 40000);
      webLocalInfo.videoStreams.push(videoTrackInfo);
      webLocalInfo.bitrate += track.bitrate;
    } else if (track.audio) {
      const audioTrackInfo = {
        duration: (track.duration / track.timescale) * 1000000,
        sampleRate: track.audio.sample_rate,
        channelCount: track.audio.channel_count,
      };
      audioTrackInfo.duration =
        audioTrackInfo.duration +
        20000 -
        ((audioTrackInfo.duration + 20000) % 40000);
      webLocalInfo.audioStreams.push(audioTrackInfo);
      webLocalInfo.bitrate += track.bitrate;
    }
  }

  if (!webLocalInfo.videoStreams || webLocalInfo.videoStreams.length === 0) {
    webLocalInfo.mediaType = 'audio';
  }

  webLocalInfo.bitrate = webLocalInfo.bitrate | 0;

  if (localFileId) {
    webLocalInfo.webLocalFileId = localFileId;
  } else {
    webLocalInfo.webAssetUrl = webAssetUrl;
  }

  // console.log(webLocalInfo);
  return JSON.stringify(webLocalInfo);
}

function getWebLocalStringFromExifInfo(exifInfo, localFileId) {
  const webLocalInfo = {
    mediaType: 'image',
    duration: 4000000,
    bitrate: 0,
    webLocalFileId: localFileId,
    videoStreams: [],
    audioStreams: [],
  };
  const videoTrackInfo = {
    duration: webLocalInfo.duration,
    width: exifInfo['Image Width'].value,
    height: exifInfo['Image Height'].value,
    mirror: false,
    displayRotation: 0,
  };
  if (exifInfo.Orientation) {
    switch (exifInfo.Orientation.value) {
      case 1:
        videoTrackInfo.mirror = false;
        videoTrackInfo.displayRotation = 0;
        break;
      case 2:
        videoTrackInfo.mirror = true;
        videoTrackInfo.displayRotation = 0;
        break;
      case 3:
        videoTrackInfo.mirror = false;
        videoTrackInfo.displayRotation = 180;
        break;
      case 4:
        videoTrackInfo.mirror = true;
        videoTrackInfo.displayRotation = 180;
        break;
      case 5:
        videoTrackInfo.mirror = true;
        videoTrackInfo.displayRotation = 270;
        break;
      case 6:
        videoTrackInfo.mirror = false;
        videoTrackInfo.displayRotation = 90;
        break;
      case 7:
        videoTrackInfo.mirror = true;
        videoTrackInfo.displayRotation = 90;
        break;
      case 8:
        videoTrackInfo.mirror = false;
        videoTrackInfo.displayRotation = 270;
        break;
    }
  }
  webLocalInfo.videoStreams = [videoTrackInfo];

  console.log(webLocalInfo);
  return JSON.stringify(webLocalInfo);
}
