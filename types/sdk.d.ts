/**
 * @if ENGLISH
 * @brief resume audio context
 * @return {Void}
 * @else
 * @brief 恢复音频上下文
 * @return {Void}
 * @endif
 */
declare function nvsResumeAudioContext(): void;
/**
 * @if ENGLISH
 * @brief resume AudioContext with Promise
 * @return {Promise}
 * @else
 * @brief 使用 Promise 恢复 AudioContext
 * @return {Promise}
 * @endif
 */
declare function nvsResumeAudioContextWithPromise(): Promise<any>;
/**
 * @if ENGLISH
 * @brief get instance of streaming context
 * @return {NvsStreamingContext} engine object of streaming
 * @else
 * @brief 获取流媒体上下文实例
 * @return {NvsStreamingContext} 流媒体引擎对象
 * @endif
 */
declare function nvsGetStreamingContextInstance(): NvsStreamingContext;
declare function nvsSetModule(module: any): void;
declare function nvsSetFS(fs: any): void;
declare function nvsInitClasses(): void;
/**
 * @if ENGLISH
 * @brief Doc of SDK WEB APPLICATION
 * @version 3.12.0
 * @copyright Meishe Co., Ltd.
 * @else
 * @brief SDK WEB应用文档
 * @version 3.12.0
 * @copyright 北京美摄网络科技有限公司
 * @endif
 */
/** @file */
declare var Module: any;
declare var FS: any;
/**
 * @if ENGLISH
 * @brief event emitter
 * @else
 * @brief 事件发射器
 * @endif
 */
declare class NvsEventEmitter {
    store: {};
    /**
   * @if ENGLISH
   * @brief on
   * @else
   * @brief 绑定
   * @endif
   */
    on(key: any, fn: any): void;
    /**
   * @if ENGLISH
   * @brief emit
   * @else
   * @brief 触发
   * @endif
   */
    emit(key: any, ...args: any[]): void;
    /**
   * @if ENGLISH
   * @brief off
   * @else
   * @brief 解绑
   * @endif
   */
    off(key: any, fn: any): void;
}
/**
 * @if ENGLISH
 * @brief videoFx
 * @else
 * @brief 视频特效常量
 * @endif
 */
declare const NvsStreamingSdkFuncVideoFx: "videoFx";
/**
 * @if ENGLISH
 * @brief animatedSticker
 * @else
 * @brief 动画贴纸
 * @endif
 */
declare const NvsStreamingSdkFuncAnimatedSticker: "animatedSticker";
/**
 * @if ENGLISH
 * @brief music
 * @else
 * @brief 音乐
 * @endif
 */
declare const NvsStreamingSdkFuncMusic: "music";
/**
 * @if ENGLISH
 * @brief caption
 * @else
 * @brief 字幕
 * @endif
 */
declare const NvsStreamingSdkFuncCaption: "caption";
/**
 * @if ENGLISH
 * @brief videoFxExtension
 * @else
 * @brief 视频特效扩展
 * @endif
 */
declare const NvsStreamingSdkFuncVideoFxExtension: "videoFxExtension";
/**
 * @if ENGLISH
 * @brief videoTransition
 * @else
 * @brief 视频转场
 * @endif
 */
declare const NvsStreamingSdkFuncVideoTransition: "videoTransition";
/**
 * @if ENGLISH
 * @brief theme
 * @else
 * @brief 主题
 * @endif
 */
declare const NvsStreamingSdkFuncTheme: "theme";
/**
 * @if ENGLISH
 * @brief particleVideoFx
 * @else
 * @brief 粒子视频特效
 * @endif
 */
declare const NvsStreamingSdkFuncParticleVideoFx: "particleVideoFx";
/**
 * @if ENGLISH
 * @brief template
 * @else
 * @brief 模板
 * @endif
 */
declare const NvsStreamingSdkFuncTemplate: "template";
/**
 * @if ENGLISH
 * @brief useTemplate
 * @else
 * @brief 使用模板
 * @endif
 */
declare const NvsStreamingSdkFuncUseTemplate: "useTemplate";
/**
 * @if ENGLISH
 * @brief videoTransitionExtension
 * @else
 * @brief 视频转场扩展
 * @endif
 */
declare const NvsStreamingSdkFuncVideoTransitionExtension: "videoTransitionExtension";
/**
 * @if ENGLISH
 * @brief changeSpeed
 * @else
 * @brief 改变速度
 * @endif
 */
declare const NvsStreamingSdkFuncChangeSpeed: "changeSpeed";
/**
 * @if ENGLISH
 * @brief clipSplit
 * @else
 * @brief 片段分割
 * @endif
 */
declare const NvsStreamingSdkFuncClipSplit: "clipSplit";
/**
 * @if ENGLISH
 * @brief videoColorAdjust
 * @else
 * @brief 视频颜色调整
 * @endif
 */
declare const NvsStreamingSdkFuncVideoColorAdjust: "videoColorAdjust";
/**
 * @if ENGLISH
 * @brief captionStyleSetting
 * @else
 * @brief 字幕风格设置
 * @endif
 */
declare const NvsStreamingSdkFuncCaptionStyleSetting: "captionStyleSetting";
/**
 * @if ENGLISH
 * @brief eventEmitter
 * @else
 * @brief 事件发射器对象
 * @endif
 */
declare const nvsEventEmitter: NvsEventEmitter;
/**
 * @if ENGLISH
 * @brief streamingEngineStateStopped
 * @else
 * @brief 流媒体引擎状态停止
 * @endif
 */
declare const streamingEngineStateStopped: "streamingEngineStateStopped";
/**
 * @if ENGLISH
 * @brief seekingTimelinePositionArrived
 * @else
 * @brief 时间线位置
 * @endif
 */
declare const seekingTimelinePositionArrived: "seekingTimelinePositionArrived";
/**
 * @if ENGLISH
 * @brief sdk version
 * @else
 * @brief SDK版本号
 * @endif
 */
declare class NvsSdkVersion {
    /**
   * @constructor
   * @if ENGLISH
   * @brief Sdk version
   * @param {Number} majorVersion major version
   * @param {Number} minorVersion minor version
   * @param {Number} revisionNumber revision number
   * @else
   * @brief Sdk版本号
   * @param {Number} majorVersion 主版本号
   * @param {Number} minorVersion 次版本号
   * @param {Number} revisionNumber 序号
   * @endif
   */
    constructor(majorVersion: number, minorVersion: number, revisionNumber: number);
    majorVersion: number;
    minorVersion: number;
    revisionNumber: number;
}
/**
 * @if ENGLISH
 * @brief rational
 * @else
 * @brief 比例值
 * @endif
 */
declare class NvsRational {
    /**
   * @constructor
   * @if ENGLISH
   * @param {Number} numerator numerator
   * @param {Number} denominator denominator
   * @else
   * @param {Number} numerator 分子
   * @param {Number} denominator 分母
   * @endif
   */
    constructor(numerator: number, denominator: number);
    num: number;
    den: number;
}
/**
 * @if ENGLISH
 * @brief video resolution
 * @else
 * @brief 视频分辨率
 * @endif
 */
declare class NvsVideoResolution {
    /**
   * @constructor
   * @if ENGLISH
   * @param {Number} imageWidth width
   * @param {Number} imageHeight height
   * @else
   * @param {Number} imageWidth 宽度
   * @param {Number} imageHeight 高度
   * @endif
   */
    constructor(imageWidth: number, imageHeight: number);
    imageWidth: number;
    imageHeight: number;
}
/**
 * @if ENGLISH
 * @brief audio resolution
 * @else
 * @brief 音频解析度
 * @endif
 */
declare class NvsAudioResolution {
    /**
   * @constructor
   * @if ENGLISH
   * @param {Number} sampleRate The sample rate
   * @param {Number} channelCount The count of channel
   * @else
   * @param {Number} sampleRate 采样率
   * @param {Number} channelCount 通道数
   * @endif
   */
    constructor(sampleRate: number, channelCount: number);
    sampleRate: number;
    channelCount: number;
}
/**
 * @if ENGLISH
 * @brief fill mode enum of Live window
 * @note 0 Preserve aspect crop
 * @note 1 Preserve aspect fit
 * @note 2 Stretch
 * @else
 * @brief 浏览窗口填充模式枚举
 * @note 0 图像按比例均匀填充，必要时进行裁剪(默认模式)
 * @note 1 图像均匀地缩放来适合窗口，没有裁剪
 * @note 2 图像被缩放来适合窗口
 * @endif
 */
declare const NvsLiveWindowFillModeEnum: Readonly<{
    PreserveAspectCrop: 0;
    PreserveAspectFit: 1;
    Stretch: 2;
}>;
/**
 * @if ENGLISH
 * @brief liveWindow video preview window
 * @else
 * @brief 视频预览窗口
 * @endif
 */
declare class NvsLiveWindow {
    internalLiveWindow: number;
    /**
   * @if ENGLISH
   * @brief Sets the fill mode of LiveWindow.
   * @param {Number} fillMode fill mode
   * @return {Void}
   * @else
   * @brief 设置填充模式
   * @param {Number} fillMode 填充模式
   * @return {Void}
   * @endif
   */
    setFillMode(fillMode: number): void;
    /**
   * @if ENGLISH
   * @brief get fill mode
   * @return {Number} fill mode
   * @else
   * @brief 获取填充模式
   * @return {Number} 填充模式
   * @endif
   */
    getFillMode(): number;
    /**
   * @if ENGLISH
   * @brief timeline coordinates to view coordinates
   * @param {NvsPointF} ptCanonical timeline coordinates
   * @return {NvsPointF} view coordinates
   * @else
   * @brief 时间线坐标转换成视图坐标
   * @param {NvsPointF} ptCanonical 时间线坐标
   * @return {NvsPointF} 视图坐标
   * @endif
   */
    mapCanonicalToView(ptCanonical: NvsPointF): NvsPointF;
    /**
   * @if ENGLISH
   * @brief view coordinates to timeline coordinates
   * @param {NvsPointF} ptView view coordinates
   * @return {NvsPointF} timeline coordinates
   * @else
   * @brief 视图坐标转换成时间线坐标
   * @param {NvsPointF} ptView 视图坐标
   * @return {NvsPointF} 时间线坐标
   * @endif
   */
    mapViewToCanonical(ptView: NvsPointF): NvsPointF;
    /**
   * @if ENGLISH
   * @brief normalized coordinates to view coordinates
   * @param {NvsPointF} ptNormalized normalized coordinates
   * @return {NvsPointF} view coordinates
   * @else
   * @brief 归一化坐标转换成视图坐标
   * @param {NvsPointF} ptNormalized 归一化坐标
   * @return {NvsPointF} 视图坐标
   * @endif
   */
    mapNormalizedToView(ptNormalized: NvsPointF): NvsPointF;
    /**
   * @if ENGLISH
   * @brief view coordinates to normalized view coordinates
   * @param {NvsPointF} view coordinates
   * @return {NvsPointF} normalized coordinates
   * @else
   * @brief 视图坐标转换成归一化坐标
   * @param {NvsPointF} 视图坐标
   * @return {NvsPointF} 归一化坐标
   * @endif
   */
    mapViewToNormalized(ptView: any): NvsPointF;
    /**
   * @if ENGLISH
   * @brief set background color
   * @param {NvsColor} color background color
   * @return {}
   * @else
   * @brief 设置背景颜色
   * @param {NvsColor} color 背景颜色
   * @return {Void} 无返回值
   * @endif
   */
    setBackgroundColor(color: NvsColor): any;
    /**
   * @if ENGLISH
   * @brief Get the current text background color value.
   * @return {NvsColor} Returns the NvsColor object representing the current background color.
   * @else
   * @brief 获取当前文本背景颜色值
   * @return {NvsColor} 返回表示当前背景颜色的 NvsColor 对象。
   * @endif
   */
    getBackgroundColor(): NvsColor;
    /**
   * @if ENGLISH
   * @brief Get pixel color.
   * @param {NvsPointF} ptView The NvsPointF
   * @return {NvsColor} Returns the NvsColor
   * @else
   * @brief 获取当前像素的颜色值
   * @param {NvsPointF}
   * @return {NvsColor}
   * @endif
   */
    getPixelColor(ptView: NvsPointF): NvsColor;
}
/**
 * @if ENGLISH
 * @brief size mode enum of video preview
 * @note FullSize Full size
 * @note LiveWindowSize Live window size
 * @else
 * @brief 视频预览大小模式枚举
 * @note FullSize 最大
 * @note LiveWindowSize 实时窗口大小
 * @endif
 */
declare const NvsVideoPreviewSizeModeEnum: Readonly<{
    FullSize: 0;
    LiveWindowSize: 1;
}>;
/**
 * @if ENGLISH
 * @brief Seek flag enum
 * @note ShowCaptionPoster Show animated sticker poster
 * @note ShowAnimatedStickerPoster Show caption poster
 * @note BuddyHostVideoFrame Buddy host video frame, used for face detection normally
 * @note WebReaderPrefetchForSeek Web reader prefetch for seek
 * @note BuddyHostOriginVideoFrame Buddy host origin video frame, used for face detection normally
 * @note UseMipmap Use mipmap
 * @else
 * @brief 定位标识枚举
 * @note ShowCaptionPoster 显示动画贴纸海报
 * @note ShowAnimatedStickerPoster 显示标题海报
 * @note BuddyHostVideoFrame 伴侣视频帧，一般用于人脸检测
 * @note WebReaderPrefetchForSeek WebReader预载
 * @note BuddyHostOriginVideoFrame 解码后伴侣视频帧，一般用于人脸检测
 * @note UseMipmap 使用mipmap
 * @endif
 */
declare const NvsSeekFlagEnum: Readonly<{
    ShowCaptionPoster: 2;
    ShowAnimatedStickerPoster: 4;
    BuddyHostVideoFrame: 16;
    WebReaderPrefetchForSeek: 32;
    BuddyHostOriginVideoFrame: 256;
    UseMipmap: 512;
}>;
/**
 * @if ENGLISH
 * @brief Playback flag enum
 * @note IgnoreTiming Ignore timing
 * @note LowPipelineSize Low pipeline size
 * @note DisableFixedPrerollTime Disable fixed preroll time
 * @note BuddyHostVideoFrame Buddy host video frame, used for face detection normally
 * @note BuddyHostOriginVideoFrame Buddy host origin video frame, used for face detection normally
 * @note UseMipmap Use mipmap
 * @note DisableVideo Disable video
 * @else
 * @brief 播放标识枚举
 * @note IgnoreTiming 忽略时序
 * @note LowPipelineSize 降低引擎在播放时内部的流水线尺寸
 * @note DisableFixedPrerollTime 降低引擎在播放时首帧的播出延迟
 * @note BuddyHostVideoFrame 伴侣视频帧，一般用于人脸检测
 * @note BuddyHostOriginVideoFrame 解码后伴侣视频帧，一般用于人脸检测
 * @note UseMipmap 使用mipmap
 * @note DisableVideo 禁用视频
 * @endif
 */
declare const NvsPlaybackFlagEnum: Readonly<{
    IgnoreTiming: 1;
    LowPipelineSize: 8;
    DisableFixedPrerollTime: 16;
    BuddyHostVideoFrame: 32;
    BuddyHostOriginVideoFrame: 2048;
    UseMipmap: 8192;
    DisableVideo: number;
}>;
/**
 * @if ENGLISH
 * @brief status enum of streaming engine
 * @note StreamingEngineStateStopped Stopped state
 * @note StreamingEngineStatePlayback Playback state
 * @note StreamingEngineStateSeeking Seeking state
 * @else
 * @brief 流媒体引擎状态枚举
 * @note StreamingEngineStateStopped 流媒体引擎停止状态
 * @note StreamingEngineStatePlayback 流媒体引擎播放状态
 * @note StreamingEngineStateSeeking 流媒体引擎定位状态
 * @endif
 */
declare const NvsStreamingEngineStateEnum: Readonly<{
    StreamingEngineStateStopped: 0;
    StreamingEngineStatePlayback: 3;
    StreamingEngineStateSeeking: 4;
}>;
/**
 * @if ENGLISH
 * @brief Asset package type enum
 * @note VideoFx Video Fx Type
 * @note VideoTransition Video Transition Type
 * @note CaptionStyle Caption Style Type
 * @note AnimatedSticker Animated Sticker Type
 * @note ARScene AR Scene Type
 * @note CompoundCaption Compound caption type
 * @note CaptionContext Modular caption context type
 * @note CaptionRenderer Modular caption renderer type
 * @note CaptionAnimation Modular caption animation type
 * @note CaptionInAnimation Modular caption in-animation type
 * @note CaptionOutAnimation Modular caption out-animation type
 * @note Template Template type
 * @note AvatarModel Avatar model type
 * @note AvatarMaterial Avatar material type
 * @note AnimatedStickerAnimation Animated sticker animation type
 * @note AnimatedStickerInAnimation Animated sticker in-animation type
 * @note AnimatedStickerOutAnimation Animated sticker out-animation type
 * @note Makeup Makeup type
 * @note FaceMesh Face mesh type
 * @note Warp Warp type
 * @note Project Project type
 * @else
 * @brief 资源包类型枚举
 * @note VideoFx 视频特效类型
 * @note VideoTransition 视频转场类型
 * @note CaptionStyle 字幕样式类型
 * @note AnimatedSticker 动画贴纸类型
 * @note ARScene AR场景类型
 * @note CompoundCaption 复合字幕类型
 * @note CaptionContext 模块化字幕上下文类型
 * @note CaptionRenderer 模块化字幕渲染器类型
 * @note CaptionAnimation 模块化字幕动画类型
 * @note CaptionInAnimation 模块化字幕入动画类型
 * @note CaptionOutAnimation 模块化字幕出动画类型
 * @note Template 模板类型
 * @note AvatarModel 头像模型类型
 * @note AvatarMaterial 头像材质类型
 * @note AnimatedStickerAnimation 动态贴纸动画类型
 * @note AnimatedStickerInAnimation 动态贴纸入动画类型
 * @note AnimatedStickerOutAnimation 动态贴纸出动画类型
 * @note Makeup 美妆包类型
 * @note FaceMesh 新版美型包类型
 * @note Warp 旧版美型包类型
 * @note Project 项目类型
 * @endif
 */
declare const NvsAssetPackageTypeEnum: Readonly<{
    VideoFx: 0;
    VideoTransition: 1;
    CaptionStyle: 2;
    AnimatedSticker: 3;
    ARScene: 6;
    CompoundCaption: 7;
    CaptionContext: 8;
    CaptionRenderer: 9;
    CaptionAnimation: 10;
    CaptionInAnimation: 11;
    CaptionOutAnimation: 12;
    Template: 13;
    AvatarModel: 14;
    AvatarMaterial: 15;
    AnimatedStickerAnimation: 16;
    AnimatedStickerInAnimation: 17;
    AnimatedStickerOutAnimation: 18;
    Makeup: 19;
    FaceMesh: 20;
    Warp: 21;
    Project: 22;
}>;
/**
 * @if ENGLISH
 * @brief Asset package status enum
 * @note NotInstalled Not installed
 * @note Installing Installing
 * @note Ready Ready
 * @note Upgrading Upgrading
 * @else
 * @brief 资源包状态枚举
 * @note NotInstalled 未安装
 * @note Installing 安装中
 * @note Ready 就绪
 * @note Upgrading 升级中
 * @endif
 */
declare const NvsAssetPackageStatusEnum: Readonly<{
    NotInstalled: 0;
    Installing: 1;
    Ready: 2;
    Upgrading: 3;
}>;
/**
 * @if ENGLISH
 * @brief Track type enum
 * @note Video Video
 * @note Audio Audio
 * @else
 * @brief 轨道类型枚举
 * @note Video 视频
 * @note Audio 音频
 * @endif
 */
declare const NvsTrackTypeEnum: Readonly<{
    Video: 0;
    Audio: 1;
}>;
/**
 * @if ENGLISH
 * @brief Clip type enum
 * @note Video Video
 * @note Audio Audio
 * @else
 * @brief 片段类型枚举
 * @note Video 视频
 * @note Audio 音频
 * @endif
 */
declare const NvsClipTypeEnum: Readonly<{
    Video: 0;
    Audio: 1;
}>;
/**
 * @if ENGLISH
 * @brief Video clip type enum
 * @note AV Video
 * @note Image Image
 * @else
 * @brief 视频片段类型枚举
 * @note AV 视频
 * @note Image 图片
 * @endif
 */
declare const NvsVideoClipTypeEnum: Readonly<{
    AV: 0;
    Image: 1;
}>;
/**
 * @if ENGLISH
 * @brief Motion mode enum of video clip
 * @note LetterBoxZoomIn Letter box zoom in
 * @note LetterBoxZoomOut Letter box zoom out
 * @note Image_ROI The image clip's ROI(Region Of Interesting)
 * @else
 * @brief 视频片段运动模式枚举
 * @note LetterBoxZoomIn 信箱放大
 * @note LetterBoxZoomOut 信箱缩小
 * @note Image_ROI 图像片段的ROI(Region Of Interesting)
 * @endif
 */
declare const NvsVideoClipMotionModeEnum: Readonly<{
    LetterBoxZoomIn: 0;
    LetterBoxZoomOut: 1;
    Image_ROI: 2;
}>;
/**
 * @if ENGLISH
 * @brief Extra rotation enum of video clip
 * @note Rotation0 Rotation 0°
 * @note Rotation90 Rotation 90°
 * @note Rotation180 Rotation 180°
 * @note Rotation270 Rotation 270°
 * @else
 * @brief 视频片段扩展旋转枚举
 * @note Rotation0 旋转 0°
 * @note Rotation90 旋转 90°
 * @note Rotation180 旋转 180°
 * @note Rotation270 旋转 270°
 * @endif
 */
declare const NvsVideoClipExtraRotationEnum: Readonly<{
    Rotation0: 0;
    Rotation90: 1;
    Rotation180: 2;
    Rotation270: 3;
}>;
/**
 * @if ENGLISH
 * @brief Background mode enum of video clip
 * @note ColorSolid Solid color
 * @note Blur Blur
 * @else
 * @brief 视频片段背景模式枚举
 * @note ColorSolid 纯色
 * @note Blur 模糊
 * @endif
 */
declare const NvsVideoClipBackgroundModeEnum: Readonly<{
    ColorSolid: 0;
    Blur: 1;
}>;
/**
 * @if ENGLISH
 * @brief Video fx type enum
 * @note Builtin Builtin type
 * @note Package Package type
 * @note Custom Custom type
 * @else
 * @brief 视频特效类型枚举
 * @note Builtin 内建类型
 * @note Package 特效包类型
 * @note Custom 自定义类型
 * @endif
 */
declare const NvsVideoFxTypeEnum: Readonly<{
    Builtin: 0;
    Package: 1;
    Custom: 2;
}>;
/**
 * @if ENGLISH
 * @brief Video transition type enum
 * @note Builtin Builtin type
 * @note Package Package type
 * @else
 * @brief 视频转场类型枚举
 * @note Builtin 内建类型
 * @note Package 特效包类型
 * @endif
 */
declare const NvsVideoTransitionTypeEnum: Readonly<{
    Builtin: 0;
    Package: 1;
}>;
/**
 * @if ENGLISH
 * @brief Caption text alignment enum
 * @note Left Left alignment
 * @note Center Horizontal center alignment
 * @note Right Right alignment
 * @note Top Top alignment
 * @note Bottom Bottom alignment
 * @note VCenter Vertical center alignment
 * @else
 * @brief 字幕文本排列枚举
 * @note Left 左对齐
 * @note Center 水平中心对齐
 * @note Right 右对齐
 * @note Top 顶部对齐
 * @note Bottom 底部对齐
 * @note VCenter 垂直中心对齐
 * @endif
 */
declare const NvsCaptionTextAlignmentEnum: Readonly<{
    Left: 0;
    Center: 1;
    Right: 2;
    Top: 3;
    Bottom: 4;
    VCenter: 5;
}>;
/**
 * @if ENGLISH
 * @brief Caption text bounding type enum
 * @note Text The actual text bounding
 * @note TextFrame Text frame bounding
 * @note Frame The whole bounding including decoration
 * @note TextOriginFrame The origin text frame bounding
 * @else
 * @brief 字幕文本边界类型枚举
 * @note Text 实际的文本边界
 * @note TextFrame 文本框边界
 * @note Frame 包括装饰在内的整个边界
 * @note TextOriginFrame 原始文本框边界
 * @endif
 */
declare const NvsCaptionTextBoundingTypeEnum: Readonly<{
    Text: 0;
    TextFrame: 1;
    Frame: 2;
    TextOriginFrame: 3;
}>;
/**
 * @if ENGLISH
 * @brief Caption letter spacing type enum
 * @note Percentage Percentage
 * @note Absolute Absolute
 * @else
 * @brief 字幕字间距类型枚举
 * @note Percentage 百分比
 * @note Absolute 绝对值
 * @endif
 */
declare const NvsCaptionLetterSpacingTypeEnum: Readonly<{
    Percentage: 0;
    Absolute: 1;
}>;
/**
 * @if ENGLISH
 * @brief The enum of human detection
 * @note 0x00000001 Landmarks on human face
 * @note 0x00000002 Actions of human face
 * @note 0x00000004 Avatar Expressions of human face
 * @note 0x00000008 Video detection mode
 * @note 0x00000010 Image detection mode
 * @note 0x00008000 Semi-image detection mode
 * @note 0x00000020 Multi thread detection
 * @note 0x00000040 Single thread detection
 * @note 0x00000080 Extra features of human face
 * @note 0x00000100 Background segmentation
 * @note 0x00000200 Hand landmarks
 * @note 0x00000400 Hand actions
 * @note 0x00000800 Bone landmarks of hand
 * @note 0x00001000 Eyeball landmarks
 * @note 0x00002000 Multiple detect, say multiple rois detection
 * @note 0x00004000 Sky segmentation
 * @note 0x00010000 Half body segmentation
 * @note 0x00020000 Base face attributes
 * @note 0x00040000 Face shape attribute
 * @else
 * @brief 人体检测功能枚举
 * @note 0x00000001 人脸点位
 * @note 0x00000002 人脸表情
 * @note 0x00000004 人脸Avatar表情
 * @note 0x00000008 视频检测模式
 * @note 0x00000010 图像检测模式
 * @note 0x00008000 半图像检测模式
 * @note 0x00000020 多线程检测
 * @note 0x00000040 单线程检测
 * @note 0x00000080 其他人脸特征
 * @note 0x00000100 背景分割
 * @note 0x00000200 手部点位
 * @note 0x00000400 手部动作
 * @note 0x00000800 手部骨骼点位
 * @note 0x00001000 眼球点位
 * @note 0x00002000 多重检测,例如多重ROI检测
 * @note 0x00004000 天空分割
 * @note 0x00010000 半身分割
 * @note 0x00020000 人脸基础属性
 * @note 0x00040000 脸型属性
 * @endif
 */
declare const NvsHumanDetectionFeatureEnum: Readonly<{
    FaceLandmark: 1;
    FaceAction: 2;
    AvatarExpression: 4;
    VideoMode: 8;
    ImageMode: 16;
    SemiImageMode: 32768;
    MultiThread: 32;
    SingleThread: 64;
    Extra: 128;
    SegmentationBackground: 256;
    HandLandmark: 512;
    HandAction: 1024;
    HandBone: 2048;
    EyeballLandmark: 4096;
    MultiDetect: 8192;
    SegmentationSky: 16384;
    SegmentationHalfBody: 65536;
    FaceAttr: 131072;
    FaceAttrShape: 262144;
}>;
/**
 * @if ENGLISH
 * @brief Find mode enum of key frame
 * @note Before Before
 * @note After After
 * @else
 * @brief 关键帧查找模式枚举
 * @note Before 之前
 * @note After 之后
 * @endif
 */
declare const NvsKeyFrameFindModeEnum: Readonly<{
    Before: 1;
    After: 2;
}>;
/**
 * @if ENGLISH
 * @brief Clip wrap mode enum
 * @note RepeatLastFrame Repeat the last frame
 * @note RepeatFirstFrame Repeat the first frame
 * @note Repeat Repeat
 * @else
 * @brief 片段循环模式枚举
 * @note RepeatLastFrame 重复最后一帧
 * @note RepeatFirstFrame 重复第一帧
 * @note Repeat 重复
 * @endif
 */
declare const NvsClipWrapModeEnum: Readonly<{
    RepeatLastFrame: 0;
    RepeatFirstFrame: 1;
    Repeat: 2;
}>;
/**
 * @if ENGLISH
 * @brief Timeline aspect ratio enum
 * @note 16v9 16:9
 * @note 1v1 1:1
 * @note 9v16 9:16
 * @note 4v3 4:3
 * @note 3v4 3:4
 * @note 18v9 18:9
 * @note 9v18 9:18
 * @note 21v9 21:9
 * @note 9v21 9:21
 * @else
 * @brief 时间线横纵比枚举
 * @note 16v9 16:9
 * @note 1v1 1:1
 * @note 9v16 9:16
 * @note 4v3 4:3
 * @note 3v4 3:4
 * @note 18v9 18:9
 * @note 9v18 9:18
 * @note 21v9 21:9
 * @note 9v21 9:21
 * @endif
 */
declare const NvsTimelineAspectRatioEnum: Readonly<{
    '16v9': 1;
    '1v1': 2;
    '9v16': 4;
    '4v3': 8;
    '3v4': 16;
    '18v9': 32;
    '9v18': 64;
    '21v9': 512;
    '9v21': 1024;
}>;
/**
 * @if ENGLISH
 * @brief Data type enum of human detection
 * @note FakeFace Fake face
 * @note Makeup Makeup
 * @note SkinColor Skin color
 * @note PE106 PE106
 * @note PE240 PE240
 * @note CustomAvatar Custom avatar
 * @note Makeup2 Makeup2
 * @note FaceCommon Face common
 * @note AdvancedBeauty Advanced beauty
 * @else
 * @brief 人脸检测数据类型
 * @note FakeFace 假脸数据包类型
 * @note Makeup 美妆数据包类型
 * @note SkinColor 美肤数据包类型
 * @note PE106 106点位姿态估计数据包类型
 * @note PE240 240点位姿态估计数据包类型
 * @note CustomAvatar 捏脸数据包类型
 * @note Makeup2 美妆2数据包类型
 * @note FaceCommon 人脸通用数据包类型
 * @note AdvancedBeauty 高级美颜数据包类型
 * @endif
 */
declare const NvsHumanDetectionDataTypeEnum: Readonly<{
    FakeFace: 0;
    Makeup: 1;
    SkinColor: 2;
    PE106: 3;
    PE240: 4;
    CustomAvatar: 5;
    Makeup2: 6;
    FaceCommon: 7;
    AdvancedBeauty: 8;
}>;
/**
 * @if ENGLISH
 * @brief Timeline creation flag enum
 * @note LongestDurationConsiderAllTracks Timeline's longest duration consider all tracks
 * @note SyncAudioVideoTrasitionInVideoTrack Sync audio transition and video transiton on video track
 * @note UseMipmap Use mipmap anti-aliasing
 * @note VariantImageSize Automatically adapt timeline resolution when add images
 * @note DontAddDefaultVideoTransition Do not add a default video transition
 * @note ForceAudioSampleFormatUsed Force using audio format of audio resolution
 * @note Template Template timeline
 * @note Orphan Orphan timeline flag, destroy the timeline after its parent timeline destroyed
 * @note ForceTimelineSizeUsed Forced use of timeline resolution in automatically adapt timeline resolution model
 * @note RecordingUserOperation Recording user operation
 * @else
 * @brief 时间线创建标识枚举
 * @note LongestDurationConsiderAllTracks 由所有音视频轨的最大时长决定时间线长度
 * @note SyncAudioVideoTrasitionInVideoTrack 同步处理在视频轨道上的视频和音频转场
 * @note UseMipmap 使用mipmap抗锯齿
 * @note VariantImageSize 加载图片时自动适配timeline分辨率
 * @note DontAddDefaultVideoTransition 不添加默认视频转场
 * @note ForceAudioSampleFormatUsed 强制使用音频制式信息中的音频格式
 * @note Template 模板时间线
 * @note Orphan 孤儿时间线，销毁父亲时间线的同时销毁该时间线
 * @note ForceTimelineSizeUsed 小图模式下强制使用timeline分辨率
 * @note RecordingUserOperation 记录用户操作
 * @endif
 */
declare const NvsCreateTimelineFlagEnum: Readonly<{
    LongestDurationConsiderAllTracks: 1;
    SyncAudioVideoTrasitionInVideoTrack: 2;
    UseMipmap: 4;
    VariantImageSize: 8;
    DontAddDefaultVideoTransition: 16;
    ForceAudioSampleFormatUsed: 32;
    Template: 64;
    Orphan: 128;
    ForceTimelineSizeUsed: 256;
    RecordingUserOperation: 512;
}>;
/**
 * @if ENGLISH
 * @brief Blending Mode
 * @note BLENDING_MODE_NORMAL Normal mode
 * @note BLENDING_MODE_MULTIPLY Multiplay mode
 * @note BLENDING_MODE_SUBTRACT Subtract mode
 * @note BLENDING_MODE_SCREEN Screen mode
 * @note BLENDING_MODE_ADD Add mode
 * @note BLENDING_MODE_EXCLUSION Exclusion mode
 * @note BLENDING_MODE_DARKEN Darken mode
 * @note BLENDING_MODE_BURN Burn mode
 * @note BLENDING_MODE_LINEARBURN Linear Burn mode
 * @note BLENDING_MODE_LIGHTEN Lighten mode
 * @note BLENDING_MODE_DODGE Dodge mode
 * @note BLENDING_MODE_OVERLAY Overlay mode
 * @note BLENDING_MODE_SOFTLIGHT SoftLight mode
 * @note BLENDING_MODE_HARDLIGHT HardLight mode
 * @note BLENDING_MODE_VIVIDLIGHT VividLight mode
 * @note BLENDING_MODE_PINLIGHT PinLight mode
 * @note BLENDING_MODE_LINEARLIGHT LinearLight mode
 * @note BLENDING_MODE_HARDMIX HardMix mode
 * @note BLENDING_MODE_DIFFERENCE Difference mode
 * @else
 * @brief 混合模式
 * @note BLENDING_MODE_NORMAL 一般默认
 * @note BLENDING_MODE_MULTIPLY 正片叠底模式
 * @note BLENDING_MODE_SUBTRACT 减去模式
 * @note BLENDING_MODE_SCREEN 滤色模式
 * @note BLENDING_MODE_ADD 添加类型
 * @note BLENDING_MODE_EXCLUSION 排除模式
 * @note BLENDING_MODE_DARKEN 变暗模式
 * @note BLENDING_MODE_BURN 颜色加深模式
 * @note BLENDING_MODE_LINEARBURN 线性加深模式
 * @note BLENDING_MODE_LIGHTEN 变亮模式
 * @note BLENDING_MODE_DODGE 颜色减淡模式
 * @note BLENDING_MODE_OVERLAY 	叠加模式
 * @note BLENDING_MODE_SOFTLIGHT 柔光模式
 * @note BLENDING_MODE_HARDLIGHT 强光模式
 * @note BLENDING_MODE_VIVIDLIGHT 亮光模式
 * @note BLENDING_MODE_PINLIGHT 点光模式
 * @note BLENDING_MODE_LINEARLIGHT 线性光模式
 * @note BLENDING_MODE_HARDMIX 实色混合模式
 * @note BLENDING_MODE_DIFFERENCE 差值模式
 * @endif
 */
declare const NvsBlendingMode: Readonly<{
    BLENDING_MODE_NORMAL: 0;
    BLENDING_MODE_MULTIPLY: 1;
    BLENDING_MODE_SUBTRACT: 2;
    BLENDING_MODE_SCREEN: 3;
    BLENDING_MODE_ADD: 4;
    BLENDING_MODE_EXCLUSION: 5;
    BLENDING_MODE_DARKEN: 6;
    BLENDING_MODE_BURN: 7;
    BLENDING_MODE_LINEARBURN: 8;
    BLENDING_MODE_LIGHTEN: 9;
    BLENDING_MODE_DODGE: 10;
    BLENDING_MODE_OVERLAY: 11;
    BLENDING_MODE_SOFTLIGHT: 12;
    BLENDING_MODE_HARDLIGHT: 13;
    BLENDING_MODE_VIVIDLIGHT: 14;
    BLENDING_MODE_PINLIGHT: 15;
    BLENDING_MODE_LINEARLIGHT: 16;
    BLENDING_MODE_HARDMIX: 17;
    BLENDING_MODE_DIFFERENCE: 18;
}>;
/**
 * @if ENGLISH
 * @brief Particle Type
 * @note PARTICLE_TYPE_NORMAL Particle effect without interaction
 * @note PARTICLE_TYPE_TOUCH Particle effect controlled by touch screen
 * @note PARTICLE_TYPE_GESTURE Particle effect controlled by gesture
 * @note PARTICLE_TYPE_EYE Particle effect controlled by eye
 * @note PARTICLE_TYPE_MOUTH Particle effect controlled by mouth
 * @else
 * @brief 粒子类型
 * @note PARTICLE_TYPE_NORMAL 没有交互的基本粒子类型
 * @note PARTICLE_TYPE_TOUCH 触摸屏幕进行交互的粒子类型
 * @note PARTICLE_TYPE_GESTURE 手势进行交互的粒子类型
 * @note PARTICLE_TYPE_EYE 眼睛进行交互的类型
 * @note PARTICLE_TYPE_MOUTH 嘴巴进行交互的粒子类型
 * @endif
 */
declare const NvsParticleTypeEnum: Readonly<{
    PARTICLE_TYPE_NORMAL: 0;
    PARTICLE_TYPE_TOUCH: 1;
    PARTICLE_TYPE_GESTURE: 2;
    PARTICLE_TYPE_EYE: 3;
    PARTICLE_TYPE_MOUTH: 4;
}>;
/**
 * @if ENGLISH
 * @brief Emitter Place
 * @note EMITTER_PLACE_LEFT left
 * @note EMITTER_PLACE_RIGHT right
 * @note EMITTER_PLACE_TOP top
 * @note EMITTER_PLACE_BOTTOM bottom
 * @note EMITTER_PLACE_CENTER center
 * @else
 * @brief 粒子发射位置
 * @note EMITTER_PLACE_LEFT 左
 * @note EMITTER_PLACE_RIGHT 右
 * @note EMITTER_PLACE_TOP 顶部
 * @note EMITTER_PLACE_BOTTOM 底部
 * @note EMITTER_PLACE_CENTER 中间
 * @endif
 */
declare const NvsEmitterPlaceEnum: Readonly<{
    EMITTER_PLACE_LEFT: 0;
    EMITTER_PLACE_RIGHT: 1;
    EMITTER_PLACE_TOP: 2;
    EMITTER_PLACE_BOTTOM: 3;
    EMITTER_PLACE_CENTER: 4;
}>;
/**
 * @if ENGLISH
 * @brief Footage type of template
 * @note VideoImage Video or image
 * @note Video Video
 * @note Image Image
 * @note Audio Audio
 * @else
 * @brief 模板槽类型
 * @note VideoImage 视频或图像
 * @note Video 视频
 * @note Image 图像
 * @note Audio 音频
 * @endif
 */
declare const NvsFootageTypeEnum: Readonly<{
    VideoImage: 0;
    Video: 1;
    Image: 2;
    Audio: 3;
}>;
/**
 * @if ENGLISH
 * @brief vector contains float type values
 * @else
 * @brief 浮点类型数组
 * @endif
 */
declare class NvsVectorFloat {
}
/**
 * @if ENGLISH
 * @brief vector contains object type values
 * @else
 * @brief 对象类型数组
 * @endif
 */
declare class NvsVectorVal {
}
/**
 * @if ENGLISH
 * @brief AI toning info
 * @else
 * @brief AI调色信息
 * @endif
 */
declare class NvsAIToningInfo {
    exposure: number;
    contrast: number;
    shadow: number;
    highlight: number;
    brightness: number;
    blackpoint: number;
    saturation: number;
    vibrance: number;
    definition: number;
    sharpeness: number;
}
/**
 * @if ENGLISH
 * @brief Streaming context：The streaming context class(NvsStreamingContext) can be refered to as the entry point of the whole SDK framework. In the process of development, NvsStreamingContext provides the static sharedInstance interface, which is the only instance to create streaming context. Through this instantce object, we can turn on the recording device to record videos, adding effects to capture videos, set various parameters for recording, which include autofocus, automatic exposure adjustment, swtiching on/off of the light supplement and so on. Meanwhile, this instance can also create timelines, connecting timelines to real-time preview windows to view the recorded videos in real-time. When the whole video has been produced completely, please destroy the instances of streaming context. When recording with special effects or adding resources packages (recording effects package, scene resources package and so on), one has to first install the package and obtain packageID after installation. For built-in special effects, one only needs to obtain the name of the effect in order to use them.
 In the SDK, users need to adopt the full pathway when importing resources or authorizations.
 * @else
 * @brief 流媒体上下文：流媒体上下文类可视作整个SDK框架的入口。开发过程中，NvsStreamingContext提供了静态sharedInstance接口创建流媒体上下文的唯一实例。 通过这个实例对象，我们可以开启采集设备录制视频，添加采集视频特效，设置拍摄时的各项参数，包括自动聚焦，自动曝光调节， 开关换补光灯等。同时还能够创建时间线，并将时间线与实时预览窗口连接起来，实时预览播放已经拍摄完成的视频。整个视频制作完成后，要销毁流媒体上下文的对象实例。 带特效拍摄时，添加素材资源包(采集特效包，场景资源包等)，都得先安装，安装成功后获取packageId才能使用，而内建采集特效(builtin)只需获取特效名称即可使用。sdk接口中凡是需要传入资源、授权等文件路径时一定是全路径。
 * @endif
 */
declare class NvsStreamingContext {
    onWebRequestWaitStatusChange: (isVideo: any, waiting: any) => void;
    onWebRequestAuthFinish: (success: any, uuid: any) => void;
    onPlaybackTimelinePosition: (timeline: any, position: any) => void;
    onPlaybackStopped: (timeline: any) => void;
    onPlaybackEOF: (timeline: any) => void;
    _onStreamingEngineStateChanged: (state: any) => void;
    _onSeekingTimelinePosition: (timeline: any, position: any) => void;
    onAudioVUMeter: (timeline: any, leftVUValue: any, rightVUValue: any, timeStamp: any) => void;
    onImageGrabbedArrived: (imageData: any, time: any, timeline: any) => void;
    set onStreamingEngineStateChanged(fun: any);
    /**
   * @if ENGLISH
   * @brief State change of streaming engine.
   * @return {Object}
   * @else
   * @brief 流媒体引擎的状态变化
   * @return {Object}
   * @endif
   */
    get onStreamingEngineStateChanged(): any;
    set onSeekingTimelinePosition(fun: any);
    /**
   * @if ENGLISH
   * @brief Current postion of timeline refer toking.
   * @param {NvsTimeline} timeline
   * @param {String} position Returns current postion of timeline refer toking.
   * @return {Object}
   * @else
   * @return {Object}
   * @endif
   */
    get onSeekingTimelinePosition(): any;
    /**
   * @if ENGLISH
   * @brief ready for modify timeline of streaming engine
   * @return {Promise} Promise
   * @else
   * @brief 流媒体引擎准备好时间线修改
   * @return {Promise} Promise
   * @endif
   */
    streamingEngineReadyForTimelineModification(): Promise<any>;
    lastSeekingFinished(): Promise<any>;
    /**
   * @if ENGLISH
   * @brief Verifies the SDK license.
   * @param {String} requestUrl request url
   * @param {String} type type
   * @return {Boolean} Returns the BOOL value. YES indicates that the authorization verification is successful, and NO indicates that it fails. If the verification fails, watermark will appear in the video preview. After using this API, onWebRequestAuthFinish callback need be implemented to listen the result of verification.
   * @else
   * @brief 验证SDK许可文件
   * @param {String} requestUrl 请求url
   * @param {String} type 类型
   * @return {Boolean} 返回布尔值。YES表示授权验证成功，NO表示失败。如果验证失败，时间线预览会出现水印。调用此接口后，同时需要实现onWebRequestAuthFinish回调函数，来监听异步返回的鉴权结果。
   * @endif
   */
    verifySdkLicenseFile(requestUrl: string, type?: string): boolean;
    /**
   * @if ENGLISH
   * @brief verify sdk licence file with extra user data
   * @param {String} requestUrl request url
   * @param {} extraUserData extra user data
   * @return {}
   * @else
   * @brief 使用扩展用户数据验证SDK许可文件
   * @param {String} requestUrl 请求的url
   * @param {} extraUserData 扩展用户数据
   * @return {}
   * @endif
   */
    verifySdkLicenseFileWithExtraUserData(requestUrl: string, extraUserData: any): any;
    /**
   * @if ENGLISH
   * @brief Obtains Meishe SDK's version information.
   * @return {NvsSdkVersion} Returns the object about Meishe SDK's version information.
   * @else
   * @brief 获取SDK版本号
   * @return {NvsSdkVersion} SDK版本号
   * @endif
   */
    getSdkVersion(): NvsSdkVersion;
    /**
   * @if ENGLISH
   * @brief Creates timeline.
   * @param {NvsVideoResolution} videoRes Video file's resolution (specified width to height ratio). For video editing resolution, when importing corresponding params, the imported image's width has to be a multiple of 4, the height has to be a multiple of 2. Note: if one creates NvsStreamingContext's instance that supports 4K video editing, then video editing's resolution cannot be higher then 3840*2160(imageWidth*imageHeight), otherwise the imageWidth*imageHeight cannot exceed 1920* 1080 pixels.
   * @param {NvsRational} fps Frame rate
   * @param {NvsAudioResolution} audioRes Audio file's resolution(specified file sampling rate, sampling format and number of channels. For audio editing resolution, imported audio only supports two types of sampling rate, 44100 or 48000.)
   * @param {Number} flags Special flags for create timeline. If there is no special requirements please input 0.
   * @return {NvsTimeline} Returns created timeline object，return null if params are invalid
   * @else
   * @brief 创建时间线
   * @param {NvsVideoResolution} videoRes 视频解析度
   * @param {NvsRational} fps 视频帧率
   * @param {NvsAudioResolution} audioRes 音频解析度
   * @param {Number} flags 标识
   * @return {NvsTimeline} 时间线对象
   * @endif
   */
    createTimeline(videoRes: NvsVideoResolution, fps: NvsRational, audioRes: NvsAudioResolution, flags?: number): NvsTimeline;
    /**
   * @if ENGLISH
   * @brief Create template timeline according template id.
   * @param {String} templateId template uuid，template must be installed firstly
   * @param {NvsVectorVal} templateFootages footage information in the template asset
   * @param {Number} flags Special flags for create timeline. If there is no special requirements please input 0.
   * @return {NvsTimeline} Returns created timeline object
   * @else
   * @brief 根据模板ID，创建模板时间线
   * @param {String} templateId 模板ID
   * @param {{NvsVectorVal<>} templateFootages 模板素材
   * @param {Number} flags 标识
   * @return {NvsTimeline} 时间线对象
   * @endif
   */
    createTemplateTimeline(templateId: string, templateFootages: NvsVectorVal, flags?: number): NvsTimeline;
    /**
   * @if ENGLISH
   * @brief Create timeline of empty template.
   * @param {NvsVideoResolution} videoRes Video file's resolution (specified width to height ratio). For video editing resolution, when importing corresponding params, the imported image's width has to be a multiple of 4, the height has to be a multiple of 2. Note: if one creates NvsStreamingContext's instance that supports 4K video editing, then video editing's resolution cannot be higher then 3840*2160(imageWidth*imageHeight), otherwise the imageWidth*imageHeight cannot exceed 1920* 1080 pixels.
   * @param {NvsRational} fps Frame rate
   * @param {NvsAudioResolution} audioRes Audio file's resolution(specified file sampling rate, sampling format and number of channels. For audio editing resolution, imported audio only supports two types of sampling rate, 44100 or 48000.)
   * @param {String} templateId template id
   * @param {Number} flags flags
   * @return {NvsTimeline} Returns created timeline object，return null if params are invalid
   * @else
   * @brief 创建空模板时间线
   * @param {NvsVideoResolution} videoRes 视频解析度
   * @param {NvsRational} fps 视频帧率
   * @param {NvsAudioResolution} audioRes 音频解析度
   * @param {String} templateId 模板ID
   * @param {Number} flags 标识
   * @return {NvsTimeline} 时间线对象
   * @endif
   */
    createEmptyTemplateTimeline(videoRes: NvsVideoResolution, fps: NvsRational, audioRes: NvsAudioResolution, templateId: string, flags?: number): NvsTimeline;
    /**
   * @if ENGLISH
   * @brief Returns created timeline object
   * @param {String} projectId project uuid，project must be installed firstly
   * @param {String} resourceDir resource dir of the project asset
   * @param {Number} flags  Special flags for create timeline. If there is no special requirements please input 0. Please refer to create timeline flag.
   * @return {NvsTimeline} Returns created timeline object
   * @else
   * @brief 返回新建建时间线对象
   * @param {String} projectId 项目唯一标识，必须先安装项目
   * @param {String} resourceDir 项目素材库的资源目录
   * @param {Number} flags  用于新建时间线的特殊标志。如无特殊要求请输入0。请参考 create timeline flag.
   * @return {NvsTimeline} 返回新建的时间线对象
   * @endif
   */
    loadProject(projectId: string, resourceDir: string, flags?: number): NvsTimeline;
    /**
   * @if ENGLISH
   * @brief Removes timeline.
   * @param {NvsTimeline} timeline The timeline to be removed
   * @return {Boolean} Returns a boolean value. true means a successful remove, false means failure.
   * @else
   * @brief 删除时间线
   * @param {NvsTimeline} timeline 时间线
   * @return {Boolean} 返回一个布尔值。 true 表示成功删除，false 表示失败。
   * @endif
   */
    removeTimeline(timeline: NvsTimeline): boolean;
    /**
   * @if ENGLISH
   * @brief create streaming live window according canvas id
   * @param {String} canvasId canvas id
   * @return {NvsLiveWindow} live window
   * @else
   * @brief 根据画板ID，创建流媒体浏览窗口
   * @param {String} canvasId 画板ID
   * @return {NvsLiveWindow} 流媒体预览窗口
   * @endif
   */
    createLiveWindow(canvasId: string): NvsLiveWindow;
    /**
   * @if ENGLISH
   * @brief remvoe live window
   * @param {NvsLiveWindow} liveWindow live window
   * @return {}
   * @else
   * @brief 删除流媒体浏览窗口
   * @param {NvsLiveWindow} liveWindow 流媒体预览窗口
   * @return {}
   * @endif
   */
    removeLiveWindow(liveWindow: NvsLiveWindow): any;
    /**
   * @if ENGLISH
   * @brief Connects timeline with the LiveWindow.
   * @param {NvsTimeline} timeline Timeline
   * @param {NvsLiveWindow} liveWindow Preview image window in real time
   * @return {Boolean} Returns BOOL value. YES means a successful connection, and NO means the opposite.
   * @else
   * @brief 连接时间线到流媒体窗口
   * @param {NvsTimeline} timeline 时间线
   * @param {NvsLiveWindow} liveWindow 预览窗口
   * @return {Boolean} 返回布尔值。 YES 表示连接成功，NO 表示相反。
   * @endif
   */
    connectTimelineWithLiveWindow(timeline: NvsTimeline, liveWindow: NvsLiveWindow): boolean;
    /**
   * @if ENGLISH
   * @brief Disconnects timeline with the LiveWindow.
   * @param {NvsLiveWindow} liveWindow Preview image window in real time
   * @return {}
   * @else
   * @brief 将时间线与 LiveWindow 断开。
   * @param {NvsLiveWindow} liveWindow 预览窗口
   * @return {}
   * @endif
   */
    disconnectLiveWindow(liveWindow: NvsLiveWindow): any;
    /**
   * @if ENGLISH
   * @brief Seeking the frame at a specific timestamp
   * @param {NvsTimeline} timeline Timeline
   * @param {Number} timestamp Timestamp (in microseconds). Timestamp should be in the range of [0,timeline.duration - 1]. Other input values are invalid and seekTimeline will return false, results can't targeting.
   * @param {Number} videoSizeMode Video preview mode. Please refer to NvsVideoPreviewSizeModeEnum.
   * @param {Number} flags Flags for streaming engine seeking. For specific please refer to NvsSeekFlagEnum.
   * @return {Boolean} Returns BOOL value. Note: Seeking to a timestamp is an asynchronous operation. A return value of YES means that seeking video startups successfully, otherwise it fails to startup.
   * @else
   * @brief 定位某一时间戳的图像
   * @param {NvsTimeline} timeline 时间线
   * @param {Number} timestamp 时间戳（单位微秒）。timestamp取值范围在[0,timeline.duration - 1]。传入其他值无效，seekTimeline会返回false,导致无法开启定位。
   * @param {Number} videoSizeMode 图像预览模式。请参见视频大小预览模式
   * @param {Number} flags 引擎定位的特殊标志。具体参见引擎定位标识
   * @return {Boolean} 返回布尔值。注意：寻找时间戳是一个异步操作。返回值为YES表示寻找视频启动成功，否则启动失败。
   * @endif
   */
    seekTimeline(timeline: NvsTimeline, timestamp: number, videoSizeMode: number, flags: number): boolean;
    /**
   * @if ENGLISH
   * @brief Seeking the frame at a specific timestamp with proxy scale
   * @param {NvsTimeline} timeline Timeline
   * @param {Number} timestamp Timestamp (in microseconds). Timestamp should be in the range of [0,timeline.duration - 1]. Other input values are invalid and seekTimeline will return false, results can't targeting.
   * @param {NvsRational} proxyScale Zoom scale of proxy
   * @param {Number} flags Flags for streaming engine seeking. For specific please refer to NvsSeekFlagEnum.
   * @return {Boolean} Returns BOOL value. Note: Seeking to a timestamp is an asynchronous operation. A return value of YES means that seeking video startups successfully, otherwise it fails to startup.
   * @else
   * @brief 定位某一时间戳的图像
   * @param {NvsTimeline} timeline 时间线
   * @param {Number} timestamp 时间戳（单位微秒）。timestamp取值范围在[0,timeline.duration - 1]。传入其他值无效，seekTimeline会返回false,导致无法开启定位。
   * @param {NvsRational} proxyScale 代理缩放比例，是指以timeline分辨率的几分之几渲染画面
   * @param {Number} flags 引擎定位的特殊标志。具体参见引擎定位标识
   * @return {Boolean} 返回布尔值。注意：寻找时间戳是一个异步操作。返回值为YES表示寻找视频启动成功，否则启动失败。
   * @endif
   */
    seekTimelineWithProxyScale(timeline: NvsTimeline, timestamp: number, proxyScale: NvsRational, flags: number): boolean;
    /**
   * @if ENGLISH
   * @brief Timeline playback.
   * @param {NvsTimeline} timeline Timeline
   * @param {Number} startTime Start time(in microseconds). Start time should be in the range [0,timeline.duration - 1], other inputs are invalid and playbackTimeline will return false resulting playback cannot be turned on.
   * @param {Number} endTime End time(in microseconds). If endtime input is a negative value, then the playback is defaultly set to play till the end.
   * @param {Number} videoSizeMode If no special requirements please input 0. Please refer to NvsVideoPreviewSizeModeEnum for reference.
   * @param {Boolean} preload Whether to preload
   * @param {Number} flags Flags for preview. If no special requirements please input 0. Please refer to NvsPlaybackFlagEnum for reference.
   * @return {Boolean} Returns a boolean value. Note: timeline playback is an asynchronous operation, it returns true if timeline playback can be turned on.
   * @else
   * @brief 播放时间线
   * @param {NvsTimeline} timeline 时间线
   * @param {Number} startTime 开始时间
   * @param {Number} endTime 结束时间
   * @param Number{} videoSizeMode 视频大小模式
   * @param {Boolean} preload 预载
   * @param {Number} flags 标识
   * @return {Boolean} 返回一个布尔值。注意：时间线播放是一个异步操作，如果可以开启时间线播放则返回true。
   * @endif
   */
    playbackTimeline(timeline: NvsTimeline, startTime: number, endTime: number, videoSizeMode: number, preload: boolean, flags: number): boolean;
    /**
   * @if ENGLISH
   * @brief playback timeline with proxy scale
   * @param {NvsTimeline} timeline Timeline
   * @param {Number} startTime Start time(in microseconds). Start time should be in the range [0,timeline.duration - 1], other inputs are invalid and playbackTimeline will return false resulting playback cannot be turned on.
   * @param {Number} endTime End time(in microseconds). If endtime input is a negative value, then the playback is defaultly set to play till the end.
   * @param {NvsRational} proxyScale Zoom scale of proxy
   * @param {Boolean} preload Whether to preload
   * @param {Number} flags Flags for preview. If no special requirements please input 0. Please refer to NvsPlaybackFlagEnum for reference.
   * @return {Boolean} Returns BOOL value. Note: The timeline playback is an asynchronous operation. Returning YES will start the timeline playback, and NO will not.
   * @else
   * @brief 使用代理缩放播放时间线
   * @param {NvsTimeline} timeline 时间线
   * @param {Number} startTime 开始时间
   * @param {Number} endTime 结束时间
   * @param {NvsRational} proxyScale 缩放代理
   * @param {Boolean} preload 预载
   * @param {Number} flags 标识
   * @return {Boolean} 返回布尔值。注意：时间线播放是异步操作。返回 YES 将开始时间线播放，而 NO 则不会。
   * @endif
   */
    playbackTimelineWithProxyScale(timeline: NvsTimeline, startTime: number, endTime: number, proxyScale: NvsRational, preload: boolean, flags: number): boolean;
    /**
   * @if ENGLISH
   * @brief Stops the engine.
   * @return {}
   * @else
   * @brief 流媒体上下文停止
   * @return {}
   * @endif
   */
    stop(): any;
    /**
   * @if ENGLISH
   * @brief Gets the current positon of the timeline (in microseconds)
   * @param {NvsTimeline} timeline Timeline
   * @return {Number} Returns the current position of the timeline
   * @else
   * @brief 获取当前时间线位置
   * @param {NvsTimeline} timeline 时间线
   * @return {Number} 返回时间线的当前位置
   * @endif
   */
    getTimelineCurrentPosition(timeline: NvsTimeline): number;
    /**
   * @if ENGLISH
   * @brief Gets streaming engine's state.
   * @return {Number} Returns streaming engine's state.
   * @else
   * @brief 获取流媒体引擎状态
   * @return {Number} 返回流媒体引擎的状态。
   * @endif
   */
    getStreamingEngineState(): number;
    /**
   * @if ENGLISH
   * @brief Gets resource package manager.
   * @return {NvsAssetPackageManager} Returns resource package manager object.
   * @else
   * @brief 获取资源包管理器
   * @return {NvsAssetPackageManager} 返回资源包管理器对象。
   * @endif
   */
    getAssetPackageManager(): NvsAssetPackageManager;
    /**
   * @if ENGLISH
   * @brief Gets detailed information of the audio/video file.
   * @param {String} avFilePath file path
   * @param {Number} extraFlag extra flags
   * @return {NvsAVFileInfo} Returns the audio/video file information object，return null if file format is not supported
   * @else
   * @brief 获取音视频文件信息
   * @param {String} avFilePath 音视频文件路径
   * @param {Number} extraFlag 扩展标记
   * @return {NvsAVFileInfo} 返回音视频文件信息对象，不支持文件格式返回null
   * @endif
   */
    getAVFileInfo(avFilePath: string, extraFlag: number): NvsAVFileInfo;
    /**
   * @if ENGLISH
   * @brief Start an local AV file icon fetching task.
   * @param {String} localAVFilePath local AV file path, e.g. /localmedia/test.mp4.weblocal
   * @param {Number} timestamp Timestamp at which to fetch icon from the local AV file, in microseconds.
   * @param {Function} iconFetched A function to be executed when the icon has been fetched. It receives the following parameters:
                         imageData: A ImageData object of the icon fetched.
                         localAVFilePath: A string of the local AV file path from which we fetch icon.
                         timestamp: Timestamp of the icon fetched, in microseconds.
   * @return {Number} Returns icon fetching task identifier. return 0 indicates error.
   * @else
   * @brief 启动一个获取本地视频文件缩略图的任务
   * @param {String} localAVFilePath 本地文件地址，例如：/localmedia/test.mp4.weblocal
   * @param {Number} timestamp 获取缩略图的时间戳，单位为微秒
   * @param {Function} iconFetched 获取成功的回调函数，回调函数中包含以下参数:
                         imageData: 当前任务获取到的ImageData对象
                         localAVFilePath: 当前任务对应的本地文件地址
                         timestamp: 当前任务对应的时间戳，单位为微秒
   * @return {Number} 返回当前任务的ID，如果返回0，表示启动任务失败
   * @endif
   */
    getLocalAVFileIcon(localAVFilePath: string, timestamp: number, iconFetched: Function): number;
    /**
   * @if ENGLISH
   * @brief Fetch local AV file icon from cache.
   * @param {String} localAVFilePath local AV file path, e.g. /localmedia/test.mp4.weblocal
   * @param {Number} timestamp time at which to fetch icon from the local AV file, in microseconds.
   * @return {ImageData} Returns a ImageData object of the icon fetched.
   * @else
   * @brief 从缓存中获取本地文件的缩略图
   * @param {String} localAVFilePath 本地文件地址，例如：/localmedia/test.mp4.weblocal
   * @param {Number} timestamp 获取缩略图的时间戳，单位为微秒
   * @return {ImageData} 获取到的ImageData对象
   * @endif
   */
    getLocalAVFileIconFromCache(localAVFilePath: string, timestamp: number): ImageData;
    /**
   * @if ENGLISH
   * @brief Start an local AV file thumbnail fetching task.
   * @param {String} localAVFilePath local AV file path, e.g. /localmedia/test.mp4.weblocal
   * @param {Number} timestamp time at which to fetch frame from the local AV file as thumbnail, in microseconds,
           -1 means the actual timestamp is determined by implementation.
   * @param {Boolean} bypassCache Whether to bypass thumnail cache.
   * @param {Function} thumbnailFetched A function to be executed when the thumbnail has been fetched. It receives the following parameters:
           imageData: A ImageData object of the thumbnail fetched.
           localAVFilePath: A string of the local AV file path from which we fetch thumbnail.
           timestamp: Timestamp of the thumbnail, in microseconds.
   * @return {Number} Returns icon fetching task identifier. return 0 indicates error.
   * @else
   * @brief 启动一个获取本地视频文件图标的任务
   * @param {String} localAVFilePath 本地文件地址，例如：/localmedia/test.mp4.weblocal
   * @param {Number} timestamp 获取缩略图的时间戳，单位为微秒，如果设置-1，则按照sdk默认的规则获取
   * @param {Boolean} bypassCache 是否绕过缓存获取
   * @param {Function} thumbnailFetched 获取成功的回调函数，回调函数中包含以下参数:
                         imageData: 当前任务获取到的ImageData对象
                         localAVFilePath: 当前任务对应的本地文件地址
                         timestamp: 当前任务对应的时间戳，单位为微秒
   * @return {Number} 返回当前任务的ID，如果返回0，表示启动任务失败
   * @endif
   */
    getLocalAVFileThumbnail(localAVFilePath: string, timestamp: number, bypassCache: boolean, thumbnailFetched: Function): number;
    /**
   * @if ENGLISH
   * @brief Cancel icon fetching task for a specific task id
   * @param {Number} iconFetchingTaskId Icon fetching task identifier to cancel.
   * @else
   * @brief 通过任务ID取消获取本地文件缩略图的任务
   * @param {Number} iconFetchingTaskId 任务ID
   * @endif
   */
    cancelLocalAVFileIconFetchingTask(iconFetchingTaskId: number): void;
    /**
   * @if ENGLISH
   * @brief Clear all cached icons of local AV file
   * @else
   * @brief 清除所有本地文件的缩略图缓存
   * @endif
   */
    clearLocalAVFileIconCache(): void;
    /**
   * @if ENGLISH
   * @brief Start an local AV file waveform data fetching task.
   * @param {String} localAVFilePath local AV file path, e.g. /localmedia/test.m4a.weblocal
   * @param {Number} sampleCountPerGroup Indicates the sample count in a group where we extract a minimal/maximum waveform data pair.
   * @param {Number} startGroupIndex Start group index to fetch waveform data.
   * @param {Number} groupCount Group count to fetch waveform data. -1 indicates fetching waveform data till the end of the local AV file.
   * @param {Function} waveformDataFetched A function to be executed when the waveform data has been fetched. It receives the following parameters:
                       leftChannelData: A Float32Array object to hold left channel waveform data, The array contain a sequence of min/max waveform data values.
                       rightChannelData: Same as leftChannelData but it hold right channel waveform data.
                       localAVFilePath: A string of the local AV file path from which we fetch waveform data.
                       sampleCountPerGroup: sampleCountPerGroup parameter of the task.
                       startGroupIndex: startGroupIndex parameter of the task.
   * @return {Number} Returns waveform data fetching task identifier. return 0 indicates error.
   * @else
   * @brief 启动一个获取本地文件音频波形的任务
   * @param {String} localAVFilePath 本地文件地址，例如：/localmedia/test.mp4.weblocal
   * @param {Number} sampleCountPerGroup 每组数据中包含的音频采样数量，每组数据包含波形的最小值和最大值
   * @param {Number} startGroupIndex 开始的波形数据组索引
   * @param {Number} groupCount 获取多少组波形数据，如果设置为-1，则表示获取到文件结尾
   * @param {Function} waveformDataFetched 获取成功的回调函数，回调函数中包含以下参数:
                       leftChannelData: 左声道波形的Float32Array数据类型对象，包含多组波形的最小值和最大值
                       rightChannelData: 右声道波形的Float32Array数据类型对象，包含多组波形的最小值和最大值
                       localAVFilePath: 本地文件地址，例如：/localmedia/test.mp4.weblocal
                       sampleCountPerGroup: 当前任务每组数据中包含的音频采样数量
                       startGroupIndex: 当前任务开始的波形数据组索引
   * @return {Number} 返回当前任务的ID，如果返回0，表示启动任务失败
   * @endif
   */
    getLocalAVFileWaveformData(localAVFilePath: string, sampleCountPerGroup: number, startGroupIndex: number, groupCount: number, waveformDataFetched: Function): number;
    /**
   * @if ENGLISH
   * @brief Cancel waveform data fetching task for a specific task id
   * @param {Number} waveformDataFetchingTaskId Waveform data fetching task identifier to cancel.
   * @else
   * @brief 通过任务ID取消获取本地文件波形的任务
   * @param {Number} waveformDataFetchingTaskId 任务ID
   * @endif
   */
    cancelLocalAVFileWaveformDataFetchingFetchingTask(waveformDataFetchingTaskId: number): void;
    /**
   * @if ENGLISH
   * @brief Clear all cached waveform data of local AV file
   * @else
   * @brief 清除所有本地文件的波形缓存
   * @endif
   */
    clearLocalAVFileWaveformDataCache(): void;
    /**
   * @if ENGLISH
   * @brief Register a local File object.
   * @param {File} file A File object to register.
   * @return {String} On success returns an non-empty string which represent the local file identifier.
   * @else
   * @brief 注册本地文件对象
   * @param {File} file 需要注册的本地文件对象
   * @return {String} 返回注册的文件ID，非空代表成功
   * @endif
   */
    registerLocalFile(file: File): string;
    /**
   * @if ENGLISH
   * @brief Unregister a local File object according to its identifier.
   * @param {String} localFileId A string object of the local file object identifier to unregister.
   * @return {Boolean} Returns true on success.
   * @else
   * @brief 通过文件ID注销本地文件
   * @param {String} localFileId 文件ID
   * @return {Boolean} 返回true代表成功
   * @endif
   */
    unregisterLocalFile(localFileId: string): boolean;
    /**
   * @if ENGLISH
   * @brief Gets font file's fontFamily.
   * @param {String} fontFilePath Font file path
   * @return {String} Returns font file's fontFamily information.
   * @else
   * @brief 根据文件路径注册字体
   * @param {String} fontFilePath 字体文件路径
   * @return {String} 返回字体文件的 fontFamily 信息。
   * @endif
   */
    registerFontByFilePath(fontFilePath: string): string;
    /**
   * @if ENGLISH
   * @brief Get the compound family name of font file.
   * @param {String} fontFilePath Font file path
   * @return {String} The compound family name of font file.
   * @else
   * @brief 获取字体文件的组合字族名称
   * @param {String} fontFilePath 字体文件路径
   * @return {String} 字体文件的组合字族名称
   * @endif
   */
    getFontCompoundFamilyNameByFilePath(fontFilePath: string): string;
    /**
   * @if ENGLISH
   * @brief Gets the specific frame in timeline with a specific timestamp.
   * @param {NvsTimeline} timeline The timeline that will be grabbed from.
   * @param {Number} timestamp The desired frame's timestamp(in microseconds). Timestamp should be within range [0,timeline.duration - 1]. Other inputs are invalid and will results grabImageFromTimeline returns null.
   * @param {NvsRational} proxyScale scale proxy
   * @param {Number} flags flags
   * @return {UIImage} Returns the frame's Bitmap object the timestamp corresponding to, returns null if grabbing frame failed.
   * @else
   * @brief 从时间轴抓取图像
   * @param {NvsTimeline} timeline 时间线
   * @param {Number} timestamp 时间戳
   * @param {NvsRational} proxyScale 缩放代理
   * @param {Number} flags 标记
   * @return {UIImage} 返回图像帧的Bitmap对象对应的时间戳，如果抓帧失败返回null。
   * @endif
   */
    grabImageFromTimeline(timeline: NvsTimeline, timestamp: number, proxyScale: NvsRational, flags: number): UIImage;
    /**
   * @if ENGLISH
   * @brief Set volume to audio output device.
   * @param {Number} volume new volume to device, value range[0, 1]
   * @return {}
   * @else
   * @brief 设置音频输出设备音量
   * @param {Number} volume 对设备设置新音量, 取值范围[0, 1]
   * @return {}
   * @endif
   */
    setAudioOutputDeviceVolume(volume: number): any;
    /**
   * @if ENGLISH
   * @brief set max count of video file reader
   * @param {Number} count max count of video file reader
   * @return {}
   * @else
   * @brief 设置最大的视频文件读取器数量
   * @param {Number} count 最大的视频文件读取器数量
   * @return {}
   * @endif
   */
    setMaxVideoFileReaderCount(count: number): any;
    /**
   * @if ENGLISH
   * @brief get max count of video file reader
   * @return {Number} max count of video file reader
   * @else
   * @brief 获取最大的视频文件读取器数量
   * @return {Number} 最大的视频文件读取器数量
   * @endif
   */
    getMaxVideoFileReaderCount(): number;
    /**
   * @if ENGLISH
   * @brief set max count of image reader
   * @param {Number} count max count of image reader
   * @return {}
   * @else
   * @brief 设置最大的图片读取器数量
   * @param {Number} count 最大的图片读取器数量
   * @return {}
   * @endif
   */
    setMaxImageReaderCount(count: number): any;
    /**
   * @if ENGLISH
   * @brief get max count of image reader
   * @return {Number} max count of image reader
   * @else
   * @brief 获取最大的图片读取器数量
   * @return {Number} 最大的图片读取器数量
   * @endif
   */
    getMaxImageReaderCount(): number;
    /**
   * @if ENGLISH
   * @brief set max count of video decoding thread
   * @param {Number} count count
   * @return {}
   * @else
   * @brief 设置最大视频解码线程数
   * @param {Number} count 计数
   * @return {}
   * @endif
   */
    setMaxVideoDecodingThreadCount(count: number): any;
    /**
   * @if ENGLISH
   * @brief function authorise
   * @param {String} sdkFunctionName sdk function name
   * @return {Boolean} Returns a BOOL value. YES indicates that the authorization verification is successful, and NO indicates that the verification fails.
   * @else
   * @brief 功能授权
   * @param {String} sdkFunctionName 函数名
   * @return {Boolean} 返回一个 BOOL 值。 YES表示授权验证成功，NO表示验证失败。
   * @endif
   */
    functionalityAuthorised(sdkFunctionName: string): boolean;
    /**
   * @if ENGLISH
   * @brief set Chinese language only
   * @param {Boolean} useChineseLanguageOnly use Chinese language only
   * @return {}
   * @else
   * @brief 设置只使用中文
   * @param {Boolean} useChineseLanguageOnly 只使用中文
   * @return {}
   * @endif
   */
    setUseChineseLanguageOnly(useChineseLanguageOnly: boolean): any;
    /**
   * @if ENGLISH
   * @brief Chinese language only or not
   * @return {Boolean}
   * @else
   * @brief 是否仅仅使用中文
   * @return {Boolean}
   * @endif
   */
    isUseChineseLanguageOnly(): boolean;
    /**
   * @if ENGLISH
   * @brief Initializes human detection. Only once needed.
   * @param {String} modelFilePath mode file path
   * @param {String} licenseFilePath license file path
   * @param {Number} features features, see {@link NvsHumanDetectionFeatureEnum} for detail
   * @return {Boolean} Returns a value representing if it succeeded.
   * @see {@link NvsStreamingContext#initHumanDetectionExt} {@link NvsStreamingContext#closeHumanDetection}
   * @else
   * @brief 初始化人体检测机制，只需要初始化一次
   * @param {String} modelFilePath 模型文件路径
   * @param {String} licenseFilePath 授权文件路径
   * @param {Number} features 人体检测特征标志字段，参看{@link NvsHumanDetectionFeatureEnum}
   * @return {Boolean} 返回一个值，表示它是否成功。
   * @see {@link NvsStreamingContext#initHumanDetectionExt} {@link NvsStreamingContext#closeHumanDetection}
   * @endif
   */
    initHumanDetection(modelFilePath: string, licenseFilePath: string, features: number): boolean;
    /**
   * @if ENGLISH
   * @brief Initializes human detection. Need use initHumanDetection first.
   * @param {String} modelFilePath mode file path
   * @param {String} licenseFilePath license file path
   * @param {Number} features features, see {@link NvsHumanDetectionFeatureEnum} for detail
   * @return {Boolean} Returns a value representing if it succeeded.
   * @see {@link NvsStreamingContext#initHumanDetection} {@link NvsStreamingContext#setupHumanDetectionData}
   * @else
   * @brief 初始化人体检测扩展机制，必须先调用initHumanDetection
   * @param {String} modelFilePath 模型文件路径
   * @param {String} licenseFilePath 授权文件路径
   * @param {Number} features 人体检测特征标志字段，参看{@link NvsHumanDetectionFeatureEnum}
   * @return {Boolean} 返回一个值，表示它是否成功。
   * @see {@link NvsStreamingContext#initHumanDetection} {@link NvsStreamingContext#setupHumanDetectionData}
   * @endif
   */
    initHumanDetectionExt(modelFilePath: string, licenseFilePath: string, features: number): boolean;
    /**
   * @if ENGLISH
   * @brief Setup human detection data
   * @param {Number} dataType data type of human detection, see {@link NvsHumanDetectionDataTypeEnum} for detail
   * @param {String} dataFilePath data file path
   * @return {Boolean} Returns a value representing if it succeeded.
   * @else
   * @brief 初始化人体检测相关数据包
   * @param {Number} dataType 人体检测数据包类型，参看{@link NvsHumanDetectionDataTypeEnum}
   * @param {String} dataFilePath 数据文件路径
   * @return {Boolean} 返回一个值，表示它是否成功。
   * @endif
   */
    setupHumanDetectionData(dataType: number, dataFilePath: string): boolean;
    /**
   * @if ENGLISH
   * @brief Turns off the human detection mechanism.
   * @return {}
   * @else
   * @brief 关闭人体检测
   * @return {}
   * @endif
   */
    closeHumanDetection(): any;
    /**
   * @if ENGLISH
   * @brief Calculate duration after using curves variable speed.
   * @param curvesString curves string
   * @return {Number} duration
   * @else
   * @brief 曲线变速后计算持续时间。
   * @param curvesString 曲线字符串。
   * @return {Number} 时长
   * @endif
   */
    calcDurationAfterCurvesVariableSpeed(curvesString: any): number;
    /**
   * @if ENGLISH
   * @brief Clears cached resources.
   * @return {}
   * @else
   * @brief 清除缓存的资源。
   * @return {}
   * @endif
   */
    clearCachedResources(): any;
    /**
   * @if ENGLISH
   * @brief preload effects resource
   * @return {Boolean}
   * @else
   * @brief 预加载效果资源
   * @return {Boolean}
   * @endif
   */
    preloadEffectResources(): boolean;
    /**
   * @if ENGLISH
   * @brief update the notify to webReader
   * @param {String} webAVFilePath web audio video file path
   * @return {Boolean}
   * @else
   * @brief 通知更新到网络阅读器
   * @param {String} webAVFilePath 网页音视频文件路径
   * @return {Boolean}
   * @endif
   */
    notifyUpdateToWebReader(webAVFilePath: string): boolean;
    /**
   * @if ENGLISH
   * @brief enable audio VU meter
   * @param {Boolean} enable enable or not
   * @return {}
   * @else
   * @brief 启用音频 VU 表
   * @param {Boolean} enable 是否开启
   * @return {}
   * @endif
   */
    enableAudioVUMeter(enable: boolean): any;
    /**
   * @if ENGLISH
   * @brief enable caption default fade
   * @param {Boolean} fade enable fade or not
   * @return {}
   * @else
   * @brief 是否开启字幕默认淡入淡出效果
   * @param {Boolean} fade 是否开启
   * @return {}
   * @endif
   */
    setDefaultCaptionFade(fade: boolean): any;
    /**
   * @if ENGLISH
   * @brief caption default fade is enabled or not
   * @return {Boolean} enabled or not
   * @else
   * @brief 字幕默认淡入淡出效果是否已经开启
   * @return {Boolean} 是否已经开启
   * @endif
   */
    isDefaultCaptionFade(): boolean;
    /**
   * @if ENGLISH
   * @brief Video decoder configuration is supported or not
   * @return {Boolean} supported or not
   * @else
   * @brief 解码器是否支持此视频格式
   * @return {Boolean} 是否支持
   * @endif
   */
    isDecoderConfigSupported(codecType: any, codecAcceleration: any): boolean;
    /**
   * @if ENGLISH
   * @brief get automatic tone parameter
   * @param {ImageData} imageData image data
   * @param {Number} width width
   * @param {Number} height height
   * @param {Boolean} isRawImage raw image or not
   * @return {NvsAIToningInfo}
   * @else
   * @brief 获取自动音调参数
   * @param {ImageData} imageData 图片数据
   * @param {Number} width 宽度
   * @param {Number} height 高度
   * @param {Boolean} isRawImage 是否原始图片
   * @return {NvsAIToningInfo}
   * @endif
   */
    getAutoToneParameters(imageData: ImageData, width: number, height: number, isRawImage: boolean): NvsAIToningInfo;
}
declare const TEMPLATE_KEY_REPLACE_ID: "MSTemplate-ReplaceId";
declare const TEMPLATE_KEY_FOOTAGE_ID: "MSTemplate-FootageId";
declare const TEMPLATE_KEY_FOOTAGE_TAGS: "MSTemplate-FootageTags";
/**
 * @if ENGLISH
 * @brief project object
 * @else
 * @brief 工程对象
 * @endif
 */
declare class NvsProjObj {
    internalObj: number;
    /**
   * @if ENGLISH
   * @brief set internal object
   * @param {Object} obj internal object
   * @else
   * @brief 设置内置对象
   * @param {Object} obj internal object
   * @endif
   */
    setInternalObject(obj: any): void;
    /**
   * @if ENGLISH
   * @brief get internal object
   * @return {Object}
   * @else
   * @brief 获取内置对象
   * @return {Object}
   * @endif
   */
    getInternalObject(): any;
    /**
   * @if ENGLISH
   * @brief Adds additional template data to the NvsObject object to identify the NvsObject template object.
   * @param {String} key The key of the attachment to be added(TEMPLATE_ASSET_KEY)
   * @param {String} value Attachment to be added
   * @else
   * @brief 设置模板附件
   * @param {String} key 键
   * @param {String} value 值
   * @endif
   */
    setTemplateAttachment(key: string, value: string): void;
    /**
   * @if ENGLISH
   * @brief Gets an template attachment to NvsObject.
   * @param {String} key the key that has been added attachment.(TEMPLATE_ASSET_KEY)
   * @return {String} Returns the attachment corresponding to the key.
   * @else
   * @brief 根据键，获取模板属性值
   * @param {String} key 键
   * @return {String} 返回key对应的附件。
   * @endif
   */
    getTemplateAttachment(key: string): string;
}
/**
 * @if ENGLISH
 * @brief Caption bounding vertices information.
 * @else
 * @brief 字幕的原始包围矩形的顶点位置信息类
 * @endif
 */
declare class NvsCaptionBoundingVerticesInfo {
    captionInternalObj: number;
    captionBoundingVertices: any[];
}
/**
 * @if ENGLISH
 * @brief Video clip bounding vertices information.
 * @else
 * @brief 视频片段的原始包围矩形的顶点位置信息类
 * @endif
 */
declare class NvsClipBoundingVerticesInfo {
    clipInternalObj: number;
    clipBoundingVertices: any[];
}
/**
 * @if ENGLISH
 * @brief Timeline class: edit the timeline entity of the scene. The timeline is composed of tracks and can be regarded as a collection of a series of audio and video tracks. Multiple video tracks and audio tracks can be added or removed on the timeline. Multiple tracks are superimposed and synthesized with each other. When editing a video, you can also add timeline subtitles, themes and corresponding animation stickers as needed to make a beautiful video. In addition, the added material resource package (theme package, animation sticker package, subtitle style package, timeline special effect package, etc.) must be installed first. After successful installation, the packageid can be used, while the built-in timeline special effect (builtin) only needs to obtain the special effect name.
 * @see NvsProjObj
 * @else
 * @brief 时间线类：编辑场景的时间轴实体，时间线由轨道组成，可视作一系列音视频轨道的集合。在时间线上可添加或者移除多条视频轨道和音轨轨道，多条轨道之间是相互叠加合成的关系。 当编辑视频时，根据需要还会添加上时间线字幕，主题以及相应的动画贴纸，以制作出美观的视频。另外，添加素材资源包(主题包，动画贴纸包，字幕样式包，时间线特效包等)， 都得先安装，安装成功后获取packageId才能使用，而内建时间线特效(builtin)只需获取特效名称即可使用。
 * @see NvsProjObj
 * @endif
 */
declare class NvsTimeline extends NvsProjObj {
    /**
   * @if ENGLISH
   * @brief Gets video's resolution (image's width, height and aspect ratio).
   * @return {NvsVideoResolution} Returns the NvsVideoResolution object
   * @else
   * @brief 获取视频资源
   * @return {NvsVideoResolution} 返回 NvsVideoResolution 对象
   * @endif
   */
    getVideoRes(): NvsVideoResolution;
    /**
   * @if ENGLISH
   * @brief Gets audio's resolution (sampling rate, sampling format and number of channels).
   * @return {NvsAudioResolution} Returns the NvsAudioResolution object.
   * @else
   * @brief 获取音频资源
   * @return {NvsVideoResolution} 返回 NvsVideoResolution 对象
   * @endif
   */
    getAudioRes(): NvsAudioResolution;
    /**
   * @if ENGLISH
   * @brief Gets timeline's duration.
   * @return {Number} Returns timeline's duration (in microseconds).
   * @else
   * @brief 获取时间线时长
   * @return {Number} 返回时间线的持续时间（以微秒为单位）。
   * @endif
   */
    getDuration(): number;
    /**
   * @if ENGLISH
   * @brief Appends video track.
   * @return {NvsVideoTrack} Returns the appended NvsVideoTrack object. When adding more than one video track, null may be returned due to multi-videotrack authorization.This interface will cause the streaming engine state to jump to the state of stopping engine.
   * @else
   * @brief 附加视频轨道
   * @return {NvsVideoTrack} 返回附加的 NvsVideoTrack 对象。添加多个视频轨道时，由于多视频轨道授权，可能会返回null。该接口会导致流媒体引擎状态跳转到停止引擎状态。
   * @endif
   */
    appendVideoTrack(): NvsVideoTrack;
    /**
   * @if ENGLISH
   * @brief Appends audio track.
   * @return {NvsAudioTrack} Returns the appended NvsAudioTrack object. When adding more than one audio track, null may be returned due to multi-musictrack authorization.This interface will cause the streaming engine state to jump to the state of stopping engine.
   * @else
   * @brief 添加音频轨道
   * @return {NvsAudioTrack} 返回附加的 NvsAudioTrack 对象。添加多个音轨时，由于多音轨授权，可能会返回null。该接口会导致流媒体引擎状态跳转到停止引擎状态。
   * @endif
   */
    appendAudioTrack(): NvsAudioTrack;
    /**
   * @if ENGLISH
   * @brief Insert video track.
   * @param {Number} insertPoint Index of the inserted track.If you pass in an index less than 0 or more than current video track count, it will be inserted at the end of the current video track number.
   * @return {NvsVideoTrack} Returns the insert NvsVideoTrack object. When adding more than one video track, null may be returned due to multi-videotrack authorization.This interface will cause the streaming engine state to jump to the state of stopping engine.
   * @else
   * @brief 插入视频轨道
   * @param {Number} insertPoint 插入点
   * @return {NvsVideoTrack} 返回插入的 NvsVideoTrack 对象。添加多个视频轨道时，由于多视频轨道授权，可能会返回null。该接口会导致流媒体引擎状态跳转到停止引擎状态。
   * @endif
   */
    insertVideoTrack(insertPoint: number): NvsVideoTrack;
    /**
   * @if ENGLISH
   * @brief Appends audio track.
   * @param {Number} insertPoint Index of the inserted track.If you pass in an index less than 0 or more than current audio track count, it will be inserted at the end of the current audio track number.
   * @return {NvsAudioTrack} returns the appended NvsAudioTrack object. When adding more than one audio track, null may be returned due to multi-musictrack authorization.
   * @else
   * @brief 插入音频轨道
   * @param {Number} insertPoint 插入点
   * @return {NvsAudioTrack} 返回附加的 NvsAudioTrack 对象。添加多个音轨时，由于多音轨授权，可能会返回null。
   * @endif
   */
    insertAudioTrack(insertPoint: number): NvsAudioTrack;
    /**
   * @if ENGLISH
   * @brief remove video track
   * @param {Number} trackIndex Index of video track
   * @return {Boolean} Returns a boolean value.YES means it removes successfully, NO means it fails.If trackIndex is less than 0 or greater than or equal to the current track number, return NO.
   * @else
   * @brief 删除视频轨道
   * @param {Number} trackIndex 轨道索引
   * @return {Boolean} 返回一个布尔值。YES表示删除成功，NO表示失败。如果trackIndex小于0或大于等于当前轨道号，返回NO。
   * @endif
   */
    removeVideoTrack(trackIndex: number): boolean;
    /**
   * @if ENGLISH
   * @brief remove Remove audio track.
   * @param {Number} trackIndex Index of audio track
   * @return {Boolean} Returns a BOOL value.YES means it removes successfully, NO means it fails.If trackIndex is less than 0 or greater than or equal to the current track number, return NO.
   * @else
   * @brief 删除音频轨道
   * @param {Number} trackIndex 轨道索引
   * @return {Boolean} 返回一个BOOL值。YES表示删除成功，NO表示失败。如果trackIndex小于0或大于等于当前轨道号，返回NO。
   * @endif
   */
    removeAudioTrack(trackIndex: number): boolean;
    /**
   * @if ENGLISH
   * @brief Get count of video track.
   * @return {Number} Returns count of video track.
   * @else
   * @brief 获取视频轨道计数
   * @return {Number} 返回视频轨道的计数。
   * @endif
   */
    videoTrackCount(): number;
    /**
   * @if ENGLISH
   * @brief Get count of audio track.
   * @return {Number} Returns count of audio track.
   * @else
   * @brief 获取音频轨道计数
   * @return {Number} 返回音轨的计数。
   * @endif
   */
    audioTrackCount(): number;
    /**
   * @if ENGLISH
   * @brief Gets video track with track index.
   * @param {Number} trackIndex Index of video track
   * @return {NvsVideoTrack} Returns the NvsVideoTrack object.If trackIndex is less than 0 or greater than or equal to the current track number, return null.
   * @else
   * @brief 根据索引，获取视频轨道
   * @param {Number} trackIndex 轨道索引
   * @return {NvsVideoTrack} 返回 NvsVideoTrack 对象。如果 trackIndex 小于 0 或大于等于当前轨道号，则返回 null。
   * @endif
   */
    getVideoTrackByIndex(trackIndex: number): NvsVideoTrack;
    /**
   * @if ENGLISH
   * @brief get audio track according to index
   * @param {Number} trackIndex track index
   * @return {NvsAudioTrack} Gets audio track with track index.Returns the NvsAudioTrack object.If trackIndex is less than 0 or greater than or equal to the current track number, return null.
   * @else
   * @brief 根据索引，获取音频轨道
   * @param {Number} trackIndex 轨道索引
   * @return {NvsAudioTrack} 获取带有轨道索引的音轨。返回 NvsAudioTrack 对象。如果 trackIndex 小于 0 或大于等于当前轨道号，则返回 null。
   * @endif
   */
    getAudioTrackByIndex(trackIndex: number): NvsAudioTrack;
    /**
   * @if ENGLISH
   * @brief Change the timeline video resolution.
   Remark:If timeline is linked to a surfaceTexture, the surfaceTexture must be detached first, and then timeline video resolution can be changed. After timeline resolution is changed, the SurfaceTexture can be re-attached to timeline.
   * @param {Number} videoWidth New video width(the imported image's width has to be a multiple of 4)
   * @param {Number} videoHeight New video height(the imported image's height has to be a multiple of 2)
   * @return {Boolean} Returns YES means it changes successfully, NO means it fails.If the passed width or height is less than 0 or the width is not a multiple of 4 and the height is not a multiple of 2, return false.
   * @else
   * @brief 改变视频大小
   * @param {Number} videoWidth 视频宽度
   * @param {Number} videoHeight 视频高度
   * @return {Boolean} 返回YES表示修改成功，NO表示修改失败。如果传入的width或height小于0或width不是4的倍数且height不是2的倍数，返回false。
   * @endif
   */
    changeVideoSize(videoWidth: number, videoHeight: number): boolean;
    /**
   * @if ENGLISH
   * @brief Change video size
   * @param {Number} videoWidth New video width(the imported image's width has to be a multiple of 4)
   * @param {Number} videoHeight New video height(the imported image's height has to be a multiple of 2)
   * @return {Boolean} Returns YES means it changes successfully, NO means it fails.If the passed width or height is less than 0 or the width is not a multiple of 4 and the height is not a multiple of 2, return false.
   * @else
   * @brief 改变视频大小
   * @param {Number} videoWidth 视频宽度
   * @param {Number} videoHeight 视频高度
   * @return {Boolean} 返回YES表示修改成功，NO表示修改失败。如果传入的width或height小于0或width不是4的倍数且height不是2的倍数，返回false。
   * @endif
   */
    changeVideoSize2(videoWidth: number, videoHeight: number): boolean;
    /**
   * @if ENGLISH
   * @brief Get the first caption on the timeline.
   * @return {NvsTimelineCaption} Returns the NvsTimelineCaption object.
   * @else
   * @brief 获取第一个字幕
   * @return {NvsTimelineCaption} 返回 NvsTimelineCaption 对象。
   */
    getFirstCaption(): NvsTimelineCaption;
    /**
   * @if ENGLISH
   * @brief Get the last caption on the timeline.
   * @return {NvsTimelineCaption} Returns the NvsTimelineCaption object.
   * @else
   * @brief 获取最后一个字幕
   * @return {NvsTimelineCaption} 返回 NvsTimelineCaption 对象。
   */
    getLastCaption(): NvsTimelineCaption;
    /**
   * @if ENGLISH
   * @brief Get the previous caption of the current caption on the timeline.
   * @param {NvsTimelineCaption} caption The current caption on the timeline
   * @return {NvsTimelineCaption} Returns the NvsTimelineCaption object.
   * @else
   * @brief 获取上一个字幕
   * @param {NvsTimelineCaption} caption 字幕
   * @return {NvsTimelineCaption} 返回 NvsTimelineCaption 对象。
   */
    getPrevCaption(caption: NvsTimelineCaption): NvsTimelineCaption;
    /**
   * @if ENGLISH
   * @brief Get the next caption of the current caption on the timeline.
   * @param {NvsTimelineCaption} caption The current caption on the timeline
   * @return {NvsTimelineCaption} Returns the NvsTimelineCaption object.
   * @else
   * @brief 获取下一个字幕
   * @param {NvsTimelineCaption} caption 字幕
   * @return {NvsTimelineCaption} 返回 NvsTimelineCaption 对象。
   */
    getNextCaption(caption: NvsTimelineCaption): NvsTimelineCaption;
    /**
   * @if ENGLISH
   * @brief Get a list of captions based on the position on the timeline.
   * @param {Number} timelinePos The position on the timeline(in micro-second)
   * @return {NvsVectorVal<NvsTimelineCaption>} Returns a list of arrays of captions at the current position.
       The sorting rules for the obtained captions list are as follows:
       1.When adding, the in points are different, and captions are arranged in the order of the in points;
       2.When adding, the in points are the same, and captions are arranged in the order of adding captions.
   * @else
   * @brief 根据时间线位置获取字幕
   * @param {Number} timelinePos 时间线位置
   * @return {NvsVectorVal<NvsTimelineCaption>} 返回当前位置的字幕数组列表。
       得到的字幕列表排序规则如下：
       1.添加时，入点不同，字幕按入点顺序排列；
       2.添加时，入点相同，字幕按照添加字幕的顺序排列。
   */
    getCaptionsByTimelinePosition(timelinePos: number): NvsVectorVal<NvsTimelineCaption>;
    /**
   * @if ENGLISH
   * @brief Add a caption on the timeline.
   * @param {String} captionText caption text
   * @param {Number} inPoint in point
   * @param {Number} duration duration
   * @param {String} captionStylePackageId caption style package id
   * @param {Boolean} isPanoramic panoramic or not
   * @return {NvsTimelineCaption} Returns the NvsTimelineCaption object.
       It will return null in the following situations:
       1. No caption function authorization;
       2. If inPoint is less than 0 or greater than or equal to the current timeline duration, or duration is not greater than 0.
   * @else
   * @brief 添加字幕
   * @param {String} captionText 字幕文本
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @param {String} captionStylePackageId 字幕风格包ID
   * @param {Boolean} isPanoramic 是否是全景
   * @return {NvsTimelineCaption} 返回 NvsTimelineCaption 对象。
       在以下情况下会返回null：
       1. 无字幕功能授权；
       2. 如果 inPoint 小于 0 或者大于等于当前时间线持续时间，或者持续时间不大于 0。
   */
    addCaption(captionText: string, inPoint: number, duration: number, captionStylePackageId: string, isPanoramic: boolean): NvsTimelineCaption;
    /**
   * @if ENGLISH
   * @brief add modular caption
   * @param {String} captionText caption text
   * @param {Number} inPoint in point
   * @param {Number} duration duration
   * @return {NvsTimelineCaption} Returns the NvsTimelineCaption object.
       It will return null in the following situations:
       1. No caption function authorization;
       2. If inPoint is less than 0 or greater than or equal to the current timeline duration, or duration is not greater than 0.
   * @else
   * @brief 添加模块化字幕
   * @param {String} captionText 字幕文本
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @return {NvsTimelineCaption} 返回 NvsTimelineCaption 对象。
     它会在以下情况下返回 null：
     1、无字幕功能授权；
     2. 如果 inPoint 小于 0 或者大于等于当前时间线持续时间，或者持续时间不大于 0。
   */
    addModularCaption(captionText: string, inPoint: number, duration: number): NvsTimelineCaption;
    /**
   * @if ENGLISH
   * @brief Remove the caption on the timeline.
   * @param {NvsTimelineCaption} caption timeline caption object which removed
   * @return {NvsTimelineCaption} Returns the next NvsTimelineCaption object.
   * @else
   * @brief 删除字幕
   * @param {NvsTimelineCaption} caption 字幕对象
   * @return {NvsTimelineCaption} 返回下一个 NvsTimelineCaption 对象。
   */
    removeCaption(caption: NvsTimelineCaption): NvsTimelineCaption;
    /**
   * @if ENGLISH
   * @brief Get the first compound caption on the timeline.
   * @return {NvsTimelineCompoundCaption} Returns the compound caption object.
   * @else
   * @brief 获取第一个复合字幕
   * @return {NvsTimelineCompoundCaption} 返回复合字幕对象。
   */
    getFirstCompoundCaption(): NvsTimelineCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get the last compound caption on the timeline.
   * @return {NvsTimelineCompoundCaption} Returns the compound caption object.
   * @else
   * @brief 获取时间线上最后一个复合字幕
   * @return {NvsTimelineCompoundCaption} 返回复合字幕对象。
   */
    getLastCompoundCaption(): NvsTimelineCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get the previous compound caption of the current compound caption on the timeline.
   * @param {NvsTimelineCompoundCaption} caption The current compound caption on the timeline
   * @return {NvsTimelineCompoundCaption} Returns the compound caption object.
   * @else
   * @brief 获取上一个复合字幕
   * @param {NvsTimelineCompoundCaption} caption 字幕对象
   * @return {NvsTimelineCompoundCaption} 返回复合字幕对象。
   */
    getPrevCompoundCaption(caption: NvsTimelineCompoundCaption): NvsTimelineCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get the next compound caption of the current caption on the timeline.
   * @param {NvsTimelineCompoundCaption} caption The current compound caption on the timeline
   * @return {NvsTimelineCompoundCaption} Returns the compound caption object.
   * @else
   * @brief 获取下一个复合字幕
   * @param {NvsTimelineCompoundCaption} caption 字幕对象
   * @return {NvsTimelineCompoundCaption} 返回复合字幕对象。
   */
    getNextCompoundCaption(caption: NvsTimelineCompoundCaption): NvsTimelineCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get a list of compound captions based on the position on the timeline.
   * @param {Number} timelinePos The position on the timeline(in micro-second)
   * @return {NvsVectorVal<NvsTimelineCompoundCaption>} Returns a list of compound captions at the current position。
       The sorting rules for the obtained captions list are as follows:
       1. If the in points are different, captions are sorted in the order of the in points;
       2. If the in points are the same, and captions are sorted in the order of compound caption added.
   * @else
   * @brief 根据时间线位置，获取复合字幕
   * @param {Number} timelinePos 时间线位置
   * @return {NvsVectorVal<NvsTimelineCompoundCaption>} 返回当前位置的复合字幕列表。
       获取到的字幕列表排序规则如下：
       1.如果入点不同，字幕按入点排序；
       2.如果入点相同，则字幕按照添加复合字幕的顺序排列。
   */
    getCompoundCaptionsByTimelinePosition(timelinePos: number): NvsVectorVal<NvsTimelineCompoundCaption>;
    /**
   * @if ENGLISH
   * @brief add compound caption
   * @param {Number} inPoint in point
   * @param {Number} duration duration
   * @param {String} compoundCaptionPackageId compound caption package id
   * @return {NvsTimelineCompoundCaption}
   * @else
   * @brief 添加复合字幕
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @param {String} compoundCaptionPackageId 组合字幕包ID
   * @return {NvsTimelineCompoundCaption}
   */
    addCompoundCaption(inPoint: number, duration: number, compoundCaptionPackageId: string): NvsTimelineCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Remove compound caption from the timeline.
   * @param {NvsTimelineCompoundCaption} caption Timeline compound caption object which to be removed
   * @return {NvsTimelineCompoundCaption} Returns the next compound caption object.
   * @else
   * @brief 删除复合字幕
   * @param {NvsTimelineCompoundCaption} caption 字幕对象
   * @return {NvsTimelineCompoundCaption} 返回下一个复合字幕对象。
   */
    removeCompoundCaption(caption: NvsTimelineCompoundCaption): NvsTimelineCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get the first animated sticker on the timeline.
   * @return {NvsTimelineAnimatedSticker} Return the acquired NvsTimelineAnimatedSticker object.
   * @else
   * @brief 获取第一个动画贴纸
   * @return {NvsTimelineAnimatedSticker} 返回获取到的 NvsTimelineAnimatedSticker 对象。
   */
    getFirstAnimatedSticker(): NvsTimelineAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get the last animated sticker on the timeline.
   * @return {NvsTimelineAnimatedSticker} Return the acquired NvsTimelineAnimatedSticker object.
   * @else
   * @brief 获取最后一个动画贴纸
   * @return {NvsTimelineAnimatedSticker} 返回获取到的 NvsTimelineAnimatedSticker 对象。
   */
    getLastAnimatedSticker(): NvsTimelineAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get the previous animated sticker of the current animated sticker of the timeline.
   * @param {NvsTimelineAnimatedSticker} animatedSticker The current NvsTimelineAnimatedSticker obejct
   * @return {NvsTimelineAnimatedSticker} Get the last animated sticker on the timeline.
   * @else
   * @brief 获取上一个动画贴纸
   * @param {NvsTimelineAnimatedSticker} animatedSticker 动画贴纸
   * @return {NvsTimelineAnimatedSticker} 获取时间线上的最后一个动画贴纸。
   */
    getPrevAnimatedSticker(animatedSticker: NvsTimelineAnimatedSticker): NvsTimelineAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get the next animated sticker of the current animated sticker of the timeline.
   * @param {NvsTimelineAnimatedSticker} animatedSticker The current NvsTimelineAnimatedSticker obejct
   * @return {NvsTimelineAnimatedSticker} Return the acquired NvsTimelineAnimatedSticker object.
   * @else
   * @brief 获取下一个动画贴纸
   * @param {NvsTimelineAnimatedSticker} animatedSticker 动画贴纸对象
   * @return {NvsTimelineAnimatedSticker} 返回获取到的 NvsTimelineAnimatedSticker 对象。
   */
    getNextAnimatedSticker(animatedSticker: NvsTimelineAnimatedSticker): NvsTimelineAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get an animated sticker list based on the position on the timeline.
   * @param {Number} timelinePos Position on the timeline (in microseconds)
   * @return {NvsVectorVal<NvsTimelineAnimatedSticker>} Returns a list which holding the current position animated sticker object
       The sorting rules for the obtained animated sticker list are as follows:
       1.When adding, the in points are different,animated stickers are arranged in the order of the in points;
       2.When adding, the in points are the same, they are arranged in the order in which the animation stickers are added.
   * @else
   * @brief 根据时间线位置获取动画贴纸
   * @param {Number} timelinePos 时间线位置
   * @return {NvsVectorVal<NvsTimelineAnimatedSticker>} 返回一个包含当前位置动画贴纸对象的列表
       得到的动画贴纸列表排序规则如下：
       1.添加时入点不同，动画贴图按入点顺序排列；
       2.添加时，入点相同，按添加动画贴的顺序排列。
   */
    getAnimatedStickersByTimelinePosition(timelinePos: number): NvsVectorVal<NvsTimelineAnimatedSticker>;
    /**
   * @if ENGLISH
   * @brief add animated sticker
   * @param {Number} inPoint The in point of the animated sticker on the timeline (in microseconds)
   * @param {Number} duration The duration of the animation sticker which displayed (in microseconds)
   * @param {String} animatedStickerPackageId Animated sticker packageId
   * @param {Boolean} isPanoramic Panoramic or not
   * @param {Boolean} isCustom Customize or not
   * @param {String} customImagePath Custome image path
   * @return {NvsTimelineAnimatedSticker} Return the NvsTimelineAnimatedSticker object.
       It will return null in the following situations:
       1. No animated sticker function authorization;
       2. The animatedStickerPackageId is empty or null;
       3. The animatedSticker has not install successed;
       4. If inPoint is less than 0 or greater than or equal to the current timeline duration, or duration is not greater than 0.
   * @else
   * @brief 添加动画贴纸
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @param {String} animatedStickerPackageId 动画贴纸包ID
   * @param {Boolean} isPanoramic 是否是全景
   * @param {Boolean} isCustom 是否自定制
   * @param {String} customImagePath 自定制图片路径
   * @return {NvsTimelineAnimatedSticker} 返回 NvsTimelineAnimatedSticker 对象。
       它会在以下情况下返回 null：
       1. 无动画贴纸功能授权；
       2. animatedStickerPackageId 为空或null；
       3. 动画贴纸没有安装成功；
       4. 如果 inPoint 小于 0 或大于等于当前时间线持续时间，或者持续时间不大于 0。
   */
    addAnimatedSticker(inPoint: number, duration: number, animatedStickerPackageId: string, isPanoramic: boolean, isCustom: boolean, customImagePath: string): NvsTimelineAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Remove an animated sticker on the timeline.
   * @param {NvsTimelineAnimatedSticker} animatedSticker The NvsTimelineAnimatedSticker object which will be removed
   * @return {NvsTimelineAnimatedSticker} Return the next NvsTimelineAnimatedSticker object.
   * @else
   * @brief 删除动画贴纸
   * @param {NvsTimelineAnimatedSticker} animatedSticker 动画贴纸
   * @return {NvsTimelineAnimatedSticker} 返回下一个 NvsTimelineAnimatedSticker 对象。
   */
    removeAnimatedSticker(animatedSticker: NvsTimelineAnimatedSticker): NvsTimelineAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get the first timeline video effect on the timeline.
   * @return {NvsTimelineVideoFx} Returns the acquired NvsTimelineVideoFx object.
   * @else
   * @brief 获取第一个时间线视频特效
   * @return {NvsTimelineVideoFx} 返回获取的 NvsTimelineVideoFx 对象。
   */
    getFirstTimelineVideoFx(): NvsTimelineVideoFx;
    /**
   * @if ENGLISH
   * @brief Get the last timeline video effect on the timeline.
   * @return {NvsTimelineVideoFx} Returns the acquired NvsTimelineVideoFx object.
   * @else
   * @brief 获取最后时间线视频特效
   * @return {NvsTimelineVideoFx} 返回获取的 NvsTimelineVideoFx 对象。
   */
    getLastTimelineVideoFx(): NvsTimelineVideoFx;
    /**
   * @if ENGLISH
   * @brief Get the previous timeline video effect of a timeline video effect on the timeline.
   * @param {NvsTimelineVideoFx} timelineVideoFx The NvsTimelineVideoFx object
   * @return {NvsTimelineVideoFx} Returns the acquired NvsTimelineVideoFx object.
   * @else
   * @brief 获取前一个时间线视频特效
   * @param {NvsTimelineVideoFx} timelineVideoFx 时间线视频特效
   * @return {NvsTimelineVideoFx} 返回获取的 NvsTimelineVideoFx 对象。
   */
    getPrevTimelineVideoFx(timelineVideoFx: NvsTimelineVideoFx): NvsTimelineVideoFx;
    /**
   * @if ENGLISH
   * @brief Get the next timeline video effect of a timeline video effect on the timeline.
   * @param {NvsTimelineVideoFx} timelineVideoFx The NvsTimelineVideoFx object
   * @return {NvsTimelineVideoFx} Returns the acquired NvsTimelineVideoFx object.
   * @else
   * @brief 获取下一个时间线视频特效
   * @param {NvsTimelineVideoFx} timelineVideoFx 时间线视频特效
   * @return {NvsTimelineVideoFx} 返回获取的 NvsTimelineVideoFx 对象。
   */
    getNextTimelineVideoFx(timelineVideoFx: NvsTimelineVideoFx): NvsTimelineVideoFx;
    /**
   * @if ENGLISH
   * @brief Get a list of timeline video effects based on position on the timeline.
   * @param {Number} timelinePos The position on the timeline (in microseconds)
   * @return {NvsVectorVal<NvsTimelineVideoFx>} Returns an list of timeline video effects in current position.
       The ordering rules for the acquired timeline video effects are as follows:
       1.When adding, the in points are different, arranged in the order of the in points;
       2.When adding, the entry points are the same, arranged in the order of adding timeline video effects.
   * @else
   * @brief 根据时间线位置获取时间线视频特效
   * @param {Number} timelinePos 时间线位置
   * @return {NvsVectorVal<NvsTimelineVideoFx>} 返回当前位置的时间线视频效果列表。
       获取的时间线视频效果排序规则如下：
       1.添加时，入点不同，按入点顺序排列；
       2.添加时，入点相同，按照添加时间线视频特效的顺序排列。
   */
    getTimelineVideoFxByTimelinePosition(timelinePos: number): NvsVectorVal<NvsTimelineVideoFx>;
    /**
   * @if ENGLISH
   * @brief Add a built-in timeline video effect on the timeline.
   * @param {Number} inPoint The in point of the timeline video effect on the timeline (in microseconds)
   * @param {Number} duration Duration of the timeline video effect which displayed (in microseconds)
   * @param {String} videoFxName The video effect name
   * @return {NvsTimelineVideoFx} Return the NvsTimelineVideoFx object
       It will return null in the following situations:
       1. videoFxName is empty or null;
       2. videoFxName is not built in fx;
       3. If inPoint is less than 0 or greater than or equal to the current timeline duration, or duration is not greater than 0.
   * @else
   * @brief 添加内置时间线视频特效
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @param {String} videoFxName 视频特效名字
   * @return {NvsTimelineVideoFx} 返回 NvsTimelineVideoFx 对象
       它会在以下情况下返回 null：
       1. videoFxName为空或null；
       2. fx中没有内置videoFxName；
       3. 如果 inPoint 小于 0 或者大于等于当前时间线持续时间，或者持续时间不大于 0。
   */
    addBuiltinTimelineVideoFx(inPoint: number, duration: number, videoFxName: string): NvsTimelineVideoFx;
    /**
   * @if ENGLISH
   * @brief Add a timeline video effect in the form of a resource package on the timeline.
   * @param {Number} inPoint The in point of the timeline video effect on the timeline (in microseconds)
   * @param {Number} duration Duration of the timeline video effect which displayed (in microseconds)
   * @param {String} videoFxPackageId The Id of resource package
   * @return {NvsTimelineVideoFx} Return the NvsTimelineVideoFx object
       It will return null in the following situations:
       1. No timeline video effect function authorization, if this is particle effect, may have no particle effect function authorization;
       2. The videoFxPackageId is empty or null;
       3. The videoFxPackage has not install successed;
       4. If inPoint is less than 0 or greater than or equal to the current timeline duration, or duration is not greater than 0.
   * @else
   * @brief 添加包时间线视频特效
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @param {String} videoFxPackageId 视频特效包ID
   * @return {NvsTimelineVideoFx} 返回 NvsTimelineVideoFx 对象
       它会在以下情况下返回 null：
       1. 无时间轴视频效果功能授权，如果是粒子效果，可能没有粒子效果功能授权；
       2. videoFxPackageId 为空或 null；
       3. videoFxPackage 没有安装成功；
       4. 如果 inPoint 小于 0 或大于等于当前时间线持续时间，或者持续时间不大于 0。
   */
    addPackagedTimelineVideoFx(inPoint: number, duration: number, videoFxPackageId: string): NvsTimelineVideoFx;
    /**
   * @if ENGLISH
   * @brief remove Remove a timeline video effect from the timeline.
   * @param {NvsTimelineVideoFx} timelineVideoFx The NvsTimelineVideoFx object which will be removed
   * @return {NvsTimelineVideoFx} Returns the next NvsTimelineVideoFx object of current timeline video effect which has removed.
   * @else
   * @brief 删除时间线视频特效
   * @param {NvsTimelineVideoFx} timelineVideoFx 时间线视频特效
   * @return {NvsTimelineVideoFx} 返回已移除的当前时间线视频特效的下一个 NvsTimelineVideoFx 对象。
   */
    removeTimelineVideoFx(timelineVideoFx: NvsTimelineVideoFx): NvsTimelineVideoFx;
    /**
   * @if ENGLISH
   * @brief Get the id of the current theme.
   * @return {String} Current theme id, if no theme,returns empty string.
   * @else
   * @brief 获取当前主题ID
   * @return {String} 当前主题 id，如果没有主题，则返回空字符串。
   */
    getCurrentThemeId(): string;
    /**
   * @if ENGLISH
   * @brief Apply a theme to the current timeline (the theme is relative to the entire timeline).
      For themes, there may be a title or a trailer, or both of them, or none. When applying a theme with a title or a trailer or both of them are treated as a clip, resulting in an increase in the count of clips. When using this interface, be careful to determine the count of clips.
   * @param {String} themeId Id of theme package(if themeId if empty string or null, will remove current theme)
   * @return {Boolean} Determine if the theme is applied successfully. If YES is returned, the theme is used successfully, and NO means the oppsite.
       It will return NO in the following situations:
       1.No theme function authorization;
       2.The theme package install failed;
       3.No video track on timeline.
   * @else
   * @brief 应用主题
   * @param {String} themeId 主题ID
   * @return {Boolean} 确定主题是否应用成功。如果返回YES，则主题使用成功，NO 表示相反。
       它会在以下情况下返回 NO：
       1.无主题功能授权；
       2.主题包安装失败；
       3.时间线上没有视频轨道。
   */
    applyTheme(themeId: string): boolean;
    /**
   * @if ENGLISH
   * @brief Apply adaptive duration template.
   * @param {String} templateId uuid
   * @return {Boolean} Apply adaptive duration template.
   * @else
   * @brief 应用自适应持续时间模板。
   * @param {String} templateId 唯一标识id
   * @return {Boolean} 应用自适应持续时间模板。
   */
    applyThemeTemplate(templateId: string): boolean;
    /**
   * @if ENGLISH
   * @brief Remove current theme.
   * @return {}
   * @else
   * @brief 删除当前主题
   * @return {}
   */
    removeCurrentTheme(): any;
    /**
   * @if ENGLISH
   * @brief Set the caption text for theme title.
   * @param {String} text The caption text
   * @return {}
   * @else
   * @brief 设置主题标题字幕文本
   * @param {String} text 文本
   * @return {}
   */
    setThemeTitleCaptionText(text: string): any;
    /**
   * @if ENGLISH
   * @brief Set the caption text for theme trailer.
   * @param {String} text Caption text
   * @return {}
   * @else
   * @brief 设置主题预报字幕文本
   * @param {String} text 文本
   * @return {}
   */
    setThemeTrailerCaptionText(text: string): any;
    /**
   * @if ENGLISH
   * @brief Set the volume value for theme music.
   * @param {Number} leftVolumeGain Left channel, value range [0, 8). The suggestion is [0, 3], if it exceeds 3, the sound may break.
   * @param {Number} rightVolumeGain Right channel, value range [0, 8). The suggestion is [0, 3], if it exceeds 3, the sound may break.
   * @return {}
   * @else
   * @brief 设置主题音乐音量增益
   * @param {Number} leftVolumeGain 左音量增益
   * @param {Number} rightVolumeGain 右音量增益
   * @return {}
   */
    setThemeMusicVolumeGain(leftVolumeGain: number, rightVolumeGain: number): any;
    /**
   * @if ENGLISH
   * @brief Get the volume value for theme music.
   * @return {NvsVolume} Returns NvsVolume object.
   * @else
   * @brief 获取主题音乐音量增益
   * @return {NvsVolume} 返回 NvsVolume 对象。
   */
    getThemeMusicVolumeGain(): NvsVolume;
    /**
   * @if ENGLISH
   * @brief set playback rate control
   * @param {NvsVectorVal} playbackRateControlRegions control region of playback rate
   * @return {}
   * @else
   * @brief 设置播放速率控制
   * @param {NvsVectorVal} playbackRateControlRegions 播放速率控制区域
   * @return {}
   */
    setPlaybackRateControl(playbackRateControlRegions: NvsVectorVal): any;
    /**
   * @if ENGLISH
   * @brief Add watermark
   * @param {String} filePath The path of the watermark file must be a .PNG or .JPG or .CAF file.
   * @param {Number} displayWidth The width of the watermark displayed in the timeline. If 0, the width of the image file is used.
   * @param {Number} displayHeight The height of the watermark displayed in the timeline. If 0, the height of the image file is used.
   * @param {Number} opacity Watermark opacity, the range is [0,1]
   * @param {Number} position The position of the watermark
   * @param {Number} marginX The margin of the watermark in the horizontal direction
   * @param {Number} marginY The margin of the watermark in the vertical direction
   * @return {}
   * @else
   * @brief 添加水印
   * @param {String} filePath 水印文件的路径必须是 .PNG 或 .JPG 或 .CAF 文件。
   * @param {Number} displayWidth 时间线中显示的水印宽度。如果为 0，则使用图像文件的宽度。
   * @param {Number} displayHeight 时间线中显示的水印高度。如果为 0，则使用图像文件的高度。
   * @param {Number} opacity 水印不透明度，范围为[0,1]
   * @param {Number} position 水印的位置
   * @param {Number} marginX 水印在水平方向的边距
   * @param {Number} marginY 水印在垂直方向的边距
   * @return {}
   */
    addWatermark(filePath: string, displayWidth: number, displayHeight: number, opacity: number, position: number, marginX: number, marginY: number): any;
    /**
   * @if ENGLISH
   * @brief add watermark
   * @param {Number} sceneWidth
   * @param {Number} sceneHeight
   * @param {String} imageName
   * @param {Number} imgWidth
   * @param {Number} imgHeight
   * @param {Number} tx
   * @param {Number} ty
   * @param {String} dirPath
   * @param {Number} opacity
   * @return {}
   * @else
   * @brief 添加水印
   * @param {Number} sceneWidth
   * @param {Number} sceneHeight
   * @param {String} imageName
   * @param {Number} imgWidth
   * @param {Number} imgHeight
   * @param {Number} tx
   * @param {Number} ty
   * @param {String} dirPath
   * @param {Number} opacity
   * @return {}
   */
    addWatermark2(sceneWidth: number, sceneHeight: number, imageName: string, imgWidth: number, imgHeight: number, tx: number, ty: number, dirPath: string, opacity: number): any;
    /**
   * @if ENGLISH
   * @brief Delete watermark which has added.
   * @return {}
   * @else
   * @brief 删除水印
   * @return {}
   */
    deleteWatermark(): any;
    /**
   * @if ENGLISH
   * @brief Set watermark opacity.
   * @param {Number} opacity Set watermark opacity.
   * @return {Boolean} The opacity, the range is [0,1]
   * @else
   * @brief 设置水印透明度
   * @param {Number} opacity 不透明度
   * @return {Boolean} 不透明度，范围是[0,1]
   */
    setWatermarkOpacity(opacity: number): boolean;
    /**
   * @if ENGLISH
   * @brief get watermark information
   * @return {NvsWatermarkInfo}
   * @else
   * @brief 获取水印信息
   * @return {NvsWatermarkInfo}
   */
    getWatermarkInfo(): NvsWatermarkInfo;
    /**
   * @if ENGLISH
   * @brief set max audio stream of video track supported
   * @param {Number} maxStream max count of stream
   * @return {}
   * @else
   * @brief 设置视频轨道支持的最大音频流
   * @param {Number} maxStream 最大流数量
   * @return {}
   */
    setMaxAudioStreamSupportedOnVideoTrack(maxStream: number): any;
    /**
   * @if ENGLISH
   * @brief get max audio stream of video track supported
   * @return {Number}
   * @else
   * @brief 获得视频轨道支持的最大音频流
   * @return {Number}
   */
    getMaxAudioStreamSupportedOnVideoTrack(): number;
    /**
   * @if ENGLISH
   * @brief Turn on use the Z value as the render order. Note: there are timeline caption, compound caption, module captions, animation stickers and timeline filters If the Z value in the same type is the same, it is the same as the sorting method in which the property is not enabled If the Z values of different types are the same, the order is: timeline Filter > Animation sticker > timeline caption (including module caption) > compound caption.
   * @param {Boolean} enable Enable or not
   * @return {}
   * @else
   * @brief 使用 Z 值作为渲染顺序。注意：有时间轴字幕、复合字幕、模块字幕、动画贴纸和时间轴过滤器 如果同一类型的 Z 值相同，则与未启用该属性的排序方法相同 如果 Z 值的不同类型相同，顺序为：时间线滤镜>动画贴纸>时间线标题（包括模块标题）>复合标题。
   * @param {Boolean} enable 启用与否
   * @return {}
   */
    enableRenderOrderByZValue(enable: boolean): any;
    /**
   * @if ENGLISH
   * @brief Whether to turn on use Z value as the rendering order.
   * @return {Boolean} Returns True means has turn on, otherwise not
   * @else
   * @brief 是否开启使用 Z 值作为渲染顺序。
   * @return {Boolean} 返回 True 表示已开启，否则不开启
   */
    isRenderOrderByZValueEnabled(): boolean;
    /**
   * @if ENGLISH
   * @brief Sets the volume.
   * @param {Number} leftVolumeGain Left volume value
   * @param {Number} rightVolumeGain Right volume value
   * @return {}
   * @else
   * @brief 设置音量。
   * @param {Number} leftVolumeGain 左声道音量增益
   * @param {Number} rightVolumeGain 右声道音量增益
   * @return {}
   */
    setVolumeGain(leftVolumeGain: number, rightVolumeGain: number): any;
    /**
   * @if ENGLISH
   * @brief Get the volume information.
   * @return {NvsVolume} Returns the volume object.
   * @else
   * @brief 获取音量信息。
   * @return {NvsVolume} 返回音量增益对象。
   */
    getVolumeGain(): NvsVolume;
    /**
   * @if ENGLISH
   * @brief Get the creation flags of timeline.
   * @return {Number} Returns flags.
   * @else
   * @brief 获取时间线标识。
   * @return {Number} 时间线标识。
   */
    getCreationFlags(): number;
    /**
   * @if ENGLISH
   * @brief Get the bounding vertices of all captions at timeline position.
   * @param {NvsCaptionTextBoundingTypeEnum} boundingType Bounding type
   * @param {Number} timelinePosition Timeline position
   * @return {NvsVectorVal<NvsCaptionBoundingVerticesInfo>} A std::vector of NvsCaptionBoundingVerticesInfo
   * @else
   * @brief 获取时间线某一位置所有字幕边框的顶点位置信息。
   * @param {NvsCaptionTextBoundingTypeEnum} boundingType 边框类型
   * @param {Number} timelinePosition 时间线位置
   * @return {NvsVectorVal<NvsCaptionBoundingVerticesInfo>} NvsCaptionBoundingVerticesInfo信息的集合。
   */
    getCaptionsBoundingVerticesRecursively(boundingType: Readonly<{
        Text: 0;
        TextFrame: 1;
        Frame: 2;
        TextOriginFrame: 3;
    }>, timelinePosition: number): NvsVectorVal<NvsCaptionBoundingVerticesInfo>;
    /**
    * @if ENGLISH
    * @brief Get the bounding vertices of all video clips at timeline position.
    * @param {Number} timelinePosition Timeline position
    * @return {NvsVectorVal<NvsClipBoundingVerticesInfo>} A std::vector of NvsClipBoundingVerticesInfo
    * @else
    * @brief 获取时间线某一位置所有字幕边框的顶点位置信息。
    * @param {Number} timelinePosition 时间线位置
    * @return {NvsVectorVal<NvsClipBoundingVerticesInfo>} NvsClipBoundingVerticesInfo信息的集合。
    */
    getVideoClipBoundingVerticesRecursively(timelinePosition: number): NvsVectorVal<NvsClipBoundingVerticesInfo>;
}
/**
 *  @if ENGLISH
 *  @brief Track class: track, a structure that holds segments. Tracks can be regarded as a collection of clips, which are divided into audio track and video track. After you create a timeline instance, you can add or remove multiple tracks. On each track, you can add multiple video and audio clips to edit, set the volume of the clips, or remove and move the position.
 *  @see NvsProjObj
 *  @else
 *  @brief 轨道类：轨道，容纳片段的结构。轨道可视作片段的集合,分为音频轨道(Audio Track)和视频轨道(Video Track)。创建时间线实例后，可添加或移除多条轨道。在每一条轨道上，可以添加多个要编辑的视音频片段，并对片段进行音量设置，也可以进行移除和位置移动。
 *  @see NvsProjObj
 *  @endif
 */
declare class NvsTrack extends NvsProjObj {
    /**
   *  @if ENGLISH
   *  @brief Get track type.
   *  @return {NvsTrackTypeEnum} Returns track type.
   *  @else
   *  @brief 获取类型
   *  @return {NvsTrackTypeEnum} 返回轨道类型。
   *  @endif
   */
    getType(): Readonly<{
        Video: 0;
        Audio: 1;
    }>;
    /**
   *  @if ENGLISH
   *  @brief Gets track index.
   *  @return {Number} Returns track index.
   *  @else
   *  @brief 获取轨道索引
   *  @return {Number} 返回轨道索引。
   *  @endif
   */
    getIndex(): number;
    /**
   * @if ENGLISH
   * @brief Gets track length.
   * @return {Number} Returns the length of the track (in microseconds).
   * @else
   * @brief 获取时长
   * @return {Number} 返回轨道的长度（以微秒为单位）。
   * @endif
   */
    getDuration(): number;
    /**
   * @if ENGLISH
   * @brief Gets the number of clips on the track.
   * @return {Number} Returns the number of clips on the track.
   * @else
   * @brief 获取片段数量
   * @return {Number} 返回轨道上的剪辑数量。
   * @endif
   */
    getClipCount(): number;
    /**
   * @if ENGLISH
   * @brief Modifies the clip's in-point on timeline.If clip does not have this function authorization to return the current InPoint. If newInPoint is less than the outPoint of the previous clip, return the outPoint of the previous clip directly. If the current clip is the 0th clip, newInPoint is at least 0. This function internally calculates a new trimIn based on newInPoint and modifies the trimIn of the clip. If the new trimIn is less than 0, the corresponding Inpoint value when the trimIn is 0 will be returned; if the newInPoint is greater than trimOut, the corresponding Inpoint value of trimOut-1 will be returned.
   * @param {Number} clipIndex Clip Index.
   * @param {Number} newInPoint The new in-point value on the timeline (in microseconds).
   * @return {Number} Returns the in-point (in microseconds) on the actual reachable timeline. Note: The in-point range on the actual achievable timeline is within the open interval of the timeline out-point of the previous clip and the timeline out-point of the clip.
   * @else
   * @brief 改变入点
   * @param {Number} clipIndex 片段索引
   * @param {Number} newInPoint 新的入点
   * @return {Number} 返回实际可达时间线上的入点（以微秒为单位）。注意：实际可实现时间线上的入点范围在前一个片段的时间线出点与该片段的时间线出点的开区间内。
   * @endif
   */
    changeInPoint(clipIndex: number, newInPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Modifies the clip's out-point on timeline.If clip does not have this function authorization to return the current outPoint.If newOutpoint is less than the outPoint of the clip, then newOutpoint will not be less than inpoint+1; if the clip is followed by nextclip, then newOutpoint will not be greater than the inpoint of nextclip. If the current clip is the last clip, the final outPoint is the duration of the timeline. If newOutpoint is greater than the outPoint of the clip, then the end of the video will be FreezeFrame. This function internally calculates a new trimOut based on newOutPoint, and removes the intermediate transition if the inPoint of the clip is not equal to the outPoint of the next clip.
   * @param {Number} clipIndex Clip Index.
   * @param {Number} newOutPoint The new out-point on the timeline (in microseconds).
   * @return {Number} Returns the out-point (in microseconds) on the actual reachable timeline. Note: The out-point range on the actual achievable timeline is within the open interval of the timeline in-point of the clip and the next out-point of the clip.
   * @else
   * @brief 改变出点
   * @param {Number} clipIndex 片段索引
   * @param {Number} newOutPoint 新的出点
   * @return {Number} 返回实际可达时间线上的出点（以微秒为单位）。注意：实际可实现时间线上的出点范围在剪辑的时间线入点和剪辑的下一个出点的开区间内。
   * @endif
   */
    changeOutPoint(clipIndex: number, newOutPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Splits the specified clip.
   * @param {Number} clipIndex Clip index.
   * @param {Number} splitPoint Splitting point (in microseconds).The value range is (clip.inpoint, clip.outpoint)，Exceeding the value range will cause the cut to fail. Splitting a clip, that is, an operation of dividing a clip of a specified index value into two clips, the index value of the clip on the corresponding track is also changed accordingly.
   * @return {Boolean} Determine whether the split is successful, YES is successful for splitting,NO is unsuccessful.
   * @else
   * @brief 分割片段
   * @param {Number} clipIndex 片段索引
   * @param {Number} splitPoint 分割点
   * @return {Boolean} 判断是否拆分成功，YES为拆分成功，NO为不成功。
   * @endif
   */
    splitClip(clipIndex: number, splitPoint: number): boolean;
    /**
   * @if ENGLISH
   * @brief Removes the specified clip.You are not allowed to remove the opening and ending of a theme.
   * @param {Number} clipIndex Clip index.
   * @param {Boolean} keepSpace Whether the clip's space on the track is preserved after the clip is removed. A value of true is reserved, and a value of false is not retained.
   * @return {Boolean} Determine if the removal is successful. Returning YES will remove the success and NO will fail.
   * @else
   * @brief 删除片段
   * @param {Number} clipIndex 片段索引
   * @param {Boolean} keepSpace 保留空间
   * @return {Boolean} 确定删除是否成功。返回 YES 将删除成功，NO 将失败。
   * @endif
   */
    removeClip(clipIndex: number, keepSpace: boolean): boolean;
    /**
   * @if ENGLISH
   * @brief Removes all clips within the specified interval, and adjust the timeline in-point or out-point if the clip only partially overlaps the interval., and adjust the timeline in or out point if the clip only partially overlaps the interval.Failed to remove the fragment if it contains the opening and ending sections of the theme.StartTimeLinepos < 0 or endTimeLinepos <= startTimeLinepos will also remove failure.
   * @param {Number} startTimelinePos Start timeline position of the interval (in microseconds).
   * @param {Number} endTimelinePos End timeline position of the interval (in microseconds).
   * @param {Boolean} keepSpace After the clip in the interval is removed, whether the space on the track occupied by the interval is reserved. A value of true is reserved, and a value of false is not retained.
   * @return {Boolean} Whether the removal was successful or not. True means the removal is successful and false the opposite.
   * @else
   * @brief 删除区间
   * @param {Number} startTimelinePos 开始点在时间线上的位置
   * @param {Number} endTimelinePos 结束点在时间线上的位置
   * @param {Boolean} keepSpace 保留空间
   * @return {Boolean} 删除是否成功。 True 表示删除成功，而 false 则相反。
   * @endif
   */
    removeRange(startTimelinePos: number, endTimelinePos: number, keepSpace: boolean): boolean;
    /**
   * @if ENGLISH
   * @brief Moving the specified clip, swapping the two positions of the input, affects the arrangement of the clip on the timeline.,clipIndex and destClipIndex cannot be equal to clipCount.
   * @param {Number} sourceClipIndex The clip index that needs to be moved
   * @param {Number} targetClipIndex Target index of th clip move to.
   * @return {Boolean} Returns whether the move operation was successful
   * @else
   * @brief 移动片段
   * @param {Number} sourceClipIndex 源片段索引
   * @param {Number} targetClipIndex 目标片段索引
   * @return {Boolean} 返回移动操作是否成功
   * @endif
   */
    moveClip(sourceClipIndex: number, targetClipIndex: number): boolean;
    /**
   * @if ENGLISH
   * @brief Moves the specified clip to the input position.. clipIndex greater than or equal to clipCount will fail to remove, targetTimeLinePos equal to 0 will be moved to the 0 position, the theme title title will not be moved.
   * @param {Number} sourceClipIndex The clip index that need to be moved.
   * @param {Number} targetTimelinePos The timeline position to which the clip is moved, in microseconds.
   * @param {Boolean} isInsertTarget Whether to move the clip as an insert,False means use overridden.
   * @param {Boolean} keepSpace Whether to preserve space during clip movement,The reserved space is the black clip.
   * @return {Boolean} Returns whether the move operation was successful.
   * @else
   * @brief 根据位置，移动片段
   * @param {Number} sourceClipIndex 源片段索引
   * @param {Number} targetTimelinePos 目标时间线位置
   * @param {Boolean} isInsertTarget 是否是插入目标
   * @param {Boolean} keepSpace 保留空间
   * @return {Boolean} 返回移动操作是否成功。
   * @endif
   */
    moveClipByPositions(sourceClipIndex: number, targetTimelinePos: number, isInsertTarget: boolean, keepSpace: boolean): boolean;
    /**
   * @if ENGLISH
   * @brief Removes all the clips.
   * @return {Boolean} Determine if the removal is successful. True means the removal is successful and false the opposite.
   * @else
   * @brief 删除所有片段
   * @return {Boolean} 确定删除是否成功。 True 表示删除成功，而 false 则相反。
   * @endif
   */
    removeAllClips(): boolean;
    /**
   * @if ENGLISH
   * @brief Sets the volume. The final volume value is the track volume Multiplied by the clip volume.
   * @param {Number} leftVolumeGain Set the left channel of the volume, in the range [0, 4).
   * @param {Number} rightVolumeGain Set the right channel of the volume, in the range [0, 4).
   * @return {Boolean}
   * @else
   * @brief 设置音量增益
   * @param {Number} leftVolumeGain 左声道增益
   * @param {Number} rightVolumeGain 右声道增益
   * @return {Boolean}
   * @endif
   */
    setVolumeGain(leftVolumeGain: number, rightVolumeGain: number): boolean;
    /**
   * @if ENGLISH
   * @brief Get the volume information. The final volume value is the track volume Multiplied by the clip volume.
   * @return {NvsVolume} Returns the volume object.
   * @else
   * @brief 获取音量增益
   * @return {NvsVolume} 返回音量对象。
   * @endif
   */
    getVolumeGain(): NvsVolume;
}
/**
  * @if ENGLISH
  * @brief Video track,the collection of video clips.
  A video track is an entity that holds video clips, and users can add, insert, and delete multiple video clips. The video track continues to expand as the clip increases, and video transitions can be inserted between clips. When adding a package transition, users need to install it and get the packageID returned as the handle of the transition. For built-in transition, their names are regarded as handle. Note: The index of the video clip starts from 0.
  * @else
  * @brief 视频轨道类：视频片段的集合。视频轨道是容纳视频片段的实体，可以添加、插入、删移多个视频片段。视频轨道随着片段的增加不断延展，而片段与片段之间可进行视频转场设置。 添加包裹转场时，都得先安装，安装成功后获取packageId才能使用，而内建转场(builtin)只需获取转场名称即可使用。 注：视频片段的索引都是从0开始。
  * @endif
  */
declare class NvsVideoTrack extends NvsTrack {
    /**
   * @if ENGLISH
   * @brief Inserts a video clip at the specified clip index on the video track.
   * @param {String} videoFilePath Video clip path.
   * @param {Number} clipIndex Index of the inserted clip.
   * @return {NvsVideoClip} Returns the inserted video clip object. Function insertClip() inserts a clip right before the one indexed by clipIndex.
   * @else
   * @brief 插入片段
   * @param {String} videoFilePath 视频文件路径
   * @param {Number} clipIndex 插入后片段的索引
   * @return {NvsVideoClip} 返回插入的视频剪辑对象。函数insertClip() 在由 clipIndex 索引的剪辑之前插入一个剪辑。
   * @endif
   */
    insertClip(videoFilePath: string, clipIndex: number): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Inserts a video clip of the specified length at the specified clip index on the video track.
   * @param {String} videoFilePath 	Video clip path.
   * @param {Number} trimIn Trim in point of video clips (in microseconds)
   * @param {Number} trimOut Trim out point of video clips (in microseconds)）
   * @param {Number} clipIndex insert point
   * @return {NvsVideoClip} Returns the inserted video clip object.
   * @else
   * @brief 插入片段
   * @param {String} videoFilePath 视频文件路径
   * @param {Number} trimIn 修剪入点
   * @param {Number} trimOut 修剪出点
   * @param {Number} clipIndex 插入后片段的索引
   * @return {NvsVideoClip} 返回插入的视频剪辑对象。
   * @endif
   */
    insertClip2(videoFilePath: string, trimIn: number, trimOut: number, clipIndex: number): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Appends a video clip to the end of the video track.
   * @param {String} videoFilePath Video clip path.
   * @return {NvsVideoClip} Returns the appended video clip object.
   * @else
   * @brief 追加片段
   * @param {String} videoFilePath 视频文件路径
   * @return {NvsVideoClip} 返回附加的视频剪辑对象。
   * @endif
   */
    appendClip(videoFilePath: string): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Appends a video clip of the specified length to the end of the video track.
   * @param {String} videoFilePath Video clip path.
   * @param {Number} trimIn Trim in point of video clips (in microseconds).
   * @param {Number} trimOut Trim out point of video clips (in microseconds).
   * @return {NvsVideoClip} Returns the appended video clip object.
   * @else
   * @brief 追加片段
   * @param {String} videoFilePath 视频文件路径
   * @param {Number} trimIn 修剪入点
   * @param {Number} trimOut 修剪出点
   * @return {NvsVideoClip} 返回附加的视频剪辑对象。
   * @endif
   */
    appendClip2(videoFilePath: string, trimIn: number, trimOut: number): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Adds a video clip at the specified position on the video track.
   * @param {String} videoFilePath Video clip path.
   * @param {Number} inPoint In point.
   * @return {NvsVideoClip} Returns the appended video clip object.
   * @else
   * @brief 添加片段
   * @param {String} videoFilePath 视频文件路径
   * @param {Number} inPoint 入点
   * @return {NvsVideoClip} 返回附加的视频剪辑对象。
   * @endif
   */
    addClip(videoFilePath: string, inPoint: number): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Adds a video clip of the specified length at the specified position on the video track.
   * @param {String} videoFilePath Clip path.
   * @param {Number} inPoint The in point of the clip on the timeline (in microseconds).
   * @param {Number} trimIn clip trim in point (in microseconds).
   * @param {Number} trimOut clip trim out point (in microseconds).
   * @return {NvsVideoClip} Returns the added video clip object. When users use addClip() to add clips, the clip to be added will split the current clip at the specified in point on the timeline. In the specified in point, the clips contained in the position corresponding to the length of the clip to be added on the track will be deleted. Then the clips to be added can be added. If there is a gap in the corresponding position, it will be covered directly.
   * @else
   * @brief 添加片段
   * @param {String} videoFilePath 视频文件路径
   * @param {Number} inPoint 入点
   * @param {Number} trimIn 修剪入点
   * @param {Number} trimOut 修剪出点
   * @return {NvsVideoClip} 返回添加的视频剪辑对象。当用户使用 addClip() 添加剪辑时，要添加的剪辑将在时间轴上的指定入点处分割当前剪辑。在指定的入点处，将删除轨道上要添加的剪辑长度对应的位置所包含的剪辑。然后可以添加要添加的剪辑。如果对应位置有缝隙，直接覆盖。
   * @endif
   */
    addClip2(videoFilePath: string, inPoint: number, trimIn: number, trimOut: number): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Add clip with speed
   * @deprecated
   * @param {String} videoFilePath video file path
   * @param {Number} inPoint in point
   * @param {Number} speed speed
   * @param {Boolean} keepAudioPitch keep audio pitch
   * @return {NvsVideoClip}
   * @else
   * @brief 添加速度片段
   * @deprecated
   * @param {String} videoFilePath 视频文件路径
   * @param {Number} inPoint 修剪入点
   * @param {Number} speed 速度
   * @param {Boolean} keepAudioPitch 保持音频音调
   * @return {NvsVideoClip}
   * @endif
   */
    addClipWithSpeed(videoFilePath: string, inPoint: number, speed: number, keepAudioPitch: boolean): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Add clip with speed
   * @deprecated
   * @param {String} videoFilePath video file path
   * @param {Number} inPoint in point
   * @param {Number} trimIn trim in
   * @param {Number} trimOut trim out
   * @param {Number} speed speed
   * @param {Boolean} keepAudioPitch keep audio pitch
   * @return {NvsVideoClip}
   * @else
   * @brief 添加速度片段
   * @deprecated
   * @param {String} videoFilePath 视频文件路径
   * @param {Number} inPoint 入点
   * @param {Number} trimIn 修剪入点
   * @param {Number} trimOut 修剪出点
   * @param {Number} speed 速度
   * @param {Boolean} keepAudioPitch 保持音频音调
   * @return {NvsVideoClip}
   * @endif
   */
    addClipWithSpeed2(videoFilePath: string, inPoint: number, trimIn: number, trimOut: number, speed: number, keepAudioPitch: boolean): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Add clip with speed
   * @param {String} videoFilePath video file path
   * @param {Number} inPoint in point
   * @param {Number} outPoint out point
   * @param {Number} speed speed
   * @param {Boolean} keepAudioPitch keep audio pitch
   * @return {NvsVideoClip}
   * @else
   * @brief 添加速度片段
   * @param {String} videoFilePath 视频文件路径
   * @param {Number} inPoint 入点
   * @param {Number} outPoint 出点
   * @param {Number} speed 速度
   * @param {Boolean} keepAudioPitch 保持音频音调
   * @return {NvsVideoClip}
   * @endif
   */
    addClipWithSpeedExt(videoFilePath: string, inPoint: number, outPoint: number, speed: number, keepAudioPitch: boolean): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Add clip with speed
   * @param {String} videoFilePath video file path
   * @param {Number} inPoint in point
   * @param {Number} outPoint out point
   * @param {Number} trimIn trim in
   * @param {Number} trimOut trim out
   * @param {Number} speed speed
   * @param {Boolean} keepAudioPitch keep audio pitch
   * @return {NvsVideoClip}
   * @else
   * @brief 添加速度片段
   * @param {String} videoFilePath 视频文件路径
   * @param {Number} inPoint 入点
   * @param {Number} outPoint 出点
   * @param {Number} trimIn 修剪入点
   * @param {Number} trimOut 修剪出点
   * @param {Number} speed 速度
   * @param {Boolean} keepAudioPitch 保持音频音调
   * @return {NvsVideoClip}
   * @endif
   */
    addClipWithSpeedExt2(videoFilePath: string, inPoint: number, outPoint: number, trimIn: number, trimOut: number, speed: number, keepAudioPitch: boolean): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Inserts a timeline clip at the specified clip index on the video track.
   * @param {NvsTimeline} timeline Timeline.
   * @param {Number} clipIndex Index of the inserted clip.
   * @return {NvsVideoClip} Returns the inserted video clip object. Function insertTimelineClip() inserts a clip right before the one indexed by clipIndex.
   * @else
   * @brief 在视频轨道上指定片段索引处插入时间线片段
   * @param {NvsTimeline} timeline 时间线
   * @param {Number} clipIndex 插入后片段的索引
   * @return {NvsVideoClip} 返回插入的视频剪辑对象。函数insertTimelineClip()在由clipIndex索引的剪辑之前插入一个剪辑。
   * @endif
   */
    insertTimelineClip(timeline: NvsTimeline, clipIndex: number): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Inserts a timeline clip of the specified length at the specified clip index on the video track.
   * @param {NvsTimeline} timeline Timeline.
   * @param {Number} trimIn Trim in
   * @param {Number} trimOut Trim out
   * @param {Number} clipIndex Index of the inserted clip.
   * @return {NvsVideoClip} Returns the inserted video clip object. Function insertTimelineClip2() inserts a clip right before the one indexed by clipIndex.
   * @else
   * @brief 在视频轨道上指定片段索引处插入指定长度的时间线片段
   * @param {NvsTimeline} timeline 时间线
   * @param {Number} trimIn 修剪入点
   * @param {Number} trimOut 修剪出点
   * @param {Number} clipIndex 插入后片段的索引
   * @return {NvsVideoClip} 返回插入的视频剪辑对象。函数insertTimelineClip2() 在由 clipIndex 索引的剪辑之前插入一个剪辑。
   * @endif
   */
    insertTimelineClip2(timeline: NvsTimeline, trimIn: number, trimOut: number, clipIndex: number): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Adds a timeline clip at the specified position on the video track.
   * @param {NvsTimeline} timeline Timeline.
   * @param {Number} inPoint In point.
   * @return {NvsVideoClip} Returns the appended video clip object.
   * @else
   * @brief 添加时间线片段
   * @param {NvsTimeline} timeline 时间线
   * @param {Number} inPoint 入点
   * @return {NvsVideoClip} 返回添加的视频剪辑对象。当用户使用 addTimelineClip() 添加剪辑时，要添加的剪辑将在时间轴上的指定入点处分割当前剪辑。在指定的入点处，将删除轨道上要添加的剪辑长度对应的位置所包含的剪辑。然后可以添加要添加的剪辑。如果对应位置有缝隙，直接覆盖。
   * @endif
   */
    addTimelineClip(timeline: NvsTimeline, inPoint: number): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Adds a timeline clip of the specified length at the specified position on the video track.
   * @param {NvsTimeline} timeline Timeline.
   * @param {Number} inPoint The in point of the clip on the timeline (in microseconds).
   * @param {Number} trimIn clip trim in point (in microseconds).
   * @param {Number} trimOut clip trim out point (in microseconds).
   * @return {NvsVideoClip} Returns the added video clip object. When users use addClip() to add clips, the clip to be added will split the current clip at the specified in point on the timeline. In the specified in point, the clips contained in the position corresponding to the length of the clip to be added on the track will be deleted. Then the clips to be added can be added. If there is a gap in the corresponding position, it will be covered directly.
   * @else
   * @brief 添加指定长度的时间线片段
   * @param {NvsTimeline} timeline 时间线
   * @param {Number} inPoint 入点
   * @param {Number} trimIn 修剪入点
   * @param {Number} trimOut 修剪出点
   * @return {NvsVideoClip} 返回添加的视频剪辑对象。当用户使用 addTimelineClip2() 添加剪辑时，要添加的剪辑将在时间轴上的指定入点处分割当前剪辑。在指定的入点处，将删除轨道上要添加的剪辑长度对应的位置所包含的剪辑。然后可以添加要添加的剪辑。如果对应位置有缝隙，直接覆盖。
   * @endif
   */
    addTimelineClip2(timeline: NvsTimeline, inPoint: number, trimIn: number, trimOut: number): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Get clip by index.
   * @param {Number} index Video clip index. Clip index value range: NvsVideoTrack m_videoTrack;//m_videoTrack omitted creation int clipCount = m_videoTrack.getClipCount(); The value of clipIndex is [0, clipCount-1]
   * @return {NvsVideoClip} Returns the captured video clip object.
   * @else
   * @brief 根据索引获取片段
   * @param {Number} index 索引
   * @return {NvsVideoClip} 返回捕获的视频剪辑对象。
   * @endif
   */
    getClipByIndex(index: number): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Gets video clip by index.
   * @param {Number} timelinePos Position on the timeline (in microseconds).
   * @return {NvsVideoClip} Returns the captured video clip object.
   * @else
   * @brief 根据时间线位置获取片段
   * @param {Number} timelinePos 时间线位置
   * @return {NvsVideoClip} 返回捕获的视频剪辑对象。
   * @endif
   */
    getClipByTimelinePosition(timelinePos: number): NvsVideoClip;
    /**
   * @if ENGLISH
   * @brief Sets built-in transitions.
   * @param {Number} srcClipIndex Source video clip index.
   * @param {String} transitionName The name of the transition.
   * @return {NvsVideoTransition} Returns the video transition object. If the transitionName is set to a null string (namely, to delete the original transition), return null.
   * @else
   * @brief 设置内置转场
   * @param {Number} srcClipIndex 源片段索引
   * @param {String} transitionName 转场名字
   * @return {NvsVideoTransition} 返回视频过渡对象。如果transitionName设置为空字符串（即删除原来的transition），返回null。
   * @endif
   */
    setBuiltinTransition(srcClipIndex: number, transitionName: string): NvsVideoTransition;
    /**
   * @if ENGLISH
   * @brief Set packaged transition
   * @param {Number} srcClipIndex Source video clip index.
   * @param {String} packageId Transition resource package ID. If the package Id is null, the transition at the video clip is deleted; if the package Id is set to "theme", the transition at the video clip is set to the one of the current theme. If there is no theme, the transition at the video clip should be deleted.
   * @return {NvsVideoTransition} Returns the video transition object.
   * @else
   * @brief 设置包转场
   * @param {Number} srcClipIndex 源片段索引
   * @param {String} packageId 包ID
   * @return {NvsVideoTransition} 返回视频过渡对象。
   * @endif
   */
    setPackagedTransition(srcClipIndex: number, packageId: string): NvsVideoTransition;
    /**
   * @if ENGLISH
   * @brief Get the transition through the source video clip index.
   * @param {Number} srcClipIndex Source video clip index.
   * @return {NvsVideoTransition} Returns the obtained video transition object.
   * @else
   * @brief 根据源片段索引获取转场
   * @param {Number} srcClipIndex 源片段索引
   * @return {NvsVideoTransition} 返回获取到的视频转场对象。
   * @endif
   */
    getTransitionBySourceClipIndex(srcClipIndex: number): NvsVideoTransition;
    /**
   * @if ENGLISH
   * @brief set available in theme
   * @param {Boolean} available available or not
   * @return {Boolean}
   * @else
   * @brief 设置在主题中可用
   * @param {Boolean} available 可用性
   * @return {Boolean}
   * @endif
   */
    setAvailableInTheme(available: boolean): boolean;
    /**
   * @if ENGLISH
   * @brief available in theme or not
   * @return {Boolean}
   * @else
   * @brief 是否在主题中可用
   * @return {Boolean}
   * @endif
   */
    isAvailableInTheme(): boolean;
    /**
   * @if ENGLISH
   * @brief Get the first track video effect on the track.
   * @return {NvsTrackVideoFx} Returns the acquired NvsTrackVideoFx object.
   * @else
   * @brief 获取轨道上的第一个轨道视频效果。
   * @return {NvsTrackVideoFx} 返回获取的 NvsTrackVideoFx 对象。
   * @endif
   */
    getFirstTrackVideoFx(): NvsTrackVideoFx;
    /**
   * @if ENGLISH
   * @brief Get the last track video effect on the track.
   * @return {NvsTrackVideoFx} Returns the acquired NvsTrackVideoFx object.
   * @else
   * @brief 获取轨道上的最后一轨视频效果。
   * @return {NvsTrackVideoFx} 返回获取的 NvsTrackVideoFx 对象。
   * @endif
   */
    getLastTrackVideoFx(): NvsTrackVideoFx;
    /**
   * @if ENGLISH
   * @brief Get the previous track video effect of a track video effect on the track.
   * @param {NvsTrackVideoFx} trackVideoFx The NvsTrackVideoFx object
   * @return {NvsTrackVideoFx} Returns the acquired NvsTrackVideoFx object.
   * @else
   * @brief 获取轨道上一个轨道视频效果的上一个轨道视频效果。
   * @param {NvsTrackVideoFx} trackVideoFx NvsTrackVideoFx 对象
   * @return {NvsTrackVideoFx} 返回获取的 NvsTrackVideoFx 对象。
   * @endif
   */
    getPrevTrackVideoFx(trackVideoFx: NvsTrackVideoFx): NvsTrackVideoFx;
    /**
   * @if ENGLISH
   * @brief Get the next track video effect of a track video effect on the track.
   * @param {NvsTrackVideoFx} trackVideoFx The NvsTrackVideoFx object
   * @return {NvsTrackVideoFx} Returns the acquired NvsTrackVideoFx object.
   * @else
   * @brief 获取轨道上一个轨道视频效果的下一个轨道视频效果。
   * @param {NvsTrackVideoFx} trackVideoFx NvsTrackVideoFx 对象
   * @return {NvsTrackVideoFx} 返回获取的 NvsTrackVideoFx 对象。
   * @endif
   */
    getNextTrackVideoFx(trackVideoFx: NvsTrackVideoFx): NvsTrackVideoFx;
    /**
   * @if ENGLISH
   * @brief Get a list of track video effects based on position on the track.
   * @param {Number} pos The position on the track (in microseconds)
   * @return {NvsVectorVal<NvsTrackVideoFx>} Returns an list of track video effects in current position.
       The ordering rules for the acquired track video effects are as follows:
       1.When adding, the in points are different, arranged in the order of the in points;
       2.When adding, the entry points are the same, arranged in the order of adding track video effects.
   * @else
   * @brief 根据轨道上的位置获取轨道视频效果列表。
   * @param {Number} pos 轨道上的位置（以微秒为单位）
   * @return {NvsVectorVal<NvsTrackVideoFx>} 返回当前位置的轨道视频效果列表。
       获取的轨道视频效果排序规则如下：
       1.添加时，入点不同，按入点顺序排列；
       2.添加时，入口点相同，按照添加轨道视频效果的顺序排列。
   * @endif
   */
    getTrackVideoFxByPosition(pos: number): NvsVectorVal<NvsTrackVideoFx>;
    /**
   * @if ENGLISH
   * @brief Add a built-in track video effect on the track.
   * @param {Number} inPoint The in point of the track video effect on the track (in microseconds)
   * @param {Number} duration Duration of the track video effect which displayed (in microseconds)
   * @param {String} videoFxName  The video effect name
   * @return {NvsTrackVideoFx} Return the NvsTrackVideoFx object
   * @else
   * @brief 添加一个内置的轨道视频效果
   * @param {Number} inPoint 轨道上轨道视频效果的入点（以微秒为单位）
   * @param {Number} duration 显示的轨道视频效果的持续时间（以微秒为单位）
   * @param {String} videoFxName  视频效果名称
   * @return {NvsTrackVideoFx} 返回 NvsTrackVideoFx 对象
   * @endif
   */
    addBuiltinTrackVideoFx(inPoint: number, duration: number, videoFxName: string): NvsTrackVideoFx;
    /**
   * @if ENGLISH
   * @brief Add a track video effect in the form of a resource package on the track.
   * @param {Number} inPoint The in point of the track video effect on the track (in microseconds)
   * @param {Number} duration Duration of the track video effect which displayed (in microseconds)
   * @param {String} videoFxPackageId  The Id of resource package
   * @return {NvsTrackVideoFx} Return the NvsTrackVideoFx object
   * @else
   * @brief 在轨道上以资源包的形式添加轨道视频效果。
   * @param {Number} inPoint 轨道上轨道视频效果的入点（以微秒为单位）
   * @param {Number} duration 显示的轨道视频效果的持续时间（以微秒为单位）
   * @param {String} videoFxPackageId  资源包ID
   * @return {NvsTrackVideoFx} 返回 NvsTrackVideoFx 对象
   * @endif
   */
    addPackagedTrackVideoFx(inPoint: number, duration: number, videoFxPackageId: string): NvsTrackVideoFx;
    /**
   * @if ENGLISH
   * @brief Remove a track video effect from the track.
   * @param {NvsTrackVideoFx} trackVideoFx The NvsTrackVideoFx object which will be removed
   * @return {NvsTrackVideoFx} Returns the next NvsTrackVideoFx object of current track video effect which has removed.
   * @else
   * @brief 从轨道中移除轨道视频效果。
   * @param {NvsTrackVideoFx} trackVideoFx 将被移除的 NvsTrackVideoFx 对象
   * @return {NvsTrackVideoFx} 返回已移除的当前轨道视频效果的下一个 NvsTrackVideoFx 对象。
   * @endif
   */
    removeTrackVideoFx(trackVideoFx: NvsTrackVideoFx): NvsTrackVideoFx;
    /**
   * @if ENGLISH
   * @brief Get the first caption on the track.
   * @return {NvsTrackCaption} Returns the NvsTrackCaption object.
   * @else
   * @brief 获取轨道上的第一个字幕。
   * @return {NvsTrackCaption} 返回 NvsTrackCaption 对象。
   * @endif
   */
    getFirstCaption(): NvsTrackCaption;
    /**
   * @if ENGLISH
   * @brief Get the last caption on the track.
   * @return {NvsTrackCaption} Returns the NvsTrackCaption object.
   * @else
   * @brief 获取轨道上的最后一个字幕。
   * @return {NvsTrackCaption} 返回 NvsTrackCaption 对象。
   * @endif
   */
    getLastCaption(): NvsTrackCaption;
    /**
   * @if ENGLISH
   * @brief Get the previous caption of the current caption on the track.
   * @param {NvsTrackCaption} caption The current caption on the track
   * @return {NvsTrackCaption} Returns the NvsTrackCaption object.
   * @else
   * @brief 获取轨道上的当前字幕的上一个字幕
   * @param {NvsTrackCaption} caption 轨道上的当前字幕
   * @return {NvsTrackCaption} 返回 NvsTrackCaption 对象。
   * @endif
   */
    getPrevCaption(caption: NvsTrackCaption): NvsTrackCaption;
    /**
   * @if ENGLISH
   * @brief Get the next caption of the current caption on the track.
   * @param {NvsTrackCaption} caption The current caption on the track
   * @return {NvsTrackCaption} Returns the NvsTrackCaption object.
   * @else
   * @brief 获取轨道上的当前字幕的下一个字幕
   * @param {NvsTrackCaption} caption 轨道上的当前字幕
   * @return {NvsTrackCaption} 返回 NvsTrackCaption 对象。
   * @endif
   */
    getNextCaption(caption: NvsTrackCaption): NvsTrackCaption;
    /**
   * @if ENGLISH
   * @brief Get the caption by timeline position.
   * @param {Number} pos The position on the track(in micro-second)
   * @return {NvsVectorVal<NvsTrackCaption>} Returns a list of arrays of captions at the current position。
       The sorting rules for the obtained captions list are as follows:
       1.When adding, the in points are different, and captions are arranged in the order of the in points;
       2.When adding, the in points are the same, and captions are arranged in the order of adding captions.
   * @else
   * @brief 按时间轴位置获取字幕。
   * @param {Number} pos 轨道上的位置（以微秒为单位）
   * @return {NvsVectorVal<NvsTrackCaption>} 返回当前位置的字幕数组列表。
       获取到的字幕列表排序规则如下：
       1.添加时入点不同，字幕按入点顺序排列；
       2.添加时，入点相同，字幕按照添加字幕的顺序排列。
   * @endif
   */
    getCaptionsByTimelinePosition(pos: number): NvsVectorVal<NvsTrackCaption>;
    /**
   * @if ENGLISH
   * @brief Add a caption on the track.
   * @param {String} text Text of caption
   * @param {Number} inPoint The in point of the caption on the track (in microseconds)
   * @param {Number} duration Caption display duration (in microseconds)
   * @param {String} captionStylePackageId Caption style package Id.If it does not exist, you can pass an empty string or null.
   * @param {Boolean} isPanoramic Determines whether the current caption is a panorama caption.
   * @return {NvsVectorVal<NvsTrackCaption>} Returns the NvsTrackCaption object.
       It will return null in the following situations:
       1. No caption function authorization;
       2. If inPoint is less than 0 or greater than or equal to the current track duration, or duration is not greater than 0.
   * @else
   * @brief 在轨道上添加字幕。
   * @param {String} text 字幕文字
   * @param {Number} inPoint 轨道上字幕的入点（以微秒为单位）
   * @param {Number} duration 字幕显示持续时间（以微秒为单位）
   * @param {String} captionStylePackageId Caption 样式包Id。如果不存在，可以传入空字符串或null。
   * @param {Boolean} isPanoramic 确定当前字幕是否为全景字幕。
   * @return {NvsVectorVal<NvsTrackCaption>} 返回 NvsTrackCaption 对象。
       它会在以下情况下返回 null：
       1. 无字幕功能授权；
       2. 如果 inPoint 小于 0 或大于等于当前轨道持续时间，或者持续时间不大于 0。
   * @endif
   */
    addCaption(text: string, inPoint: number, duration: number, captionStylePackageId: string, isPanoramic: boolean): NvsVectorVal<NvsTrackCaption>;
    /**
   * @if ENGLISH
   * @brief Add a caption on the track.
   * @param {String} text Text of caption
   * @param {Number} inPoint The in point of the caption on the track (in microseconds)
   * @param {Number} duration Caption display duration (in microseconds)
   * @param {String} captionStylePackageId Caption style package Id.If it does not exist, you can pass an empty string or null.
   * @param {Boolean} isPanoramic Determines whether the current caption is a panorama caption.
   * @return {NvsVectorVal<NvsTrackCaption>} Returns the NvsTrackCaption object.
        It will return null in the following situations:
        1. No caption function authorization;
        2. If inPoint is less than 0 or greater than or equal to the current track duration, or duration is not greater than 0.
   * @else
   * @brief 在轨道上添加字幕。
   * @param {String} text 字幕文字
   * @param {Number} inPoint 轨道上字幕的入点（以微秒为单位）
   * @param {Number} duration 字幕显示持续时间（以微秒为单位）
   * @param {String} captionStylePackageId Caption 样式包Id。如果不存在，可以传入空字符串或null。
   * @param {Boolean} isPanoramic 确定当前字幕是否为全景字幕。
   * @return {NvsVectorVal<NvsTrackCaption>} 返回 NvsTrackCaption 对象。
       它会在以下情况下返回 null：
       1. 无字幕功能授权；
       2. 如果 inPoint 小于 0 或大于等于当前轨道持续时间，或者持续时间不大于 0。
   * @endif
   */
    addModularCaption(text: string, inPoint: number, duration: number): NvsVectorVal<NvsTrackCaption>;
    /**
   * @if ENGLISH
   * @brief Remove the caption on the track.
   * @param {NvsTrackCaption} caption track caption object which removed
   * @return {NvsTrackCaption} Returns the next NvsTrackCaption object.
   * @else
   * @brief 删除轨道上的标题。
   * @param {NvsTrackCaption} caption 删除的轨道标题对象
   * @return {NvsTrackCaption} 返回下一个 NvsTrackCaption 对象。
   * @endif
   */
    removeCaption(caption: NvsTrackCaption): NvsTrackCaption;
    /**
   * @if ENGLISH
   * @brief Get the first compound caption on the track.
   * @return {NvsTrackCompoundCaption} Returns the compound caption object.
   * @else
   * @brief 获取轨道上的第一个复合字幕。
   * @return {NvsTrackCompoundCaption} 返回复合字幕对象。
   * @endif
   */
    getFirstCompoundCaption(): NvsTrackCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get the last compound caption on the track.
   * @return {NvsTrackCompoundCaption} Returns the compound caption object.
   * @else
   * @brief 获取轨道上的最后一个复合字幕。
   * @return {NvsTrackCompoundCaption} 返回复合字幕对象。
   * @endif
   */
    getLastCompoundCaption(): NvsTrackCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get the previous compound caption of the current caption on the timeline.
   * @param {NvsTrackCompoundCaption} caption The current caption on the video track
   * @return {NvsTrackCompoundCaption} Returns the next NvsTrackCompoundCaption object.
   * @else
   * @brief 获取时间轴上当前字幕的上一个复合字幕。
   * @param {NvsTrackCompoundCaption} caption 视频轨道上的当前字幕
   * @return {NvsTrackCompoundCaption} 返回下一个 NvsTrackCompoundCaption 对象。
   * @endif
   */
    getPrevCompoundCaption(caption: NvsTrackCompoundCaption): NvsTrackCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get the next compound caption of the current caption on the timeline.
   * @param {NvsTrackCompoundCaption} caption The current caption on the video track
   * @return {NvsTrackCompoundCaption} Returns the next NvsTrackCompoundCaption object.
   * @else
   * @brief 获取时间轴上当前字幕的下一个复合字幕。
   * @param {NvsTrackCompoundCaption} caption 视频轨道上的当前字幕
   * @return {NvsTrackCompoundCaption} 返回下一个 NvsTrackCompoundCaption 对象。
   * @endif
   */
    getNextCompoundCaption(caption: NvsTrackCompoundCaption): NvsTrackCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get a list of compound captions based on the position on the track.
   * @param {Number} pos The position on the track(in micro-second)
   * @return {NvsVectorVal<NvsTrackCompoundCaption>} Returns a list of compound captions at the current position。
       The sorting rules for the obtained captions list are as follows:
       1. If the in points are different, captions are sorted in the order of the in points;
       2. If the in points are the same, and captions are sorted in the order of compound caption added.
   * @else
   * @brief 根据轨道上的位置获取复合字幕列表。
   * @param {Number} pos 轨道上的位置（以微秒为单位）
   * @return {NvsVectorVal<NvsTrackCompoundCaption>} 返回当前位置的复合字幕列表。
       获取到的字幕列表排序规则如下：
       1. 如果入点不同，则按照入点的顺序对字幕进行排序；
       2. 如果入点相同，则字幕按添加复合字幕的顺序排序。
   * @endif
   */
    getCompoundCaptionsByTimelinePosition(pos: number): NvsVectorVal<NvsTrackCompoundCaption>;
    /**
   * @if ENGLISH
   * @brief Get a list of compound captions based on the position on the track.
   * @param {Number} inPoint The in point of the caption on the track (in microseconds)
   * @param {Number} duration Caption display duration (in microseconds)
   * @param {String} compoundCaptionPackageId Caption style package Id.If it does not exist, you can pass an empty string or null.
   * @return {NvsVectorVal<NvsTrackCompoundCaption>} Returns a list of compound captions at the current position。
       Returns the NvsTrackCaption object.
       It will return null in the following situations:
       1. No compound caption function authorization;
       2. If inPoint is less than 0 or greater than or equal to the current track duration, or duration is not greater than 0.
   * @else
   * @brief 根据轨道上的位置获取复合字幕列表。
   * @param {Number} inPoint 轨道上字幕的入点（以微秒为单位）
   * @param {Number} duration 字幕显示持续时间（以微秒为单位）
   * @param {String} compoundCaptionPackageId Caption 样式包Id。如果不存在，可以传入空字符串或null。
   * @return {NvsVectorVal<NvsTrackCompoundCaption>} 返回当前位置的复合字幕列表。
       返回 NvsTrackCaption 对象。
       它会在以下情况下返回 null：
       1. 无复合字幕功能授权；
       2. 如果 inPoint 小于 0 或大于等于当前轨道持续时间，或者持续时间不大于 0。
   * @endif
   */
    addCompoundCaption(inPoint: number, duration: number, compoundCaptionPackageId: string): NvsVectorVal<NvsTrackCompoundCaption>;
    /**
   * @if ENGLISH
   * @brief Remove compound caption from the track.
   * @param {Number} track compound caption object which to be removed
   * @return {NvsTrackCompoundCaption} Returns the next compound caption object.
   * @else
   * @brief 从轨道中删除复合字幕。
   * @param {Number} track 要删除的复合字幕对象
   * @return {NvsTrackCompoundCaption} 返回下一个复合字幕对象。
   * @endif
   */
    removeCompoundCaption(caption: any): NvsTrackCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get the first animated sticker on the track.
   * @return {NvsTrackAnimatedSticker} Return the acquired NvsTrackAnimatedSticker object.
   * @else
   * @brief 获得轨道上的第一个动画贴纸。
   * @return {NvsTrackAnimatedSticker} 返回获取到的 NvsTrackAnimatedSticker 对象。
   * @endif
   */
    getFirstAnimatedSticker(): NvsTrackAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get the last animated sticker on the track.
   * @return {NvsTrackAnimatedSticker} Return the acquired NvsTrackAnimatedSticker object.
   * @else
   * @brief 获取轨道上最后一个动画贴纸。
   * @return {NvsTrackAnimatedSticker} 返回获取到的 NvsTrackAnimatedSticker 对象。
   * @endif
   */
    getLastAnimatedSticker(): NvsTrackAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get the previous animated sticker of the current animated sticker of the track.
   * @param {NvsTrackAnimatedSticker} animatedSticker the current NvsTrackAnimatedSticker obejct
   * @return {NvsTrackAnimatedSticker} Return the acquired NvsTrackAnimatedSticker object.
   * @else
   * @brief 获取曲目当前动画贴纸的上一个动画贴纸。
   * @param {NvsTrackAnimatedSticker} animatedSticker 当前的 NvsTrackAnimatedSticker 对象
   * @return {NvsTrackAnimatedSticker} 返回获取到的 NvsTrackAnimatedSticker 对象。
   * @endif
   */
    getPrevAnimatedSticker(animatedSticker: NvsTrackAnimatedSticker): NvsTrackAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get the next animated sticker of the current animated sticker of the track.
   * @param {NvsTrackAnimatedSticker} animatedSticker the current NvsTrackAnimatedSticker obejct
   * @return {NvsTrackAnimatedSticker} Return the acquired NvsTrackAnimatedSticker object.
   * @else
   * @brief 获取轨道当前动画贴纸的下一个动画贴纸。
   * @param {NvsTrackAnimatedSticker} animatedSticker 当前的 NvsTrackAnimatedSticker 对象
   * @return {NvsTrackAnimatedSticker} 返回获取到的 NvsTrackAnimatedSticker 对象。
   * @endif
   */
    getNextAnimatedSticker(animatedSticker: NvsTrackAnimatedSticker): NvsTrackAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get an animated sticker list based on the position on the timeline.
   * @param {Number} pos Position on the timeline (in microseconds)
   * @return {NvsVectorVal<NvsTrackAnimatedSticker>} Returns a list which holding the current position animated sticker object
         The sorting rules for the obtained animated sticker list are as follows:
        1.When adding, the in points are different,animated stickers are arranged in the order of the in points;
        2.When adding, the in points are the same, they are arranged in the order in which the animation stickers are added.
   * @else
   * @brief 根据时间线位置获取动画贴纸
   * @param {Number} pos 在轨道上的位置（以微秒为单位）
   * @return {NvsVectorVal<NvsTrackAnimatedSticker>} 返回一个包含当前位置动画贴纸对象的列表
       得到的动画贴纸列表排序规则如下：
       1.添加时入点不同，动画贴图按入点顺序排列；
       2.添加时入点相同，按添加动画贴的顺序排列。
   * @endif
   */
    getAnimatedStickersByTimelinePosition(pos: number): NvsVectorVal<NvsTrackAnimatedSticker>;
    /**
   * @if ENGLISH
   * @brief Add animated sticker
   * @param {Number} inPoint The in point of the animated sticker on the track (in microseconds)
   * @param {Number} duration The duration of the animation sticker which displayed (in microseconds)
   * @param {String} animatedStickerPackageId Animated sticker package Id
   * @param {Boolean} isPanoramic Determine whether the animated sticker is a panorama animated sticker or not.
   * @param {Boolean} isCustom Determines if it is a custom sticker.
   * @param {String} customImagePath Custom image path
   * @return {NvsTrackAnimatedSticker} Return the NvsTrackAnimatedSticker object.
       It will return null in the following situations:
       1. No animated sticker function authorization;
       2. The animatedStickerPackageId is empty or null;
       3. The animatedSticker has not install succeed;
       4. If inPoint is less than 0 or greater than or equal to the current track duration, or duration is not greater than 0.
   * @else
   * @brief 添加动画贴纸
   * @param {Number} inPoint 轨道上动画贴纸的入点（以微秒为单位）
   * @param {Number} duration 显示的动画贴纸的持续时间（以微秒为单位）
   * @param {String} animatedStickerPackageId 动画贴纸包 ID
   * @param {Boolean} isPanoramic 判断动画贴纸是否为全景动画贴纸。
   * @param {Boolean} isCustom 确定它是否是自定义贴纸。
   * @param {String} customImagePath 自定制图片路径
   * @return {NvsTrackAnimatedSticker} 返回 NvsTrackAnimatedSticker 对象。
       它会在以下情况下返回 null：
       1. 无动画贴纸功能授权；
       2. animatedStickerPackageId 为空或 null；
       3. 动画贴纸没有安装成功；
       4. 如果 inPoint 小于 0 或大于等于当前轨道持续时间，或者持续时间不大于 0。
   * @endif
   */
    addAnimatedSticker(inPoint: number, duration: number, animatedStickerPackageId: string, isPanoramic: boolean, isCustom: boolean, customImagePath: string): NvsTrackAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Remove an animated sticker on the track.
   * @param {NvsTrackAnimatedSticker} animatedSticker The NvsTrackAnimatedSticker object which will be removed
   * @return {NvsTrackAnimatedSticker} Return the next NvsTrackAnimatedSticker object.
   * @else
   * @brief 删除轨道上的动画贴纸。
   * @param {NvsTrackAnimatedSticker} animatedSticker 将被移除的 NvsTrackAnimatedSticker 对象
   * @return {NvsTrackAnimatedSticker} 返回下一个 NvsTrackAnimatedSticker 对象。
   * @endif
   */
    removeAnimatedSticker(animatedSticker: NvsTrackAnimatedSticker): NvsTrackAnimatedSticker;
}
/**
 * @if ENGLISH
 * @brief Audio track, a collection of audio clips. An audio track is an entity that holds audio clips. Each audio track can add or remove multiple audio clips. When playing one audio clip to another, you need to set the audio transition to facilitate the transition. Note: for a series of interfaces of audio track and the meaning of its parameters, please refer to the corresponding interface of Nvsvideotrack.
 * @else
 * @brief 音频轨道，音频片段的集合。音频轨道是容纳音频片段的实体。每条音频轨道可以添加或者移除多个音频片段。一个音频片段播放到另一个音频片段时，需要进行音频转场设置，以便过渡衔接。注：对于音频轨道的一系列接口及所其属参数含义,请参照视频轨道NvsVideoTrack的对应接口来对照理解。
 * @endif
 */
declare class NvsAudioTrack extends NvsTrack {
    /**
   * @if ENGLISH
   * @brief Inserts a clip at the specified clip index on the track.
   This interface will cause the streaming engine state to jump to the engine stop state
   * @param {String} audioFilePath Clip path.For the clip path type, please refer to the parameter filePath of the NvsVideoTrack interface addClip()
   * @param {Number} insertPoint Clip index to insert at
   * @return {NvsAudioClip} Returns the inserted audio clip object. If index is greater than the number of existing clips, it is added at the end.If the value of clipIndex is equal to 0, meanwhile the timeline contain themeLeader,the return object is NULL.If the value of clipIndex is more or equal to the getClipCount() of this track, meanwhile the timeline contain themeTrailer,the return object is NULL
   * @else
   * @brief 添加片段
   * @param {String} audioFilePath 音频文件路径
   * @param {Number} insertPoint 插入点
   * @return {NvsAudioClip} 返回插入的音频剪辑对象。如果index大于现有剪辑的数量，则添加到末尾。如果clipIndex的值等于0，同时时间轴包含themeLeader，则返回对象为NULL。如果值clipIndex 的值大于或等于该轨道的 getClipCount()，同时时间轴包含 themeTrailer，返回对象为 NULL
   * @endif
   */
    insertClip(audioFilePath: string, insertPoint: number): NvsAudioClip;
    /**
   * @if ENGLISH
   * @brief Inserts clip at the specified clip index on the track.
   This interface will cause the streaming engine state to jump to the engine stop state, please refer to Engine Change Feature for details
   * @param {String} audioFilePath clip path. For the clip path type, please refer to the parameter filePath of the NvsVideoTrack interface addClip()
   * @param {Number} trimIn Trim in point (in microseconds)
   * @param {Number} trimOut Trim out point (in microseconds)
   * @param {Number} insertPoint Clip index to insert at.
   * @return {NvsAudioClip} Returns the inserted audio clip object. Parameters need to meet (0 <= trimIn < trimOut). If trimOut is bigger than the file original duration, it will be played in the last frame.
   * @else
   * @brief 插入片段
   * @param {String} audioFilePath 音频文件路径
   * @param {Number} trimIn 修剪入点
   * @param {Number} trimOut 修剪出点
   * @param {Number} insertPoint 插入点
   * @return {NvsAudioClip} 返回添加的音频剪辑对象。参数需要满足（0 <= trimIn < trimOut）。如果 trimOut 大于文件原始时长，则会在最后一帧播放。
   * @endif
   */
    insertClip2(audioFilePath: string, trimIn: number, trimOut: number, insertPoint: number): NvsAudioClip;
    /**
   * @if ENGLISH
   * @brief Appends a clip at the end of the track.
   * @param {String} audioFilePath Audio clip path.
   * @return {NvsAudioClip} Returns the appended audio clip object. This interface will cause the streaming engine state to jump to the engine stop state, please refer to Engine Change Feature for details.
   * @else
   * @brief 追加片段
   * @param {String} audioFilePath 音频文件路径
   * @return {NvsAudioClip} 返回附加的音频剪辑对象。该接口会导致流媒体引擎状态跳转到引擎停止状态，详情请参阅引擎更改功能。
   * @endif
   */
    appendClip(audioFilePath: string): NvsAudioClip;
    /**
   * @if ENGLISH
   * @brief append clip
   * @param {String} audioFilePath Audio clip path
   * @param {Number} trimIn Trim in point (in microseconds)
   * @param {Number} trimOut Trim out point (in microseconds)
   * @return {NvsAudioClip} Returns the appended audio clip object. This interface will cause the streaming engine state to jump to the engine stop state, please refer to Engine Change Feature for details.
   * @else
   * @brief 追加片段
   * @param {String} audioFilePath 音频文件路径
   * @param {Number} trimIn 裁剪入点
   * @param {Number} trimOut 裁剪出点
   * @return {NvsAudioClip} 返回附加的音频剪辑对象。该接口会导致流媒体引擎状态跳转到引擎停止状态，详情请参阅引擎更改功能。
   * @endif
   */
    appendClip2(audioFilePath: string, trimIn: number, trimOut: number): NvsAudioClip;
    /**
   * @if ENGLISH
   * @brief Adds audio clip.
   * @param {String} audioFilePath Audio clip path
   * @param {Number} inPoint The in point on the timeline to insert the audio clip (in microseconds)
   * @return {NvsAudioClip} Returns the added audio clip object. Parameter inPoint range: [0 , timeline.getDuration())This interface will cause the streaming engine state to jump to the engine stop state.
   * @else
   * @brief 添加片段
   * @param {String} audioFilePath 音频文件路径
   * @param {Number} inPoint 入点
   * @return {NvsAudioClip} 返回添加的音频剪辑对象。参数inPoint范围:[0, timeline.getDuration())该接口将导致流媒体引擎状态跳转到引擎停止状态。
   * @endif
   */
    addClip(audioFilePath: string, inPoint: number): NvsAudioClip;
    /**
   * @if ENGLISH
   * @brief Adds audio clip.
   This interface causes the streaming engine state to jump to the engine stop state
   * @param {String} audioFilePath audio file path
   * @param {Number} inPoint The in point of the audio clip to be inserted on the timeline (in microseconds)
   * @param {Number} trimIn Trim in point of audio clip (in microseconds)
   * @param {Number} trimOut Trim out point of audio clip (in microseconds)
   * @return {NvsAudioClip} Returns the added audio clip object. Parameters need to meet (0 <= trimIn < trimOut). If trimOut is bigger than the file original duration, it will be played in the last frame.
   * @else
   * @brief 添加片段
   * @param {String} audioFilePath 音频文件路径
   * @param {Number} inPoint 入点
   * @param {Number} trimIn 裁剪入点
   * @param {Number} trimOut 裁剪出点
   * @return {NvsAudioClip} 返回添加的音频剪辑对象。参数需要满足（0 <= trimIn < trimOut）。如果 trimOut 大于文件原始时长，则会在最后一帧播放。
   * @endif
   */
    addClip2(audioFilePath: string, inPoint: number, trimIn: number, trimOut: number): NvsAudioClip;
    /**
   * @if ENGLISH
   * @brief Add clip with speed
   * @param {String} audioFilePath audio file path
   * @param {Number} inPoint in point
   * @param {Number} outPoint out point
   * @param {Number} speed speed
   * @param {Boolean} keepAudioPitch keep audio pitch
   * @return {NvsAudioClip}
   * @else
   * @brief 添加速度片段
   * @param {String} audioFilePath 音频文件路径
   * @param {Number} inPoint 修剪入点
   * @param {Number} speed 速度
   * @param {Boolean} keepAudioPitch 保持音频音调
   * @return {NvsAudioClip}
   * @endif
   */
    addClipWithSpeedExt(audioFilePath: string, inPoint: number, outPoint: number, speed: number, keepAudioPitch: boolean): NvsAudioClip;
    /**
   * @if ENGLISH
   * @brief Add clip with speed
   * @param {String} audioFilePath audio file path
   * @param {Number} inPoint in point
   * @param {Number} outPoint out point
   * @param {Number} trimIn trim in
   * @param {Number} trimOut trim out
   * @param {Number} speed speed
   * @param {Boolean} keepAudioPitch keep audio pitch
   * @return {NvsAudioClip}
   * @else
   * @brief 添加速度片段
   * @param {String} audioFilePath 音频文件路径
   * @param {Number} inPoint 入点
   * @param {Number} trimIn 修剪入点
   * @param {Number} trimOut 修剪出点
   * @param {Number} speed 速度
   * @param {Boolean} keepAudioPitch 保持音频音调
   * @return {NvsAudioClip}
   * @endif
   */
    addClipWithSpeedExt2(audioFilePath: string, inPoint: number, outPoint: number, trimIn: number, trimOut: number, speed: number, keepAudioPitch: boolean): NvsAudioClip;
    /**
   * @if ENGLISH
   * @brief Gets clip by index.
   * @param {Number} index Clip index
   * @return {NvsAudioClip} Returns the obtained audio clip object. Parameter index range(0 <= clipIndex < getClipCount())，if out of range will return NULL.
   * @else
   * @brief 根据索引获取片段
   * @param {Number} index 索引
   * @return {NvsAudioClip} 返回获取到的音频剪辑对象。参数index取值范围(0 <= index < getClipCount())，如果超出范围返回NULL。
   * @endif
   */
    getClipByIndex(index: number): NvsAudioClip;
    /**
   * @if ENGLISH
   * @brief Gets clip by time.
   * @param {Number} timelinePos Position on the timeline (in microseconds).
   * @return {NvsAudioClip} Returns the obtained audio clip object. Parameter timelinePos range(0 <= timelinePos < timeline.getDuration())，if out of range will return NULL.
   * @else
   * @brief 根据时间线位置获取片段
   * @param {Number} timelinePos 时间线位置
   * @return {NvsAudioClip} 返回获取到的音频片段对象。参数timelinePos取值范围(0 <= timelinePos < timeline.getDuration())，如果超出范围返回NULL。
   * @endif
   */
    getClipByTimelinePosition(timelinePos: number): NvsAudioClip;
    /**
   * @if ENGLISH
   * @brief Sets built-in transition.
   * @param {Number}  srcClipIndex Source clip index of the transition. Range [0 , getClipCount())
   * @param {String}  transitionName Audio transition name. Note: Currently audio transition only supports Fade mode; if it is set to null string, the original transition will be deleted
   * @return {NvsAudioTransition} Returns audio transition object. This interface will cause the streaming engine state to jump to the engine stop state
   * @else
   * @brief 设置内置转场
   * @param {Number}  源片段索引
   * @param {String}  转场名字
   * @return {NvsAudioTransition} 返回音频过渡对象。该接口将导致流引擎状态跳转到引擎停止状态
   * @endif
   */
    setBuiltinTransition(srcClipIndex: number, transitionName: string): NvsAudioTransition;
    /**
   * @if ENGLISH
   * @brief Get transition by source clip index
   * @param {Number} srcClipIndex Source clip index of the transition. Range [0 , getClipCount())
   * @return {NvsAudioTransition} Returns the acquired NvsAudioTransition object.
   * @else
   * @brief 根据原片段索引获取转场
   * @param {srcClipIndex} 源片段索引
   * @return {NvsAudioTransition} 返回获取的 NvsAudioTransition 对象。
   * @endif
   */
    getTransitionBySourceClipIndex(srcClipIndex: number): NvsAudioTransition;
}
/**
 * @if ENGLISH
 * @brief Specific description of clips and audio and video files. Clip is an entity containing audio and video content. It is a description of video and audio files. It is divided into audio clip and video clip. It defines the common attributes and behaviors of different types of clips, that is, the derived audio clips and video clips can modify their clipping entry and exit points, left and right channels, playback speed, etc. In the SDK framework, corresponding audio clips and video clips can be added on the track.
 * @see NvsProjObj
 * @else
 * @brief 片段，音视频文件的具体描述。片段是容纳音视频内容的实体，是对视频、音频文件的描述，分为音频片段(Audio Clip)和视频片段(Video Clip)。它定义了不同类型片段所拥有的共同属性和行为， 即派生的音频片段和和视频片段可根据需要修改各自的裁剪出入点，左右声道，播放速度等。在SDK框架中，在轨道(Track)上可添加相应的音频片段和视频片段。
 * @see NvsProjObj
 * @endif
 */
declare class NvsClip extends NvsProjObj {
    /**
   * @if ENGLISH
   * @brief Gets the trim in point of the clip.
   * @return {Number} Returns the trim in point of the clip (in microseconds)
   * @else
   * @brief 获取修剪入点
   * @return {Number} 返回剪辑的修剪点（以微秒为单位）
   * @endif
   */
    getTrimIn(): number;
    /**
   * @if ENGLISH
   * @brief Gets the trim out point of the clip.
   * @return {Number} Returns the trim out point of the clip (in microseconds)
   * @else
   * @brief 获取修剪出点
   * @return {Number} 返回剪辑的修剪点（以微秒为单位）
   * @endif
   */
    getTrimOut(): number;
    /**
   * @if ENGLISH
   * @brief Move trim points of clip(in microseconds).
   * @param {Number} offset value，the existing trimIn + offset shall not exceed the original length of the clip.
   * @return {Boolean} Returns true if succeeded.
   * @else
   * @brief 移动修剪点
   * @param {Number} offset value 现有的 trimIn + offset 长度不得超过剪辑的原始长度。
   * @return {Boolean} 如果成功则返回true。
   * @endif
   */
    moveTrimPoint(offset: number): boolean;
    /**
   * @if ENGLISH
   * @brief Gets the in-point of the clip on the timeline.
   * @return {Number} Returns the in-point value of the clip on the timeline (in microseconds)
   * @else
   * @brief 获取入点
   * @return {Number} 返回时间轴上剪辑的入点值（以微秒为单位）
   * @endif
   */
    getInPoint(): number;
    /**
   * @if ENGLISH
   * @brief Gets the out-point of the clip on the timeline.
   * @return {Number} Returns the out-point value (in microseconds) of the clip on the timeline
   * @else
   * @brief 获取出点
   * @return {Number} 返回时间轴上剪辑的出点值（以微秒为单位）
   * @endif
   */
    getOutPoint(): number;
    /**
   * @if ENGLISH
   * @brief Gets the clip type (video clip, audio clip).
   * @return {NvsClipType} Returns the clip type value. The return value is a static int value prefixed by CLIP_TYPE. Two types of clips are included, namely the audio clip type and the video clip type. Please refer to fragment type.
   * @else
   * @brief 获取类型
   * @return {NvsClipType} 返回剪辑类型值。返回值是以 CLIP_TYPE 为前缀的静态 int 值。包括两种类型的剪辑，即音频剪辑类型和视频剪辑类型。请参考片段类型。
   * @endif
   */
    getType(): NvsClipType;
    /**
   * @if ENGLISH
   * @brief Gets the index of the clip on the track.
   * @return {Number} Returns the index value of the clip on the track.
   * @else
   * @brief 获取索引
   * @return {Number} 返回轨道上剪辑的索引值。
   * @endif
   */
    getIndex(): number;
    /**
   * @if ENGLISH
   * @brief Gets the clip file path.
   * @return {String} Returns the string of the clip path.
   * @else
   * @brief 获取文件路径
   * @return {String} 返回剪辑路径的字符串。
   * @endif
   */
    getFilePath(): string;
    /**
   * @if ENGLISH
   * @brief Gets the number of effects on the clip. Note: The effect index on the clip starts from 0.
   * @return {Number} Returns the number of special effects on the clip.
   * @else
   * @brief 获取特效计数
   * @return {Number} 返回剪辑上特殊效果的数量。
   * @endif
   */
    getFxCount(): number;
    /**
   * @if ENGLISH
   * @brief Modifies the trim in point of the clip.
   This interface will cause the streaming engine state to jump to the engine stop state, please refer to Engine Change Feature for details
   * @param {Number} newTrimInPoint New trim in point (in microseconds)
   * @param {Boolean} affectSibling Whether it affects other clips on the same track (true/false)
   * @return {Number} Returns the actual reachable trim in point (in microseconds). Note: The actual achievable trim in point is within [0,trimOut - 1].
   * @else
   * @brief 改变入点
   * @param {Number} newTrimInPoint 新裁剪入点
   * @param {Boolean} affectSibling  影响同级
   * @return {Number} 返回实际可到达的修剪点（以微秒为单位）。注意：实际可实现的修剪点在 [0,trimOut - 1] 范围内。
   * @endif
   */
    changeTrimInPoint(newTrimInPoint: number, affectSibling: boolean): number;
    /**
   * @if ENGLISH
   * @brief Modifies the trim out point of the clip.
   This interface will cause the streaming engine state to jump to the engine stop state, refer to Engine Change Feature for details
   * @param {Number} newTrimOutPoint New trim out point (in microseconds).
   * @param {Boolean} affectSibling Whether it affects other clips on the same track (true/false)
   * @return {Number} Returns the actual reachable trim out point (in microseconds). Note: The actual achievable trim out point is within [trimIn + 1, clipDuration] and clipDuration is the clip duration.
   * @else
   * @brief 改变出点
   * @param {Number} newTrimOutPoint 新裁剪出点
   * @param {Boolean} affectSibling 影响同级
   * @return {Number} 返回实际可到达的修剪点（以微秒为单位）。注意：实际可实现的修剪点在 [trimIn + 1, clipDuration] 内，clipDuration 是剪辑持续时间。
   * @endif
   */
    changeTrimOutPoint(newTrimOutPoint: number, affectSibling: boolean): number;
    /**
   * @if ENGLISH
   * @brief Get the playback speed of the clip.The default value is 1, which means that it plays at normal speed; the value less than 1 means slower playback; the value greater than 1 means faster playback
   Returns the playback speed of the current clip.
   * @return {Number} Returns the playback speed of the current clip.
   * @else
   * @brief 获取速度
   * @return {Number} 返回当前剪辑的播放速度。
   * @endif
   */
    getSpeed(): number;
    /**
   * @if ENGLISH
   * @brief Changes the playback speed of the clip.This interface will cause the streaming engine state to jump to the engine stop state.
   * @param {Number} newSpeed New playback speed..Attention newSpeed > 0.
   * @param {Boolean} keepAudioPitch Keep the tone unchanged.
   * @else
   * @brief 改变速度
   * @param {Number} newSpeed 新速度
   * @param {Boolean} keepAudioPitch 保持音频音调
   * @endif
   */
    changeSpeed(newSpeed: number, keepAudioPitch: boolean): void;
    /**
   * @if ENGLISH
   * @brief Changes the playback speed of the clip.This interface will cause the streaming engine state to jump to the engine stop state.
   * @param {Number} outPoint out point
   * @param {Number} newSpeed New playback speed..Attention newSpeed > 0.
   * @param {Boolean} keepAudioPitch Keep the tone unchanged.
   * @else
   * @brief 改变速度
   * @param {Number} outPoint 出点
   * @param {Number} newSpeed 新速度
   * @param {Boolean} keepAudioPitch 保持音频音调
   * @endif
   */
    changeSpeedWithOutPoint(outPoint: number, newSpeed: number, keepAudioPitch: boolean): void;
    /**
   * @if ENGLISH
   * @brief Whether keep the tone unchanged.
   * @return {Boolean} Returns whether keep the tone unchanged.
   * @else
   * @brief 是否保持音调
   * @return {Boolean} 返回是否保持音调。
   * @endif
   */
    isKeepAudioPitch(): boolean;
    /**
   * @if ENGLISH
   * @brief Gets volume.
   * @return {NvsVolume} Returns the volume object obtained.
   * @else
   * @brief 获取音量增益
   * @return {NvsVolume} 返回获得的音量增益对象。
   * @endif
   */
    getVolumeGain(): NvsVolume;
    /**
   * @if ENGLISH
   * @brief Sets the volume.
   * @param {Number} leftVolumeGain The left channel value to be set, the range value is [0, 4).
   * @param {Number} rightVolumeGain The right channel value to be set, the range value is [0, 4).
   * @else
   * @brief 设置音量增益
   * @param {Number} leftVolumeGain 左声道增益
   * @param {Number} rightVolumeGain 右声道增益
   * @endif
   */
    setVolumeGain(leftVolumeGain: number, rightVolumeGain: number): void;
    /**
   * @if ENGLISH
   * @brief Sets the fade-in time.
   * @param {Number} duration Fade-in duration in microseconds, 0 means no fade-in.Duration must >= 0.
   * @else
   * @brief 设置淡入持续时间
   * @param {Number} duration 持续时间
   * @endif
   */
    setFadeInDuration(duration: number): void;
    /**
   * @if ENGLISH
   * @brief Gets fade-in time.
   * @return {Number} Returns the fade-in time in microseconds.
   * @else
   * @brief 获取淡入持续时间
   * @return {Number} 返回以微秒为单位的淡入时间。
   * @endif
   */
    getFadeInDuration(): number;
    /**
   * @if ENGLISH
   * @brief Sets fade-out time.Fade-out duration in microseconds, 0 means no fade-out.Duration must >= 0.
   * @param {Number} duration Fade-out duration in microseconds, 0 means no fade-out.Duration must >= 0.
   * @else
   * @brief 设置淡出持续时间
   * @param {Number} duration 持续时间
   * @endif
   */
    setFadeOutDuration(duration: number): void;
    /**
   * @if ENGLISH
   * @brief Gets fade-out time.
   * @return {Number} Returns the fade-out time in microseconds.
   * @else
   * @brief 获取淡出持续时间
   * @return {Number} 返回以微秒为单位的淡出时间。
   * @endif
   */
    getFadeOutDuration(): number;
    /**
   * @if ENGLISH
   * @brief Changes the playback speed of the clip by curves(only support for video clip).This interface will cause the streaming engine state to jump to the engine stop state.
   * @param {String} curvesString Description of the variable speed curves.
   *  \string foramt : (endpoint1)(endpoint1.backward)(endpoint1.frontward)(endpoint2)(endpoint2.backward)(endpoint2.frontward)……
   *  \coords foramt : (x,y)
   *  \note1 : the y coords means the multiple speed. the range of y is 0.1 to 10
   *  \note2 : all x coord values cannot be repeated. endpoint1.backward.x < endpoint1.x < endpoint1.frontward.x < endpoint2.backward.x <endpoint2.x……
   *  \note3 : if you set an empty curvesString,it means you want to disable curves variable speed,the clip will back to const speed. \eg : curvesString = "(0,1)(-3,1)(3,1)(7,5)(6,5)(8,5)(10,0.4)(9,0.4)(11,0.4)(17,0.4)(16,0.4)(18,0.4)(20,5)(19,5)(21,5)(27,1)(24,1)(30,1)" curvesString included 6 group end point info .
   * @param {Boolean} keepAudioPitch Keep the tone unchanged.
   * @return {Boolean}
   * @else
   * @brief 改变曲线变速,此接口将导致流引擎状态跳转到引擎停止状态
   * @param {String} curvesString 曲线字符串
   *   \字符串 格式: (endpoint1)(endpoint1.backward)(endpoint1.frontward)(endpoint2)(endpoint2.backward)(endpoint2.frontward)……
   *   \坐标 格式: (x,y)
   *   \注意1: y坐标表示倍数速度。y的范围是0.1到10
   *   \注意2: 所有x坐标值不能重复。 endpoint1.backward.x < endpoint1.x < endpoint1.frontward.x < endpoint2.backward.x <endpoint2.x……
   *   \注意3: 如果你设置了一个空的curvesString，这意味着你想禁用曲线变速，剪辑将回到常量 speed。\eg : curvesString = "(0,1)(-3,1)(3,1)(7,5)(6,5)(8,5)(10,0.4)(9,0.4)(11,0.4)(17,0.4)(16,0.4)(18,0.4)(20,5)(19,5)(21,5)(27,1)(24,1)(30,1)"  curvesString包括6组端点信息。
   * @param {Boolean} keepAudioPitch 保持音频音调
   * @return {Boolean}
   * @endif
   */
    changeCurvesVariableSpeed(curvesString: string, keepAudioPitch: boolean): boolean;
    /**
   * @if ENGLISH
   * @brief Changes the playback speed of the clip by curves(only support for video clip).This interface will cause the streaming engine state to jump to the engine stop state.
   * @param {Number} outPoint out point
   * @param {String} curvesString Description of the variable speed curves.
   *  \string foramt : (endpoint1)(endpoint1.backward)(endpoint1.frontward)(endpoint2)(endpoint2.backward)(endpoint2.frontward)……
   *  \coords foramt : (x,y)
   *  \note1 : the y coords means the multiple speed. the range of y is 0.1 to 10
   *  \note2 : all x coord values cannot be repeated. endpoint1.backward.x < endpoint1.x < endpoint1.frontward.x < endpoint2.backward.x <endpoint2.x……
   *  \note3 : if you set an empty curvesString,it means you want to disable curves variable speed,the clip will back to const speed. \eg : curvesString = "(0,1)(-3,1)(3,1)(7,5)(6,5)(8,5)(10,0.4)(9,0.4)(11,0.4)(17,0.4)(16,0.4)(18,0.4)(20,5)(19,5)(21,5)(27,1)(24,1)(30,1)" curvesString included 6 group end point info .
   * @param {Boolean} keepAudioPitch Keep the tone unchanged.
   * @return {Boolean}
   * @else
   * @brief 改变曲线变速,此接口将导致流引擎状态跳转到引擎停止状态
   * @param {Number} outPoint 出点
   * @param {String} curvesString 曲线字符串
   *   \字符串 格式: (endpoint1)(endpoint1.backward)(endpoint1.frontward)(endpoint2)(endpoint2.backward)(endpoint2.frontward)……
   *   \坐标 格式: (x,y)
   *   \注意1: y坐标表示倍数速度。y的范围是0.1到10
   *   \注意2: 所有x坐标值不能重复。 endpoint1.backward.x < endpoint1.x < endpoint1.frontward.x < endpoint2.backward.x <endpoint2.x……
   *   \注意3: 如果你设置了一个空的curvesString，这意味着你想禁用曲线变速，剪辑将回到常量 speed。\eg : curvesString = "(0,1)(-3,1)(3,1)(7,5)(6,5)(8,5)(10,0.4)(9,0.4)(11,0.4)(17,0.4)(16,0.4)(18,0.4)(20,5)(19,5)(21,5)(27,1)(24,1)(30,1)"  curvesString包括6组端点信息。
   * @param {Boolean} keepAudioPitch 保持音频音调
   * @return {Boolean}
   * @endif
   */
    changeCurvesVariableSpeedWithOutPoint(outPoint: number, curvesString: string, keepAudioPitch: boolean): boolean;
    /**
   * @if ENGLISH
   * @brief Get current variable speed curves of clip.The x coords at the each output curves' endpoint is relative,user can scale x to any size. eg: scale curves range to equal with clip length.
   * @return {String} get current variable speed curves of clip.
   * @else
   * @brief 获取片段变速曲线字符串
   * @return {String} 获取当前剪辑的变速曲线。
   * @endif
   */
    getClipVariableSpeedCurvesString(): string;
    /**
   * @if ENGLISH
   * @brief Gets the pos in clip by current timeline pos when used curves variable speed.
   * @param {Number} timelinePos timeline position
   * @return {Number} Returns long value to indicate the clip pos,return -1 indicate failed .
   * @else
   * @brief 根据时间线位置曲线变速获取片段位置
   * @param {Number} timelinePos 时间线位置
   * @return {Number} 返回 long 值表示剪辑位置，返回 -1 表示失败。
   * @endif
   */
    getClipPosByTimelinePosCurvesVariableSpeed(timelinePos: number): number;
    /**
   * @if ENGLISH
   * @brief Gets the pos in timelne by current clip pos when used curves variable speed.
   * @param {Number} clipPos clip position
   * @return {Number} Returns long value to indicate the timeline pos,return -1 indicate failed.
   * @else
   * @brief 根据片段位置曲线变速获取时间线位置
   * @param {Number} clipPos 片段位置
   * @return {Number} 返回 long 值表示时间轴位置，返回 -1 表示失败。
   * @endif
   */
    getTimelinePosByClipPosCurvesVariableSpeed(clipPos: number): number;
    /**
   * @if ENGLISH
   * @brief Gets the audio volume effect of the clip.
   * @return {NvsAudioFx} Returns the obtained NvsAudioFx object.
   * @else
   * @brief 获取剪辑片段的音量效果。
   * @return {NvsAudioFx} 返回获取到的 NvsAudioFx 对象。
   * @endif
   */
    getAudioVolumeFx(): NvsAudioFx;
    /**
   * @if ENGLISH
   * @brief Gets the internal timeline object from the clip.
   * @return {NvsTimeline} Returns the timeline object of the clip.If the clip is not the timeline clip, returns null.
   * @else
   * @brief 从剪辑中获取内部时间线对象。
   * @return {NvsTimeline} 返回剪辑的时间线对象。如果剪辑不是时间线剪辑，则返回 null。
   * @endif
   */
    getInternalTimeline(): NvsTimeline;
    /**
   * @if ENGLISH
   * @brief Is timeline clip
   * @return {Boolean}
   * @else
   * @brief 是否为时间线剪辑
   * @return {Boolean}
   * @endif
   */
    isTimelineClip(): boolean;
    /**
   * @if ENGLISH
   * @brief Change the path of clip
   * @param {String} clipFilePath file path of clip
   * @return {Boolean}
   * @else
   * @brief 修改剪辑片段文件路径
   * @param {String} clipFilePath file path of clip
   * @return {Boolean}
   * @endif
   */
    changeClipFilePath(clipFilePath: string): boolean;
}
/**
 * @if ENGLISH
 * @brief Raw filter processing mode
 * @note None Default mode, all Raw filters have consistent input and output sizes, and are finally adapted to the timeline size according to the set fill mode.
 * @note VarSize The output size of all Raw filters is based on the actual output size of the filters, and finally, the fill mode is used to adapt to the size of the timeline.
 * @note VarSizeWithFillModeUsed The output size of all Raw filters is based on the actual output size of the filters, and finally adapted to the size of the timeline according to the set fill mode.
 * @else
 * @brief Raw滤镜的处理模式
 * @note None 默认模式，所有的Raw滤镜的输入输出尺寸一致，最后按照设置的填充模式适配到时间线的尺寸上
 * @note VarSize 所有的Raw滤镜的输出尺寸按照滤镜实际输出大小，最后使用fill填充模式适配到时间线的尺寸上
 * @note VarSizeWithFillModeUsed 所有的Raw滤镜的输出尺寸按照滤镜实际输出大小，最后按照设置的填充模式适配到时间线的尺寸上
 * @endif
 */
declare const NvsRawFilterProcessesMode: Readonly<{
    None: 0;
    VarSize: 1;
    VarSizeWithFillModeUsed: 2;
}>;
/**
 * @if ENGLISH
 * @brief Video clip, description of video file. The video clip source can be video or image. Each video clip can modify its trim in point, trim out point and playback speed, and can also set panning and scanning. When editing a video, you can add or insert multiple video effects according to different types of effects (built-in effects, wrapped effects, beauty effects). When adding resource pack effects, you have to install them first. After the installation is successful, you can use them only by obtaining the packageid, while builtin only needs to obtain the name of the effect.
 * @see NvsClip
 * @else
 * @brief 视频片段，对视频文件的描述。视频片段源可以是视频或者图片。每个视频片段可以修改其裁剪入点、裁剪出点以及播放速度，也可以设置摇摄和扫描。编辑视频时，可以按特效类型的不同（内建特效，包裹式特效，美颜特效）添加或者插入多个视频特效。 添加资源包特效时，都得先安装，安装成功后获取packageId才能使用，而内建特效(builtin)只需获取特效名称即可使用。
 * @see NvsClip
 * @endif
 */
declare class NvsVideoClip extends NvsClip {
    /**
   * @if ENGLISH
   * @brief Adds an audio effect to the end of the video clip.
   * @param {String} fxName Audio effect name.
   * @return {NvsAudioFx} Returns the appended audio effect object.
   * @else
   * @brief 在视频剪辑的末尾添加音频效果。
   * @param {String} fxName 音效名称。
   * @return {NvsAudioFx} 返回附加的音频效果对象。
   * @endif
   */
    appendAudioFx(fxName: string): NvsAudioFx;
    /**
   * @if ENGLISH
   * @brief Inserts an audio effect at the specified effect index on the video clip.
   * @param {String} fxName Audio effect name.
   * @param {Number} fxIndex Audio effects' index to insert at.
   * @return {NvsAudioFx} Returns the inserted audio effect object.
   * @else
   * @brief 在视频剪辑的指定效果索引处插入音频效果。
   * @param {String} fxName 音效名称。
   * @param {Number} fxIndex 要插入的音频效果索引。
   * @return {NvsAudioFx} 返回插入的音效对象。
   * @endif
   */
    insertAudioFx(fxName: string, fxIndex: number): NvsAudioFx;
    /**
   * @if ENGLISH
   * @brief Removes audio effect by index，The subsequent audioFx index moves forward.
   * @param {Number} fxIndex Audio effects' index. Range [0, getFxCount())
   * @return {Boolean} Determines if the audio effect is removed successfully. true means a successfull removal, false means failure.
   * @else
   * @brief 按索引移除音效，后续audioFx索引前移。
   * @param {Number} fxIndex 音频效果索引。范围 [0, getFxCount())
   * @return {Boolean} 确定音频效果是否成功移除。 true 表示移除成功，false 表示失败。
   * @endif
   */
    removeAudioFx(fxIndex: number): boolean;
    /**
   * @if ENGLISH
   * @brief Gets audio effect by index.
   * @param {Number} fxIndex Audio effects' index to insert at.
   * @return {NvsAudioFx} Returns the acquired audio effect object.
   * @else
   * @brief 通过索引获取音频效果。
   * @param {Number} fxIndex 要插入的音频效果索引。
   * @return {NvsAudioFx} 返回获取的音效对象。
   * @endif
   */
    getAudioFxByIndex(fxIndex: number): NvsAudioFx;
    /**
   * @if ENGLISH
   * @brief Gets the number of audio effects on the video clip. Note: The effect index on the clip starts from 0.
   * @return {Number} Returns the number of audio effects on the video clip.
   * @else
   * @brief 获取视频剪辑上的音频效果数。注意：剪辑上的效果索引从 0 开始。
   * @return {Number} 返回视频剪辑上的音频效果数。
   * @endif
   */
    getAudioFxCount(): number;
    /**
   * @if ENGLISH
   * @brief Appends built-in effect to clips.
   * @param {String} fxName The effect name. To get the video effect name, please refer to getAllBuiltinVideoFxNames() or built-in effect name list.
   * @return {NvsVideoFx} Returns the added video effect object.
   * @else
   * @brief 追加内置特效
   * @param {String} fxName 特效名字
   * @return {NvsVideoFx} 返回添加的视频效果对象。
   * @endif
   */
    appendBuiltinFx(fxName: string): NvsVideoFx;
    /**
   * @if ENGLISH
   * @brief Inserts a built-in effect at the specified effect index on the clip.
   * @param {String} fxName fx name
   * @param {Number} fxIndex fx index
   * @return {NvsVideoFx} Returns the inserted video effect object.
   * @else
   * @brief 插入内置特效
   * @param {String} fxName 特效名字
   * @param {Number} fxIndex 特效索引
   * @return {NvsVideoFx} 返回插入的视频效果对象。
   * @endif
   */
    insertBuiltinFx(fxName: string, fxIndex: number): NvsVideoFx;
    /**
   * @if ENGLISH
   * @brief Appends package effect to the clip.
   * @param {String} fxPackageId Effect resource package ID.
   * @return {NvsVideoFx} Returns the added video effect object.
   * @else
   * @brief 追加包特效
   * @param {String} fxPackageId 特效包ID
   * @return {NvsVideoFx} 返回添加的视频效果对象。
   * @endif
   */
    appendPackagedFx(fxPackageId: string): NvsVideoFx;
    /**
   * @if ENGLISH
   * @brief Inserts package effect at the specified effect index on the clip.
   * @param {String} fxPackageId Effect resource package ID.
   * @param {Number} fxIndex Effect index to insert at, please refer to getFxCount().
   * @return {NvsVideoFx} Returns the inserted video effect object.
   * @else
   * @brief 加入包特效
   * @param {String} fxPackageId 特效包ID
   * @param {Number} fxIndex 特效索引
   * @return {NvsVideoFx} 返回插入的视频效果对象。
   * @endif
   */
    insertPackagedFx(fxPackageId: string, fxIndex: number): NvsVideoFx;
    /**
   * @if ENGLISH
   * @brief Remove effect by index.
   * @param {Number} fxIndex Special effect index, please refer togetFxCount().
   * @return {Boolean} Determines whether the removal is successful. If it returns true, the removal is successful and if it returns false, it fails to remove.
   * @else
   * @brief 删除特效
   * @param {Number} fxIndex 特效索引
   * @return {Boolean} 确定删除是否成功。如果返回true，则删除成功，如果返回false，则删除失败。
   * @endif
   */
    removeFx(fxIndex: number): boolean;
    /**
   * @if ENGLISH
   * @brief Removes all audio effects.
   * @return {Boolean} Determines whether the removal is successful. If it returns true, the removal is successful and if it returns false, it fails to remove.
   * @else
   * @brief 删除所有音频特效。
   * @return {Boolean} 确定删除是否成功。如果返回true，则删除成功，如果返回false，则删除失败。
   * @endif
   */
    removeAllAudioFx(): boolean;
    /**
   * @if ENGLISH
   * @brief Removes all video effects.
   * @return {Boolean} Determines whether the removal is successful. If it returns true, the removal is successful and if it returns false, it fails to remove.
   * @else
   * @brief 删除所有视频特效。
   * @return {Boolean} 确定删除是否成功。如果返回true，则删除成功，如果返回false，则删除失败。
   * @endif
   */
    removeAllVideoFx(): boolean;
    /**
   * @if ENGLISH
   * @brief Removes all effects.
   * @return {Boolean} Determines whether the removal is successful. If it returns true, the removal is successful and if it returns false, it fails to remove.
   * @else
   * @brief 删除所有特效
   * @return {Boolean} 确定删除是否成功。如果返回true，则删除成功，如果返回false，则删除失败。
   * @endif
   */
    removeAllFx(): boolean;
    /**
   * @if ENGLISH
   * @brief Gets special effect by index.
   * @param {Number} fxIndex Special effect index, please refer to getFxCount().
   * @return {NvsVideoFx} Returns the obtained NvsVideoFx object.
   * @else
   * @brief 根据索引获取特效
   * @param {Number} fxIndex 特效索引
   * @return {NvsVideoFx} 返回获取到的 NvsVideoFx 对象。
   * @endif
   */
    getFxByIndex(fxIndex: number): NvsVideoFx;
    /**
   * @if ENGLISH
   * @brief Appends built-in effect on the raw input to clips.
   * @param {String} fxName The effect name.
   * @return {NvsVideoFx} Returns the added video effect object.
   * @else
   * @brief 追加原始内置特效
   * @param {String} fxName 特效名字
   * @return {NvsVideoFx} 返回添加的视频效果对象。
   * @endif
   */
    appendRawBuiltinFx(fxName: string): NvsVideoFx;
    /**
   * @if ENGLISH
   * @brief Inserts a built-in effect at the specified effect index on the raw input on the clip.
   * @param {String} fxName The effect name.
   * @param {Number} fxIndex Effect index to insert at.
   * @return {NvsVideoFx} Returns the inserted video effect object.
   * @else
   * @brief 插入原始内置特效
   * @param {String} fxName 特效名字
   * @param {Number} fxIndex 特效索引
   * @return {NvsVideoFx} 返回插入的视频效果对象。
   * @endif
   */
    insertRawBuiltinFx(fxName: string, fxIndex: number): NvsVideoFx;
    /**
   * @if ENGLISH
   * @brief Appends package effect on the raw input to the clip.
   * @param {String} fxPackageId Effect resource package ID.
   * @return {NvsVideoFx} Returns the added video effect object.
   * @else
   * @brief 追加原始包特效
   * @param {String} fxPackageId 特效包ID
   * @return {NvsVideoFx} 返回添加的视频效果对象。
   * @endif
   */
    appendRawPackagedFx(fxPackageId: string): NvsVideoFx;
    /**
   * @if ENGLISH
   * @brief Inserts package effect at the specified effect index on the raw input on the clip.
   * @param {String} fxPackageId Effect resource package ID.
   * @param {Number} fxIndex Effect index to insert at.
   * @return {NvsVideoFx} Returns the inserted video effect object.
   * @else
   * @brief 加入原始包特效
   * @param {String} fxPackageId 特效包ID
   * @param {Number} fxIndex 特效索引
   * @return {NvsVideoFx} 返回插入的视频效果对象。
   * @endif
   */
    insertRawPackagedFx(fxPackageId: string, fxIndex: number): NvsVideoFx;
    /**
   * @if ENGLISH
   * @brief Remove effect by index on the raw input.
   * @param {Number} fxIndex Special effect index.
   * @return {Boolean} Determines whether the removal is successful. If it returns true, the removal is successful and if it returns false, it fails to remove.
   * @else
   * @brief 删除原始特效
   * @param {Number} fxIndex 特效索引
   * @return {Boolean} 确定删除是否成功。如果返回true，则删除成功，如果返回false，则删除失败。
   * @endif
   */
    removeRawFx(fxIndex: number): boolean;
    /**
   * @if ENGLISH
   * @brief Gets the number of effects on the raw input on the clip. Note: The effect index on the clip starts from 0.
   * @return {Number} Returns the number of special effects on the clip.
   * @else
   * @brief 获取原始特效计数
   * @return {Number} 返回剪辑上特殊效果的数量。
   * @endif
   */
    getRawFxCount(): number;
    /**
   * @if ENGLISH
   * @brief Gets special effect by index on the raw input.
   * @param {Number} fxIndex Special effect index.
   * @return {NvsVideoFx} Returns the obtained video effect object.
   * @else
   * @brief 根据索引获取原始特效
   * @param {Number} fxIndex 特效索引
   * @return {NvsVideoFx} 返回获取到的视频效果对象。
   * @endif
   */
    getRawFxByIndex(fxIndex: number): NvsVideoFx;
    /**
   * @if ENGLISH
   * @brief Gets clip type.
   * @return {Number} Returns clip type.
   * @else
   * @brief 获取视频类型
   * @return {Number} 返回剪辑类型。
   * @endif
   */
    getVideoType(): number;
    /**
   * @if ENGLISH
   * @brief Gets the role of the clip in the theme.
   * @return {Number} Returns role of clip in the theme.
   * @else
   * @brief 获取主题角色
   * @return {Number} 返回主题中剪辑的角色。
   * @endif
   */
    getRoleInTheme(): number;
    /**
   * @if ENGLISH
   * @brief Sets whether the clip is reversed.
   * @param {Boolean} playInReverse Whether the clip is reversed.
   * @return {}
   * @else
   * @brief 设置反向播放
   * @param {Boolean} playInReverse 反向播放
   * @return {}
   * @endif
   */
    setPlayInReverse(playInReverse: boolean): any;
    /**
   * @if ENGLISH
   * @brief Gets whether the clip is reversed.
   * @return {Boolean} Returns whether the clip is reversed.
   * @else
   * @brief 获取反向播放
   * @return {Boolean} 返回剪辑是否反转。
   * @endif
   */
    getPlayInReverse(): boolean;
    /**
   * @if ENGLISH
   * @brief Sets the video's extra rotation angle.
   * @param {Number} rotation The extra rotation angle of the video.
   * @return {}
   * @else
   * @brief 设置扩展视频旋转
   * @param {Number} rotation 旋转
   * @return {}
   * @endif
   */
    setExtraVideoRotation(rotation: number): any;
    /**
   * @if ENGLISH
   * @brief Gets the video's extra rotation angle.
   * @return {Number} Returns the extra rotation angle of the video.
   * @else
   * @brief 获取扩展视频旋转
   * @return {Number} 返回视频的额外旋转角度。
   * @endif
   */
    getExtraVideoRotation(): number;
    /**
   * @if ENGLISH
   * @brief Sets pan and scan.The pan and scan functions are used to adapt the position and size of the image on the display window.
   * @param {Number} pan Pan
   * @param {Number} scan Scan
   * @return {}
   * @else
   * @brief 设置遥感和扫描
   * @param {Number} pan 遥感
   * @param {Number} scan 扫描
   * @return {}
   * @endif
   */
    setPanAndScan(pan: number, scan: number): any;
    /**
   * @if ENGLISH
   * @brief Gets pan and scan.
   * @return {NvsPanAndScan} Return the acquired pan and scan object.
   * @else
   * @brief 获取遥感和扫描
   * @return {NvsPanAndScan} 返回获取的遥感和扫描对象。
   * @endif
   */
    getPanAndScan(): NvsPanAndScan;
    /**
   * @if ENGLISH
   * @brief Sets background mode, Background Mode (ClIP_BACKGROUNDMODE).
   * @param {Number} mode Background mode.
   * @return {}
   * @else
   * @brief 设置源背景模式
   * @param {Number} mode 模式
   * @return {}
   * @endif
   */
    setSourceBackgroundMode(mode: number): any;
    /**
   * @if ENGLISH
   * @brief Gets background mode.
   * @return {Number} Returns the obtained background mode object, Background Mode (ClIP_BACKGROUNDMODE)
   * @else
   * @brief 获取源背景模式
   * @return {Number} 返回获取到的背景模式对象，背景模式 (ClIP_BACKGROUNDMODE)
   * @endif
   */
    getSourceBackgroundMode(): number;
    /**
   * @if ENGLISH
   * @brief Sets the background color.
   * @param {NvsColor} color The background color
   * @return {}
   * @else
   * @brief 设置源背景颜色
   * @param {NvsColor} color 颜色
   * @return {}
   * @endif
   */
    setSourceBackgroundColor(color: NvsColor): any;
    /**
   * @if ENGLISH
   * @brief Gets the background color.
   * @return {NvsColor} Background color
   * @else
   * @brief 获取源背景颜色
   * @return {NvsColor} 背景颜色
   * @endif
   */
    getSourceBackgroundColor(): NvsColor;
    /**
   * @if ENGLISH
   * @brief Sets image mode of operation.
   * @param {Number} mode Image clip mode of operation.
   * @return {}
   * @else
   * @brief 设置图像运动模式
   * @param {Number} mode 模式
   * @return {}
   * @endif
   */
    setImageMotionMode(mode: number): any;
    /**
   * @if ENGLISH
   * @brief Gets image clip operation mode.
   * @return {Number} Returns the integer value indicating the mode of operation of the image clip.
   * @else
   * @brief 获取图像运动模式
   * @return {Number} 返回表示图像剪辑操作模式的整数值。
   * @endif
   */
    getImageMotionMode(): number;
    /**
   * @if ENGLISH
   * @brief Sets whether to support image animation.
   * @param {Boolean} enabled Whether to support image animation. A value of true supports image animation, and false does not.
   * @return {}
   * @else
   * @brief 设置图像运动动画启用
   * @param {Boolean} enabled 开启
   * @return {}
   * @endif
   */
    setImageMotionAnimationEnabled(enabled: boolean): any;
    /**
   * @if ENGLISH
   * @brief enable image animation of motion or not
   * @return {Boolean}
   * @else
   * @brief 是否启用了图像运动动画
   * @return {Boolean}
   * @endif
   */
    /**

   */
    isImageMotionAnimationEnabled(): any;
    /**
   * @if ENGLISH
   * @brief Sets the clip's loop mode.
   * @param {Number} wrapMode Loop mode.(ClIP_WRAPMODE)
   * @return {}
   * @else
   * @brief 设置片段包装模式
   * @param {Number} wrapMode 包装模式
   * @return {}
   * @endif
   */
    setClipWrapMode(wrapMode: number): any;
    /**
   * @if ENGLISH
   * @brief Gets video loop mode.
   * @return {Number} Returns loop mode.(ClIP_WRAPMODE)
   * @else
   * @brief 获取片段包装模式
   * @return {Number} 返回循环模式。(ClIP_WRAPMODE)
   * @endif
   */
    getClipWrapMode(): number;
    /**
   * @if ENGLISH
   * @brief Disable audio streams
   * @param {Boolean} disabled disable or not.
   * @return {}
   * @else
   * @brief 禁止音频流
   * @param {Boolean} disabled 是否禁止
   * @return {}
   * @endif
   */
    disableAudioStreams(disabled: boolean): any;
    /**
   * @if ENGLISH
   * @brief Is audio streams disabled.
   * @return {Boolean} Disabled or not.
   * @else
   * @brief 音频流是否已禁止
   * @return {Boolean} 是否已禁止
   * @endif
   */
    isAudioStreamsDisabled(): boolean;
    /**
   * @if ENGLISH
   * @brief Sets the clip's hdr enable status.
   * @param {Boolean} enabled enable status.
   * @return {}
   * @else
   * @brief 启用片段冻结帧
   * @param {Boolean} enabled 开启
   * @return {}
   * @endif
   */
    enableClipFreezeFrame(enabled: boolean): any;
    /**
   * @if ENGLISH
   * @brief Gets video freeze frame enabled.
   * @return {Boolean} Turn on or not.
   * @else
   * @brief 是否启用了片段冻结帧
   * @return {Boolean} 开启与否。
   * @endif
   */
    isClipFreezeFrameEnabled(): boolean;
    /**
   * @if ENGLISH
   * @brief Sets the clip's freeze trim position.
   * @param {Number} trimPos freeze trim position(in microseconds).
   * @return {}
   * @else
   * @brief 设置片段冻结帧修剪位置
   * @param {Number} trimPos 裁剪点
   * @return {}
   * @endif
   */
    setClipFreezeFrameTrimPosition(trimPos: number): any;
    /**
   * @if ENGLISH
   * @brief Gets video freeze trim position(in microseconds).
   * @return {Number}
   * @else
   * @brief 获取剪辑冻结帧修剪位置
   * @return {Number}
   * @endif
   */
    getClipFreezeFrameTrimPosition(): number;
    /**
   * @if ENGLISH
   * @brief Gets the property effect of the video clip.
   * @return {NvsVideoFx} Returns the obtained NvsVideoFx object.
   * @else
   * @brief 获取属性视频特效
   * @return {NvsVideoFx} 返回获取到的 NvsVideoFx 对象。
   * @endif
   */
    getPropertyVideoFx(): NvsVideoFx;
    /**
   * @if ENGLISH
   * @brief Turn on special effect rendering based on the original scale of the video clip.
   * @param {Boolean} enable Turn on or not.
   * @return {}
   * @else
   * @brief 启用属性视频特效
   * @param {Boolean} enabled 开启
   * @return {}
   * @endif
   */
    enablePropertyVideoFx(enabled: boolean): any;
    /**
   * @if ENGLISH
   * @brief Gets whether the original scale rendering mode is turned on.
   * @return {Boolean} Turn on or not.
   * @else
   * @brief 获取是否开启原始比例渲染模式。
   * @return {Boolean} 开启与否。
   * @endif
   */
    isPropertyVideoFxEnabled(): boolean;
    /**
   * @if ENGLISH
   * @brief Set blending mode to video Clip.
   * @param {Number} mode new blending mode. (CLIP_BLENDING_MODE)
   * @return {}
   * @else
   * @brief 将混合模式设置为视频剪辑。
   * @param {Number} mode 新的混合模式。 (CLIP_BLENDING_MODE)
   * @return {}
   * @endif
   */
    setBlendingMode(mode: number): any;
    /**
   * @if ENGLISH
   * @brief Get blending mode from video Clip.
   * @return {Number} current Clip blending mode. (CLIP_BLENDING_MODE)
   * @else
   * @brief 从视频剪辑中获取混合模式。
   * @return {Number} 当前剪辑混合模式。 (CLIP_BLENDING_MODE)
   * @endif
   */
    getBlendingMode(): number;
    /**
   * @if ENGLISH
   * @brief Sets clip's dynamic move ROI.
   * @param {Rect} startROI clip's starting ROI.
   * @param {Rect} endROI clip's terminating ROI.
   * @return {}
   * @else
   * @brief 设置剪辑的动态移动 ROI。
   * @param {Rect} startROI 剪辑的起始 ROI。
   * @param {Rect} endROI 剪辑的结束 ROI。
   * @return {}
   * @endif
   */
    setImageMotionROI(startROI: Rect, endROI: Rect): any;
    /**
   * @if ENGLISH
   * @brief Gets the image clip's starting ROI.
   * @return {Rect} Returns a RectF object representing the starting ROI of the image clip.
   * @else
   * @brief 获取图像剪辑的起始 ROI。
   * @return {Rect} 返回表示图像剪辑的起始 ROI 的 RectF 对象。
   * @endif
   */
    getStartROI(): Rect;
    /**
   * @if ENGLISH
   * @brief Gets image clip's terminating ROI.
   * @return {Rect} Returns a RectF object indicating that the image clip's terminating ROI.
   * @else
   * @brief 获取图像剪辑的终止 ROI。
   * @return {Rect} 返回指示图像剪辑的终止 ROI 的 RectF 对象。
   * @endif
   */
    getEndROI(): Rect;
    /**
   * @if ENGLISH
   * @brief Sets reference image fill mode.
   * @param {Number} mode Fill mode.
   * @return {}
   * @else
   * @brief 小图模式下设置片段的填充模式
   * @param {Number} mode 填充模式
   * @return {}
   * @endif
   */
    setRefImageFillMode(mode: number): any;
    /**
   * @if ENGLISH
   * @brief Gets reference image fill mode.
   * @return {Number} Current reference image fill mode.
   * @else
   * @brief 小图模式下获取片段的填充模式
   * @return {Number} 当前的填充模式
   * @endif
   */
    getRefImageFillMode(): number;
    /**
   * @if ENGLISH
   * @brief Sets reference image size.
   * @param {Number} width Width.
   * @param {Number} height Height.
   * @return {}
   * @else
   * @brief 小图模式下设置片段的尺寸
   * @param {Number} width 宽度
   * @param {Number} height 高度
   * @return {}
   * @endif
   */
    setRefImageSize(width: number, height: number): any;
    /**
   * @if ENGLISH
   * @brief Gets reference image size.
   * @return {NvsVideoResolution} Reference image size.
   * @else
   * @brief 小图模式下获取片段的尺寸
   * @return {NvsVideoResolution} 片段尺寸
   * @endif
   */
    getRefImageSize(): NvsVideoResolution;
    /**
   * @if ENGLISH
   * @brief Sets reference image background color.
   * @param {NvsColor} color Background color.
   * @return {}
   * @else
   * @brief 小图模式下设置片段的背景颜色
   * @param {NvsColor} color 背景颜色
   * @return {}
   * @endif
   */
    setRefImageBackgroundColor(color: NvsColor): any;
    /**
   * @if ENGLISH
   * @brief Gets reference image background color.
   * @return {NvsColor} Current reference image background color.
   * @else
   * @brief 小图模式下获取片段的背景颜色
   * @return {NvsColor} 当前的背景颜色
   * @endif
   */
    getRefImageBackgroundColor(): NvsColor;
    /**
   * @if ENGLISH
   * @brief Sets reference image background blur radius.
   * @param {Number} radius Background blur radius.
   * @return {}
   * @else
   * @brief 小图模式下设置片段的背景模糊程度
   * @param {Number} radius 背景模糊程度
   * @return {}
   * @endif
   */
    setRefImageBackgroundBlurRadius(radius: number): any;
    /**
   * @if ENGLISH
   * @brief Gets reference image background blur radius.
   * @return {Number} Current reference image background blur radius.
   * @else
   * @brief 小图模式下获取片段的背景模糊程度
   * @return {Number} 背景模糊程度
   * @endif
   */
    getRefImageBackgroundBlurRadius(): number;
    /**
   * @if ENGLISH
   * @brief Enable raw source mode of the video clip.
            If raw source mode is enabled, SetPanAndScan, GetPanAndScan, DisableAmbiguousCrop, IsAmbiguousCropDisabled,
            SetImageMotionMode, ImageMotionMode, SetImageMotionROI, GetImageMotionROI, SetImageMotionAnimationEnabled,
            IsImageMotionAnimationEnabled, SetImageMaskROI and GetImageMaskROI are invalid.
            If property fx enabled, the parameters related are invalid also.
   * @param {Boolean} enable Enable or not.
   * @return {}
   * @else
   * @brief 开启原始画幅的模式。
            当这个模式开启后, SetPanAndScan, GetPanAndScan, DisableAmbiguousCrop, IsAmbiguousCropDisabled,
            SetImageMotionMode, ImageMotionMode, SetImageMotionROI, GetImageMotionROI, SetImageMotionAnimationEnabled,
            IsImageMotionAnimationEnabled, SetImageMaskROI和GetImageMaskROI都已经无效。
            如果开启了属性特技，属性特技中对应的上述相关参数也是没有效果的。
   * @param {Boolean} enable 是否开启
   * @return {}
   * @endif
   */
    enableRawSourceMode(enable: boolean): any;
    /**
   * @if ENGLISH
   * @brief Raw source mode is enabled or not.
   * @return {Boolean} Enabled or not.
   * @else
   * @brief 原始画幅模式是否已开启。
   * @return {Boolean} 开启与否。
   * @endif
   */
    isRawSourceModeEnabled(): boolean;
    /**
   * @if ENGLISH
   * @brief Get the first caption on video clip.
   * @return {NvsClipCaption} Return the NvsClipCaption object.
   * @else
   * @brief 获取片段上第一个字幕
   * @return {NvsClipCaption} 返回 NvsClipCaption 对象。
   */
    getFirstCaption(): NvsClipCaption;
    /**
   * @if ENGLISH
   * @brief Get the last caption on video clip.
   * @return {NvsClipCaption} Returns the NvsClipCaption object.
   * @else
   * @brief 获取片段上最后一个字幕
   * @return {NvsClipCaption} 返回 NvsClipCaption 对象。
   */
    getLastCaption(): NvsClipCaption;
    /**
   * @if ENGLISH
   * @brief Get the previous caption of the current caption on video clip.
   * @param {NvsClipCaption} caption The current caption on video clip
   * @return {NvsClipCaption} Returns the NvsClipCaption object.
   * @else
   * @brief 获取片段上当前字幕的前一个字幕
   * @param {NvsClipCaption} caption 片段上当前字幕
   * @return {NvsClipCaption} 返回 NvsClipCaption 对象。
   */
    getPrevCaption(caption: NvsClipCaption): NvsClipCaption;
    /**
   * @if ENGLISH
   * @brief Get the next caption of the current caption on video clip.
   * @param {NvsClipCaption} caption The current caption on video clip
   * @return {NvsClipCaption} Returns the NvsClipCaption object.
   * @else
   * @brief 获取片段上当前字幕的后一个字幕
   * @param {NvsClipCaption} caption 片段上当前字幕
   * @return {NvsClipCaption} 返回 NvsClipCaption 对象。
   */
    getNextCaption(caption: NvsClipCaption): NvsClipCaption;
    /**
   * @if ENGLISH
   * @brief Get a list of captions based on the position on video clip.
   * @param {Number} clipTimePos The position on video clip(in micro-second)
   * @return {NvsVectorVal<NvsClipCaption>} Returns a list of arrays of captions at the current position.
       The sorting rules for the obtained captions list are as follows:
       1.When adding, the in points are different, and captions are arranged in the order of the in points;
       2.When adding, the in points are the same, and captions are arranged in the order of adding captions.
   * @else
   * @brief 根据片段位置获取字幕
   * @param {Number} clipTimePos 片段位置
   * @return {NvsVectorVal<NvsClipCaption>} 返回当前位置的字幕数组列表。
       得到的字幕列表排序规则如下：
       1.添加时，入点不同，字幕按入点顺序排列；
       2.添加时，入点相同，字幕按照添加字幕的顺序排列。
   */
    getCaptionsByClipTimePosition(clipTimePos: number): NvsVectorVal<NvsClipCaption>;
    /**
   * @if ENGLISH
   * @brief Add a caption on video clip.
   * @param {String} captionText caption text
   * @param {Number} inPoint in point
   * @param {Number} duration duration
   * @param {String} captionStylePackageId caption style package id
   * @param {Boolean} isPanoramic panoramic or not
   * @return {NvsClipCaption} Returns the NvsClipCaption object.
       It will return null in the following situations:
       1. No caption function authorization;
       2. If inPoint is less than 0 or greater than or equal to the current video clip duration, or duration is not greater than 0.
   * @else
   * @brief 添加字幕
   * @param {String} captionText 字幕文本
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @param {String} captionStylePackageId 字幕风格包ID
   * @param {Boolean} isPanoramic 是否是全景
   * @return {NvsClipCaption} 返回 NvsClipCaption 对象。
       在以下情况下会返回null：
       1. 无字幕功能授权；
       2. 如果 inPoint 小于 0 或者大于等于当前片段的持续时间，或者持续时间不大于 0。
   */
    addCaption(captionText: string, inPoint: number, duration: number, captionStylePackageId: string, isPanoramic: boolean): NvsClipCaption;
    /**
   * @if ENGLISH
   * @brief add modular caption
   * @param {String} captionText caption text
   * @param {Number} inPoint in point
   * @param {Number} duration duration
   * @return {NvsClipCaption} Returns the NvsClipCaption object.
       It will return null in the following situations:
       1. No caption function authorization;
       2. If inPoint is less than 0 or greater than or equal to the current video clip duration, or duration is not greater than 0.
   * @else
   * @brief 添加模块化字幕
   * @param {String} captionText 字幕文本
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @return {NvsClipCaption} 返回 NvsClipCaption 对象。
     它会在以下情况下返回 null：
     1、无字幕功能授权；
     2. 如果 inPoint 小于 0 或者大于等于当前片段的持续时间，或者持续时间不大于 0。
   */
    addModularCaption(captionText: string, inPoint: number, duration: number): NvsClipCaption;
    /**
   * @if ENGLISH
   * @brief Remove the caption on video clip.
   * @param {NvsClipCaption} caption The caption need to be removed
   * @return {NvsClipCaption} Returns the next NvsClipCaption object.
   * @else
   * @brief 删除字幕
   * @param {NvsClipCaption} caption 字幕对象
   * @return {NvsClipCaption} 返回下一个 NvsClipCaption 对象。
   */
    removeCaption(caption: NvsClipCaption): NvsClipCaption;
    /**
   * @if ENGLISH
   * @brief Get the first compound caption on video clip.
   * @return {NvsClipCompoundCaption} Returns the compound caption object.
   * @else
   * @brief 获取片段上第一个复合字幕
   * @return {NvsClipCompoundCaption} 返回复合字幕对象。
   */
    getFirstCompoundCaption(): NvsClipCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get the last compound caption on video clip.
   * @return {NvsClipCompoundCaption} Returns the compound caption object.
   * @else
   * @brief 获取片段上最后一个复合字幕
   * @return {NvsClipCompoundCaption} 返回复合字幕对象。
   */
    getLastCompoundCaption(): NvsClipCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get the previous compound caption of the current compound caption on video clip.
   * @param {NvsClipCompoundCaption} caption The current compound caption on video clip
   * @return {NvsClipCompoundCaption} Returns the compound caption object.
   * @else
   * @brief 获取片段上当前复合字幕的前一个复合字幕
   * @param {NvsClipCompoundCaption} caption 片段上当前复合字幕
   * @return {NvsClipCompoundCaption} 返回复合字幕对象。
   */
    getPrevCompoundCaption(caption: NvsClipCompoundCaption): NvsClipCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get the next compound caption of the current caption on video clip.
   * @param {NvsClipCompoundCaption} caption The current compound caption on video clip
   * @return {NvsClipCompoundCaption} Returns the compound caption object.
   * @else
   * @brief 获取片段上当前复合字幕的后一个复合字幕
   * @param {NvsClipCompoundCaption} caption 片段上当前复合字幕
   * @return {NvsClipCompoundCaption} 返回复合字幕对象。
   */
    getNextCompoundCaption(caption: NvsClipCompoundCaption): NvsClipCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get a list of compound captions based on the position on video clip.
   * @param {Number} clipTimePos The position on video clip(in micro-second)
   * @return {NvsVectorVal<NvsClipCompoundCaption>} Returns a list of compound captions at the current position。
       The sorting rules for the obtained captions list are as follows:
       1. If the in points are different, captions are sorted in the order of the in points;
       2. If the in points are the same, and captions are sorted in the order of compound caption added.
   * @else
   * @brief 根据片段位置，获取复合字幕
   * @param {Number} clipTimePos 片段位置
   * @return {NvsVectorVal<NvsClipCompoundCaption>} 返回当前位置的复合字幕列表。
       获取到的字幕列表排序规则如下：
       1.如果入点不同，字幕按入点排序；
       2.如果入点相同，则字幕按照添加复合字幕的顺序排列。
   */
    getCompoundCaptionsByClipTimePosition(clipTimePos: number): NvsVectorVal<NvsClipCompoundCaption>;
    /**
   * @if ENGLISH
   * @brief add compound caption
   * @param {Number} inPoint in point
   * @param {Number} duration duration
   * @param {String} compoundCaptionPackageId compound caption package id
   * @return {NvsClipCompoundCaption}
   * @else
   * @brief 添加复合字幕
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @param {String} compoundCaptionPackageId 组合字幕包ID
   * @return {NvsClipCompoundCaption}
   */
    addCompoundCaption(inPoint: number, duration: number, compoundCaptionPackageId: string): NvsClipCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Remove compound caption from video clip.
   * @param {NvsClipCompoundCaption} caption The compound caption need to be removed
   * @return {NvsClipCompoundCaption} Returns the next compound caption object.
   * @else
   * @brief 删除复合字幕
   * @param {NvsClipCompoundCaption} caption 字幕对象
   * @return {NvsClipCompoundCaption} 返回下一个复合字幕对象。
   */
    removeCompoundCaption(caption: NvsClipCompoundCaption): NvsClipCompoundCaption;
    /**
   * @if ENGLISH
   * @brief Get the first animated sticker on video clip.
   * @return {NvsClipAnimatedSticker} Return the NvsClipAnimatedSticker object.
   * @else
   * @brief 获取片段上第一个动画贴纸
   * @return {NvsClipAnimatedSticker} 返回 NvsClipAnimatedSticker 对象。
   */
    getFirstAnimatedSticker(): NvsClipAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get the last animated sticker on video clip.
   * @return {NvsClipAnimatedSticker} Return the NvsClipAnimatedSticker object.
   * @else
   * @brief 获取最后一个动画贴纸
   * @return {NvsClipAnimatedSticker} 返回 NvsClipAnimatedSticker 对象。
   */
    getLastAnimatedSticker(): NvsClipAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get the previous animated sticker of the current animated sticker of video clip.
   * @param {NvsClipAnimatedSticker} animatedSticker The current animated sticker of video clip
   * @return {NvsClipAnimatedSticker} The previous animated sticker.
   * @else
   * @brief 获取片段上当前动画贴纸的前一个动画贴纸
   * @param {NvsClipAnimatedSticker} animatedSticker 片段上当前动画贴纸
   * @return {NvsClipAnimatedSticker} 前一个动画贴纸
   */
    getPrevAnimatedSticker(animatedSticker: NvsClipAnimatedSticker): NvsClipAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get the next animated sticker of the current animated sticker of video clip.
   * @param {NvsClipAnimatedSticker} animatedSticker The current animated sticker of video clip
   * @return {NvsClipAnimatedSticker} The next animated sticker.
   * @else
   * @brief 获取片段上当前动画贴纸的后一个动画贴纸
   * @param {NvsClipAnimatedSticker} animatedSticker 片段上当前动画贴纸
   * @return {NvsClipAnimatedSticker} 后一个动画贴纸
   */
    getNextAnimatedSticker(animatedSticker: NvsClipAnimatedSticker): NvsClipAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Get an animated sticker list based on the position on video clip.
   * @param {Number} clipTimePos Position on video clip (in microseconds)
   * @return {NvsVectorVal<NvsClipAnimatedSticker>} Returns a list which holding the current position animated sticker object
       The sorting rules for the obtained animated sticker list are as follows:
       1.When adding, the in points are different,animated stickers are arranged in the order of the in points;
       2.When adding, the in points are the same, they are arranged in the order in which the animation stickers are added.
   * @else
   * @brief 根据片段位置获取动画贴纸
   * @param {Number} clipTimePos 片段位置
   * @return {NvsVectorVal<NvsClipAnimatedSticker>} 返回一个包含当前位置动画贴纸对象的列表
       得到的动画贴纸列表排序规则如下：
       1.添加时入点不同，动画贴图按入点顺序排列；
       2.添加时，入点相同，按添加动画贴的顺序排列。
   */
    getAnimatedStickersByClipTimePosition(clipTimePos: number): NvsVectorVal<NvsClipAnimatedSticker>;
    /**
   * @if ENGLISH
   * @brief add animated sticker
   * @param {Number} inPoint The in point of the animated sticker on video clip (in microseconds)
   * @param {Number} duration The duration of the animation sticker which displayed (in microseconds)
   * @param {String} animatedStickerPackageId Animated sticker packageId
   * @param {Boolean} isPanoramic Panoramic or not
   * @param {Boolean} isCustom Customize or not
   * @param {String} customImagePath Custome image path
   * @return {NvsClipAnimatedSticker} Return the NvsClipAnimatedSticker object.
       It will return null in the following situations:
       1. No animated sticker function authorization;
       2. The animatedStickerPackageId is empty or null;
       3. The animatedSticker has not install successed;
       4. If inPoint is less than 0 or greater than or equal to the current video clip duration, or duration is not greater than 0.
   * @else
   * @brief 添加动画贴纸
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @param {String} animatedStickerPackageId 动画贴纸包ID
   * @param {Boolean} isPanoramic 是否是全景
   * @param {Boolean} isCustom 是否自定制
   * @param {String} customImagePath 自定制图片路径
   * @return {NvsClipAnimatedSticker} 返回 NvsClipAnimatedSticker 对象。
       它会在以下情况下返回 null：
       1. 无动画贴纸功能授权；
       2. animatedStickerPackageId 为空或null；
       3. 动画贴纸没有安装成功；
       4. 如果 inPoint 小于 0 或大于等于当前片段的持续时间，或者持续时间不大于 0。
   */
    addAnimatedSticker(inPoint: number, duration: number, animatedStickerPackageId: string, isPanoramic: boolean, isCustom: boolean, customImagePath: string): NvsClipAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Remove an animated sticker on video clip.
   * @param {NvsClipAnimatedSticker} animatedSticker The animated sticker need to be removed
   * @return {NvsClipAnimatedSticker} Return the next animated sticker object.
   * @else
   * @brief 删除动画贴纸
   * @param {NvsClipAnimatedSticker} animatedSticker 动画贴纸
   * @return {NvsClipAnimatedSticker} 返回下一个动画贴纸
   */
    removeAnimatedSticker(animatedSticker: NvsClipAnimatedSticker): NvsClipAnimatedSticker;
    /**
   * @if ENGLISH
   * @brief Set raw filter processing mode.
   * @param {Number} mode processing mode. (NvsRawFilterProcessesMode)
   * @return {}
   * @else
   * @brief 设置Raw滤镜的处理模式。
   *        默认处理模式是所有的Raw滤镜输入输出尺寸都是和媒体文件的分辨率一致的
   *        当这个模式开启后，所有的Raw滤镜都会按照变尺寸模式进行处理，最后会按照FillModeFill的模式适配到时间线的尺寸上。
   *        当处理模式为NvsRawFilterProcessesMode.VarSizeWithFillModeUsed，最后会按照设置的填充模式适配到时间线的尺寸
   * @param {Number} mode 处理模式。 (NvsRawFilterProcessesMode)
   * @return {}
   * @endif
   */
    setRawFilterProcessesMode(mode: number): any;
    /**
   * @if ENGLISH
   * @brief Get raw filter processing mode.
   * @return {Number} Current raw filter processing mode. (NvsRawFilterProcessesMode)
   * @else
   * @brief 获取Raw滤镜的处理模式。
   * @return {Number} Raw滤镜当前的处理模式。 (NvsRawFilterProcessesMode)
   * @endif
   */
    getRawFilterProcessesMode(): number;
}
/**
 * @if ENGLISH
 * @brief Audio clip, description of audio file. You can also modify the trim in point and out point of audio clip, insert and remove multiple audio special effects, as well as the playback speed.
 * @see NvsClip
 * @else
 * @brief 音频片段，对音频文件的描述。音频片段既可以修改其裁剪入点和出点，播放速度等，还可以添加、插入、移除以及获取多个音频特效。
 * @see NvsClip
 * @endif
 */
declare class NvsAudioClip extends NvsClip {
    /**
   * @if ENGLISH
   * @brief Adds an audio effect to the end of the audio clip.
   * @param {String} fxName Audio effect name
   * @return {NvsAudioFx} Returns the appended audio effect object.Returns the appended audio effect object.This interface causes the streaming engine state to jump to the engine stop state.
   * @else
   * @brief 追加特效
   * @param {String} fxName 特效名字
   * @return {NvsAudioFx} 返回附加的音效对象。返回附加的音效对象。该接口使流媒体引擎状态跳转到引擎停止状态。
   * @endif
   */
    appendFx(fxName: string): NvsAudioFx;
    /**
   * @if ENGLISH
   * @brief Inserts an audio effect at the specified effect index on the audio clip.
   * @param {String} fxName Audio effect name.For information about getting all effects' names
   * @param {Number} fxIndex Audio effects' index to insert at. Range [0, getFxCount() - 1 ). If index is outOfRange,It will be add in the end.
   * @return {NvsAudioFx} Returns the inserted audio effect object.This interface will cause the streaming engine state to jump to the engine stop state.
   * @else
   * @brief 插入特效
   * @param {String} fxName 特效名字
   * @param {Number} fxIndex 特效索引
   * @return {NvsAudioFx} 返回插入的音效对象。该接口会导致流媒体引擎状态跳转到引擎停止状态。
   * @endif
   */
    insertFx(fxName: string, fxIndex: number): NvsAudioFx;
    /**
   * @if ENGLISH
   * @brief Removes audio effect by index, The subsequent audioFx index moves forward.Determines if the audio effect is removed successfully. true means a successfull removal, false means failure.This interface causes the streaming engine state to jump to the engine stop state
   * @param {Number} fxIndex Audio effects' index. Range [0, getFxCount())
   * @return {Boolean} Removes the special effect from the specified index，The subsequent audioFx index moves forward.
   * @else
   * @brief 删除特效
   * @param {Number} fxIndex 特效索引
   * @return {Boolean} 从指定索引中移除特效，后续audioFx索引前移。
   * @endif
   */
    removeFx(fxIndex: number): boolean;
    /**
   * @if ENGLISH
   * @brief Gets audio effect by index.
   * @param {Number} fxIndex Audio effect's index. Range [0, getFxCount())
   * @return {NvsAudioFx} Returns the acquired audio effect object.
   * @else
   * @brief 根据索引获取特效
   * @param {Number} fxIndex 特效索引
   * @return {NvsAudioFx} 返回获取的音效对象。
   * @endif
   */
    getFxByIndex(fxIndex: number): NvsAudioFx;
    /**
   * @if ENGLISH
   * @brief Configuration of audio streaming index
   * @param {Number} streamIndex The stream index
   * @return {}
   * @else
   * @brief 设置音频流索引
   * @param {Number} streamIndex 流索引
   * @return {}
   * @endif
   */
    setAudioStreamIndex(streamIndex: number): any;
    /**
   * @if ENGLISH
   * @brief Get index of audio stream
   * @return {NvsAudioStreamInfo}
   * @else
   * @brief 获取音频流索引
   * @return {NvsAudioStreamInfo}
   * @endif
   */
    getAudioSteramIndex(): NvsAudioStreamInfo;
}
/**
 * @if ENGLISH
 * @brief pan and scan
 * @else
 * @brief 遥感扫描类
 * @endif
 */
declare class NvsPanAndScan {
    /**
   * @constructor
   * @if ENGLISH
   * @param {} pan pan
   * @param {} scan scan
   * @else
   * @param {} pan 遥感
   * @param {} scan 扫描
   * @endif
   */
    constructor(pan: any, scan: any);
    pan: any;
    scan: any;
}
/**
 * @if ENGLISH
 * @brief volume
 * @else
 * @brief 音量类，设置音量的左右声道
 * @endif
 */
declare class NvsVolume {
    /**
   * @constructor
   * @if ENGLISH
   * @param {Number} leftVolume Left volume channel
   * @param {Number} rightVolume Right volume channel
   * @else
   * @param {} leftVolume 左边音量
   * @param {} rightVolume 右边音量
   * @endif
   */
    constructor(leftVolume: number, rightVolume: number);
    leftVolume: number;
    rightVolume: number;
}
/**
 * @if ENGLISH
 * @brief Custom color class
   In the SDK, the NvsColor class attributes, namely r, g, b and a, range [0, 1] instead of [0, 255].
 * @else
 * @brief 自定义颜色类
   SDK中，NvsColor类属性r,g,b,a取值范围是[0,1]，而非[0,255]。
 * @endif
 */
declare class NvsColor {
    /**
   * @constructor
   * @if ENGLISH
   * @param {Number} r red
   * @param {Number} g green
   * @param {Number} b blue
   * @param {Number} a alpha
   * @else
   * @param {Number} r 红
   * @param {Number} g 绿
   * @param {Number} b 蓝
   * @param {Number} a 透明度
   * @endif
   */
    constructor(r: number, g: number, b: number, a: number);
    r: number;
    g: number;
    b: number;
    a: number;
}
/**
 * @if ENGLISH
 * @brief Two dimensional coordinates point, parameter type is double or float.
 * @else
 * @brief 二维坐标点结构。 参数类型为双精度浮点数。
 * @endif
 */
declare class NvsPointF {
    /**
   * @constructor
   * @if ENGLISH
   * @param {Number} x x-coordinate
   * @param {Number} y y-coordinate
   * @else
   * @param {Number} x x坐标
   * @param {Number} y y坐标
   * @endif
   */
    constructor(x: number, y: number);
    x: number;
    y: number;
}
/**
 * @if ENGLISH
 * @brief rectangular
 * @else
 * @brief 矩形类
 * @endif
 */
declare class NvsRectF {
    /**
   * @constructor
   * @if ENGLISH
   * @param {Number} left left
   * @param {Number} top top
   * @param {Number} right right
   * @param {Number} bottom bottom
   * @else
   * @param {Number} left  左
   * @param {Number} top 上
   * @param {Number} right 右
   * @param {Number} bottom 下
   * @endif
   */
    constructor(left: number, top: number, right: number, bottom: number);
    left: number;
    top: number;
    right: number;
    bottom: number;
}
/**
 * @if ENGLISH
 * @brief watermark information
 * @else
 * @brief 水印信息类
 * @endif
 */
declare class NvsWatermarkInfo {
    /**
   * @constructor
   * @if ENGLISH
   * @param {Number} sceneWidth scene width
   * @param {Number} sceneHeight scene height
   * @param {ImageData} imageName image name
   * @param {Number} imgWidth image width
   * @param {Number} imgHeight image height
   * @param {Number} tx
   * @param {Number} ty
   * @param {String} dirPath
   * @param {Number} opacity
   * @else
   * @param {Number} sceneWidth 场景宽度
   * @param {Number} sceneHeight 场景高度
   * @param {ImageData} imageName 图片名字
   * @param {Number} imgWidth 图片宽度
   * @param {Number} imgHeight 图片高度
   * @param {Number} tx
   * @param {Number} ty
   * @param {String} dirPath
   * @param {Number} opacity
   * @endif
   */
    constructor(sceneWidth: number, sceneHeight: number, imageName: ImageData, imgWidth: number, imgHeight: number, tx: number, ty: number, dirPath: string, opacity: number);
    sceneWidth: number;
    sceneHeight: number;
    imageName: ImageData;
    imgWidth: number;
    imgHeight: number;
    tx: number;
    ty: number;
    dirPath: string;
    opacity: number;
}
/**
 * @if ENGLISH
 * @brief Asset package error enum
 * @note NoError No error
 * @note NameError Name error
 * @note AlreadyInstalledError Already installed
 * @note WorkingInProgress Working in progress
 * @note NotInstalledError Not installed error
 * @note ImproperStatusError Improper status error
 * @note DecompressionError Decompression error
 * @note InvalidPackageError Invalid package error
 * @note AssetTypeError Asset type error
 * @note PermissionError Permission error
 * @note MetaContentError Meta content error
 * @note SdkVersionError Sdk version error
 * @note UpgradeVersionError Upgrade version error
 * @note IOError IO error
 * @note ResourceError Resource error
 * @else
 * @brief 资源包错误枚举
 * @note NoError 没有错误
 * @note NameError 名称错误
 * @note AlreadyInstalledError 已安装
 * @note WorkingInProgress 安装中
 * @note NotInstalledError 没有安装
 * @note ImproperStatusError 非正常状态错误
 * @note DecompressionError 解压错误
 * @note InvalidPackageError 无效的包错误
 * @note AssetTypeError 包类型错误
 * @note PermissionError 权限错误
 * @note MetaContentError 内部数据错误
 * @note SdkVersionError Sdk版本号错误
 * @note UpgradeVersionError 升级版本号错误
 * @note IOError 读写文件错误
 * @note ResourceError 资源错误
 * @endif
 */
declare const NvsAssetPackageErrorEnum: Readonly<{
    NoError: 0;
    NameError: 1;
    AlreadyInstalledError: 2;
    WorkingInProgress: 3;
    NotInstalledError: 4;
    ImproperStatusError: 5;
    DecompressionError: 6;
    InvalidPackageError: 7;
    AssetTypeError: 8;
    PermissionError: 9;
    MetaContentError: 10;
    SdkVersionError: 11;
    UpgradeVersionError: 12;
    IOError: 13;
    ResourceError: 14;
}>;
/**
 * @if ENGLISH
 * @brief The asset package manager manages the asset packages in the video scene.
   During the development of SDK, the asset package manager uniformly installs, upgrades and uninstalls various stunt asset packages needed, including captions, animated stickers, etc.
   When installing, upgrading and uninstalling, there will be corresponding error prompt types in case of errors, so as to quickly locate and solve the errors.
 * @else
 * @brief 资源包管理器，管理视频场景中的资源包。
   在SDK开发过中，资源包管理器统一对需要的各种特技资源包，包括字幕、动画贴纸等进行相应的安装，升级，卸载等操作。
   在安装，升级，卸载时，出现差错都会有相应的错误提示类型，以便快速定位和解决错误。
 * @endif
 */
declare class NvsAssetPackageManager {
    internalObj: number;
    onFinishAssetPackageInstallation: (assetPackageId: any, assetPackageFilePath: any, assetPackageType: any, error: any) => void;
    onFinishAssetPackageUpgrading: (assetPackageId: any, assetPackageFilePath: any, assetPackageType: any, error: any) => void;
    onFinishTemplatePackageGenerate: (assetPackageFilePath: any, error: any) => void;
    /**
     * @if ENGLISH
     * @brief Set internal object
     * @param {Object} obj Internal object
     * @else
     * @brief 设置内置对象
     * @param {Object} obj 内置对象
     * @endif
     */
    setInternalObject(obj: any): void;
    /**
     * @if ENGLISH
     * @brief Get internal object
     * @return {Object}
     * @else
     * @brief 获取内置对象
     * @return {Object}
     * @endif
     */
    getInternalObject(): any;
    /**
     * @if ENGLISH
     * @brief Install asset package.
       After calling this funtion, onFinishAssetPackageInstallation will be received with the result of installation.
       onFinishAssetPackageInstallation contains assetPackageId, assetPackageFilePath, assetPackageType and error parameters.
       assetPackageId is the asset package id of the finished installation,
       assetPackageFilePath is the asset package file path of the finished installation,
       assetPackageType is the asset package type of the finished installation,
       error is the error of the finished installation, see {@link NvsAssetPackageErrorEnum}.
     * @param {String} assetPackageFilePath File path of the asset package to be installed
     * @param {String} licenseFilePath License file path of the asset package to be installed
     * @param {Number} type The type of asset package to be installed, see {@link NvsAssetPackageTypeEnum}.
     * @else
     * @brief 安装资源包
       调用此函数后，会接收到回调函数onFinishAssetPackageInstallation返回安装结果。
       onFinishAssetPackageInstallation返回参数包括assetPackageId、assetPackageFilePath、assetPackageType和error。
       assetPackageId是当前安装完成的资源包id，
       assetPackageFilePath是当前安装完成的资源包文件路径，
       assetPackageType是当前安装完成的资源包类型，
       error是当前安装完成的错误码，参看{@link NvsAssetPackageErrorEnum}。
     * @param {String} assetPackageFilePath 资源包文件路径
     * @param {String} licenseFilePath 授权文件路径
     * @param {Number} type 资源类型，参看{@link NvsAssetPackageTypeEnum}
     * @endif
     */
    installAssetPackage(assetPackageFilePath: string, licenseFilePath: string, type: number): any;
    /**
     * @if ENGLISH
     * @brief Upgrade asset package.
       After calling this funtion, onFinishAssetPackageUpgrading will be received with the result of upgrading.
       onFinishAssetPackageUpgrading contains assetPackageId, assetPackageFilePath, assetPackageType and error parameters.
       assetPackageId is the asset package id of the finished upgrading,
       assetPackageFilePath is the asset package file path of the finished upgrading,
       assetPackageType is the asset package type of the finished upgrading,
       error is the error of the finished upgrading, see {@link NvsAssetPackageErrorEnum}.
     * @param {String} assetPackageFilePath File path of the asset package to upgrade
     * @param {String} licenseFilePath License file path of the asset package to upgrade
     * @param {Number} type The type of asset package to upgrade, see {@link NvsAssetPackageTypeEnum}.
     * @else
     * @brief 升级资源包
       调用此函数后，会接收到回调函数onFinishAssetPackageUpgrading返回升级结果。
       onFinishAssetPackageUpgrading返回参数包括assetPackageId、assetPackageFilePath、assetPackageType和error。
       assetPackageId是当前升级完成的资源包id，
       assetPackageFilePath是当前升级完成的资源包文件路径，
       assetPackageType是当前升级完成的资源包类型，
       error是当前升级完成的错误码，参看{@link NvsAssetPackageErrorEnum}。
     * @param {String} assetPackageFilePath 资源包文件路径
     * @param {String} licenseFilePath 授权文件路径
     * @param {Number} type 资源类型，参看{@link NvsAssetPackageTypeEnum}
     * @endif
     */
    upgradeAssetPackage(assetPackageFilePath: string, licenseFilePath: string, type: number): any;
    /**
     * @if ENGLISH
     * @brief Uninstall asset package.
     * @param {String} assetPackageId Id of asset package to be uninstalled
     * @param {Number} type The type of asset package to be uninstalled, see {@link NvsAssetPackageTypeEnum}.
     * @return {Number} The result of uninstallation, see {@link NvsAssetPackageTypeEnum}.
     * @else
     * @brief 卸载资源包
     * @param {String} assetPackageId 资源包id
     * @param {Number} type 资源类型，参看{@link NvsAssetPackageTypeEnum}
     * @return {Number} 返回卸载资源包结果，参看{@link NvsAssetPackageErrorEnum}。
     * @endif
     */
    uninstallAssetPackage(assetPackageId: string, type: number): number;
    /**
     * @if ENGLISH
     * @brief Get the status of the asset package.
     * @param {String} assetPackageId Asset package id
     * @param {Number} type Asset package type, see {@link NvsAssetPackageTypeEnum}.
     * @return {Number} The status of the asset package, see {@link NvsAssetPackageStatusEnum}.
     * @else
     * @brief 获取资源包状态
     * @param {String} assetPackageId 资源包id
     * @param {Number} type 资源类型，参看{@link NvsAssetPackageTypeEnum}
     * @return {Number} 资源包状态，参看{@link NvsAssetPackageStatusEnum}。
     * @endif
     */
    getAssetPackageStatus(assetPackageId: string, type: number): number;
    /**
     * @if ENGLISH
     * @brief Get the version of the asset package.
     * @param {String} assetPackageId Asset package id
     * @param {Number} type Asset package type, see {@link NvsAssetPackageTypeEnum}.
     * @return {Number} The version of the asset package.
     * @else
     * @brief 获取资源包版本号
     * @param {String} assetPackageId 资源包id
     * @param {Number} type 资源类型，参看{@link NvsAssetPackageTypeEnum}
     * @return {Number} 资源包版本号。
     * @endif
     */
    getAssetPackageVersion(assetPackageId: string, type: number): number;
    /**
     * @if ENGLISH
     * @brief Get the content type of the asset package.
     * @param {String} assetPackageId Asset package id
     * @param {Number} type Asset package type, see {@link NvsAssetPackageTypeEnum}.
     * @return {String} The content type of the asset package.
     * @else
     * @brief 获取资源包内容类型
     * @param {String} assetPackageId 资源包id
     * @param {Number} type 资源类型，参看{@link NvsAssetPackageTypeEnum}
     * @return {String} 资源包内容类型。
     * @endif
     */
    getAssetPackageContentType(assetPackageId: string, type: number): string;
    /**
   * @if ENGLISH
   * @brief Determines whether it is a particle effect.
   * @param {String} uuidString Particle effect uuid
   * @return {Boolean} Returns a boolean object indicating whether it is a particle effect.
   * @else
   * @brief 是否是粒子特效
   * @param {String} uuidString 粒子特效uuid
   * @return {Boolean} 返回一个布尔对象，表示它是否是粒子特效。
   * @endif
   */
    isParticleFX(uuidString: string): boolean;
    /**
     * @if ENGLISH
     * @brief Get the description of the VideoFx package.
     * @param {String} uuidString Asset package id
     * @return {String} Description string
     * @else
     * @brief 获取视频特效资源包描述
     * @param {String} uuidString 资源包id
     * @return {String} 描述字符串
     * @endif
     */
    getVideoFxAssetPackageDescription(uuidString: string): string;
    /**
   * @if ENGLISH
   * @brief Gets the footage description list of the Template asset.
   * @param {String} uuidString Special effect uuid
   * @return {NvsVectorVal<NvsTemplateFootageDesc>} Returns a ArrayList object, which is a footage description list.
   * @else
   * @brief 获取模板素材
   * @param {String} uuidString 字符串唯一标识
   * @return {NvsVectorVal<NvsTemplateFootageDesc>} 返回一个 ArrayList 对象，它是一个素材描述列表。
   * @endif
   */
    getTemplateFootages(uuidString: string): NvsVectorVal<NvsTemplateFootageDesc>;
    /**
   * @if ENGLISH
   * @brief Gets the caption description list of the Template asset.
   * @param {String} uuidString Special effect uuid
   * @return {NvsVectorVal<NvsTemplateCaptionDesc>} Returns a ArrayList object, which is a caption description list.
   * @else
   * @brief 获取模板字幕
   * @param {String} uuidString 字符串唯一标识
   * @return {NvsVectorVal<NvsTemplateCaptionDesc>} 返回一个 ArrayList 对象，即字幕描述列表。
   * @endif
   */
    getTemplateCaptions(uuidString: string): NvsVectorVal<NvsTemplateCaptionDesc>;
    /**
   * @if ENGLISH
   * @brief Gets the compound caption description list of the Template asset.
   * @param {String} uuidString Special effect uuid
   * @return {NvsVectorVal<NvsTemplateCompoundCaptionItemDesc>} Returns a ArrayList object, which is a compound caption description list.
   * @else
   * @brief 获取模板组合字幕
   * @return {String} uuidString 特效uuid
   * @return {NvsVectorVal<NvsTemplateCompoundCaptionItemDesc>} 返回一个 ArrayList 对象，它是一个复合字幕描述列表。
   * @endif
   */
    getTemplateCompoundCaptions(uuidString: string): NvsVectorVal<NvsTemplateCompoundCaptionItemDesc>;
    /**
   * @if ENGLISH
   * @brief get template package path
   * @param {String} uuidString Special effect uuid
   * @return {String} path of template asset package
   * @else
   * @brief 获取模板包路径
   * @param {String} uuidString 特效uuid
   * @return {String} 模板资产包路径
   * @endif
   */
    getTemplatePackageDirPath(uuidString: string): string;
    /**
   * @if ENGLISH
   * @brief Gets the aspect ratio which is template using.
   * @param {String} uuidString Special effect uuid
   * @return {Number} Returns aspect ratio which is template using.
   * @else
   * @brief 获取模板当前纵横比
   * @param {String} uuidString 字符串唯一标识
   * @return {Number} 返回模板使用的纵横比。
   * @endif
   */
    getTemplateCurrentAspectRatio(uuidString: string): number;
    /**
   * @if ENGLISH
   * @brief Gets the default aspect ratio of template.
   * @param {String} uuidString Special effect uuid
   * @return {Number} Returns aspect ratio which is template using.
   * @else
   * @brief 获取模板缺省纵横比
   * @param {String} uuidString 字符串唯一标识
   * @return {Number} 返回模板使用的纵横比。
   * @endif
   */
    getTemplateDefaultAspectRatio(uuidString: string): number;
    /**
   * @if ENGLISH
   * @brief Write template xml
   * @param {NvsTimeline} timeline The timeline
   * @param {Number} aspectRatio The aspect ratio
   * @param {String} uuidString Special effect uuid
   * @return {Boolean}
   * @else
   * @brief 写XML模板
   * @param {NvsTimeline} timeline
   * @param {Number} aspectRatio 纵横比
   * @param {String} uuidString 特效uuid
   * @return {Boolean}
   * @endif
   */
    writeTemplateXml(timeline: NvsTimeline, aspectRatio: number, uuidString: string): boolean;
    /**
   * @if ENGLISH
   * @brief Generate template asset package.Returns suc or not
   * @param {String} innerAssetDir Path of internal assets of template
   * @param {String} uuidString Template resource package ID
   * @param {String} outputPath Output path of template asset package
   * @return {Boolean} Generate template asset package.
   * @else
   * @brief 生成模板包
   * @param {String} innerAssetDir 内置资源路径
   * @param {String} uuidString 字符串唯一标识
   * @param {String} outputPath 输出路径
   * @return {Boolean} 生成模板资产包。
   * @endif
   */
    generateTemplatePackage(innerAssetDir: string, uuidString: string, outputPath: string): boolean;
    /**
   * @if ENGLISH
   * @brief Write project xml
   * @param {NvsTimeline} timeline The timeline
   * @param {Number} aspectRatio The aspect ratio
   * @param {String} uuidString Special effect uuid
   * @return {Boolean}
   * @else
   * @brief 编写项目xml
   * @param {NvsTimeline} timeline 时间线
   * @param {Number} aspectRatio 纵横比
   * @param {String} uuidString 特效uuid
   * @return {Boolean}
   * @endif
   */
    writeProjectXml(timeline: NvsTimeline, aspectRatio: number, uuidString: string): boolean;
    /**
   * @if ENGLISH
   * @brief Generate project asset package.
   * @param {String} innerAssetDir Path of internal assets of template
   * @param {String} uuidString project resource package ID
   * @param {String} outputPath Output path of project asset package
   * @return {Boolean} Returns suc or not
   * @else
   * @brief 生成项目资产包。
   * @param {String} innerAssetDir 模板内部资产路径
   * @param {String} uuidString 项目资源包ID
   * @param {String} outputPath 项目资源包的输出路径
   * @return {Boolean} 返回成功或失败
   * @endif
   */
    generateProjectPackage(innerAssetDir: string, uuidString: string, outputPath: string): boolean;
    /**
   * @if ENGLISH
   * @brief Set templates/project custom resource folders
   * @param {String} uuidString Path of internal assets of template
   * @param {String} dir project resource package ID
   * @return {Boolean} Returns suc or not
   * @else
   * @brief 设置模板/项目自定义资源文件夹
   * @param {String} uuidString 模板内部资产路径
   * @param {String} dir 项目资源包ID
   * @return {Boolean} 返回成功或失败
   * @endif
   */
    setTemplateCustomResourceDir(uuidString: string, dir: string): boolean;
    /**
   * @if ENGLISH
   * @brief Get resource package root directory
   * @return {String}
   * @else
   * @brief 获取资源包根路径
   * @return {String}
   * @endif
   */
    getAssetPackageRootDir(): string;
    /**
   * @if ENGLISH
   * @brief Change aspect ratio of template
   * @param {String} uuidString Special effect uuid
   * @param {Number} aspectRatio The aspect ratio
   * @return {Boolean} Returns suc or not
   * @else
   * @brief 改变模板纵横比
   * @param {String} uuidString 字符串唯一标识
   * @param {Number} aspectRatio 纵横比
   * @return {Boolean} 返回成功或失败
   * @endif
   */
    changeTemplateAspectRatio(uuidString: string, aspectRatio: number): boolean;
    /**
   * @if ENGLISH
   * @brief Get the minimum Sdk version supported of asset package
   * @param {String} assetPackageId Package ID
   * @param {Number} type The type of package
   * @return {String} The minimum Sdk version
   * @else
   * @brief 获取特效包最小支持的Sdk版本号
   * @param {String} assetPackageId 资源包ID
   * @param {Number} type 资源包类型
   * @return {String} 最小Sdk版本号
   * @endif
   */
    getAssetPackageMinSdkVersion(assetPackageId: string, type: number): string;
    /**
   * @if ENGLISH
   * @brief Get all expression value list of asset package
   * @param {String} assetPackageId Package ID
   * @param {Number} type The type of package
   * @return {NvsVectorVal<NvsParamInfoObject>} Expression value list
   * @else
   * @brief 获取特效包可以调整的参数列表
   * @param {String} assetPackageId 资源包ID
   * @param {Number} type 资源包类型
   * @return {NvsVectorVal<NvsParamInfoObject>} 可以调整的参数列表
   * @endif
   */
    getExpValueList(assetPackageId: string, type: number): NvsVectorVal<NvsParamInfoObject>;
    /**
   * @if ENGLISH
   * @brief Get translation map of asset package
   * @param {String} assetPackageId Package ID
   * @param {Number} type The type of package
   * @return {NvsVectorVal<NvsTranslationInfo>} Translation map
   * @else
   * @brief 获取特效包参数翻译表
   * @param {String} assetPackageId 资源包ID
   * @param {Number} type 资源包类型
   * @return {NvsVectorVal<NvsTranslationInfo>} 参数翻译表
   * @endif
   */
    getTranslationMap(assetPackageId: string, type: number): NvsVectorVal<NvsTranslationInfo>;
}
/**
 * @if ENGLISH
 * @brief region information
 * @else
 * @brief 区域信息类
 * @endif
 */
declare class NvsRegionInfo {
    type: string;
    center: any;
    a: any;
    b: any;
    theta: any;
    points: any[];
    distance: number;
}
/**
 * @if ENGLISH
 * @brief Keyframe ParamInfo
 * @else
 * @brief 关键帧参数类
 * @endif
 */
declare class NvsKeyframeParamInfo {
    time: number;
    type: string;
    intVal: number;
    floatVal: number;
    boolVal: boolean;
    colorR: number;
    colorG: number;
    colorB: number;
    colorA: number;
    stringVal: string;
    regionInfos: any[];
    controlPoints: any[];
}
/**
 *  @if ENGLISH
 *  @brief Special effects. Special effects are the base classes of different types of special effects such as video FX, audio FX, audio transition and video transition. In the SDK framework, special effects are a key part. Each different type of special effects derived from nvsfx can be added, removed and obtained through clip instances, timeline instances or track instances. At the same time, different API interfaces are provided in the special effect class to set and obtain the special effect parameter types
 *  @see NvsProjObj
 *  @else
 *  @brief 特效类。特效类是视频特效(Video Fx)，音频特效(Audio Fx)，音频转场(Audio Transition)，视频转场(Video Transition)等不同类型特效的基类。 在SDK框架中，特效是很关键的一部分，派生自NvsFx的每种不同类型的特效，或通过片段实例，或时间线实例，或轨道实例来添加，移除和获取。 同时，特效类中提供了不同的API接口来设置和获取特效参数类型。\
 *  @see NvsProjObj
 *  @endif
 */
declare class NvsFx extends NvsProjObj {
    /**
   *  @if ENGLISH
   *  @brief Get description of Fx.Return the NvsFxDescription object.
   *  @return {NvsFxDescription}
   *  @see NvsFxDescription
   *  @else
   *  @brief 获取特效的描述。返回 NvsFxDescription 对象
   *  @return {NvsFxDescription}
   *  @see NvsFxDescription
   *  @endif
   */
    getDescription(): NvsFxDescription;
    /**
   *
   *  @if ENGLISH
   *  @brief Set the integer parameter of NvsFx.The type of the NvsFx's integer parameter.
   *  @param {String} fxParam name of parameter
   *  @param {Number} val value
   *  @return {void}
   *  @else
   *  @param {String} fxParam 特效参数
   *  @param {Number} val 值
   *  @return {void}
   *  @brief 设置整数值
   *  @endif
   */
    setIntVal(fxParam: string, val: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get the integer parameter of NvsFx.Return the integer value.
   *  @param {String} fxParam The type of the NvsFx's integer parameter.
   *  @return {Number} Return the integer value.
   *  @else
   *  @brief 获取整数值
   *  @param {String} fxParam 特效参数
   *  @return {Number} 返回整数值。
   *  @endif
   */
    getIntVal(fxParam: string): number;
    /**
   *  @if ENGLISH
   *  @brief Set the NvsFx's integer parameter at a specified time point.
   *  @param {String} fxParam The type of the NvsFx's integer parameter.
   *  @param {Number} val integer value.
   *  @param {Number} time time point (In microseconds).
   *  @return {void}
   *  @else
   *  @brief 在某个时间设置整数值
   *  @param {String} fxParam 特效参数
   *  @param {Number} val 值
   *  @param {Number} time 时间
   *  @return {void}
   *  @endif
   */
    setIntValAtTime(fxParam: string, val: number, time: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get the NvsFx's integer parameter at a specified time point.Return the integer value.
   *  @param {String} fxParam The type of the NvsFx's integer parameter.
   *  @param {Number} time time point (In microseconds).
   *  @return {Number} Return the integer value.
   *  @else
   *  @brief 在某个时间获取整数值
   *  @param {String} fxParam 特效参数
   *  @param {Number} time 时间
   *  @return {Number} 返回整数值。
   *  @endif
   */
    getIntValAtTime(fxParam: string, time: number): number;
    /**
   *  @if ENGLISH
   *  @brief set float value
   *  @param {String} fxParam name of parameter
   *  @param {Number} val value
   *  @return {void}
   *  @else
   *  @brief 设置浮点值
   *  @param {String} fxParam 特效参数
   *  @param {Number} val 值
   *  @return {void}
   *  @endif
   */
    setFloatVal(fxParam: string, val: number): void;
    /**
   *  @if ENGLISH
   *  @brief get float value
   *  @param {String} fxParam name of parameter
   *  @return {Number} Return the double value.
   *  @else
   *  @brief 获取浮点值
   *  @param {String} fxParam 特效参数
   *  @return {Number} 返回double值
   *  @endif
   */
    getFloatVal(fxParam: string): number;
    /**
   *  @if ENGLISH
   *  @brief Set the NvsFx's float parameter at a specified time point.
   *  @param {String} fxParam name of parameter
   *  @param {Number} val value
   *  @param {Number} time time
   *  @return {void}
   *  @else
   *  @brief 在某个时间设置浮点值
   *  @param {String} fxParam 特效参数值
   *  @param {Number} val 值
   *  @param {Number} time 时间点
   *  @return {void}
   *  @endif
   */
    setFloatValAtTime(fxParam: string, val: number, time: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get the NvsFx's float parameter at a specified time point.Return the double value.
   *  @param {String} fxParam The type of the NvsFx's float parameter.
   *  @param {Number} time time point (In microseconds).
   *  @return {Number} Return the double value.
   *  @else
   *  @brief 在某个时间获取浮点值
   *  @param {String} fxParam 特效参数
   *  @param {Number} time 时间
   *  @return {Number} 返回double值
   *  @endif
   */
    getFloatValAtTime(fxParam: string, time: number): number;
    /**
   *  @if ENGLISH
   *  @brief Set the boolean parameter of NvsFx.
   *  @param {String} fxParam The type of the NvsFx's float parameter.
   *  @param {Boolean} val boolean value.
   *  @return {void}
   *  @else
   *  @brief 设置布尔值
   *  @param {String} fxParam 特效参数
   *  @param {Boolean} val 布尔值
   *  @return {void}
   *  @endif
   */
    setBooleanVal(fxParam: string, val: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get the boolean parameter of NvsFx.Return the boolean value.
   *  @param {String} fxParam The type of the NvsFx's boolean parameter.
   *  @return {Boolean} Return the BOOL value.
   *  @else
   *  @brief 获取布尔值
   *  @param {String} fxParam 特效参数
   *  @return {Boolean} 返回布尔值。
   *  @endif
   */
    getBooleanVal(fxParam: string): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set the NvsFx’s boolean parameter at a specified time point.
   *  @param {String} fxParam    The type of the NvsFx's boolean parameter.
   *  @param {Boolean} val boolean value.
   *  @param {Number} time time point (In microseconds).
   *  @return {void}
   *  @else
   *  @brief 在某个时间设置布尔值
   *  @param {String} fxParam    特效参数
   *  @param {Boolean} val 具体值具体值
   *  @param {Number} time 时间
   *  @return {void}
   *  @endif
   */
    setBooleanValAtTime(fxParam: string, val: boolean, time: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get the NvsFx's boolean parameter at a specified time point.
   *  @param {String} fxParam The type of the NvsFx's boolean parameter.
   *  @param {Number} time time point (In microseconds).
   *  @return {Boolean} Return the BOOL value.
   *  @else
   *  @brief 在某个时间获取布尔值
   *  @param {String} fxParam 特效参数
   *  @param {Number} time 时间
   *  @return {Boolean} 返回布尔值。
   *  @endif
   */
    getBooleanValAtTime(fxParam: string, time: number): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set the menu parameter of NvsFx.
   *  @param {String} fxParam The type of the NvsFx's menu parameter.
   *  @param {String} val A string value.
   *  @return {void}
   *  @else
   *  @brief 设置菜单值
   *  @param {String} fxParam 特效参数
   *  @param {String} val 菜单值
   *  @return {void}
   *  @endif
   */
    setMenuVal(fxParam: string, val: string): void;
    /**
   *  @if ENGLISH
   *  @brief Get the menu parameter of NvsFx.Return the menu value of NvsFx.
   *  @param {String} fxParam The type of the NvsFx's menu parameter.
   *  @return {String} Return the menu value of NvsFx.
   *  @else
   *  @brief 设置菜单值
   *  @param {String} fxParam 特效参数
   *  @return {String} 返回 NvsFx 的菜单值。
   *  @endif
   */
    getMenuVal(fxParam: string): string;
    /**
   *  @if ENGLISH
   *  @brief Set the NvsFx's menu parameter at a specified time point.
   *  @param {String} fxParam name of parameter
   *  @param {String} val value
   *  @param {Number} time time
   *  @return {String}
   *  @else
   *  @brief 在某个时间设置菜单值
   *  @param {String} fxParam 特效参数
   *  @param {String} val 值
   *  @param {Number} time 时间点
   *  @return {String}
   *  @endif
   */
    setMenuValAtTime(fxParam: string, val: string, time: number): string;
    /**
   *  @if ENGLISH
   *  @brief Get the NvsFx menu parameter at a specified time point.Return the menu value of NvsFx.
   *  @param {String} fxParam The type of the NvsFx's menu parameter.
   *  @param {Number} time time point (In microseconds).
   *  @return {String} Return the menu value of NvsFx.
   *  @else
   *  @brief 在某个时间获取菜单值
   *  @param {String} fxParam 特效参数
   *  @param {Number} time 时间点
   *  @return {String} 返回 NvsFx 的菜单值。
   *  @endif
   */
    getMenuValAtTime(fxParam: string, time: number): string;
    /**
   *  @if ENGLISH
   *  @brief Set the string parameter of NvsFx.
   *  @param {String} fxParam The type of the NvsFx's string parameter.
   *  @param {String} val string value.
   *  @return {void}
   *  @else
   *  @brief 设置字符串值
   *  @param {String} fxParam 特效参数
   *  @param {String} val 字符串值
   *  @return {void}
   *  @endif
   */
    setStringVal(fxParam: string, val: string): void;
    /**
   *  @if ENGLISH
   *  @brief Get the string parameter of NvsFx.Return the string value.
   *  @param {String} fxParam The type of the NvsFx's string parameter.
   *  @return {String} Return the string value.
   *  @else
   *  @brief 获取字符串值
   *  @param {String} fxParam 特效参数
   *  @return {String} 返回字符串。
   *  @endif
   */
    getStringVal(fxParam: string): string;
    /**
   *  @if ENGLISH
   *  @brief Set the NvsFx's string parameter at a specified time point.
   *  @param {String} fxParam The type of the NvsFx's string parameter.
   *  @param {String} val string value.
   *  @param {Number} time time point (In microseconds).
   *  @return {void}
   *  @else
   *  @brief 在某个时间点设置字符串值
   *  @param {String} fxParam 特效参数
   *  @param {String} val 字符串值
   *  @param {Number} time 时间点
   *  @return {void}
   *  @endif
   */
    setStringValAtTime(fxParam: string, val: string, time: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get the NvsFx's string parameter at a specified time point.Return the string value.
   *  @param {String} fxParam The type of the NvsFx's string parameter.
   *  @param {Number} time time point (In microseconds).
   *  @return {String} Return the string value.
   *  @else
   *  @brief 在某个时间获取字符串值
   *  @param {String} fxParam 特效参数
   *  @param {Number} time 时间点
   *  @return {String} 返回字符串。
   *  @endif
   */
    getStringValAtTime(fxParam: string, time: number): string;
    /**
   *  @if ENGLISH
   *  @brief Set the color parameter of NvsFx.
   *  @param {String} fxParam The type of the NvsFx's color parameter.
   *  @param {NvsColor} val NvsColor Customized color object.
   *  @return {viod}
   *  @see NvsColor
   *  @else
   *  @brief 设置颜色值
   *  @param {String} fxParam 特效参数
   *  @param {NvsColor} val 颜色值
   *  @return {void}
   *  @see NvsColor
   *  @endif
   */
    setColorVal(fxParam: string, val: NvsColor): viod;
    /**
   *  @if ENGLISH
   *  @brief Get the color parameter of NvsFx.
   *  @param {String} fxParam The type of the NvsFx's color parameter.
   *  @return {NvsColor} Return the customized color object[NvsColor].
   *  @see NvsColor
   *  @else
   *  @brief 设置颜色值
   *  @param {String} fxParam 特效参数
   *  @return {NvsColor} 返回自定义颜色对象[NvsColor]。
   *  @see NvsColor
   *  @endif
   */
    getColorVal(fxParam: string): NvsColor;
    /**
   *  @if ENGLISH
   *  @brief Set the NvsFx's color parameter at a specified time point.
   *  @param {String} fxParam The type of the NvsFx's color parameter.
   *  @param {NvsColor} val Customized color object.
   *  @param {Number} time point time (In microseconds).
   *  @return {void}
   *  @else
   *  @brief 在某个时间设置颜色
   *  @param {String} fxParam 特效参数
   *  @param {NvsColor} val 颜色值
   *  @param {Number} time 时间点
   *  @return {void}
   *  @endif
   */
    setColorValAtTime(fxParam: string, val: NvsColor, time: number): void;
    /**
   *  @if ENGLISH
   *  @brief get color value at certain time
   *  @param {String} fxParam Get the NvsFx's color parameter at a specified time point.
   *  @param {Number} time point time (In microseconds).
   *  @return {NvsColor} Return the customized color object[NvsColor].
   *  @else
   *  @brief 在某个时间点获取颜色值
   *  @param {String} fxParam 特效参数
   *  @param {Number} time 时间点
   *  @return {NvsColor} 返回自定义颜色对象[NvsColor]。
   *  @endif
   */
    getColorValAtTime(fxParam: string, time: number): NvsColor;
    /**
   *  @if ENGLISH
   *  @brief remove Remove key frame at a specified time point from key frame list.
   *  @param {String} fxParam The type of custom data parameter for the effect.
   *  @param {Number} time time point (In microseconds).
   *  @return {Boolean} Return success or not.
   *  @else
   *  @brief 在某个时间删除关键帧
   *  @param {String} fxParam 特效参数
   *  @param {Number} time 时间点
   *  @return {Boolean} 返回成功或失败
   *  @endif
   */
    removeKeyframeAtTime(fxParam: string, time: number): boolean;
    /**
   *  @if ENGLISH
   *  @brief remove Remove all key frames from key frame list.
   *  @param {String} fxParam The type of custom data parameter for the effect.
   *  @return {Boolean} Return success or not.
   *  @else
   *  @brief 删除所有关键帧
   *  @param {String} fxParam 特效参数
   *  @return {Boolean} 返回成功或失败
   *  @endif
   */
    removeAllKeyframe(fxParam: string): boolean;
    /**
   *  @if ENGLISH
   *  @brief Check whether the parameter has key frame list or not.
   *  @param {String} fxParam The type of custom data parameter for the effect.
   *  @return {Boolean} Return exist or not.
   *  @else
   *  @brief 是否有关键帧列表
   *  @param {String} fxParam 特效参数
   *  @return {Boolean} 返回是否存在。
   *  @endif
   */
    hasKeyframeList(fxParam: string): boolean;
    /**
   *  @if ENGLISH
   *  @brief Get key frame at a specified time point.
   *  @param {String} fxParam The type of custom data parameter for the effect.
   *  @param {Number} time Time point (In microseconds).
   *  @param {Number} flags Flag of finding mode
   *  @return {Number} Return key frame time point near the specified time point, If there is no key frame near this time point, return - 1
   *  @else
   *  @brief 在某个时间查询关键帧
   *  @param {String} fxParam 特效参数
   *  @param {Number} time 时间点
   *  @param {Number} flags 标识
   *  @return {Number} 返回指定时间点附近的关键帧时间点，如果该时间点附近没有关键帧，则返回 - 1
   *  @endif
   */
    findKeyframeTime(fxParam: string, time: number, flags: number): number;
    /**
   *  @if ENGLISH
   *  @brief Set key frame parameters
   *  @param {String} fxParam The type of custom data parameter for the effect.
   *  @param {NvsVectorVal} keyframes
   *  @return {Boolean}
   *  @else
   *  @brief 设置关键帧参数
   *  @param {String} fxParam 特效的自定义数据参数的类型。
   *  @param {NvsVectorVal} keyframes 关键帧
   *  @return {Boolean}
   *  @endif
   */
    setParamKeyframes(fxParam: string, keyframes: NvsVectorVal): boolean;
    /**
   *  @if ENGLISH
   *  @brief Get key frame parameters
   *  @param {String} fxParam The type of custom data parameter for the effect.
   *  @return {NvsVectorVal}
   *  @see NvsVectorVal
   *  @else
   *  @brief 获取关键帧参数
   *  @param {String} fxParam 特效的自定义数据参数的类型。
   *  @return {NvsVectorVal}
   *  @see NvsVectorVal
   *  @endif
   */
    getParamKeyframes(fxParam: string): NvsVectorVal;
    /**
   *  @if ENGLISH
   *  @brief Set key frame at a specified time point.
   *  @param {String} fxParam The type of custom data parameter for the effect.
   *  @param {Number} time The time
   *  @param {NvsVectorVal} keyframe
   *  @return {Boolean} Whether the Settings are successful
   *  @else
   *  @brief 在某个时间设置关键帧参数
   *  @param {String} fxParam The type of custom data parameter for the effect.
   *  @param {Number} time 时间点
   *  @param {NvsVectorVal} keyframe
   *  @return {Boolean} 是否设置成功
   *  @endif
   */
    setParamKeyframeAtTime(fxParam: string, time: number, keyframe: NvsVectorVal): boolean;
    /**
   *  @if ENGLISH
   *  @brief Get key frame at a specified time point.
   *  @param {String} fxParam The type of custom data parameter for the effect.
   *  @param {Number} time The time
   *  @return {void}
   *  @else
   *  @brief 在某个时间获取关键帧参数
   *  @param {String} fxParam The type of custom data parameter for the effect.
   *  @param {Number} time 时间点
   *  @return {void}
   *  @endif
   */
    getParamKeyframeAtTime(fxParam: string, time: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get key frame at a specified time point.
   *  @param {String} fxParam The type of custom data parameter for the effect.
   *  @param {Number} time The time
   *  @return {NvsVectorVal}
   *  @see NvsVectorVal
   *  @else
   *  @brief 在某个时间获取关键帧参数
   *  @param {String} fxParam 特效参数
   *  @param {Number} time 时间点
   *  @return {NvsVectorVal}
   *  @see NvsVectorVal
   *  @endif
   */
    getIntpFxParamValsAtTime(fxParam: string, time: number): NvsVectorVal;
    /**
   *  @if ENGLISH
   *  @brief Set the intensity of the filter.
   *  @param {Number} intensity The filter intensity value, the value range is generally [0,1]. 0 means no effect, while 1 indicates the default effect.
   *  @else
   *  @brief 设置滤镜强度
   *  @param {Number} intensity 滤镜强度值，取值范围一般为[0,1]，为0则滤镜无效果，为1则为默认效果
   *  @endif
   */
    setFilterIntensity(intensity: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get the intensity of the filter.
   *  @return {Number} Returns the intensity value of the filter.
   *  @else
   *  @brief 获取滤镜强度
   *  @return {Number} 返回滤镜的强度值
   *  @endif
   */
    getFilterIntensity(): number;
    /**
   *  @if ENGLISH
   *  @brief Set whether the filter is regional.
   *  @param {Boolean} isRegional Whether the filter is regional. True means regional, false means the opposite.
   *  @return {void}
   *  @else
   *  @brief 设置区域
   *  @param {Boolean} isRegional 过滤器是否是区域性的。 true 表示区域性，false 表示相反。
   *  @return {void}
   *  @endif
   */
    setRegional(isRegional: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get whether the filter is regional.
   *  @return {Boolean} Return whether the filter is regional or not.
   *  @else
   *  @brief 获取区域范围
   *  @return {Boolean} Return whether the filter is regional or not.
   *  @endif
   */
    getRegional(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set whether the regional filter ignores background.
   *  @param {Boolean} isIgnoreBackground Whether the regional filter ignores background. True means ignored, false means the opposite.
   *  @return {void}
   *  @else
   *  @brief 设置忽略背景
   *  @param {Boolean} isIgnoreBackground 是否忽略背景
   *  @return {void}
   *  @endif
   */
    setIgnoreBackground(isIgnoreBackground: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get whether the regional filter ignores background.
   *  @return {Boolean} Return whether the regional filter ignores background or not.
   *  @else
   *  @brief 获取忽略背景
   *  @return {Boolean} 返回区域过滤器是否忽略背景。
   *  @endif
   */
    getIgnoreBackground(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set whether the regional filter inverses region.
   *  @param {Boolean} isInverseRegion Whether the regional filter inverses region. True means inversed, false means the opposite.
   *  @return {void}
   *  @else
   *  @brief 设置反转区域
   *  @param {Boolean} isInverseRegion 是否反转区域
   *  @return {void}
   *  @endif
   */
    setInverseRegion(isInverseRegion: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get whether the regional filter inverses region.
   *  @return {Boolean} Return whether the regional filter inverses region or not.
   *  @else
   *  @brief 获取反转区域
   *  @return {Boolean} 返回区域过滤器是否与区域相反。
   *  @endif
   */
    getInverseRegion(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set the region of this regional filter.
   *  @param {Number[]} region The effective region of this filter. It is composed with a series of points, which are in NDC coordinate system.
   *  @return {void}
   *  @else
   *  @brief 设置区域
   *  @param {Number[]} region 区域对象
   *  @return {void}
   *  @endif
   */
    setRegion(region: number[]): void;
    /**
   *  @if ENGLISH
   *  @brief set region at certain time
   *  @param {Number[]} region The effective region of this filter. It is composed with a series of points, which are in NDC coordinate system.
   *  @param {Number} time Time point (In microseconds).
   *  @return {void}
   *  @else
   *  @brief 在某个时间设置区域
   *  @param {Number[]} region 区域对象
   *  @param {Number} time 时间点
   *  @return {void}
   *  @endif
   */
    setRegionAtTime(region: number[], time: number): void;
    /**
   *  @if ENGLISH
   *  @brief set ellipse region
   *  @param {NvsPointF} center center point
   *  @param {Number} a Long semiaxis of ellipse
   *  @param {Number} b short semiaxis of ellipse
   *  @param {Number} angle angle
   *  @return {void}
   *  @else
   *  @brief 设置椭圆区域
   *  @param {NvsPointF} center 居中
   *  @param {Number} a 长半轴
   *  @param {Number} b 短半轴
   *  @param {Number} angle 角度
   *  @return {void}
   *  @endif
   */
    setEllipseRegion(center: NvsPointF, a: number, b: number, angle: number): void;
    /**
   *  @if ENGLISH
   *  @brief set ellipse region at certain time
   *  @param {NvsPointF} center center point
   *  @param {Number} a Long semiaxis of ellipse
   *  @param {Number} b short semiaxis of ellipse
   *  @param {Number} angle angle
   *  @param {Number} time time
   *  @return {void}
   *  @else
   *  @brief 在某个时间点设置椭圆区域
   *  @param {NvsPointF} center 居中
   *  @param {Number} a 长半轴
   *  @param {Number} b 短半轴
   *  @param {Number} angle 角度
   *  @param {Number} time 时间
   *  @return {void}
   *  @endif
   */
    setEllipseRegionAtTime(center: NvsPointF, a: number, b: number, angle: number, time: number): void;
    /**
    *  @if ENGLISH
    *  @brief Get the mask region informations of the regional filter.
    *  @return {NvsVectorVal<NvsRegionInfo>} Return a vector of the filter's region information. The region information object could be series of points or ellipse, which are in NDC coordinate system.
    *  @see NvsRegionInfo
    *  @else
    *  @brief 获取特效区域信息
    *  @return {NvsVectorVal<NvsRegionInfo>} 返回特效遮罩区域信息集合。每一个区域信息对象结构可以包含NDC坐标系中的一系列点或椭圆信息。
    *  @see NvsRegionInfo
    *  @endif
    */
    getRegionInfos(): NvsVectorVal<NvsRegionInfo>;
    /**
    * @if ENGLISH
    * @brief Get the mask region informations of the regional filter at a specified time.
    * @param {Number} time The time.
    * @return {NvsVectorVal<NvsRegionInfo>} Return a vector of the filter's region information. The region information object could be series of points or ellipse, which are in NDC coordinate system.
    * @else
    * @brief 获取特效在某个时间点的区域信息
    * @param {Number} time 时间点
    * @return {NvsVectorVal<NvsRegionInfo>} 返回特效遮罩区域信息集合。每一个区域信息对象结构可以包含NDC坐标系中的一系列点或椭圆信息。
    * @endif
    */
    getRegionInfosAtTime(time: number): NvsVectorVal<NvsRegionInfo>;
    /**
    *  @if ENGLISH
    *  @brief Set the feather width of the regional filter.
    *  @param {Number} featherWidth feather width of the regional filter
    *  @return {}
    *  @else
    *  @brief 设置区域羽化宽度
    *  @param {Number} featherWidth 宽度值
    *  @return {}
    *  @endif
    */
    setRegionalFeatherWidth(featherWidth: number): any;
    /**
   *  @if ENGLISH
   *  @brief Get the feather width of the regional filter.
   *  @return {Number} Return the feather width of the regional filter.
   *  @else
   *  @brief 获取区域羽化宽度
   *  @return {Number} 返回区域过滤器的羽化宽度。
   *  @endif
   */
    getRegionalFeatherWidth(): number;
    /**
   *  @if ENGLISH
   *  @brief Get the particle effect context object.
   *  @return {NvsParticleSystemContext} Return a particle effect context object.
   *  @else
   *  @brief 获取粒子特效上下文
   *  @return {NvsParticleSystemContext} 返回一个粒子特效上下文对象。
   *  @endif
   */
    getParticleSystemContext(): NvsParticleSystemContext;
    /**
   *  @if ENGLISH
   *  @brief Get the manipulate of ARScene.
   *  @return {NvsARSceneManipulate} Return the manipulate of ARScene.
   *  @else
   *  @brief 获取ARScene操作
   *  @return {NvsARSceneManipulate} 返回 AR 场景操作对象。
   *  @endif
   */
    getARSceneManipulate(): NvsARSceneManipulate;
    /**
   *  @if ENGLISH
   *  @brief Set the value of the defined parameter in the expression.
   *  @param {String} varName The parameters defined in the expression
   *  @param {Number} varValue The value of a parameter in the expression
   *  @return {void}
   *  @else
   *  @brief 设置表达式变量
   *  @param {String} varName 变量名字
   *  @param {Number} varValue 变量值
   *  @return {void}
   *  @endif
   */
    setExprVar(varName: string, varValue: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get the value of the defined parameter in the expression.
   *  @param {String} varName The parameters defined in the expression
   *  @return {Number} Returns the value of the parameter defined in the expression
   *  @else
   *  @brief 获取表达式变量
   *  @param {String} varName 变量名字
   *  @return {Number} 返回表达式中定义的参数的值
   *  @endif
   */
    getExprVar(varName: string): number;
    /**
   *  @if ENGLISH
   *  @brief Set the object(e.g. color) value of the defined parameter in the expression.
   *  @param {String} varName The parameters defined in the expression
   *  @param {Number} varValue The value of a parameter in the expression
   *  @return {void}
   *  @else
   *  @brief 设置对象(例如:颜色)表达式变量
   *  @param {String} varName 变量名字
   *  @param {Number} varValue 变量值
   *  @return {void}
   *  @endif
   */
    setExprObjectVar(varName: string, varValue: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get the object(e.g. color) value of the defined parameter in the expression.
   *  @param {String} varName The parameters defined in the expression
   *  @return {Number} Returns the value of the parameter defined in the expression
   *  @else
   *  @brief 获取对象(例如:颜色)表达式变量
   *  @param {String} varName 变量名字
   *  @return {Number} 返回表达式中定义的参数的值
   *  @endif
   */
    getExprObjectVar(varName: string): number;
    /**
   *  @if ENGLISH
   *  @brief Clear the value of the defined parameter in the expression and set it to the default value of 0.
   *  @return {}
   *  @else
   *  @brief 清除Expr值
   *  @return {}
   *  @endif
   */
    clearExprVar(): any;
    /**
   *  @if ENGLISH
   *  @brief Clear all parameter values defined in the expression and set them to the default value of 0.
   *  @return {}
   *  @else
   *  @brief 清空表达式中定义的全部参数的值，并设置为默认值0
   *  @return {}
   *  @endif
   */
    clearExprVarCtx(): any;
    /**
    *  @if ENGLISH
    *  @brief Set arbitrary value of fx
    *  @param {String} fxParam Name of the fx parameter
    *  @param {NvsRegionInfo} val Only support the value of NvsRegionInfo type now
    *  @see NvsRegionInfo
    *  @else
    *  @brief 设置特效不定类型的值
    *  @param {String} fxParam 特效参数名称
    *  @param {NvsRegionInfo} val 目前只支持NvsRegionInfo类型的值
    *  @see NvsRegionInfo
    *  @endif
    */
    setArbitraryVal(fxParam: string, val: NvsRegionInfo): void;
    /**
    *  @if ENGLISH
    *  @brief Get the arbitrary value of fx
    *  @param {String} fxParam Name of the fx parameter
    *  @return {NvsRegionInfo} The NvsRegionInfo value
    *  @see NvsRegionInfo
    *  @else
    *  @brief 获取特效不定类型的值
    *  @param {String} fxParam 特效参数名称
    *  @return {NvsRegionInfo} NvsRegionInfo类型的值
    *  @see NvsRegionInfo
    *  @endif
    */
    getArbitraryVal(fxParam: string): NvsRegionInfo;
    /**
    *  @if ENGLISH
    *  @param {Number} time The time
    *  @param {Number} time 时间点
    *  @param {NvsRegionInfo} val Only support the value of NvsRegionInfo type now
    *  @param {NvsRegionInfo} val 目前只支持NvsRegionInfo类型的值
    *  @param {String} fxParam Name of the effect parameter
    *  @param {String} fxParam 特效参数名称
    *  @see NvsRegionInfo
    *  @see NvsRegionInfo
    *  @brief Set arbitrary value of fx at time
    *  @brief 设置特效某时间点不定类型的值
    *  @else
    *  @endif
    */
    setArbitraryValAtTime(fxParam: string, val: NvsRegionInfo, time: number): void;
    /**
    *  @if ENGLISH
    *  @brief Get arbitrary value of fx at time
    *  @param {String} fxParam Name of the fx parameter
    *  @param {Number} time The time.
    *  @return {NvsRegionInfo} The NvsRegionInfo value
    *  @see NvsRegionInfo
    *  @else
    *  @brief 获取特效某时间点不定类型的值
    *  @param {String} fxParam 特效参数名称
    *  @param {Number} time 时间点
    *  @return {NvsRegionInfo} NvsRegionInfo类型的值
    *  @see NvsRegionInfo
    *  @endif
    */
    getArbitraryValAtTime(fxParam: string, time: number): NvsRegionInfo;
    /**
    *  @if ENGLISH
    *  @brief Set region infos of fx
    *  @param {NvsVectorVal<NvsRegionInfo>} regionInfos The vector of NvsRegionInfo object
    *  @see NvsRegionInfo
    *  @else
    *  @brief 设置多个区域信息
    *  @param {NvsVectorVal<NvsRegionInfo>} regionInfos NvsRegionInfo对象数组
    *  @see NvsRegionInfo
    *  @endif
    */
    setRegionInfos(regionInfos: NvsVectorVal<NvsRegionInfo>): void;
    /**
    *  @if ENGLISH
    *  @brief Set region infos of fx at time
    *  @param {NvsVectorVal<NvsRegionInfo>} regionInfos The vector of NvsRegionInfo object
    *  @param {Number} time The time.
    *  @see NvsRegionInfo
    *  @else
    *  @brief 设置某个时间点的多个区域信息
    *  @param {NvsVectorVal<NvsRegionInfo>} regionInfos NvsRegionInfo对象数组
    *  @param {Number} time 时间点
    *  @see NvsRegionInfo
    *  @endif
    */
    setRegionInfosAtTime(regionInfos: NvsVectorVal<NvsRegionInfo>, time: number): void;
}
/**
 * @if ENGLISH
 * @brief Timeline video effects timeline video effects are video effects that act on timeline instances. Timeline video effects are divided into three types: built-in effects, package effects and custom effects. The built-in special effects are integrated inside the SDK and can be used directly without authorization. Package special effect is to integrate special effect resources into special effect packages. Each special effect package has its one-to-one corresponding authorization file, and must be installed before use. For details, please refer to material package installation. Custom special effect is a special effect timeline realized by users through writing code. The video special effect package includes special effect entry and exit points. Through entry and exit points, we can specify the position and length of the special effect on the timeline, and the entry point should be less than the exit point, The unit is microseconds. Timeline video effects allow superposition, and the rendering order is controlled by the preset Z value.
 * @see NvsFx
 * @else
 * @brief 时间线视频特效 时间线视频特效是作用于时间线实例上的视频特效。 时间线视频特效分为內建特效、包裹特效和自定义特效三种类型。 內建特效是集成在sdk内部的，不需要授权即可直接使用。包裹特效是将特效资源整合成了特效包，每个特效包都有其一一对应的授权文件，并且要先安装再使用，具体情况请参见素材包安装 自定义特效是用户通过编写代码实现的特效 时间线视频特效包含特效入点和出点，通过入点和出点我们可以指定特效作用于时间线的位置和长度，入点要小于出点，单位为微秒。 时间线视频特效允许叠加，渲染顺序通过预设Z值控制。
 * @see NvsFx
 */
declare class NvsTimelineVideoFx extends NvsFx {
    /**
   *  @if ENGLISH
   *  @brief Get timeline video special effects type
   *  @return {Number} Returns the timeline video effect type. See [Timeline Video effect Type]. (TIMELINE_VIDEOFX_TYPE).
   *  @else
   *  @brief 获取时间线视频特效类型
   *  @return {String} 返回时间线视频效果类型。请参阅[时间线视频效果类型]。 (TIMELINE_VIDEOFX_TYPE)。
   *  @endif
   */
    getTimelineVideoFxType(): number;
    /**
   *  @if ENGLISH
   *  @brief Gets the built-in timeline video effect name.
   *  @return {String} Returns the name of the built-in timeline video effect. It will return null when it is not a built-in effect.
   *  @else
   *  @brief 获取内置时间线视频特效名字
   *  @return {String} 返回内置时间线视频效果的名称。当它不是内置效果时，它将返回 null。
   *  @endif
   */
    getBuiltinTimelineVideoFxName(): string;
    /**
   *  @if ENGLISH
   *  @brief Gets timeline video effect resource package ID.
   *  @return {String} Returns the timeline video effect resource package ID. It will return null when it is not a packaged effect.
   *  @else
   *  @brief 获取时间线视频特效包ID
   *  @return {String} 返回时间线视频效果资源包ID。不是打包效果的时候会返回null。
   *  @endif
   */
    getTimelineVideoFxPackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Timeline video effect in-point on the timeline.
   *  @return {Number} The in-point of the timeline video effect on the timeline (in microseconds).
   *  @else
   *  @brief 获取入点
   *  @return {Number} 时间线视频效果在时间线上的入点（以微秒为单位）。
   *  @endif
   */
    getInPoint(): number;
    /**
   *  @if ENGLISH
   *  @brief Timeline video effect out-point on the timeline.
   *  @return {Number} The out-point of the timeline video effect on the timeline (in microseconds).
   *  @else
   *  @brief 获取出点
   *  @return {Number} 时间线视频效果在时间线上的出点（以微秒为单位）。
   *  @endif
   */
    getOutPoint(): number;
    /**
   *  @if ENGLISH
   *  @brief Change the in-point of the timeline video effect on the timeline. When the new in-point does not conform to the established rules, the final return in-point may be different from the new in-point value. Such as the new in-point is less than 0, the new in-point value is greater than the timeline duration, or the new in-point is greater than the out-point.
   *  @param {Number} newInPoint The new in-point of the video effect on the timeline (in microseconds).
   *  @return {Number} Returns the final in-point value of the timeline video effect on the timeline (in microseconds).
   *  @else
   *  @brief 改变入点
   *  @param {Number} newInPoint 新的入点
   *  @return {Number} 返回时间线视频效果在时间线上的最终入点值（以微秒为单位）。
   *  @endif
   */
    changeInPoint(newInPoint: number): number;
    /**
   *  @if ENGLISH
   *  @brief Change the out-point of the timeline video effect on the timeline. When the new out-point does not conform to the established rules, the final return out-point may be different from the new out-point value. Such as the new out-point is less than 0, the new out-point value is greater than the timeline duration, or the new out-point is less than the in-point.
   *  @param {Number} newOutPoint The new out-point of the animated sticker on the timeline (in microseconds).
   *  @return {Number} Returns the final out-point value of the timeline video effect on the timeline (in microseconds).
   *  @else
   *  @brief 改变出点
   *  @param {Number} newOutPoint 新的出点
   *  @return {Number} 返回时间线视频效果在时间线上的最终出点值（以微秒为单位）。
   *  @endif
   */
    changeOutPoint(newOutPoint: number): number;
    /**
   *  @if ENGLISH
   *  @brief Change the position of the timeline video effect on the timeline (the in and out points translate the offset value at the same time).
   *  @param {Number} offset Offset value for in and out points (in microseconds).
   *  @return {void}
   *  @else
   *  @brief 移动位置
   *  @param {Number} offset 偏移量
   *  @return {void}
   *  @endif
   */
    movePosition(offset: number): void;
    /**
   *  @if ENGLISH
   *  @brief Set video effect Z value. The Z value determines the rendering order of the effects. The higher the Z value, the higher the effect is.
   *  @param {Number} value Z value
   *  @return {void}
   *  @else
   *  @brief 设置Z值,Z 值决定了特效的渲染顺序。 Z值越高，效果越好。
   *  @param {Number} value Z值
   *  @return {void}
   *  @endif
   */
    setZValue(value: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get video effect Z value.
   *  @return {Number} Return video effect Z value.
   *  @else
   *  @brief 获取Z值
   *  @return {Number} 返回视频特效 Z 值。
   *  @endif
   */
    getZValue(): number;
    /**
   *  @if ENGLISH
   *  @brief Convert timeline coordinates to particle system coordinates.
   *  @param {PointF} ptCanonical Timeline coordinates.
   *  @return {PointF} Return the transformed particle system coordinates, PointF object.
   *  @else
   *  @brief 将点从规范映射到粒子系统
   *  @param {PointF} ptCanonical 时间轴坐标。
   *  @return {PointF} 返回变换后的粒子系统坐标，PointF 对象。
   *  @endif
   */
    mapPointFromCanonicalToParticleSystem(ptCanonical: PointF): PointF;
}
/**
 * @if ENGLISH
 * @brief layout attributes class
 * @else
 * @brief 字幕layout属性类
 * @endif
 */
declare class NvsCaptionSpan {
    type: string;
    start: number;
    end: number;
    value: any;
}
/**
 * @if ENGLISH
 * @brief Timeline subtitles are custom text superimposed on the video. When editing video, you can add and remove timeline subtitles and adjust the subtitle position. After adding subtitles, you can also set styles, including font size, color, shadow, stroke, etc.
 * @see NvsFx
 * @else
 * @brief 时间线字幕是叠加在视频上的自定义文本。编辑视频时，您可以添加和删除时间线字幕并调整字幕位置。添加字幕后，还可以设置样式，包括字体大小、颜色、阴影、描边等。
 * @see NvsFx
 *
 */
declare class NvsCaption extends NvsFx {
    /**
   *  @if ENGLISH
   *  @brief The role of caption in the theme.
   *  @return {Number} The role of caption in the theme.
   *  @else
   *  @brief 字幕在主题中的作用。
   *  @return {Number} 字幕在主题中的作用
   *  @endif
   */
    getRoleInTheme(): number;
    /**
   *  @if ENGLISH
   *  @brief Gets the type of caption.
   *  @return {Number} Returns to the obtained Caption type.
   *  @else
   *  @brief 获取字幕的类型。
   *  @return {Number} 返回获取到的 Caption 类型。
   *  @endif
   */
    getCategory(): number;
    /**
   *  @if ENGLISH
   *  @brief Gets the caption style package ID.
   *  @return {String} Returns the obtained caption style resource package ID.
   *  @else
   *  @brief 获取字幕样式包 ID。
   *  @return {String} 返回获取到的字幕样式资源包ID。
   *  @endif
   */
    getCaptionStylePackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Gets the modular caption context style package ID.
   *  @return {String} Returns the obtained modular caption context style resource package ID.
   *  @else
   *  @brief 获取模块化字幕上下文样式包 ID。
   *  @return {String} 返回获取的模块化字幕上下文样式资源包ID。
   *  @endif
   */
    getModularCaptionContextPackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Gets the modular caption context style package ID.
   *  @return {String} Returns the obtained modular caption context style resource package ID.
   *  @else
   *  @brief 获取模块化字幕渲染样式包 ID。
   *  @return {String} 返回获取的模块化字幕渲染样式资源包ID。
   *  @endif
   */
    getModularCaptionRendererPackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Gets the modular caption animation style package ID.
   *  @return {String} Returns the obtained modular caption animation style resource package ID.
   *  @else
   *  @brief 获取模块化字幕动画样式包 ID。
   *  @return {String} 返回获取到的模块化字幕动画样式资源包ID。
   *  @endif
   */
    getModularCaptionAnimationPackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Gets the modular caption in-animation style package ID.
   *  @return {String} Returns the obtained modular caption in-animation style resource package ID.
   *  @else
   *  @brief 获取模块化字幕动画样式包 ID。
   *  @return {String} 返回获取的模块化字幕动画样式资源包ID。
   *  @endif
   */
    getModularCaptionInAnimationPackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Gets the modular caption out-animation style package ID.
   *  @return {String} Returns the obtained modular caption out-animation style resource package ID.
   *  @else
   *  @brief 获取模块化字幕外动画样式包 ID。
   *  @return {String} 返回获取的模块化字幕外动画样式资源包ID。
   *  @endif
   */
    getModularCaptionOutAnimationPackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Apply caption style
   *  @param {String} captionStylePackageId Caption style resource package ID.
   *  @param {Number} isUseDefaultAssetParam Whether to use the properties that come with the caption package.
   *  @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   *  @else
   *  @brief 应用标题样式
   *  @param {String} captionStylePackageId 字幕样式资源包 ID。
   *  @param {Number} isUseDefaultAssetParam 是否使用字幕包自带的属性。
   *  @return {Boolean} 返回布尔值。 true 表示申请成功，false 表示失败。
   *  @endif
   */
    applyCaptionStyle(captionStylePackageId: string, isUseDefaultAssetParam: number): boolean;
    /**
   *  @if ENGLISH
   *  @brief Applys modular caption context style.
   *  @param {String} captionContextPackageId Modular caption context style resource package ID.
   *  @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   *  @else
   *  @brief 应用模块化标题上下文样式。
   *  @param {String} captionContextPackageId 模块化字幕上下文样式资源包 ID。
   *  @return {Boolean} 返回布尔值。 true 表示申请成功，false 表示失败。
   *  @endif
   */
    applyModularCaptionContext(captionContextPackageId: string): boolean;
    /**
   *  @if ENGLISH
   *  @brief Applys modular caption render style.
   *  @param {String} captionRendererPackageId Modular caption render style resource package ID.
   *  @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   *  @else
   *  @brief 应用模块化字幕渲染样式。
   *  @param {String} captionRendererPackageId 模块化字幕渲染样式资源包 ID。
   *  @return {Boolean} 返回布尔值。 true 表示申请成功，false 表示失败。
   *  @endif
   */
    applyModularCaptionRenderer(captionRendererPackageId: string): boolean;
    /**
   *  @if ENGLISH
   *  @brief Applys modular caption loop-animation style.
   *  @param {String} captionAnimationPackageId caption animation package id
   *  @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   *  @else
   *  @brief 应用模块化字幕循环动画样式。
   *  @param {String} captionAnimationPackageId 字幕动画包ID
   *  @return {Boolean} 返回布尔值。 true 表示申请成功，false 表示失败。
   *  @endif
   */
    applyModularCaptionAnimation(captionAnimationPackageId: string): boolean;
    /**
   *  @if ENGLISH
   *  @brief Applys modular caption in-animation style. Notes：please set loop-Animation to null before you set in-animation, otherwise it will NOT works.
   *  @param {String} captionInAnimationPackageId caption in animation package id
   *  @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   *  @else
   *  @brief 在动画样式中应用模块化字幕。注意：设置in-animation前请先设置loop-Animation为null，否则无效。
   *  @param {String} captionInAnimationPackageId 动画包 ID 中的字幕
   *  @return {Boolean} 返回布尔值。 true 表示申请成功，false 表示失败。
   *  @endif
   */
    applyModularCaptionInAnimation(captionInAnimationPackageId: string): boolean;
    /**
   *  @if ENGLISH
   *  @brief Applys modular caption out-animation style.Notes：please set loop-Animation to null before you set out-animation, otherwise it will NOT works.
   *  @param {String} captionOutAnimationPackageId Modular caption out-animation style resource package ID.
   *  @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   *  @else
   *  @brief 应用模块化字幕出动画样式。注意：请在设置出动画之前将loop-Animation设置为null，否则将不起作用。
   *  @param {String} captionOutAnimationPackageId 模块化字幕出动画样式资源包 ID。
   *  @return {Boolean} 返回布尔值。 true 表示申请成功，false 表示失败。
   *  @endif
   */
    applyModularCaptionOutAnimation(captionOutAnimationPackageId: string): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set modular caption Animation Peroid.
   *  @param {Number} periodInMS Animation peroid in millisecond
   *  @return {void}
   *  @else
   *  @brief 设置模块化字幕动画周期。
   *  @param {Number} periodInMS 动画周期（毫秒）
   *  @return {void}
   *  @endif
   */
    setModularCaptionAnimationPeroid(periodInMS: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get modular caption Animation Peroid.
   *  @return {Number} Return animation peroid in millisecond
   *  @else
   *  @brief 获取模块化字幕动画周期。
   *  @return {Number} 返回动画周期（毫秒）
   *  @endif
   */
    getModularCaptionAnimationPeroid(): number;
    /**
   *  @if ENGLISH
   *  @brief Set modular caption in-animation duration.
   *  @param {Number} inAnimationDurationInMS in-animation duration in millisecond
   *  @return {void}
   *  @else
   *  @brief 设置模块化字幕动画持续时间。
   *  @param {Number} inAnimationDurationInMS 动画持续时间（以毫秒为单位）
   *  @return {void}
   *  @endif
   */
    setModularCaptionInAnimationDuration(inAnimationDurationInMS: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get modular caption in-animation duration.
   *  @return {Number} Return in-animation duration in millisecond
   *  @else
   *  @brief 获取动画中的模块化字幕持续时间。
   *  @return {Number} 以毫秒为单位返回动画持续时间
   *  @endif
   */
    getModularCaptionInAnimationDuration(): number;
    /**
   *  @if ENGLISH
   *  @brief Set modular caption out-animation duration.
   *  @param {Number} outAnimationDurationInMS out-animation duration in millisecond
   *  @return {void}
   *  @else
   *  @brief 设置模块化字幕动画持续时间。
   *  @param {Number} outAnimationDurationInMS 以毫秒为单位的动画持续时间
   *  @return {void}
   *  @endif
   */
    setModularCaptionOutAnimationDuration(outAnimationDurationInMS: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get modular caption out-animation duration.
   *  @return {Number} Return out-animation duration in millisecond
   *  @else
   *  @brief 获取模块化字幕动画持续时间。
   *  @return {Number} 以毫秒为单位返回动画持续时间
   *  @endif
   */
    getModularCaptionOutAnimationDuration(): number;
    /**
   *  @if ENGLISH
   *  @brief Sets caption text.
   *  @param {String} text Caption text
   *  @return {void}
   *  @else
   *  @brief 设置标题文本。
   *  @param {String} text 字幕文本
   *  @return {void}
   *  @endif
   */
    setText(text: string): void;
    /**
   *  @if ENGLISH
   *  @brief Gets caption text.
   *  @return {String} Returns caption text obtained.
   *  @else
   *  @brief 获取字幕文本。
   *  @return {String} 返回获得的字幕文本。
   *  @endif
   */
    getText(): string;
    /**
   *  @if ENGLISH
   *  @brief Set caption horizontal alignment style
   *  @param {Number} textAlign Indicates the caption horizontal alignment style
   *  @return {void}
   *  @else
   *  @brief 设置标题水平对齐样式
   *  @param {Number} textAlign 指示标题水平对齐方式
   *  @return {void}
   *  @endif
   */
    setTextAlignment(textAlign: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption horizontal alignment style
   *  @return {Number} Returns caption horizontal alignment style.
   *  @else
   *  @brief 获取标题水平对齐样式
   *  @return {Number} 返回标题水平对齐样式。
   *  @endif
   */
    getTextAlignment(): number;
    /**
   *  @if ENGLISH
   *  @brief Set caption horizontal alignment style
   *  @param {Number} textAlign Indicates the caption horizontal alignment style
   *  @return {void}
   *  @else
   *  @brief 设置标题水平对齐样式
   *  @param {Number} textAlign 指示标题水平对齐方式
   *  @return {void}
   *  @endif
   */
    setTextVerticalAlignment(textAlign: number): void;
    /**
   *  @if ENGLISH
   *  @brief Gets caption vertical alignment style, valid for frame-caption only.
   *  @return {Number} Returns caption vertical alignment style.
   *  @else
   *  @brief 获取标题垂直对齐样式，仅对 frame-caption 有效。
   *  @return {Number} 返回标题垂直对齐样式。
   *  @endif
   */
    getTextVerticalAlignment(): number;
    /**
   *  @if ENGLISH
   *  @brief Sets whether to layout text vertically.
   *  @param {Boolean} verticalLayout whether to layout text vertically
   *  @return {void}
   *  @else
   *  @brief 设置是否垂直布局文本。
   *  @param {Boolean} verticalLayout 是否垂直布局文本
   *  @return {void}
   *  @endif
   */
    setVerticalLayout(verticalLayout: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Gets whether to layout text vertically.
   *  @return {Boolean}
   *  @else
   *  @brief 获取是否垂直布局文本。
   *  @return {Boolean}
   *  @endif
   */
    getVerticalLayout(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set caption font bold
   *  @param {Boolean} bold Indicates whether the caption font is bold. True means the font is bold, false means the font is not bold.
   *  @return {void}
   *  @else
   *  @brief 设置标题字体粗体
   *  @param {Boolean} bold 指示标题字体是否为粗体。 true 表示字体是粗体，false 表示字体不是粗体。
   *  @return {void}
   *  @endif
   */
    setBold(bold: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get the caption font bold state
   *  @return {Boolean} Returns the caption font bold state. True means the font is bold, false means the font is not bold.
   *  @else
   *  @brief 获取字幕字体加粗状态
   *  @return {Boolean} 返回字幕字体粗体状态。 true 表示字体是粗体，false 表示字体不是粗体。
   *  @endif
   */
    getBold(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set caption font italic.
   *  @param {Boolean} italic Whether it is set to italic. True means that the caption font is set to italic, and false means the caption font is not set to italic.
   *  @return {void}
   *  @else
   *  @brief 设置标题字体斜体。
   *  @param {Boolean} italic 是否设置为斜体。 True 表示字幕字体设置为斜体，false 表示字幕字体未设置为斜体。
   *  @return {void}
   *  @endif
   */
    setItalic(italic: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption font italic.
   *  @return {Boolean} Returns boolean value. True means it is italic font, false means it is not italic.
   *  @else
   *  @brief 获取标题字体斜体。
   *  @return {Boolean} 返回布尔值。 true 表示它是斜体字体，false 表示它不是斜体。
   *  @endif
   */
    getItalic(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set caption underline
   *  @param {Boolean} underline Whether it is set to under line.
   *  @return {void}
   *  @else
   *  @brief 设置标题下划线
   *  @param {Boolean} underline 是否设置为下划线。
   *  @return {void}
   *  @endif
   */
    setUnderline(underline: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption underline
   *  @return {Boolean} Returns boolean value. True means it is under line, false means it is not.
   *  @else
   *  @brief 获取标题下划线
   *  @return {Boolean} 返回布尔值。 true 表示在线下，false 表示不在线下。
   *  @endif
   */
    getUnderline(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set caption word spacing type.
   *  @param {Number} letterSpacingType Word spacing type.
   *  @return {void}
   *  @else
   *  @brief 设置标题字间距类型。
   *  @param {Number} letterSpacingType 字间距类型。
   *  @return {void}
   *  @endif
   */
    setLetterSpacingType(letterSpacingType: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption word spacing type.
   *  @return {Number} return letterSpacingType.
   *  @else
   *  @brief 获取标题字间距类型。
   *  @return {Number} 返回字母SpacingType。
   *  @endif
   */
    getLetterSpacingType(): number;
    /**
   *  @if ENGLISH
   *  @brief Set caption letter spacing
   *  @param {Number} letterSpacing Word spacing is expressed in percentage value by default.
   *  @return {void}
   *  @else
   *  @brief 设置标题字母间距
   *  @param {Number} letterSpacing 字间距默认以百分比值表示。
   *  @return {void}
   *  @endif
   */
    setLetterSpacing(letterSpacing: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption letter spacing
   *  @return {Number} Returns the float value, the percentage value by default.
   *  @else
   *  @brief 获取标题字母间距
   *  @return {Number} 返回浮点值，默认为百分比值。
   *  @endif
   */
    getLetterSpacing(): number;
    /**
   *  @if ENGLISH
   *  @brief Set line spacing
   *  @param {} lineSpacing line spacing is expressed in absolute value.
   *  @return {void}
   *  @else
   *  @brief 设置行距
   *  @param {Number} lineSpacing 行间距以绝对值表示。
   *  @return {void}
   *  @endif
   */
    setLineSpacing(lineSpacing: any): void;
    /**
   *  @if ENGLISH
   *  @brief Get line spacing
   *  @return {Number} return float value, line spacing is expressed in absolute value.
   *  @else
   *  @brief 获取行距
   *  @return {Number} 返回浮点值，行距以绝对值表示。
   *  @endif
   */
    getLineSpacing(): number;
    /**
   *  @if ENGLISH
   *  @brief Set caption weight
   *  @param {Number} weight the value in opentype weight integer.
   *  @return {void}
   *  @else
   *  @brief 设置字幕权重
   *  @param {Number} weight opentype 权重整数中的值。
   *  @return {void}
   *  @endif
   */
    setWeight(weight: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption weight
   *  @return {Number} Returns the caption weight.
   *  @else
   *  @brief 获取字幕重量
   *  @return {Number} 返回字幕权重。
   *  @endif
   */
    getWeight(): number;
    /**
   *  @if ENGLISH
   *  @brief Set caption text color
   *  @param {NvsColor} color Caption text color value.
   *  @else
   *  @return {void}
   *  @brief 设置标题文字颜色
   *  @param {NvsColor} color 字幕文本颜色值。
   *  @return {void}
   *  @endif
   */
    setTextColor(color: NvsColor): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption text color
   *  @return {NvsColor} Returns the NvsColor object representing the color value obtained.
   *  @else
   *  @brief 获取标题文本颜色
   *  @return {NvsColor} 返回表示获得的颜色值的 NvsColor 对象。
   *  @endif
   */
    getTextColor(): NvsColor;
    /**
   *  @if ENGLISH
   *  @brief Set caption stroke.
   *  @param {Boolean} drawOutline Whether to stroke the captions. True means it strokes the caption. False means it does not stroke the edges.
   *  @return {void}
   *  @else
   *  @brief 设置字幕描边。
   *  @param {Boolean} drawOutline 是否描边字幕。 True 表示描边标题。 False 表示不描边。
   *  @return {void}
   *  @endif
   */
    setDrawOutline(drawOutline: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption stroke.
   *  @return {Boolean}
   *  @else
   *  @brief 获取字幕描边。
   *  @return {Boolean}
   *  @endif
   */
    getDrawOutline(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set the width of the caption stroke.
   *  @param {Number} outlineWidth The width of the caption stroke.
   *  @return {void}
   *  @else
   *  @brief 设置标题笔划的宽度。
   *  @param {Number} outlineWidth 标题笔划的宽度。
   *  @return {void}
   *  @endif
   */
    setOutlineWidth(outlineWidth: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get the width of the caption stroke.
   *  @return {Number} Returns the width value of the obtained caption stroke.
   *  @else
   *  @brief 获取标题笔画的宽度。
   *  @return {Number} 返回获取的标题笔画的宽度值。
   *  @endif
   */
    getOutlineWidth(): number;
    /**
   *  @if ENGLISH
   *  @brief Set the color of the caption stroke.
   *  @param {NvsColor} color Caption stroke color value.
   *  @return {void}
   *  @see NvsColor
   *  @else
   *  @brief 设置标题描边的颜色。
   *  @param {NvsColor} color 字幕描边颜色值。
   *  @return {void}
   *  @see NvsColor
   *  @endif
   */
    setOutlineColor(color: NvsColor): void;
    /**
   *  @if ENGLISH
   *  @brief Get the color of the caption stroke.
   *  @return {NvsColor} Returns the NvsColor object representing the color of the resulting caption stroke.
   *  @else
   *  @brief 获取标题笔划的颜色。
   *  @return {NvsColor} 返回 NvsColor 对象，该对象表示生成的标题笔划的颜色。
   *  @endif
   */
    getOutlineColor(): NvsColor;
    /**
   *  @if ENGLISH
   *  @brief Set caption shadows.
   *  @param {Boolean} drawShadow Whether to set the caption shadow. True means to set the caption shadow, false means to not set.
   *  @return {void}
   *  @else
   *  @brief 设置字幕阴影。
   *  @param {Boolean} drawShadow 是否设置字幕阴影。 true 表示设置字幕阴影，false 表示不设置。
   *  @return {void}
   *  @endif
   */
    setDrawShadow(drawShadow: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption shadows.
   *  @return {Boolean}
   *  @else
   *  @brief 获取字幕阴影。
   *  @return {Boolean}
   *  @endif
   */
    getDrawShadow(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set caption shadow offset
   *  @param {PointF} offset Caption shadow offset.
   *  @return {void}
   *  @else
   *  @brief 设置字幕阴影偏移
   *  @param {PointF} offset 字幕阴影偏移。
   *  @return {void}
   *  @endif
   */
    setShadowOffset(offset: PointF): void;
    /**
   *  @if ENGLISH
   *  @brief Gets the offset of the current caption shadow.
   *  @return {PointF} Returns a PointF object representing the caption shadow offset obtained.
   *  @else
   *  @brief 获取当前字幕阴影的偏移量。
   *  @return {PointF} 返回一个 PointF 对象，表示获得的字幕阴影偏移。
   *  @endif
   */
    getShadowOffset(): PointF;
    /**
   *  @if ENGLISH
   *  @brief Set caption shadow color
   *  @param {NvsColor} shadowColor Caption shadow color value.
   *  @return {void}
   *  @else
   *  @brief 设置字幕阴影颜色
   *  @param {NvsColor} shadowColor 字幕阴影颜色值。
   *  @return {void}
   *  @endif
   */
    setShadowColor(color: any): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption shadow color
   *  @return {NvsColor} Returns the NvsColor object representing the caption shadow color value obtained.
   *  @else
   *  @brief 获取字幕阴影颜色
   *  @return {NvsColor} 返回表示获得的字幕阴影颜色值的 NvsColor 对象。
   *  @endif
   */
    getShadowColor(): NvsColor;
    /**
   *  @if ENGLISH
   *  @brief Set the feathering degree of the caption shadow.
   *  @param {Number} feather feathering degree
   *  @return {void}
   *  @else
   *  @brief 设置字幕阴影的羽化程度。
   *  @param {Number} feather 羽化度
   *  @return {void}
   *  @endif
   */
    setShadowFeather(feather: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get the feathering degree of the caption shadow.
   *  @return {Number} Returns feathering degree
   *  @else
   *  @brief 获取字幕阴影的羽化度。
   *  @return {Number} 返回羽化度
   *  @endif
   */
    getShadowFeather(): number;
    /**
   *  @if ENGLISH
   *  @brief Set caption font size.
   *  @param {Number} fontSize Caption font size value
   *  @return {void}
   *  @else
   *  @brief 设置字幕字体大小。
   *  @param {Number} fontSize 字幕字体大小值
   *  @return {void}
   *  @endif
   */
    setFontSize(fontSize: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption font size.
   *  @return {Number} Returns the obtained caption font size value.
   *  @else
   *  @brief 获取字幕字体大小。
   *  @return {Number} 返回获取的字幕字体大小值。
   *  @endif
   */
    getFontSize(): number;
    /**
   *  @if ENGLISH
   *  @brief Set caption font by file path
   *  @param {String} filePath The file path of the caption font. If it is set to a null string, it is set as the default font.
   *  @return {void}
   *  @else
   *  @brief 按文件路径设置字幕字体
   *  @param {String} filePath 字幕字体的文件路径。如果设置为空字符串，则设置为默认字体。
   *  @return {void}
   *  @endif
   */
    setFontByFilePath(filePath: string): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption font file path
   *  @return {String} Returns the file path of the caption font.
   *  @else
   *  @brief 获取字幕字体文件路径
   *  @return {String} 返回字幕字体的文件路径。
   *  @endif
   */
    getFontFilePath(): string;
    /**
   *  @if ENGLISH
   *  @brief Set caption font family
   *  @param {String} family Caption font name. It will be set to default font if a null string which is given.
   *  @return {void}
   *  @else
   *  @brief 设置标题字体系列
   *  @param {String} family Caption font name. 如果给出一个空字符串，它将被设置为默认字体。
   *  @return {void}
   *  @endif
   */
    setFontFamily(family: string): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption font family
   *  @return {String} Returns font family of caption.
   *  @else
   *  @brief 获取字体名称
   *  @return {String} 返回字体名称。
   *  @endif
   */
    getFontFamily(): string;
    /**
   *  @if ENGLISH
   *  @brief Get compound caption font family name
   *  @return {String} Returns the compound caption font family name of caption.
   *  @else
   *  @brief 获取字体组合名称
   *  @return {String} 返回字体组合名称。
   *  @endif
   */
    getFontCompoundFamilyName(): string;
    /**
   *  @if ENGLISH
   *  @brief Set the amount of caption translation.
   *  @param {PointF} translation The horizontal and vertical absolute translation of the caption.
   *  @return {void}
   *  @else
   *  @brief 设置字幕平移量。
   *  @param {PointF} translation 字幕的水平和垂直平移量绝对值。
   *  @return {void}
   *  @endif
   */
    setCaptionTranslation(translation: PointF): void;
    /**
   *  @if ENGLISH
   *  @brief Get the amount of caption translation.
   *  @return {PointF} Returns PointF object indicating the amount of caption translation obtained.
   *  @else
   *  @brief 获取字幕平移量。
   *  @return {PointF} 返回 PointF 对象，指示获得的字幕平移量。
   *  @endif
   */
    getCaptionTranslation(): PointF;
    /**
   *  @if ENGLISH
   *  @brief Caption translation.
   *  @param {PointF} translationOffset Horizontal and vertical offset values for caption.
   *  @return {void}
   *  @else
   *  @brief 字幕平移。
   *  @param {PointF} translationOffset 字幕的水平和垂直偏移值.
   *  @return {void}
   *  @endif
   */
    translateCaption(translationOffset: PointF): void;
    /**
   *  @if ENGLISH
   *  @brief Set caption anchor.
   *  @param {PointF} anchor Anchor
   *  @return {void}
   *  @else
   *  @brief 设置字幕锚。
   *  @param {PointF} anchor 锚
   *  @return {void}
   *  @endif
   */
    setAnchorPoint(anchor: PointF): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption anchor.
   *  @return {PointF} Returns caption anchor.
   *  @else
   *  @brief 获取字幕锚。
   *  @return {PointF} 返回字幕锚。
   *  @endif
   */
    getAnchorPoint(): PointF;
    /**
   *  @if ENGLISH
   *  @brief Set horizontal scaling factor for caption.
   *  @param {Number} scale Horizontal scaling factor.
   *  @return {void}
   *  @else
   *  @brief 设置字幕的水平缩放系数。
   *  @param {Number} scale 水平比例系数。
   *  @return {void}
   *  @endif
   */
    setScaleX(scale: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get horizontal scaling factor for caption.
   *  @return {Number} Returns caption horizontal scaling factor.
   *  @else
   *  @brief 获取标题的水平缩放系数。
   *  @return {Number} 返回字幕水平缩放系数。
   *  @endif
   */
    getScaleX(): number;
    /**
   *  @if ENGLISH
   *  @brief Set vertical scaling factor for caption.
   *  @param {Number} scale Vertical scaling factor.
   *  @return {void}
   *  @else
   *  @brief 设置标题的垂直比例系数。
   *  @param {Number} scale 垂直比例系数。
   *  @return {void}
   *  @endif
   */
    setScaleY(scale: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get vertical scaling factor for caption.
   *  @return {Number} Returns caption vertical scaling factor.
   *  @else
   *  @brief 获取标题的垂直比例系数。
   *  @return {Number} 返回字幕垂直比例系数。
   *  @endif
   */
    getScaleY(): number;
    /**
   *  @if ENGLISH
   *  @brief Zooms caption.
   *  @param {Number} scaleFactor Caption scaling factor.
   *  @param {PointF} anchor Caption zoom anchor.
   *  @return {void}
   *  @else
   *  @brief 缩放字幕。
   *  @param {Number} scaleFactor 字幕比例系数。
   *  @param {PointF} anchor 字幕缩放锚。
   *  @return {void}
   *  @endif
   */
    scaleCaption(scaleFactor: number, anchor: PointF): void;
    /**
   *  @if ENGLISH
   *  @brief Scale caption on center
   *  @param {Number} scaleFactor scale factor
   *  @return {void}
   *  @else
   *  @brief 在中心缩放标题
   *  @param {Number} scaleFactor 比例系数
   *  @return {void}
   *  @endif
   */
    scaleCaption2(scaleFactor: number): void;
    /**
   *  @if ENGLISH
   *  @brief Set rotation angle for caption.
   *  @param {Number} angle Rotation angle.
   *  @return {void}
   *  @else
   *  @brief 设置字幕的旋转角度。
   *  @param {Number} angle 旋转角度。
   *  @return {void}
   *  @endif
   */
    setRotationZ(angle: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get rotation angle for caption.
   *  @return {Number} Returns caption rotation angle.
   *  @else
   *  @brief 获取标题的旋转角度。
   *  @return {Number} 返回字幕旋转角度。
   *  @endif
   */
    getRotationZ(): number;
    /**
   *  @if ENGLISH
   *  @brief Rotate caption
   *  @param {Number} angle Angle of caption rotation.
   *  @param {PointF} anchor Anchor of caption rotation.
   *  @return {void}
   *  @else
   *  @brief 旋转字幕
   *  @param {Number} angle 字幕旋转的角度。
   *  @param {PointF} anchor 字幕旋转的锚点。
   *  @return {void}
   *  @endif
   */
    rotateCaption(angle: number, anchor: PointF): void;
    /**
   *  @if ENGLISH
   *  @brief Rotates caption with the caption center point as the anchor point.
   *  @param {Number} angle Angle of caption rotation.
   *  @return {void}
   *  @else
   *  @brief 以字幕中心点为锚点旋转字幕。
   *  @param {Number} angle 字幕旋转的角度。
   *  @return {void}
   *  @endif
   */
    rotateCaption2(angle: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption text rectangle
   *  @return {NvsRectF} Returns RectF object representing the obtained caption text rectangle.
   *  @else
   *  @brief 获取标题文本矩形
   *  @return {RectF} 返回表示获得的标题文本矩形的 RectF 对象。
   *  @endif
   */
    getTextBoundingRect(): NvsRectF;
    /**
   *  @if ENGLISH
   *  @brief Get the vertex position of the original enclosing rectangle of the caption after transformation.
   *  @return {NvsVectorVal<NvsPointF>} Returns a NvsVectorVal<NvsPointF> object containing four vertex positions, which in turn correspond to the top left, bottom left, bottom right, and top right vertices of the original bounding rectangle.
   *  @else
   *  @brief 获取转换后字幕的原始包围矩形的顶点位置。
   *  @return {NvsVectorVal<NvsPointF>} 返回一个包含四个顶点位置的 NvsVectorVal<NvsPointF> 对象，这些位置依次对应于原始边界矩形的左上角、左下角、右下角和右上角顶点。
   *  @endif
   */
    getBoundingRectangleVertices(): NvsVectorVal<NvsPointF>;
    /**
   *  @if ENGLISH
   *  @brief Get the transformed vertices position of the original caption bounding.
   *  @param {number} boundingType (NvsCaptionTextBoundingTypeEnum) Bounding type
   *  @return {NvsVectorVal<NvsPointF>} Returns a NvsVectorVal<NvsPointF> object containing four vertices positions, which correspond to the top left, bottom left, bottom right, and top right vertices of the original bounding.
   *  @else
   *  @brief 获取原始字幕边界的变换顶点位置。
   *  @param {number} boundingType(NvsCaptionTextBoundingTypeEnum) B起始类型
   *  @return {NvsVectorVal<NvsPointF>} 返回一个 NvsVectorVal<NvsPointF> 对象，其中包含四个顶点位置，分别对应于原始边界的左上角、左下角、右下角和右上角顶点。
   *  @endif
   */
    getCaptionBoundingVertices(boundingType: number): NvsVectorVal<NvsPointF>;
    /**
   *  @if ENGLISH
   *  @brief Set caption Z value.
   *  @param {Number} value Z value
   *  @return {void}
   *  @else
   *  @brief 设置标题 Z 值。
   *  @param {Number} value Z值
   *  @return {void}
   *  @endif
   */
    setZValue(value: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption Z value.
   *  @return {Number} Returns caption Z value.
   *  @else
   *  @brief 获取标题 Z 值。
   *  @return {Number} 返回标题 Z值。
   *  @endif
   */
    getZValue(): number;
    /**
   *  @if ENGLISH
   *  @brief Set whether to record user actions.
   *  @param {Boolean} recordingUserOperation Record user actions or not
   *  @return {void}
   *  @else
   *  @brief 设置是否记录用户操作。
   *  @param {Boolean} recordingUserOperation 是否记录用户操作
   *  @return {}
   *  @endif
   */
    setRecordingUserOperation(recordingUserOperation: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Set caption opacity.
   *  @param {Number} opacity caption opacity.
   *  @return {void}
   *  @else
   *  @brief 设置字幕不透明度。
   *  @param {Number} opacity 字幕不透明度。
   *  @return {void}
   *  @endif
   */
    setOpacity(opacity: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption opacity.
   *  @return {Number} Return the caption opacity.
   *  @else
   *  @brief 设置字幕不透明度。
   *  @return {Number} 返回标题不透明度。
   *  @endif
   */
    getOpacity(): number;
    /**
   *  @if ENGLISH
   *  @brief Determine if it is a border caption.
   *  @return {Boolean} A return value of true indicates a border caption
   *  @else
   *  @brief 确定它是否是边框标题。
   *  @return {Boolean} 返回值为 true 表示边框标题
   *  @endif
   */
    isFrameCaption(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Determine if caption text color changed.
   *  @return {void}
   *  @else
   *  @brief 确定标题文本颜色是否改变。
   *  @return {void}
   *  @endif
   */
    isTextColorChanged(): void;
    /**
   *  @if ENGLISH
   *  @brief Determines whether the current caption is a modular caption.
   *  @return {Boolean} If returns value is true, it is panorama caption.
   *  @else
   *  @brief 确定当前标题是否为模块化标题。
   *  @return {Boolean} 如果返回值为真，则为全景字幕。
   *  @endif
   */
    isModular(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set text background color.
   *  @param {NvsColor} backgroundColor Background color value.
   *  @return {void}
   *  @else
   *  @brief 设置文本背景颜色。
   *  @param {NvsColor} backgroundColor 背景颜色值。
   *  @return {void}
   *  @endif
   */
    setBackgroundColor(backgroundColor: NvsColor): void;
    /**
   *  @if ENGLISH
   *  @brief Get the current text background color value.
   *  @return {NvsColor} Returns the NvsColor object representing the current background color.
   *  @else
   *  @brief 获取当前文本背景颜色值。
   *  @return {NvsColor} 返回表示当前背景颜色的 NvsColor 对象。
   *  @endif
   */
    getBackgroundColor(): NvsColor;
    /**
   *  @if ENGLISH
   *  @brief Set text background rectangle's corner radius.
   *  @param {Number} radius Corner radius value
   *  @return {void}
   *  @else
   *  @brief 设置文本背景矩形的角半径。
   *  @param {Number} radius 圆角半径值
   *  @return {void}
   *  @endif
   */
    setBackgroundRadius(radius: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get text background rectangle's corner radius.
   *  @return {Number} Returns corner radius value
   *  @else
   *  @brief 获取文本背景矩形的角半径。
   *  @return {Number} 返回角半径值
   *  @endif
   */
    getBackgroundRadius(): number;
    /**
   *  @if ENGLISH
   *  @brief Set the caption KeyFrameTime.
   *  @param {Number} time time
   *  @return {void}
   *  @else
   *  @brief 设置标题 KeyFrameTime。
   *  @param {Number} time 时间
   *  @return {void}
   *  @endif
   */
    setCurrentKeyFrameTime(time: number): void;
    /**
   *  @if ENGLISH
   *  @brief Set caption lyrics type
   *  @param {Boolean} isLyrics lyrics
   *  @return {void}
   *  @else
   *  @brief 设置字幕歌词类型
   *  @param {Boolean} isLyrics 是否歌词
   *  @return {void}
   *  @endif
   */
    setIsLyrics(isLyrics: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Lyrics or not
   *  @return {Boolean}
   *  @else
   *  @brief 歌词与否
   *  @return {Boolean}
   *  @endif
   */
    isLyrics(): boolean;
    /**
   *  @if ENGLISH
   *  @brief enable speed
   *  @param {Boolean} enable
   *  @return {void}
   *  @else
   *  @brief 开启变速
   *  @param {Boolean} enable
   *  @return {void}
   *  @endif
   */
    enableSpeed(enable: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief is Enable speed
   *  @return {Boolean}
   *  @else
   *  @brief 是否开启变速
   *  @return {Boolean}
   *  @endif
   */
    isSpeedEnabled(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Set the max font size for border caption. Only border caption can use this method.
   *  @param {Number} maxFontSize max font size
   *  @return {void}
   *  @else
   *  @brief 设置边框标题的最大字体大小。只有边框标题可以使用此方法。
   *  @param {Number} maxFontSize 最大字体大小
   *  @return {void}
   *  @endif
   */
    setFrameCaptionMaxFontSize(maxFontSize: number): void;
    /**
   *  @if ENGLISH
   *  @brief Set the original frame size of the frame caption. If the current caption is not a frame caption, this function has no effect. You can get origin frame size.
   *  @param {NvsRectF} rect New frame size.
   *  @return {void}
   *  @else
   *  @brief 设置帧标题的原始帧大小。如果当前字幕不是帧字幕，则此功能无效。您可以获得原始帧大小。
   *  @param {NvsRectF} rect 新的帧尺寸。
   *  @return {Number}
   *  @endif
   */
    setTextFrameOriginRect(rect: NvsRectF): void;
    /**
     *  @if ENGLISH
     *  @brief Set layout attributes from the start character to the end character of caption in list.
     *  @param {NvsVectorVal<NvsCaptionSpan>} spanList layout attributes list
     *  @return {void}
     *  @else
     *  @brief 用户可以指定字幕中位置从某一起始字符到某一结束字符之间，应用多种layout属性
     *  @param {NvsVectorVal<NvsCaptionSpan>} spanList layout属性列表
     *  @return {void}
     *  @endif
     */
    setTextSpanList(spanList: NvsVectorVal<NvsCaptionSpan>): void;
    /**
     *  @if ENGLISH
     *  @brief Get layout attributes list of caption
     *  @return {NvsVectorVal<NvsCaptionSpan>} layout attributes list
     *  @else
     *  @brief 获取字幕layout属性列表
     *  @return {NvsVectorVal<NvsCaptionSpan>} layout属性列表
     *  @endif
     */
    getTextSpanList(): NvsVectorVal<NvsCaptionSpan>;
}
/**
 *  @if ENGLISH
 *  @brief Timeline captions..
 *  @else
 *  @brief 时间线字幕是视频上叠加的自定义文字。编辑视频时，可以添加和移除时间线字幕，并对字幕位置进行调整处理。添加完字幕，还可以进行样式设置，包括字体大小，颜色，阴影，描边等。
 *  @endif
 */
declare class NvsTimelineCaption extends NvsCaption {
    /**
   *  @if ENGLISH
   *  @brief Get the in-point of the caption on the timeline.
   *  @return {Number} The in-point of the caption on the timeline (in microseconds).
   *  @else
   *  @brief 获取入点
   *  @return {Number} 时间轴上标题的内点(以微秒为单位)。
   *  @endif
   */
    getInPoint(): number;
    /**
   *  @if ENGLISH
   *  @brief The out-point of the caption on the timeline.
   *  @return {Number} The out-point of the caption on the timeline (in microseconds).
   *  @else
   *  @brief 获取出点
   *  @return {Number} 时间轴上标题的出点(以微秒为单位)。
   *  @endif
   */
    getOutPoint(): number;
    /**
   *  @if ENGLISH
   *  @brief Changes the in-point of the caption on the timeline.
   *  @param {Number} newInPoint The new in-point of the caption on the timeline (in microseconds).
   *  @return {Number} Returns the in-point of the caption on the timeline (in microseconds).
   *  @else
   *  @brief 改变入点
   *  @param {Number} newInPoint 新的入点
   *  @return {Number} 返回时间轴上标题的入点(以微秒为单位)。
   *  @endif
   */
    changeInPoint(newInPoint: number): number;
    /**
   *  @if ENGLISH
   *  @brief Changes the out-point of the caption on the timeline.
   *  @param {Number} newOutPoint The new out-point of the caption on the timeline (in microseconds).
   *  @return {Number} Returns the out-point of the caption on the timeline (in microseconds).
   *  @else
   *  @brief 改变出点
   *  @param {Number} newOutPoint 新的出点
   *  @return {Number} 返回时间轴上标题的出点(以微秒为单位)。
   *  @endif
   */
    changeOutPoint(newOutPoint: number): number;
    /**
   *  @if ENGLISH
   *  @brief Changes the display position of the caption on the timeline (the in and out points are offset from the offset value at the same time).
   *  @param {Number} offset Offset value for in and out points changes (in microseconds).
   *  @return {void}
   *  @else
   *  @brief 移动位置
   *  @param {Number} offset 偏移量
   *  @return {void}
   *  @endif
   */
    movePosition(offset: number): void;
}
/**
 *  @if ENGLISH
 *  @brief  Motion parameter information
 *  @else
 *  @brief 运动参数
 *  @endif
 */
declare class NvsMotionParameters {
    anchorX: number;
    anchorY: number;
    scaleX: number;
    scaleY: number;
    rotationZ: number;
    transX: number;
    transY: number;
}
/**
 *  @if ENGLISH
 *  @brief Timeline compound caption. Timeline compound captions are compound caption that is superimposed on the video, each compound caption may composed of several sub-captions. When editing a video, users can add or remove timeline compound captions and adjust the captions position. User can also set its properties such as font family, text color, etc.
 *  @see NvsFx
 *  @else
 *  @brief 时间线复合字幕。时间线复合字幕是视频上叠加的组合型文字，每个复合字幕包含若干个子字幕。编辑视频时，可以添加和移除时间线复合字幕，并对字幕位置进行调整处理，还可以对字体，颜色属性进行修改。
 *  @see NvsFx
 *  @endif
 */
declare class NvsCompoundCaption extends NvsFx {
    /**
   *  @if ENGLISH
   *  @brief  Get number of sub-cpations in this compound caption.
   *  @return {Number} Returns number of sub-cpations
   *  @else
   *  @brief 获取字幕数量
   *  @return {Number} 返回字幕的数量
   *  @endif
   */
    getCaptionCount(): number;
    /**
   * @if ENGLISH
   * @brief Set sub-caption text with index
   * @param {Number} captionIndex caption index to set text
   * @param {String} text Caption text
   * @return {void}
   * @else
   * @brief 设置文本
   * @param {Number} captionIndex 字幕索引
   * @param {String} text 文本
   * @return {void} 文字内容
   * @endif
   */
    setText(captionIndex: number, text: string): void;
    /**
   * @if ENGLISH
   * @brief Get sub-caption text with index
   * @param {Number} captionIndex caption index to get text
   * @return {String} Returns caption text.
   * @else
   * @brief 获取文本
   * @param {Number} captionIndex 字幕索引
   * @return {String} 返回字幕文本。
   * @endif
   */
    getText(captionIndex: number): string;
    /**
   * @if ENGLISH
   * @brief Set sub-caption color with index
   * @param {Number} captionIndex Caption index to set text color
   * @param {NvsColor} color Caption text color value.
   * @return {void}
   * @else
   * @brief 设置文本颜色
   * @param {Number} captionIndex 字幕索引
   * @param {NvsColor} color 颜色
   * @return {void}
   * @endif
   */
    setTextColor(captionIndex: number, color: NvsColor): void;
    /**
   * @if ENGLISH
   * @brief Get sub-caption color with index
   * @param {Number} captionIndex caption index to get text color
   * @return {NvsColor} Return NvsColor object which is the text color
   * @else
   * @brief 获取文本颜色
   * @param {Number} captionIndex 字幕索引
   * @return {NvsColor} 返回 NvsColor 对象，它是文本颜色
   * @endif
   */
    getTextColor(captionIndex: number): NvsColor;
    /**
   * @if ENGLISH
   * @brief Set sub-caption font family with index
   * @param {Number} captionIndex Caption index to set font family
   * @param {String} family Caption font family name. It will be set to default font if family is an empty string
   * @return {void}
   * @else
   * @brief 设置字体家族
   * @param {Number} captionIndex 字幕索引
   * @param {String} family 字体家族
   * @return {void}
   * @endif
   */
    setFontFamily(captionIndex: number, family: string): void;
    /**
   * @if ENGLISH
   * @brief Get sub-caption font family with index
   * @param {Number} captionIndex sub-caption index
   * @return {String}
   * @else
   * @brief 获取字体家族
   * @param {Number} captionIndex 字幕索引
   * @return {String}
   * @endif
   */
    getFontFamily(captionIndex: number): string;
    /**
   * @if ENGLISH
   * @brief Set the amount of caption translation.
   * @param {PointF} translation The horizontal and vertical translation of the caption.
   * @return {void}
   * @else
   * @brief 设置字幕平移
   * @param {PointF} translation 转场
   * @return {void}
   * @endif
   */
    setCaptionTranslation(translation: PointF): void;
    /**
   * @if ENGLISH
   * @brief Get the amount of caption translation.
   * @return {PointF} Returns PointF object indicating the amount of caption translation obtained.
   * @else
   * @brief 获取字幕平移
   * @return {PointF} 返回 PointF 对象，指示获得的字幕平移量。
   * @endif
   */
    getCaptionTranslation(): PointF;
    /**
   * @if ENGLISH
   * @brief Translate caption.
   * @param {PointF} translationOffset Horizontal and vertical offset values for caption.
   * @return {void}
   * @else
   * @brief 平移字幕
   * @param {PointF} translationOffset 转场偏移
   * @return {void}
   * @endif
   */
    translateCaption(translationOffset: PointF): void;
    /**
   * @if ENGLISH
   * @brief Set caption anchor.
   * @param {PointF} anchor Anchor
   * @return {viod}
   * @else
   * @brief 设置锚点
   * @param {PointF} anchor 锚点
   * @return {void}
   * @endif
   */
    setAnchorPoint(anchor: PointF): viod;
    /**
   * @if ENGLISH
   * @brief Get caption anchor.
   * @return {PointF} Returns caption anchor.
   * @else
   * @brief 获取锚点
   * @return {PointF} 返回字幕锚。
   * @endif
   */
    getAnchorPoint(): PointF;
    /**
   * @if ENGLISH
   * @brief Set horizontal scaling factor for caption.
   * @param {Number} scale Horizontal scaling factor.
   * @return {void}
   * @else
   * @brief 设置X方向缩放
   * @param {Number} scale 缩放
   * @return {void}
   * @endif
   */
    setScaleX(scale: number): void;
    /**
   * @if ENGLISH
   * @brief Get horizontal scaling factor for caption.
   * @return {Number} Returns caption horizontal scaling factor.
   * @else
   * @brief 获取X方向缩放
   * @return {Number} 返回字幕水平缩放系数。
   * @endif
   */
    getScaleX(): number;
    /**
   * @if ENGLISH
   * @brief Set vertical scaling factor for captions.
   * @param {Number} scale Vertical scaling factor.
   * @return {void}
   * @else
   * @brief 设置Y方向缩放
   * @param {Number} scale 缩放
   * @return {void}
   * @endif
   */
    setScaleY(scale: number): void;
    /**
   * @if ENGLISH
   * @brief Get vertical scaling factor for captions.
   * @return {Number} Returns caption vertical scaling factor.
   * @else
   * @brief 获取Y方向缩放
   * @return {Number} 返回字幕垂直比例系数。
   * @endif
   */
    getScaleY(): number;
    /**
   * @if ENGLISH
   * @brief Scale caption
   * @param {Number} scaleFactor Caption scaling factor.
   * @param {PointF} anchor Caption zoom anchor.
   * @return {void}
   * @else
   * @brief 缩放字幕
   * @param {Number} scaleFactor 缩放系数
   * @param {PointF} anchor 锚点
   * @return {void}
   * @endif
   */
    scaleCaption(scaleFactor: number, anchor: PointF): void;
    /**
   * @if ENGLISH
   * @brief Set the rotation angle for the caption.
   * @param {Number} angle Rotation angle.
   * @return {void}
   * @else
   * @brief 设置Z方向旋转
   * @param {Number} angle 角度
   * @return {void}
   * @endif
   */
    setRotationZ(angle: number): void;
    /**
   * @if ENGLISH
   * @brief Get the rotation angle for the caption.
   * @return {Number} Returns caption rotation angle.
   * @else
   * @brief 获取Z方向旋转
   * @return {Number} 返回字幕旋转角度。
   * @endif
   */
    getRotationZ(): number;
    /**
   * @if ENGLISH
   * @brief Rotate caption
   * @param {Number} angle angle
   * @param {PointF} anchor anchor
   * @return {void}
   * @else
   * @brief 旋转字幕
   * @param {Number} angle 角度
   * @param {PointF} anchor 锚点
   * @return {void}
   * @endif
   */
    rotateCaption(angle: number, anchor: PointF): void;
    /**
   * @if ENGLISH
   * @brief Rotate catpion on center
   * @param {Number} angle angle
   * @return {void}
   * @else
   * @brief 旋转字幕
   * @param {Number} angle 角度
   * @return {void}
   * @endif
   */
    rotateCaption2(angle: number): void;
    /**
   * @if ENGLISH
   * @brief Get the transformed vertices position of the original caption bounding.
   * @param {Number} captionIndex sub-caption index
   * @param {Number} boundingType bounding type
   * @param {NvsMotionParameters} motionParams motion parameter
   * @return {NvsVectorVal} Returns the NSArray object, the object type is NSValue, and the actual data type is CGPoint, which correspond to the top left, bottom left, bottom right, and top right vertices of the original bounding.
   * @see NvsMotionParameters
   * @see NvsVectorVal
   * @else
   * @brief 获取字幕边界顶点
   * @param {Number} captionIndex 字幕索引
   * @param {Number} boundingType 边界类型
   * @param {NvsMotionParameters} motionParams 运动参数
   * @return {NvsVectorVal} 返回NSArray对象，对象类型为NSValue，实际数据类型为CGPoint，分别对应原始边界的左上、左下、右下、右上顶点。
   * @see NvsMotionParameters
   * @see NvsVectorVal
   * @endif
   */
    getCaptionBoundingVertices(captionIndex: number, boudingType: any, motionParams: NvsMotionParameters): NvsVectorVal;
    /**
   * @if ENGLISH
   * @brief Get the transformed vertices position of the original compound caption bounding.
   * @param {Number} boundingType Bounding type.
   * @param {NvsMotionParameters} motionParams motion parameter
   * @return {NvsVectorVal} Returns the NSArray object, the object type is NSValue, and the actual data type is CGPoint, which correspond to the top left, bottom left, bottom right, and top right vertices of the original bounding.
   * @see NvsVectorVal
   * @else
   * @brief 获取组合边界顶点
   * @param {Number} boudingType 边界类型
   * @param {NvsMotionParameters} motionParams 运动参数
   * @return {NvsVectorVal} 返回NSArray对象，对象类型为NSValue，实际数据类型为CGPoint，分别对应原始边界的左上、左下、右下、右上顶点。
   * @see NvsVectorVal
   * @endif
   */
    getCompoundBoundingVertices(boudingType: number, motionParams: NvsMotionParameters): NvsVectorVal;
    /**
   * @if ENGLISH
   * @brief Set caption Z value.
   * @param {Number} value Z value
   * @return {void}
   * @else
   * @brief 设置Z值
   * @param {Number} value Z值大小
   * @return {void}
   * @endif
   */
    setZValue(value: number): void;
    /**
   * @if ENGLISH
   * @brief Get caption Z value.
   * @return {Number}
   * @else
   * @brief 获取Z值
   * @return {Number}
   * @endif
   */
    getZValue(): number;
    /**
   * @if ENGLISH
   * @brief Set caption opacity
   * @param {Number} value opacity
   * @return {void}
   * @else
   * @brief 设置不透明度
   * @param {Number} value 不透明度大小
   * @return {void}
   * @endif
   */
    setOpacity(value: number): void;
    /**
   * @if ENGLISH
   * @brief Get caption opacity
   * @return {Number} Return the caption opacity.
   * @else
   * @brief 获取不透明度
   * @return {Number} 返回标题不透明度。
   * @endif
   */
    getOpacity(): number;
    /**
   * @if ENGLISH
   * @brief Determine if it is a border caption.
   * @param {Number} captionIndex sub-caption index
   * @return {Boolean} A return value of true indicates a border caption
   * @else
   * @brief 是否帧字幕
   * @param {Number} captionIndex 字幕索引
   * @return {Boolean} 返回值为 true 表示边框字幕
   * @endif
   */
    isFrameCaption(captionIndex: number): boolean;
    /**
   * @if ENGLISH
   * @brief Get the caption style package ID.
   * @return {String} Returns the obtained caption style resource package ID.
   * @else
   * @brief 获取字幕风格包ID
   * @return {String} 返回获取到的字幕样式资源包ID。
   * @endif
   */
    getCaptionStylePackageId(): string;
}
/**
 * @if ENGLISH
 * @brief Timeline compound caption.
 * @else
 * @brief 时间线复合字幕。
 * @endif
 */
declare class NvsTimelineCompoundCaption extends NvsCompoundCaption {
    /**
   * @if ENGLISH
   * @brief Get the in-point of the caption on the timeline.
   * @return {Number} The in-point of the caption on the timeline (in microseconds).
   * @else
   * @brief 在时间线上获取字幕的入点。
   * @return {Number} 时间线上字幕的入点（以微秒为单位）。
   * @endif
   */
    getInPoint(): number;
    /**
   * @if ENGLISH
   * @brief The out-point of the caption on the timeline.
   * @return {Number} The out-point of the caption on the timeline (in microseconds).
   * @else
   * @brief 时间线上字幕的出点。
   * @return {Number} 时间线上字幕的出点（以微秒为单位）。
   * @endif
   */
    getOutPoint(): number;
    /**
   * @if ENGLISH
   * @brief Changes the in-point of the caption on the timeline.
   * @param {Number} newInPoint The new in-point of the caption on the timeline (in microseconds).
   * @return {Number} Returns the in-point of the caption on the timeline (in microseconds).
   * @else
   * @brief 更改时间轴上字幕的入点。
   * @param {Number} newInPoint 时间线上标题的新入点（以微秒为单位）。
   * @return {Number} 返回时间轴上字幕的入点（以微秒为单位）。
   * @endif
   */
    changeInPoint(newInPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Changes the out-point of the caption on the timeline.
   * @param {Number} newOutPoint The new out-point of the caption on the timeline (in microseconds).
   * @return {Number} Returns the out-point of the caption on the timeline (in microseconds).
   * @else
   * @brief 更改时间轴上字幕的出点。
   * @param {Number} newOutPoint 时间线上标题的新出点（以微秒为单位）。
   * @return {Number} 返回时间轴上字幕的出点（以微秒为单位）。
   * @endif
   */
    changeOutPoint(newOutPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Changes the display position of the caption on the timeline (the in and out points are offset from the offset value at the same time).
   * @param {Number} offset Offset value for in and out points changes (in microseconds).
   * @return {void}
   * @else
   * @brief 更改字幕在时间轴上的显示位置（入点和出点同时偏离偏移值）。
   * @param {Number} offset 入点和出点变化的偏移值（以微秒为单位）。
   * @return {void}
   * @endif
   */
    movePosition(offset: number): void;
}
/**
 * @if ENGLISH
 * @brief Animated sticker class.Animation sticker is a landscaping effect used in video editing to produce animated effects. Users can add and remove animated stickers from the timeline, as well as adjust various properties of the stickers through various APIs, such as position, size, display time, and so on.
 * @note The in-point and out-point units of the animated sticker on the timeline are both in microseconds.
 * @see NvsFx
 * @else
 * @brief 动画贴纸类。动画贴纸是视频编辑时使用的一种美化特效，可以产生动画效果。 用户可以在时间线上添加和移除动画贴纸，也可以通过各种API调整贴纸的各种属性，如位置、大小、显示时间等等。
 * @note 动画贴纸在时间线上的入点和出点单位都为微秒。
 * @see NvsFx
 * @endif
 */
declare class NvsAnimatedSticker extends NvsFx {
    /**
   * @if ENGLISH
   * @brief Sets the translation position of the animated sticker in the timeline coordinate system.The translation coordinate set by this function do not stack.
   * @param {PointF} translation Translation position
   * @return {void}
   * @see PointF
   * @else
   * @brief 设置转场
   * @param {PointF} translation 转场
   * @return {void}
   * @see PointF
   * @endif
   */
    setTranslation(translation: PointF): void;
    /**
   * @if ENGLISH
   * @brief Get the translation position of the animated sticker in the timeline coordinate system.
   * @return {PointF} Return a PointF object representing the translation position.
   * @see PointF
   * @else
   * @brief 获取转场
   * @return {PointF} 返回一个表示平移位置的 PointF 对象。
   * @see PointF
   * @endif
   */
    getTranslation(): PointF;
    /**
   * @if ENGLISH
   * @brief Tanslate animated sticker in the timeline coordinate system.The translation coordinates set by this function are stackable.
   * @param {PointF} translationOffset Animated sticker translation offset values.
   * @return {void}
   * @see PointF
   * @else
   * @brief 转场动画贴纸
   * @param {PointF} translationOffset 转场偏移量
   * @return {void}
   * @see PointF
   * @endif
   */
    translateAnimatedSticker(translationOffset: PointF): void;
    /**
   * @if ENGLISH
   * @brief Set the scale value of the animated sticker. The scale value set by this function do not stack.
   * @param {Number} scale Scaling value.
   * @return {void}
   * @else
   * @brief 设置缩放
   * @param {Number} scale 缩放值
   * @return {void}
   * @endif
   */
    setScale(scale: number): void;
    /**
   * @if ENGLISH
   * @brief Get the scale value of the animated sticker.
   * @return {Number} Return the scale value.
   * @else
   * @brief 获取缩放
   * @return {Number} 返回比例值。
   * @endif
   */
    getScale(): number;
    /**
   * @if ENGLISH
   * @brief Scale animation sticker with the anchor point as the center. The scaling value set by this function is stackable.
   * @param {Number} scaleFactor Animated sticker scaling factor.
   * @param {PointF} anchor Animated sticker scale anchor.
   * @return {void}
   * @else
   * @brief 缩放动画贴纸
   * @param {Number} scaleFactor 缩放因子
   * @param {PointF} anchor 锚点
   * @return {void}
   * @endif
   */
    scaleAnimatedSticker(scaleFactor: number, anchor: PointF): void;
    /**
   * @if ENGLISH
   * @brief Scale animation sticker on center. The scaling value set by this function is stackable.
   * @param {Number} scaleFactor Animated sticker scaling factor.
   * @return {void}
   * @else
   * @brief 缩放动画贴纸
   * @param {Number} scaleFactor 缩放因子
   * @return {void}
   * @endif
   */
    scaleAnimatedSticker2(scaleFactor: number): void;
    /**
   * @if ENGLISH
   * @brief Set seperated horizontal scaling factor for animated sticker.
   * @param {Number} seperatedScaleX Seperated horizontal scaling factor.
   * @return {void}
   * @else
   * @brief 设置分离式水平缩放因子
   * @param {Number} seperatedScaleX 分离式水平缩放因子
   * @return {void}
   * @endif
   */
    setSeperatedScaleX(seperatedScaleX: number): void;
    /**
   * @if ENGLISH
   * @brief Set separated vertical scaling factor for animated sticker.
   * @param {Number} seperatedScaleY Seperated vertical scaling factor.
   * @return {void}
   * @else
   * @brief 设置分离式垂直缩放因子
   * @param {Number} seperatedScaleY 分离式垂直缩放因子
   * @return {void}
   * @endif
   */
    setSeperatedScaleY(seperatedScaleY: number): void;
    /**
   * @if ENGLISH
   * @brief Get separated horizontal scaling factor for animated sticker.
   * @return {Number} Returns animated sticker separated horizontal scaling factor.
   * @else
   * @brief 获取分离式水平缩放因子
   * @return {Number} 返回分离式水平缩放因子
   * @endif
   */
    getSeperatedScaleX(): number;
    /**
   * @if ENGLISH
   * @brief Get separated vertical scaling factor for animated sticker.
   * @return {Number} Returns animated sticker separated vertical scaling factor.
   * @else
   * @brief 获取分离式垂直缩放因子
   * @return {Number} 返回分离式垂直缩放因子
   * @endif
   */
    getSeperatedScaleY(): number;
    /**
   * @if ENGLISH
   * @brief Separate scale animated sticker based on anchor point
   * @param {Number} scaleXFactor Seperated horizontal scaling factor.
   * @param {Number} scaleYFactor Seperated vertical scaling factor.
   * @param {PointF} anchor Animated sticker scale anchor.
   * @return {void}
   * @else
   * @brief 基于锚点分离式缩放贴纸
   * @param {Number} scaleXFactor 分离式水平缩放因子
   * @param {Number} scaleYFactor 分离式垂直缩放因子
   * @param {PointF} anchor 缩放锚点
   * @return {void}
   * @endif
   */
    seperateScaleAnimatedSticker(scaleXFactor: number, scaleYFactor: number, anchor: PointF): void;
    /**
   * @if ENGLISH
   * @brief Seperate scale animated sticker based on center point
   * @param {Number} scaleXFactor Seperated horizontal scaling factor.
   * @param {Number} scaleYFactor Seperated vertical scaling factor.
   * @return {void}
   * @else
   * @brief 基于中心点分离式缩放贴纸
   * @param {Number} scaleXFactor 分离式水平缩放因子
   * @param {Number} scaleYFactor 分离式垂直缩放因子
   * @return {void}
   * @endif
   */
    seperateScaleAnimatedSticker2(scaleXFactor: number, scaleYFactor: number): void;
    /**
   * @if ENGLISH
   * @brief Set the angle at which the animation sticker rotates clockwise along the Z-axis, which is perpendicular to the screen.The rotation Angle set by this function does not stack.
   * @param {Number} angle Rotation angle value.
   * @return {void}
   * @else
   * @brief 设置Z方向旋转
   * @param {Number} angle 角度
   * @return {void}
   * @endif
   */
    setRotationZ(angle: number): void;
    /**
   * @if ENGLISH
   * @brief Get the angle at which the animation sticker rotates clockwise along the Z-axis, which is perpendicular to the screen.
   * @return {Number} Return the rotation angle value.
   * @else
   * @brief 获取Z方向旋转
   * @return {Number} 返回旋转角度值。
   * @endif
   */
    getRotationZ(): number;
    /**
   * @if ENGLISH
   * @brief Scale animation sticker with the anchor point as the center. The scaling value set by this function is stackable.
   * @param {Number} angle Rotation angle.
   * @param {PointF} anchor Rotation anchor.
   * @return {void}
   * @else
   * @brief 旋转动画贴纸
   * @param {Number} angle 角度
   * @param {PointF} anchor 锚点
   * @return {void}
   * @endif
   */
    rotateAnimatedSticker(angle: number, anchor: PointF): void;
    /**
   * @if ENGLISH
   * @brief Rotate the animation sticker around center. The rotation angle set by this function is stackable.
   * @param {Number} angle rotation angle.
   * @return {void}
   * @else
   * @brief 旋转动画贴纸
   * @param {Number} angle 旋转角度。
   * @return {void}
   * @endif
   */
    rotateAnimatedSticker2(angle: number): void;
    /**
   * @if ENGLISH
   * @brief Set the horizontal flip of the animated sticker.
   * @param {Boolean} flip Whether to flip horizontally. True means horizontal flip, and false means not.
   * @return {void}
   * @else
   * @brief 设置水平翻转
   * @param {Boolean} flip 翻转
   * @return {void}
   * @endif
   */
    setHorizontalFlip(flip: boolean): void;
    /**
   * @if ENGLISH
   * @brief Get the horizontal flip state of the animated sticker.
   * @return {Boolean} Return a boolean value indicating a horizontal flip state. True means it flips, false means not.
   * @else
   * @brief 获取水平翻转
   * @return {Boolean} 返回一个布尔值，指示水平翻转状态。 true 表示翻转，false 表示不翻转。
   * @endif
   */
    getHorizontalFlip(): boolean;
    /**
   * @if ENGLISH
   * @brief Set the vertical flip of the animated sticker.
   * @param {Boolean} flip Whether to flip vertically. True means it flip vertically, false means not.
   * @return {void} Set the vertical flip of the animated sticker.
   * @else
   * @brief 设置垂直翻转
   * @param {Boolean} flip 翻转
   * @return {void} 设置动画贴纸的垂直翻转。。
   * @endif
   */
    setVerticalFlip(flip: boolean): void;
    /**
   * @if ENGLISH
   * @brief Get the vertical flip state of the animated sticker.
   * @return {Boolean} Return a boolean value indicating a vertical flip state. True means it flips, false means not.
   * @else
   * @brief 获取垂直翻转
   * @return {Boolean} 返回一个布尔值，指示垂直翻转状态。 true 表示翻转，false 表示不翻转。
   * @endif
   */
    getVerticalFlip(): boolean;
    /**
   * @if ENGLISH
   * @brief Get the vertex positions of the animated sticker's original bounding in the timeline coordinate system.
   * @return {NvsVectorVal<NvsPointF>} Return a NvsVectorVal<NvsPointF> object containing four vertex positions corresponding to the top left, bottom left, bottom right, and top right vertices of the original bounding.
   * @see NvsVectorVal
   * @else
   * @brief 获取边界矩形顶点
   * @return {NvsVectorVal<NvsPointF>} 返回一个 NvsVectorVal<NvsPointF> 对象，其中包含四个顶点位置，对应于原始边界的左上角、左下角、右下角和右上角顶点。
   * @see NvsVectorVal
   * @endif
   */
    getBoundingRectangleVertices(): NvsVectorVal<NvsPointF>;
    /**
   * @if ENGLISH
   * @brief Get animated sticker's package ID.
   * @return {String} Return the animated sticker's package ID.
   * @else
   * @brief 获取动画贴纸包ID
   * @return {String} 返回动画贴纸的包 ID。
   * @endif
   */
    getAnimatedStickerPackageId(): string;
    /**
   * @if ENGLISH
   * @brief Set the sticker Z value.The higher the Z value, the higher the sticker is.
   * @param {Number} value Z value
   * @return {} Set the sticker Z value.The higher the Z value, the higher the sticker is.
   * @else
   * @brief 设置Z值
   * @param {Number} value Z值大小
   * @return {} 设置贴纸Z值。Z值越高，贴纸越高。
   * @endif
   */
    setZValue(value: number): any;
    /**
   * @if ENGLISH
   * @brief Get the sticker Z value.
   * @return {Number} Return sticker Z value.
   * @else
   * @brief 获取Z值
   * @return {Number} 返回贴纸 Z 值。
   * @endif
   */
    getZValue(): number;
    /**
   * @if ENGLISH
   * @brief Check whether the sticker contains audio.
   * @return {Boolean} Return whether the sticker contains audio.
   * @else
   * @brief 是否是音频
   * @return {Boolean} 返回贴纸是否包含音频。
   * @endif
   */
    hasAudio(): boolean;
    /**
   * @if ENGLISH
   * @brief Set the sticker volume.
   * @param {Number} leftVolumeGain Left channel volume gain,value range [0, 1].
   * @param {Number} rightVolumeGain Right channel volume gain,value range [0, 1].
   * @return {void}
   * @else
   * @brief 设置音量增益
   * @param {Number} leftVolumeGain 左音量增益
   * @param {Number} rightVolumeGain 右音量增益
   * @return {void}
   * @endif
   */
    setVolumeGain(leftVolumeGain: number, rightVolumeGain: number): void;
    /**
   * @if ENGLISH
   * @brief Set the sticker volume.
   * @brief Get volume information.
   * @return {NvsVolume} Return the volume object.
   * @else
   * @brief 获取音量增益
   * @return {NvsVolume} 返回音量增益对象。
   * @endif
   */
    getVolumeGain(): NvsVolume;
    /**
   * @if ENGLISH
   * @brief Set the sticker opacity,value range [0, 1].
   * @param {Number} opacity sticker opacity.
   * @return {void}
   * @else
   * @brief 设置不透明度
   * @param {Number} opacity 不透明度值
   * @return {void}
   * @endif
   */
    setOpacity(opacity: number): void;
    /**
   * @if ENGLISH
   * @brief Get the sticker opacity.
   * @return {Number} Return the sticker opacity.
   * @else
   * @brief 获取不透明度
   * @return {Number} 返回贴纸不透明度。
   * @endif
   */
    getOpacity(): number;
    /**
   * @if ENGLISH
   * @brief Set the sticker's Key frame time
   * @param {Number} time time point
   * @return {void}
   * @else
   * @brief 设置当前关键帧时间
   * @param {Number} time 时间
   * @return {void}
   * @endif
   */
    setCurrentKeyFrameTime(time: number): void;
    /**
   * @if ENGLISH
   * @brief Gets the animated sticker period animation style package ID.
   * @return {String} Returns the obtained modular sticker period animation style resource package ID.
   * @else
   * @brief 获取动画贴纸周期动画样式包ID。
   * @return {String} 返回获取到的模块化贴纸周期动画风格资源包ID。
   * @endif
   */
    getAnimatedStickerPeriodAnimationPackageId(): string;
    /**
   * @if ENGLISH
   * @brief Set the sticker's Key frame time
   * @return {String} Returns the obtained modular sticker in-animation style resource package ID.
   * @else
   * @brief 设置贴纸的关键帧时间
   * @return {String} 返回获取到的模块化贴纸入动画风格资源包ID。
   * @endif
   */
    getAnimatedStickerInAnimationPackageId(): string;
    /**
   * @if ENGLISH
   * @brief Set the sticker's Key frame time
   * @return {String} Returns the obtained modular sticker in-animation style resource package ID.
   * @else
   * @brief 获取动画贴纸出动画样式包 ID。
   * @return {String} 返回获得的动画贴纸动画风格的资源包ID。
   * @endif
   */
    getAnimatedStickerOutAnimationPackageId(): string;
    /**
   * @if ENGLISH
   * @brief Applys animated sticker loop-animation style.
   * @param {String} animatedStickerPeriodAnimationPackageId animated sticker loop-animation style resource package ID.
   * @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   * @else
   * @brief 应用动画贴纸循环动画样式。
   * @param {String} animatedStickerPeriodAnimationPackageId 动画贴纸循环-动画样式资源包ID。
   * @return {Boolean} Returns boolean value. true 表示应用成功，false 表示失败。
   * @endif
   */
    applyAnimatedStickerPeriodAnimation(animatedStickerPeriodAnimationPackageId: string): boolean;
    /**
   * @if ENGLISH
   * @brief Applys animated sticker in-animation style. Notes：please set loop-Animation to null before you set in-animation, otherwise it will NOT works.
   * @param {String} animatedStickerPeriodAnimationPackageId animated sticker in-animation style resource package ID.
   * @return {Boolean} Returns boolean value. Returns boolean value. True means a successful application, false means a failure.
   * @else
   * @brief 在动画样式中应用动画贴纸。注意：设置in-animation前请先设置loop-Animation为null，否则无效。
   * @param {String} animatedStickerPeriodAnimationPackageId 动画贴纸动画风格资源包ID。
   * @return {Boolean} Returns boolean value. 返回布尔值。 true 表示申请成功，false 表示失败。
   * @endif
   */
    applyAnimatedStickerInAnimation(animatedStickerInAnimationPackageId: any): boolean;
    /**
   * @if ENGLISH
   * @brief Applys animated sticker out-animation style.Notes：please set loop-Animation to null before you set out-animation, otherwise it will NOT works.
   * @param {String} animatedStickerPeriodAnimationPackageId animated sticker out-animation style resource package ID.
   * @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   * @else
   * @brief 应用动画贴纸 out-animation 样式。注意：请在设置 out-animation 之前将 loop-Animation 设置为 null，否则将不起作用。
   * @param {String} animatedStickerPeriodAnimationPackageId 动画贴纸-动画样式资源包ID。
   * @return {Boolean} Returns boolean value. true 表示申请成功，false 表示失败。
   * @endif
   */
    applyAnimatedStickerOutAnimation(animatedStickerOutAnimationPackageId: any): boolean;
    /**
   * @if ENGLISH
   * @brief Set animated sticker Animation Period.
   * @param {Number} periodInMS Animation period in millisecond
   * @return {void}
   * @else
   * @brief 设置动画贴纸动画周期。
   * @param {Number} periodInMS 动画周期（毫秒）
   * @return {void}
   * @endif
   */
    setAnimatedStickerAnimationPeriod(periodInMS: number): void;
    /**
   * @if ENGLISH
   * @brief Get animated sticker Animation Period.
   * @return {Number} Return animation period in millisecond
   * @else
   * @brief 获取动画贴纸动画时期。
   * @return {Number} 以毫秒为单位返回动画周期
   * @endif
   */
    getAnimatedStickerAnimationPeriod(): number;
    /**
   * @if ENGLISH
   * @brief Set animated sticker in-animation duration.
   * @param {Number} inAnimationDurationInMS in-animation duration in millisecond
   * @return {void}
   * @else
   * @brief 设置动画贴纸入动画持续时间。
   * @param {Number} inAnimationDurationInMS 入动画持续时间（以毫秒为单位）
   * @return {void}
   * @endif
   */
    setAnimatedStickerInAnimationDuration(inAnimationDurationInMS: number): void;
    /**
   * @if ENGLISH
   * @brief Get animated sticker in-animation duration.
   * @return {Number} Get animated sticker in-animation duration.
   * @else
   * @brief 获取动画贴纸中的入动画持续时间。
   * @return {Number} 获取动画贴纸中的入动画持续时间。
   * @endif
   */
    getAnimatedStickerInAnimationDuration(): number;
    /**
   * @if ENGLISH
   * @brief Set animated sticker out-animation duration.
   * @param {Number} outAnimationDurationInMS out-animation duration in millisecond
   * @return {void}
   * @else
   * @brief 设置动画贴纸出动画持续时间。
   * @param {Number} outAnimationDurationInMS 以毫秒为单位的出动画持续时间
   * @return {void}
   * @endif
   */
    setAnimatedStickerOutAnimationDuration(outAnimationDurationInMS: number): void;
    /**
   * @if ENGLISH
   * @brief Get animated sticker out-animation duration.
   * @return {Number} Return out-animation duration in millisecond
   * @else
   * @brief 获取动画贴纸出动画持续时间。
   * @return {Number} 以毫秒为单位返回出动画持续时间
   * @endif
   */
    getAnimatedStickerOutAnimationDuration(): number;
}
/**
 * @if ENGLISH
 * @brief Timeline animated sticker class.
 * @return {Number} Return out-animation duration in millisecond
 * @else
 * @brief 时间线动画贴纸类。
 * @endif
 */
declare class NvsTimelineAnimatedSticker extends NvsAnimatedSticker {
    /**
   * @if ENGLISH
   * @brief Get animated sticker's in-point on the timeline.
   * @return {Number} Return the in-point of the animated sticker on the timeline (in microseconds).
   * @else
   * @brief 在时间线上获取动画贴纸的入点。
   * @return {Number} 返回时间线上动画贴纸的入点（以微秒为单位）。
   * @endif
   */
    getInPoint(): number;
    /**
   * @if ENGLISH
   * @brief Get animated sticker's out-point on the timeline.
   * @return {Number} Return the out-point of the animated sticker on the timeline (in microseconds).
   * @else
   * @brief 在时间线上获取动画贴纸。
   * @return {Number} 返回时间轴上动画贴纸的出点（以微秒为单位）。
   * @endif
   */
    getOutPoint(): number;
    /**
   * @if ENGLISH
   * @brief Change the in-point of the animated sticker on the timeline. When the new in-point does not conform to the established rules, the final return in-point may be different from the new in-point value. Such as the new in-point is less than 0, the new in-point value is greater than the timeline duration, or the new in-point is greater than the out-point.
   * @param {Number} newInPoint The new in-point of the animated sticker on the timeline (in microseconds).
   * @return {Number} Return the in-point of the animated sticker on the timeline (in microseconds).
   * @else
   * @brief 更改时间轴上动画贴纸的入点。当新入点不符合既定规则时，最终返回入点可能与新入点值不同。比如新入点小于0，新入点值大于时间线持续时间，或者新入点大于出点。
   * @param {Number} newInPoint 时间线上动画贴纸的新入点（以微秒为单位）。
   * @return {Number} 返回时间轴上动画贴纸的入点（以微秒为单位）。
   * @endif
   */
    changeInPoint(newInPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Change the out-point of the animated sticker on the timeline. When the new out-point does not conform to the established rules, the final return out-point may be different from the new out-point value. Such as the new out-point is less than 0, the new out-point value is greater than the timeline duration, or the new out-point is less than the in-point.
   * @param {Number} newInPoint The out-point of the animated sticker on the timeline (in microseconds).
   * @return {Number} Return the out-point of the animated sticker on the timeline (in microseconds).
   * @else
   * @brief 更改时间轴上动画贴纸的出点。当新出点不符合既定规则时，最终返回出点可能与新出点值不同。比如新出点小于0，新出点值大于时间线持续时间，或者新出点小于入点。
   * @param {Number} newInPoint 时间轴上动画贴纸的出点（以微秒为单位）。
   * @return {Number} 返回时间轴上动画贴纸的出点（以微秒为单位）。
   * @endif
   */
    changeOutPoint(newOutPoint: any): number;
    /**
   * @if ENGLISH
   * @brief Change the display position of the animated sticker on the timeline (the in and out points are offset from the offset value at the same time).
   * @param {Number} offset Offset value for in and out points changes (in microseconds).
   * @return {}
   * @else
   * @brief 更改动画贴纸在时间轴上的显示位置（入点和出点同时偏离偏移值）。
   * @param {Number} offset 入点和出点变化的偏移值（以微秒为单位）。
   * @return {}
   * @endif
   */
    movePosition(offset: number): any;
}
/**
 * @if ENGLISH
 * @brief There are multiple clips on the track. The transition is the transition effect from one video clip to another, and no video transitions can be added between clips with gaps. Currently it supports multiple video transitions including fade, turning, swap, stretch in, page curl, lens flare, star, dip to black, dip to white,push to right, push to top, upper left into.Each video transition can be set and retrieved via video track (NvsVideoTrack). The default transition is fade.
 * @see NvsFx
 * @else
 * @brief 视频转场，片段间切换的特效。轨道上有多个片段，转场是从一个视频片段播放到另一个视频片段的衔接过渡效果，而在有间隙的片段之间不能添加视频转场。目前支持多种视频转场， 包括Fade(淡入淡出)、Turning(翻转)、Swap(层叠)、Stretch In(伸展进入)、Page Curl(卷页)、Lens Flare(镜头眩光)、Star(星形)、Dip To Black(闪黑)、Dip To White(闪白)、 Push To Right(右推拉)、Push To Top(上推拉)、Upper Left Into(斜推)。每种视频转场都可通过视频轨道(NvsVideoTrack)来设置和获取。默认转场是Fade(淡入淡出)。
 * @see NvsFx
 * @endif
 */
declare class NvsVideoTransition extends NvsFx {
    /**
   * @if ENGLISH
   * @brief Get video transition type.
   * @return {Number} Returns the video transition type.
   * @else
   * @brief 获取视频转场类型
   * @return {Number} 返回视频转换类型。
   * @endif
   */
    getVideoTransitionType(): number;
    /**
   * @if ENGLISH
   * @brief Get built-in video transition name.
   * @return {String} Returns the name of the built-in video transition. If it is not a built-in video transition, it will return a null string.
   * @else
   * @brief 获取内置视频转场名字
   * @return {String} 返回内置视频转换的名称。如果它不是一个内置的视频过渡，它将返回一个空字符串。
   * @endif
   */
    getBuiltinVideoTransitionName(): string;
    /**
   * @if ENGLISH
   * @brief Get the video transition resource package ID.
   * @return {String} Returns the video transition resource package ID. If it is not a resource package video transition, it will return a null string.
   * @else
   * @brief 获取视频转场包ID
   * @return {String} 返回视频转换资源包ID。如果它不是一个资源包视频转换，它将返回一个空字符串。
   * @endif
   */
    getVideoTransitionPackageId(): string;
    /**
   * @if ENGLISH
   * @brief Set video transition duration.
   * @param {Number} duration Video transition duration, min value 250000
   * @param {Number} matchMode Video transition duration scale mode
   * @return {void}
   * @else
   * @brief 设置视频转场持续时间
   * @param {Number} duration 持续时间
   * @param {Number} matchMode 比较模式
   * @return {void}
   * @endif
   */
    setVideoTransitionDuration(duration: number, matchMode: number): void;
    /**
   * @if ENGLISH
   * @brief Get video transition duration.
   * @return {Number} Returns the video transition duration.
   * @else
   * @brief 获取视频转场持续时间
   * @return {Number} 返回视频转换持续时间。
   * @endif
   */
    getVideoTransitionDuration(): number;
}
/**
   * @if ENGLISH
   * @brief Audio transition is an effect between audio clips.
Transitions are typically set and obtained via an audio track (Audio Track). The current default audio transition is a fade.
   * @see NvsFx
   * @else
   * @brief 音频转场,音频片段间切换的特效。一般通过音频轨道(Audio Track)来设置和获取音频转场。目前默认音频转场是淡入淡出转场(fade)。
   * @see NvsFx
   * @endif
   */
declare class NvsAudioTransition extends NvsFx {
}
/**
  *  @if ENGLISH
  *  @brief Video effects.
  *  @see NvsFx
  The video effect is a special effect on the video clip, which can change the overall or partial color, brightness, transparency, etc. of the video image, so that the video can show a special effect. On Video Clip, users can add, remove, and get multiple video effects.
  *  @else
  *  @brief 视频特效。视频特效是显示在视频片段上的特效，能够改变视频图像整体或者局部的颜色、亮度、透明度等，使视频显示出特殊的效果。在视频片段(Video Clip)上，可以添加、移除、获取多个视频特效。
  *  @see NvsFx
  */
declare class NvsVideoFx extends NvsFx {
    /**
   *  @if ENGLISH
   *  @brief Get video effect's type.
   *  @return {Number} Returns the video effect's type.
   *  @else
   *  @brief 获取视频特效类型
   *  @return {Number} 返回视频特效的类型。
   *  @endif
   */
    getVideoFxType(): number;
    /**
   *  @if ENGLISH
   *  @brief Get video effect's index.
   *  @return {Number} Returns the index number of the video effect.
   *  @else
   *  @brief 获取视频特效索引
   *  @return {Number} 返回视频效果的索引号。
   *  @endif
   */
    getIndex(): number;
    /**
   *  @if ENGLISH
   *  @brief Get built-in video effect's name.
   *  @return {String} Returns the name of the built-in video effect. If it is not a built-in video effect, the function returns a null string.
   *  @else
   *  @brief 获取视频特效索引
   *  @return {String} 返回内置视频效果的名称。如果不是内置视频效果，该函数返回一个空字符串。
   *  @endif
   */
    getBuiltinVideoFxName(): string;
    /**
   *  @if ENGLISH
   *  @brief Get the video effect's resource package ID.
   *  @return {String} Returns the video effect's resource package ID. If it is not a resource package video effect, the function returns a null string.
   *  @else
   *  @brief 获取视频特效包ID
   *  @return {String} 返回视频效果的资源包 ID。如果不是资源包视频效果，函数返回空字符串。
   *  @endif
   */
    getVideoFxPackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Convert the time line coordinates to particle system coordinates
   *  @param {CGPoint} ptCanonical Timeline coordinates
   *  @return {PointF} Returns the transformed PointF object for the particle system coordinates
   *  @else
   *  @brief 将点从规范映射到粒子系统
   *  @param {CGPoint} ptCanonical 时间线坐标
   *  @return {PointF} 返回粒子系统坐标的变换 PointF 对象
   *  @endif
   */
    mapPointFromCanonicalToParticleSystem(ptCanonical: CGPoint): PointF;
    /**
   *  @if ENGLISH
   *  @brief Set absolute time used to render.
   *  @param {Boolean} used used
   *  @else
   *  @brief 设置是否使用绝对时间线渲染特效
   *  @param {Boolean} used 是否使用
   *  @endif
   */
    setAbsoluteTimeUsed(used: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get absolute time used.
   *  @return {Boolean} Absolute time used.
   *  @else
   *  @brief 获取是否使用绝对时间线渲染特效
   *  @return {Boolean} 是否使用绝对时间
   *  @endif
   */
    getAbsoluteTimeUsed(): boolean;
}
/**
 *  @if ENGLISH
 *  @brief Audio effects.Audio effects are effects that are superimposed on an audio clip which can change the tone and rate of the audio clip. After getting an audio clip object instance, users can add or remove multiple audio effects as needed.
 *  @see NvsFx
 *  @else
 *  @brief 音频特效。音频特效是叠加显示在音频片段上的特效，可以改变音频片段的声调和速率。获取音频片段(Audio Clip)对象实例后，根据需要来添加或者移除多个音频特效。
 *  @endif
 *  @see NvsFx
 */
declare class NvsAudioFx extends NvsFx {
    /**
   *  @if ENGLISH
   *  @brief Get audio effects' index.
   *  @return {Number}
   *  @else
   *  @brief 获取音频特效索引
   *  @return {Number}
   *  @endif
   */
    getIndex(): number;
    /**
   *  @if ENGLISH
   *  @brief Gets built-in audio effect's name.
   *  @return {String} Returns the name of the built-in audio effect. If it is not a built-in audio effect, null will be returned.
   *  @else
   *  @brief 获取内置音频特效名字
   *  @return {String} 返回内置音效的名称。如果不是内置音效，则返回null。
   *  @endif
   */
    getBuiltinAudioFxName(): string;
}
/**
 * @if ENGLISH
 * @brief Fx parameter information
 * @else
 * @brief 参数信息对象类
 * @endif
 */
declare class NvsParamInfoObject {
    paramName: string;
    paramType: string;
    intDefVal: number;
    intMinVal: number;
    intMaxVal: number;
    floatDefVal: number;
    floatMinVal: number;
    floatMaxVal: number;
    boolDefVal: boolean;
    colorDefR: number;
    colorDefG: number;
    colorDefB: number;
    colorDefA: number;
    stringType: number;
    stringDef: string;
    menuDefVal: string;
    menuArray: any;
}
/**
 * @if ENGLISH
 * @brief Translation information class.
 * @else
 * @brief 翻译信息类
 * @endif
 */
declare class NvsTranslationInfo {
    /**
   * @constructor
   */
    constructor(key: any, value: any);
    key: any;
    value: any;
}
/**
 * @if ENGLISH
 * @brief Effect parameter description class.
A variety of different parameter types of effect are set during capturing and editing. The effect parameter description class is used to obtain various effect parameter values.
 * @else
 * @brief 特效参数描述类。在视频拍摄和编辑时会设置各种不同参数类型的特效，特效参数描述类就是专门用来获取各种特效参数值的，以便查看和了解。
 * @endif
 */
declare class NvsFxDescription {
    internalObj: number;
    /**
   * @if ENGLISH
   * @brief Get the effect's name.
   * @return {String} Return the effect's name.
   * @else
   * @brief 获取名字
   * @return {String} 返回特效的名称。
   * @endif
   */
    getName(): string;
    /**
   * @if ENGLISH
   * @brief Get a list of all the effects information.
   * @return {NvsVectorVal} Return the obtained list collection containing all the effect information objects.
   * @else
   * @brief 获取所有参数信息
   * @return {NvsVectorVal} 返回获取的包含所有特效信息对象的列表集合。
   * @endif
   */
    getAllParamsInfo(): NvsVectorVal;
}
/**
 * @if ENGLISH
 * @brief Curve information class.
 * @else
 * @brief 曲线信息类
 * @endif
 */
declare class NvsCurveInfo {
    /**
   * @constructor
   */
    constructor(time: any, x: any, y: any);
    time: any;
    x: any;
    y: any;
}
/**
 * @if ENGLISH
 * @brief Emitter curve information class.
 * @else
 * @brief 粒子发射器曲线信息类
 * @endif
 */
declare class NvsEmitterCurveInfo {
    emitterName: string;
    curveInfos: any[];
}
/**
 * @if ENGLISH
 * @brief Particle effect context The particle system is composed of several particle emitters and sub-emitters. The particle emitter emits particles over time, and the sub-emitter emits particles from the particles emitted by the particle emitter.
 * @else
 * @brief 粒子特效上下文 粒子系统的由若干粒子发生器和子粒子发生器构成。粒子发生器会随着时间推移不断发射出粒子，而子粒子发生器则会在粒子发生器发射出的粒子上面发射出粒子。
 * @endif
 */
declare class NvsParticleSystemContext {
    contextInterface: number;
    /**
   * @if ENGLISH
   * @brief Set whether to enable the emitter.
   * @param {String} emitterName emitter name
   * @param {Boolean} enable enable or disable, default mode is enable.
   * @return {}
   * @else
   * @brief 设置发射器启用
   * @param {String} emitterName 发射器名称
   * @param {Boolean} enable 启动标记
   * @return {}
   * @endif
   */
    setEmitterEnabled(emitterName: string, enable: boolean): any;
    /**
   * @if ENGLISH
   * @brief Set the particle emitter's position.
   * @param {String} emitterName emitter name
   * @param {Number} emitterPositionX particle emitter's X coordinate
   * @param {Number} emitterPositionY particle emitter's Y coordinate
   * @return {}
   * @else
   * @brief 设置发射器位置
   * @param {String} emitterName 发射器名称
   * @param {Number} emitterPositionX 发射器位置X坐标
   * @param {Number} emitterPositionY 发射器位置Y坐标
   * @return {}
   * @endif
   */
    setEmitterPosition(emitterName: string, emitterPositionX: number, emitterPositionY: number): any;
    /**
   * @if ENGLISH
   * @brief Append a path position to the particle emitter curve at the specified time point.
   * @param {String} emitterName emitter name
   * @param {Number} timeSec time point
   * @param {Number} emitterPositionX particle emitter's X coordinate
   * @param {Number} emitterPositionY particle emitter's Y coordinate
   * @return {}
   * @else
   * @brief 将位置附加到发射器位置曲线
   * @param {String} emitterName 发射器名称
   * @param {Number} timeSec
   * @param {Number} emitterPositionX
   * @param {Number} emitterPositionY
   * @return {}
   * @endif
   */
    appendPositionToEmitterPositionCurve(emitterName: string, timeSec: number, emitterPositionX: number, emitterPositionY: number): any;
    /**
   * @if ENGLISH
   * @brief Set the rate gain of the particles emitted by the particle emitter.
   * @param {String} emitterName emitter name
   * @param {Number} emitterGain emission rate gain
   * @return {}
   * @else
   * @brief 设置发射器速率增益
   * @param {String} emitterName 发射器名称
   * @param {Number} emitterGain 发和气增益
   * @return {}
   * @endif
   */
    setEmitterRateGain(emitterName: string, emitterGain: number): any;
    /**
   * @if ENGLISH
   * @brief Get the rate gain of the particles emitted by the particle emitter.
   * @param {String} emitterName emitter name
   * @return {Number} rate gain
   * @else
   * @brief 获取发射器速率增益
   * @param {String} emitterName 发射器名称
   * @return {Number} 速率增益
   * @endif
   */
    getEmitterRateGain(emitterName: string): number;
    /**
   * @if ENGLISH
   * @brief Set the size gain of the particles emitted by the particle emitter.
   * @param {String} emitterName emitter name
   * @param {Number} emitterGain emission size gain
   * @return {}
   * @else
   * @brief 设置发射粒子大小增益
   * @param {String} emitterName 发射器名称
   * @param {Number} emitterGain 发射器增益
   * @return {}
   * @endif
   */
    setEmitterParticleSizeGain(emitterName: string, emitterGain: number): any;
    /**
   * @if ENGLISH
   * @brief Get the size gain of the particles emitted by the particle emitter.
   * @param {String} emitterName emitter name
   * @return {Number} size gain
   * @else
   * @brief 设置发射粒子大小增益
   * @param {String} emitterName 发射器名称
   * @return {Number} 粒子大小增益
   * @endif
   */
    getEmitterParticleSizeGain(emitterName: string): number;
    /**
   * @if ENGLISH
   * @brief Get a list of all the emitter curve informations.
   * @return {NvsVectorVal<NvsEmitterCurveInfo>} Return the obtained list collection containing all the emitter curve information objects.
   * @else
   * @brief 获取所有粒子发射器曲线信息
   * @return {NvsVectorVal<NvsEmitterCurveInfo>} 返回获取的包含所有粒子发射器曲线信息对象的列表集合
   * @endif
   */
    getAllEmitterCurve(): NvsVectorVal<NvsEmitterCurveInfo>;
}
/**
 * @if ENGLISH
 * @brief ARScene manipulate.
 * @else
 * @brief ARScene 操作。
 * @endif
 */
declare class NvsARSceneManipulate {
    contextInterface: number;
    /**
   * @if ENGLISH
   * @brief Set detection mode.
   * @param {} mode detection mode, HUMAN_DETECTION_FEATURE_VIDEO_MODE, HUMAN_DETECTION_FEATURE_IMAGE_MODE or HUMAN_DETECTION_FEATURE_SEMI_IMAGE_MODE.
   * @return {}
   * @else
   * @brief 设置检测模式
   * @param {} mode 检测模式
   * @return {}
   * @endif
   */
    setDetectionMode(mode: any): any;
}
/**
 * @if ENGLISH
 * @brief Particle Emitter
 * @else
 * @brief 粒子发生器描述文件类。包含该粒子发生器放置的位置以及其子粒子发生器名称列表
 * @endif
 */
declare class NvsParticleEmitterDesc {
    emitterPlace: 4;
    emitterNames: any[];
}
/**
 * @if ENGLISH
 * @brief Particle effect package parsing class.
 * @else
 * @brief 粒子特效包解析类
 * @endif
 */
declare class NvsAssetPackageParticleDescParser {
    /**
   * @constructor
   * @if ENGLISH
   * @param {} fxDescription
   * @else
   * @param {} fxDescription
   * @endif
   */
    constructor(fxDescription: any);
    particleType: 0 | 2 | 1 | 3 | 4;
    emitters: NvsParticleEmitterDesc[];
    /**
   * @if ENGLISH
   * @brief Get the name list of the particle emitter partition with the specified index value.Return the position type
   * @param {Number} partitionIndex The partition index
   * @return {NvsVectorVal<String>}
   * @else
   * @brief 获取粒子分区发射器
   * @param {} partitionIndex 分区索引
   * @return {}
   * @endif
   */
    getParticlePartitionEmitter(partitionIndex: number): string[];
}
/**
 * @if ENGLISH
 * @brief Video codec information.
 * @else
 * @brief 视频编码信息
 * @endif
 */
declare class NvsVideoCodecInfo {
    profile: number;
    level: number;
    hasAlphaChannel: boolean;
}
/**
 * @if ENGLISH
 * @brief Video stream information.
 * @else
 * @brief 视频流信息
 * @endif
 */
declare class NvsVideoStreamInfo {
    width: number;
    height: number;
    duration: number;
    frameRate: NvsRational;
    pixelAspectRatio: NvsRational;
    codecType: number;
    rotation: number;
    codecParameter: NvsVideoCodecInfo;
}
/**
 * @if ENGLISH
 * @brief Audio stream information.
 * @else
 * @brief 音频流信息
 * @endif
 */
declare class NvsAudioStreamInfo {
    channelCount: number;
    sampleRate: number;
    duration: number;
}
/**
 * @if ENGLISH
 * @brief Audio and video file information.
 * @else
 * @brief 音视频文件信息。显示音视频文件的信息，包括音视频文件的时长，数据速率，像素横纵比，音视频流数目等。
 * @endif
 */
declare class NvsAVFileInfo {
    type: number;
    duration: number;
    videoStreamInfo: any;
    audioStreamInfo: any[];
}
/**
 * @if ENGLISH
 * @brief Playback rate control region information
 * @else
 * @brief 播放速率控制区域
 * @endif
 */
declare class NvsPlaybackRateControlRegion {
    startTime: number;
    endTime: number;
    playbackRate: number;
    audioGain: number;
}
/**
 * @if ENGLISH
 * @brief XML stream writer
 * @else
 * @brief XML流书写类
 * @endif
 */
declare class NvsXmlStreamWriter {
    /**
   * @constructor
   * @if ENGLISH
   * @param {String} filePath file path
   * @else
   * @param {String} filePath 文件路径
   * @endif
   */
    constructor(filePath: string);
    filePath: string;
    /**
   * @if ENGLISH
   * @brief Open writer
   * @return {Boolean}
   * @else
   * @brief 打开书写器
   * @return {Boolean}
   * @endif
   */
    open(): boolean;
    /**
   * @if ENGLISH
   * @brief Close writer
   * @return {Boolean}
   * @else
   * @brief 关闭，释放资源
   * @return {Boolean}
   * @endif
   */
    close(): boolean;
    /**
   * @if ENGLISH
   * @brief Write start document
   * @return {Boolean}
   * @else
   * @brief 写开始文档
   * @return {Boolean}
   * @endif
   */
    writeStartDocument(): boolean;
    /**
   * @if ENGLISH
   * @brief Write end document
   * @return {Boolean}
   * @else
   * @brief 写结束文档
   * @return {Boolean}
   * @endif
   */
    writeEndDocument(): boolean;
    /**
   * @if ENGLISH
   * @brief Write start element
   * @param {String} element element name
   * @return {Boolean}
   * @else
   * @brief 写开始元素
   * @param {String} element 开始元素
   * @return {Boolean}
   * @endif
   */
    writeStartElement(element: string): boolean;
    /**
   * @if ENGLISH
   * @brief Write end element
   * @param {String} file path
   * @return {Boolean}
   * @else
   * @brief 写结束元素
   * @param {String} file path 文件路径
   * @return {Boolean}
   * @endif
   */
    writeEndElement(): boolean;
    /**
   * @if ENGLISH
   * @brief Write attribute
   * @param {String} name attribute name
   * @param {String} value attribute value
   * @return {Boolean}
   * @else
   * @brief 根据属性名字，设置属性值
   * @param {String} name 属性名字
   * @param {String} value 属性值
   * @return {Boolean}
   * @endif
   */
    writeAttribute(name: string, value: string): boolean;
    /**
   * @if ENGLISH
   * @brief Write DTD
   * @param {String} dtd DTD
   * @return {Boolean}
   * @else
   * @brief DTD书写
   * @param {String} dtd
   * @return {Boolean}
   * @endif
   */
    writeDTD(dtd: string): boolean;
    /**
   * @if ENGLISH
   * @brief  Write text element
   * @param {String} name element name
   * @param {String} text text
   * @return {Boolean}
   * @else
   * @brief  写文本元素
   * @param {String} name 元素名字
   * @param {String} text 元素值
   * @return {Boolean}
   * @endif
   */
    writeTextElement(name: string, text: string): boolean;
}
/**
 * @if ENGLISH
 * @brief XML stream reader
 * @else
 * @brief 读XML流
 * @endif
 */
declare class NvsXmlStreamReader {
    /**
   * @constructor
   * @if ENGLISH
   * @param {String} filePath file path
   * @else
   * @param {String} filePath 文件路径
   * @endif
   */
    constructor(filePath: string);
    filePath: string;
    /**
   * @if ENGLISH
   * @brief Open reader
   * @param {String} filePath file path
   * @return {Boolean}
   * @else
   * @brief 打开流阅读器
   * @param {String} filePath 文件路径
   * @return {Boolean}
   * @endif
   */
    open(): boolean;
    /**
   * @if ENGLISH
   * @brief Close reader
   * @param {String} filePath file path
   * @return {Boolean}
   * @else
   * @brief 关闭，是否资源
   * @param {String} filePath 文件路径
   * @return {Boolean}
   * @endif
   */
    close(): boolean;
    /**
   * @if ENGLISH
   * @brief Read to the end of stream
   * @param {String} filePath file path
   * @return {Boolean}
   * @else
   * @brief 获取结束点
   * @return {String} filePath 文件路径
   * @return {Boolean}
   * @endif
   */
    atEnd(): boolean;
    /**
   * @if ENGLISH
   * @brief Encounter an error.
   * @param {String} filePath file path
   * @return {Boolean}
   * @else
   * @brief 是否有错误
   * @param {String} filePath 文件路径
   * @return {Boolean}
   * @endif
   */
    hasError(): boolean;
    /**
   * @if ENGLISH
   * @brief Read next
   * @param {String} filePath file path
   * @return {Number}
   * @else
   * @brief 读取下一个
   * @param {String} filePath 文件路径
   * @return {Number}
   * @endif
   */
    readNext(): number;
    /**
   * @if ENGLISH
   * @brief Read next start element
   * @param {String} filePath file path
   * @return {Number}
   * @else
   * @brief 读取下一个开始元素
   * @param {String} filePath 文件路径
   * @return {Number}
   * @endif
   */
    readNextStartElement(): number;
    /**
   * @if ENGLISH
   * @brief The name of current element
   * @param {String} filePath file path
   * @return {String}
   * @else
   * @brief 获取读取器名字
   * @param {String} filePath 文件路径
   * @return {String}
   * @endif
   */
    name(): string;
    /**
   * @if ENGLISH
   * @brief Whether start document or not
   * @param {String} filePath file path
   * @return {Boolean}
   * @else
   * @brief 是否是文档开始
   * @param {String} filePath 文件路径
   * @return {Boolean}
   * @endif
   */
    isStartDocument(): boolean;
    /**
   * @if ENGLISH
   * @brief Whether end document or not
   * @param {String} filePath file path
   * @return {Boolean}
   * @else
   * @brief 是否是文档结束
   * @param {String} filePath 文件路径
   * @return {Boolean}
   * @endif
   */
    isEndDocument(): boolean;
    /**
   * @if ENGLISH
   * @brief Whether start element or not
   * @param {String} filePath file path
   * @return {Boolean}
   * @else
   * @brief 是否是开始元素
   * @param {String} filePath 文件路径
   * @return {Boolean}
   * @endif
   */
    isStartElement(): boolean;
    /**
   * @if ENGLISH
   * @brief Whether end element or not
   * @param {String} filePath file path
   * @return {Boolean}
   * @else
   * @brief 是否是结束元素
   * @param {String} filePath 文件路径
   * @return {Boolean}
   * @endif
   */
    isEndElement(): boolean;
    /**
   * @if ENGLISH
   * @brief Get attribute value
   * @param {String} attributeName attribute name
   * @return {String}
   * @else
   * @brief 根据属性名字，获取属性值
   * @param {String} attributeName 属性名字
   * @return {String}
   * @endif
   */
    getAttributeValue(attributeName: string): string;
}
/**
 * @if ENGLISH
 * @brief Audio file writer
 * @else
 * @brief 音频文件写入器
 * @endif
 */
declare class NvsAudioFileWriter {
    /**
   * @constructor
   * @if ENGLISH
   * @param {Number} sampleRate The sample rate
   * @param {Number} channelCount The count of channel
   * @param {String} outputAudioFilePath The output file path
   * @else
   * @param {Number} sampleRate 采样率
   * @param {Number} channelCount 通道数
   * @param {String} outputAudioFilePath 输出音频文件路径
   * @endif
   */
    constructor(sampleRate: number, channelCount: number, outputAudioFilePath: string);
    internalObj: number;
    /**
   * @if ENGLISH
   * @brief Set internal object
   * @param {} obj Internal object
   * @return {}
   * @else
   * @brief 设置内部对象
   * @param {} obj 内置对象
   * @return {}
   * @endif
   */
    setInternalObject(obj: any): any;
    /**
   * @if ENGLISH
   * @brief Set internal object
   * @param {} obj Internal object
   * @return {}
   * @else
   * @brief 获取内部对象
   * @return {}
   * @endif
   */
    getInternalObject(): any;
    /**
   * @if ENGLISH
   * @brief Write audio data
   * @param {AudioData} audioData audio data
   * @return {Boolean}
   * @else
   * @brief 写音频数据
   * @param {AudioData} audioData 音频数据
   * @return {Boolean}
   * @endif
   */
    writeAudioData(audioData: AudioData): boolean;
    /**
   * @if ENGLISH
   * @brief Close audio file writer
   * @return {Boolean}
   * @else
   * @brief 关闭。您必须调用 close() 来生成最终的音频文件并释放 wasm 持有的资源！
   * @return {Boolean}
   * @endif
   */
    close(): boolean;
}
/**
 * @if ENGLISH
 * @brief combined clip contained in the footstage in the template resource package
 * @else
 * @brief 模板资源包里footage对应的片段信息
 * @endif
 */
declare class NvsTemplateFootageCorrespondingClipInfo {
    trackIndex: number;
    clipIndex: number;
    inpoint: number;
    outpoint: number;
    trimIn: number;
    trimOut: number;
    needReverse: boolean;
    canReplace: boolean;
}
/**
 * @if ENGLISH
 * @brief footage information of template package(TEIMPLATE_FOOTAGE_TYPE)
 * @else
 * @brief 模板资源包里footage信息(TEIMPLATE_FOOTAGE_TYPE)
 * @endif
 */
declare class NvsTemplateFootageDesc {
    id: string;
    type: number;
    canReplace: boolean;
    name: string;
    tags: any[];
    correspondingClipInfos: any[];
    timelineClipFootages: any[];
}
/**
 * @if ENGLISH
 * @brief Subtitle information corresponding to footage in template resource package
 * @else
 * @brief 模板资源包里footage对应的字幕信息
 * @endif
 */
declare class NvsTemplateCaptionDesc {
    replaceId: string;
    text: string;
    fontFamily: string;
    trackIndex: number;
    clipIndex: number;
    timelineClipCaptions: any[];
    spanList: any[];
}
/**
 * @if ENGLISH
 * @brief combined caption contained in the footstage in the template resource package
 * @else
 * @brief 模板资源包里footage对应的组合字幕信息
 * @endif
 */
declare class NvsTemplateCompoundCaptionItemDesc {
    index: number;
    text: string;
    fontFamily: string;
}
/**
 * @if ENGLISH
 * @brief All combined caption contained in the footstage in the template resource package
 * @else
 * @brief 模板资源包里footage包含的全部组合字幕信息
 * @endif
 */
declare class NvsTemplateCompoundCaptionDesc {
    replaceId: string;
    itemList: any[];
    trackIndex: number;
    clipIndex: number;
    timelineClipCompoundCaptions: any[];
}
/**
 * @if ENGLISH
 * @brief Track videoFx.
 * @else
 * @brief 视频特效轨道
 * @endif
 */
declare class NvsTrackVideoFx extends NvsFx {
    /**
   * @if ENGLISH
   * @brief Gets track video effect type.
   * @return {Number} Returns the timeline video effect type. See [Timeline Video effect Type]. (TIMELINE_VIDEOFX_TYPE).
   * @else
   * @brief 获取轨道视频效果类型。
   * @return {Number} 返回时间线视频效果类型。请参阅[时间线视频效果类型]。 (TIMELINE_VIDEOFX_TYPE)。
   * @endif
   */
    getTrackVideoFxType(): number;
    /**
   * @if ENGLISH
   * @brief Gets the embedded track video effect name.
   * @return {String} Returns the name of the embedded track video effect. If it is not a built-in track video effect, it returns a null string.
   * @else
   * @brief 获取嵌入的轨道视频效果名称。
   * @return {String} 返回嵌入轨道视频效果的名称。如果不是内置的轨道视频效果，则返回空字符串。
   * @endif
   */
    getBuiltinTrackVideoFxName(): string;
    /**
   * @if ENGLISH
   * @brief Gets track video effect resource package ID.
   * @return {String} Returns the track video effect resource package ID. If it is not a resource package track video effect, it returns a null string.
   * @else
   * @brief 获取轨道视频特效资源包ID。
   * @return {String} 返回轨道视频效果资源包ID。如果不是资源包轨道视频效果，则返回空字符串。
   * @endif
   */
    getTrackVideoFxPackageId(): string;
    /**
   * @if ENGLISH
   * @brief Track video effect in-point on the track.
   * @return {Number} The in-point of the track video effect on the track (in microseconds).
   * @else
   * @brief 轨道上的轨道视频效果入点。
   * @return {Number} 轨道上轨道视频效果的入点（以微秒为单位）。
   * @endif
   */
    getInPoint(): number;
    /**
   * @if ENGLISH
   * @brief Track video effect out-point on the track.
   * @return {Number} The out-point of the track video effect on the track (in microseconds).
   * @else
   * @brief 轨道上的轨道视频效果出点。
   * @return {Number} 轨道上轨道视频效果的出点（以微秒为单位）。
   * @endif
   */
    getOutPoint(): number;
    /**
   * @if ENGLISH
   * @brief Changes the in-point of the track video effect on the track.
   * @param {Number} newInPoint The new in-point of the animated sticker on the track (in microseconds).
   * @return {Number} Returns the final in-point value of the track video effect on the track (in microseconds).
   * @else
   * @brief 更改轨道上轨道视频效果的入点。
   * @param {Number} newInPoint 轨道上动画贴纸的新入点（以微秒为单位）。
   * @return {Number} 返回轨道上轨道视频效果的最终入点值（以微秒为单位）。
   * @endif
   */
    changeInPoint(newInPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Changes the out-point of the track video effect on the track.
   * @param {Number} newOutPoint The new out-point of the animated sticker on the track (in microseconds).
   * @return {Number} Returns the final out-point value of the track video effect on the track (in microseconds).
   * @else
   * @brief 更改轨道上轨道视频效果的出点。
   * @param {Number} newOutPoint 轨道上动画贴纸的新出点（以微秒为单位）。
   * @return {Number} 返回轨道上轨道视频效果的最终出点值（以微秒为单位）。
   * @endif
   */
    changeOutPoint(newOutPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Changes the position of the track video effect on the track (the in and out points translate the offset value at the same time).
   * @param {Number} offset Offset value for in and out points (in microseconds).
   * @else
   * @brief 更改轨道视频效果在轨道上的位置（入点和出点同时转换偏移值）。
   * @param {Number} offset 入点和出点的偏移值（以微秒为单位）。
   * @endif
   */
    movePosition(offset: number): void;
    /**
   * @if ENGLISH
   * @brief Sets track filter Z value.
   * @param {Number} value Sets track filter Z value.
   * @else
   * @brief 设置轨道过滤器 Z 值。
   * @param {Number} value 设置轨道过滤器 Z 值。
   * @endif
   */
    setZValue(value: number): void;
    /**
   * @if ENGLISH
   * @brief Gets track filter Z value.
   * @return {Number} Returns track filter Z value.
   * @else
   * @brief 获取轨道过滤器 Z 值。
   * @return {Number} 返回轨道过滤器 Z 值。
   * @endif
   */
    getZValue(): number;
    /**
   * @if ENGLISH
   * @brief Converts track coordinates to particle system coordinates.
   * @param {PointF} ptCanonical The new in-point of the animated sticker on the track (in microseconds).
   * @return {Number} Returns the transformed particle system coordinates, PointF object.
   * @else
   * @brief 将轨迹坐标转换为粒子系统坐标。
   * @param {PointF} ptCanonical 轨道上动画贴纸的新入点（以微秒为单位）。
   * @return {Number} 返回变换后的粒子系统坐标，PointF 对象。
   * @endif
   */
    mapPointFromCanonicalToParticleSystem(ptCanonical: PointF): number;
}
/**
 * @if ENGLISH
 * @brief Track captions.
 * @else
 * @brief 字幕轨道
 * @endif
 */
declare class NvsTrackCaption extends NvsCaption {
    /**
   * @if ENGLISH
   * @brief The in-point of the caption on the track (in microseconds).
   * @return {Number} Get the in-point of the caption on the track.
   * @else
   * @brief 轨道上字幕的入点（以微秒为单位）。
   * @return {Number} 获取轨道上字幕的入点。
   * @endif
   */
    getInPoint(): number;
    /**
   * @if ENGLISH
   * @brief The out-point of the caption on the track.
   * @return {Number} The out-point of the caption on the track (in microseconds).
   * @else
   * @brief 轨道上字幕的出点。
   * @return {Number} 轨道上字幕的出点（以微秒为单位）。
   * @endif
   */
    getOutPoint(): number;
    /**
   * @if ENGLISH
   * @brief Changes the in-point of the caption on the track.
   * @param {Number} newInPoint The new in-point of the caption on the timeline (in microseconds).
   * @return {Number} Returns the in-point of the caption on the track (in microseconds).
   * @else
   * @brief 更改轨道上字幕的入点。
   * @param {Number} newInPoint 时间线上标题的新入点（以微秒为单位）。
   * @return {Number} 返回轨道上字幕的入点（以微秒为单位）。
   * @endif
   */
    changeInPoint(newInPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Changes the out-point of the caption on the track.
   * @param {Number} newOutPoint The new out-point of the caption on the track (in microseconds).
   * @return {Number} Returns the out-point of the caption on the track (in microseconds).
   * @else
   * @brief 更改轨道上字幕的出点。
   * @param {Number} newOutPoint 轨道上字幕的新出点（以微秒为单位）。
   * @return {Number} 返回轨道上字幕的出点（以微秒为单位）。
   * @endif
   */
    changeOutPoint(newOutPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Changes the display position of the caption on the track (the in and out points are offset from the offset value at the same time).
   * @param {Number} offset Offset value for in and out points changes (in microseconds).
   * @else
   * @brief 更改字幕在轨道上的显示位置（入点和出点同时从偏移值偏移）。
   * @param {Number} offset 入点和出点变化的偏移值（以微秒为单位）。
   * @endif
   */
    movePosition(offset: number): void;
}
/**
 * @if ENGLISH
 * @brief Track compound caption.
 * @else
 * @brief 跟踪复合字幕。
 * @endif
 */
declare class NvsTrackCompoundCaption extends NvsCompoundCaption {
    /**
   * @if ENGLISH
   * @brief Changes the in-point of the caption on the track.
   * @return {Number} Returns the in-point of the caption on the track (in microseconds).
   * @else
   * @brief 更改轨道上字幕的入点。
   * @return {Number} 返回轨道上字幕的入点（以微秒为单位）。
   * @endif
   */
    getInPoint(): number;
    /**
   * @if ENGLISH
   * @brief The out-point of the caption on the track.
   * @return {Number} The out-point of the caption on the track (in microseconds).
   * @else
   * @brief 轨道上字幕的出点。
   * @return {Number} 轨道上字幕的出点（以微秒为单位）。
   * @endif
   */
    getOutPoint(): number;
    /**
   * @if ENGLISH
   * @brief Changes the in-point of the caption on the track.
   * @param {Number} newInPoint The new in-point of the caption on the track (in microseconds).
   * @return {Number} Returns the in-point of the caption on the track (in microseconds).
   * @else
   * @brief 更改轨道上字幕的入点。
   * @param {Number} newInPoint 轨道上字幕的新入点（以微秒为单位）。
   * @return {Number} 返回轨道上字幕的入点（以微秒为单位）。
   * @endif
   */
    changeInPoint(newInPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Changes the out-point of the caption on the track.
   * @param {Number} newOutPoint The new out-point of the caption on the track (in microseconds).
   * @return {Number} Returns the out-point of the caption on the track (in microseconds).
   * @else
   * @brief 更改轨道上字幕的出点。
   * @param {Number} newOutPoint 轨道上字幕的新出点（以微秒为单位）。
   * @return {Number} 返回轨道上字幕的出点（以微秒为单位）。
   * @endif
   */
    changeOutPoint(newOutPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Changes the display position of the caption on the track (the in and out points are offset from the offset value at the same time).
   * @param {Number} offset Offset value for in and out points changes (in microseconds).s
   * @else
   * @brief 更改字幕在轨道上的显示位置（入点和出点同时从偏移值偏移）。
   * @param {Number} offset 入点和出点变化的偏移值（以微秒为单位）。
   * @endif
   */
    movePosition(offset: number): void;
}
/**
 * @if ENGLISH
 * @brief Track animated sticker class.
 * @else
 * @brief 轨道动画贴纸类。
 * @endif
 */
declare class NvsTrackAnimatedSticker extends NvsAnimatedSticker {
    /**
   * @if ENGLISH
   * @brief Get animated sticker's in-point on the track.
   * @return {Number} Return the in-point of the animated sticker on the track (in microseconds).
   * @else
   * @brief 获取轨道上的动画贴纸。
   * @return {Number} 返回轨道上动画贴纸的入点（以微秒为单位）。
   * @endif
   */
    getInPoint(): number;
    /**
   * @if ENGLISH
   * @brief Get animated sticker's out-point on the track.
   * @return {Number} Return the out-point of the animated sticker on the track (in microseconds).
   * @else
   * @brief 获取轨道上的动画贴纸
   * @return {Number} 返回轨道上动画贴纸的出点（以微秒为单位）。
   * @endif
   */
    getOutPoint(): number;
    /**
   * @if ENGLISH
   * @brief Change the in-point of the animated sticker on the track. When the new in-point does not conform to the established rules, the final return in-point may be different from the new in-point value. Such as the new in-point is less than 0, the new in-point value is greater than the timeline duration, or the new in-point is greater than the out-point.
   * @param {Number} newInPoint The new in-point of the animated sticker on the track (in microseconds).
   * @return {Number} Return the in-point of the animated sticker on the track (in microseconds).
   * @else
   * @brief 更改轨道上动画贴纸的入点。当新入点不符合既定规则时，最终返回入点可能与新入点值不同。比如新入点小于0，新入点值大于时间线持续时间，或者新入点大于出点。
   * @param {Number} newInPoint 轨道上动画贴纸的新入点（以微秒为单位）。
   * @return {Number} 返回轨道上动画贴纸的入点（以微秒为单位）。
   * @endif
   */
    changeInPoint(newInPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Change the out-point of the animated sticker on the track. When the new out-point does not conform to the established rules, the final return out-point may be different from the new out-point value. Such as the new out-point is less than 0, the new out-point value is greater than the timeline duration, or the new out-point is less than the in-point.
   * @param {Number} newOutPoint The out-point of the animated sticker on the track (in microseconds).
   * @return {Number} Return the out-point of the animated sticker on the track (in microseconds).
   * @else
   * @brief 更改轨道上动画贴纸的出点。当新出点不符合既定规则时，最终返回出点可能与新出点值不同。比如新出点小于0，新出点值大于时间线持续时间，或者新出点小于入点。
   * @param {Number} newOutPoint 轨道上动画贴纸的出点（以微秒为单位）。
   * @return {Number} 返回轨道上动画贴纸的出点（以微秒为单位）。
   * @endif
   */
    changeOutPoint(newOutPoint: number): number;
    /**
   * @if ENGLISH
   * @brief Change the display position of the animated sticker on the track (the in and out points are offset from the offset value at the same time).
   * @param {Number} offset Offset value for in and out points changes (in microseconds).
   * @else
   * @brief 更改动画贴纸在轨道上的显示位置（入点和出点同时偏离偏移值）。
   * @param {Number} offset 入点和出点变化的偏移值（以微秒为单位）。
   * @endif
   */
    movePosition(offset: number): void;
}
/**
 * @if ENGLISH
 * @brief Clip caption.
 * @else
 * @brief 片段字幕
 * @endif
 */
declare class NvsClipCaption extends NvsCaption {
    /**
   *  @if ENGLISH
   *  @brief Set absolute time used to render.
   *  @param {Boolean} used used
   *  @else
   *  @brief 设置是否使用绝对时间线渲染特效
   *  @param {Boolean} used 是否使用
   *  @endif
   */
    setAbsoluteTimeUsed(used: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get absolute time used.
   *  @return {Boolean} Absolute time used.
   *  @else
   *  @brief 获取是否使用绝对时间线渲染特效
   *  @return {Boolean} 是否使用绝对时间
   *  @endif
   */
    getAbsoluteTimeUsed(): boolean;
}
/**
 * @if ENGLISH
 * @brief Clip compound caption.
 * @else
 * @brief 片段组合字幕
 * @endif
 */
declare class NvsClipCompoundCaption extends NvsCompoundCaption {
    /**
   *  @if ENGLISH
   *  @brief Set absolute time used to render.
   *  @param {Boolean} used used
   *  @else
   *  @brief 设置是否使用绝对时间线渲染特效
   *  @param {Boolean} used 是否使用
   *  @endif
   */
    setAbsoluteTimeUsed(used: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get absolute time used.
   *  @return {Boolean} Absolute time used.
   *  @else
   *  @brief 获取是否使用绝对时间线渲染特效
   *  @return {Boolean} 是否使用绝对时间
   *  @endif
   */
    getAbsoluteTimeUsed(): boolean;
}
/**
 * @if ENGLISH
 * @brief Clip animated sticker.
 * @else
 * @brief 片段动画贴纸
 * @endif
 */
declare class NvsClipAnimatedSticker extends NvsAnimatedSticker {
    /**
   *  @if ENGLISH
   *  @brief Set absolute time used to render.
   *  @param {Boolean} used used
   *  @else
   *  @brief 设置是否使用绝对时间线渲染特效
   *  @param {Boolean} used 是否使用
   *  @endif
   */
    setAbsoluteTimeUsed(used: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get absolute time used.
   *  @return {Boolean} Absolute time used.
   *  @else
   *  @brief 获取是否使用绝对时间线渲染特效
   *  @return {Boolean} 是否使用绝对时间
   *  @endif
   */
    getAbsoluteTimeUsed(): boolean;
}
//# sourceMappingURL=sdk.d.ts.map
