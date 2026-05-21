<template>
	<div class="sdk-demo">
		<div class="live-window-box">
			<div>
				<canvas ref="liveWindow" id="live-window"></canvas>
				<el-slider v-model="currentValue" :max="maxValue" :show-tooltip="false" @input="seek"></el-slider>
				<div class="btns">
					<span @click="play(timeline)">PLAY</span>
					<span @click="stop">STOP</span>
					<span>{{ currentTime }}/{{ timelineDuration }}</span>
				</div>
				<div class="features">
					<button @click="useURLFileAddToTrack">Use URL File</button>
					<button @click="multiTrack">MultiTrack</button>
					<button @click="addTransition">VideoTransition</button>
					<button @click="addTimelineVideoFx">TimelineVideoFx</button>
					<button @click="addCaption">Caption</button>
					<button @click="addModularCaption">ModularCaption</button>					
					<button @click="addSticker">Sticker</button>
					<button @click="addTimelineClip">TimelineClip</button>
					<button @click="exportVideo">exportVideo</button>
					<button @click="downloadVideo" :disabled="!exportVideoFinish">downloadVideo</button>
					<button @click="exportTimelineData" disabled>exportTimelineData</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Axios from 'axios'
	import { convertTimeCode, upload, generateUUID, writeCompileXml, installAsset } from './utils'
	import { initSDK, setTimelineAttachment } from './utils/sdk'
	// import { transcodeTimelineToProjectData } from "./transcode/timelineData"
	import { createLocalFile } from "./utils/writeInfoToFS"
	import api from './api'

	export default {
		async mounted() {
			const canvas = document.getElementById('live-window')
			canvas.style.width = "800px";
			canvas.style.height = "450px";
			canvas.width = 800 * window.devicePixelRatio;
			canvas.height = 450 * window.devicePixelRatio;

			document.title = 'Meishe SDK Demo'
			const loading = this.$loading({
				text: 'SDK module is loading...',
				lock: true,
				background: 'rgba(0, 0, 0, 0.7)',
			})
			// 初始化SDK并鉴权
			// Initialize SDK and verify SDK license
			await initSDK()
			// 获取SDK流媒体上下文
			// Get instance of streaming context
			this.streamingContext = nvsGetStreamingContextInstance()
			const faceModelUrl = "https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model"
			let response = await Axios.get(faceModelUrl, { responseType: 'arraybuffer' })
			const faceModel = '/' + faceModelUrl.split('/').pop()
			await FS.writeFile(faceModel, new Uint8Array(response.data))
			this.streamingContext.initHumanDetection(faceModel, "", 
			NvsHumanDetectionFeatureEnum.FaceLandmark | NvsHumanDetectionFeatureEnum.FaceAction 
			| NvsHumanDetectionFeatureEnum.SemiImageMode | NvsHumanDetectionFeatureEnum.MultiThread)
			const makeupUrl = "http://alieasset.meishesdk.com/model/makeup2_240_v2.1.2.dat"
			response = await Axios.get(makeupUrl, { responseType: 'arraybuffer' })
			const makeupData = '/' + makeupUrl.split('/').pop()
			await FS.writeFile(makeupData, new Uint8Array(response.data))
			this.streamingContext.setupHumanDetectionData(NvsHumanDetectionDataTypeEnum.Makeup2, makeupData)
			// 获取特效包管理器，用于后续特效包安装及状态管理
			// Get AssetPackageManager used to install asset packages or fetch status of asset packages.
			this.assetPackageManager = this.streamingContext.getAssetPackageManager()
			// 创建时间线，按照960*540的分辨率，25fps，44.1k的音频采样率，双声道
			// Create timeline with 960*540 video resolution, 25fps, 2 channel counts and 44.1k audio sample rate
			const resolution = new NvsVideoResolution(960, 540)
			this.timeline = this.streamingContext.createTimeline(
				resolution,
				new NvsRational(25, 1),
				new NvsAudioResolution(44100, 2)
			)
			// 创建预览窗口并连接时间线进行预览
			// Create livewindow and connect it with timeline to preview video stream
			const mLiveWindow = this.streamingContext.createLiveWindow('live-window')
			mLiveWindow.setFillMode(NvsLiveWindowFillModeEnum.PreserveAspectFit)
			this.streamingContext.connectTimelineWithLiveWindow(this.timeline, mLiveWindow)
			// 检查引擎是否停止，非常重要！！！在使用appendVideoTrack、appendClip等这些会引起引擎变化的API之前，需要调用这个API，确保引擎已经停止，否则这些API可能无效
			// If you want use SDK API, such as appendVideoTrack or appendClip, which will trigger stop of SDK streaming engine,
			// you must use streamingEngineReadyForTimelineModification to make sure SDK streaming engine has stopped.
			// This is very important! If you don't use it, API maybe do nothing and output warning in console.
			await this.streamingContext.streamingEngineReadyForTimelineModification()
			// 添加视频轨道
			// Append video track
			this.track = this.timeline.appendVideoTrack()
			// 添加视频到轨道上，首先需要下载对应的m3u8存储到FS对应的目录下，
			// Append video clip to video track, SDK need local FS file path, so the m3u8 file must be downloaded to FS directory first
			const m3u8Url = 
				'https://alieasset.meishesdk.com/editor/2022/07/05/video/afd62303-3492-4c31-b09c-1c56c63b46a2/afd62303-3492-4c31-b09c-1c56c63b46a2.m3u8'
			response = await Axios.get(m3u8Url, { responseType: 'arraybuffer' })
			this.m3u8Name = '/m3u8/' + m3u8Url.split('/').pop()
			await FS.writeFile(this.m3u8Name, new Uint8Array(response.data))
			const videoClip = this.track.appendClip(this.m3u8Name)
			if (videoClip.getVideoType() === NvsVideoClipTypeEnum.Image) {
				videoClip.setImageMotionAnimationEnabled(false)
				videoClip.setImageMotionMode(NvsVideoClipMotionModeEnum.LetterBoxZoomIn)
			}
			const videoFx = videoClip.appendBuiltinFx("AR Scene")
			let arSceneManipulate = videoFx.getARSceneManipulate()
    		if (!arSceneManipulate) {
				console.error('ARSceneManipulate is null')
				return
			}
    		arSceneManipulate.setDetectionMode(NvsHumanDetectionFeatureEnum.SemiImageMode | NvsHumanDetectionFeatureEnum.MultiThread)
			videoFx.setIntVal("Advanced Beauty Type", 0)
			videoFx.setBooleanVal("Beauty Effect", true)
			videoFx.setBooleanVal("Advanced Beauty Enable", true)
			videoFx.setBooleanVal("Face Mesh Internal Enabled", true)
			videoFx.setFloatVal("Advanced Beauty Intensity", 0.6)
			videoFx.setFloatVal("Makeup Lip Intensity", 0.8)
			videoFx.setFloatVal("Face Mesh Eye Size Degree", 1)
			videoFx.setFloatVal("Face Mesh Face Size Degree", 1)
			const faceMeshFile = '/static/63BD3F32-D01B-4755-92D5-0DE361E4045A.3.facemesh'
			const faceMeshId = await installAsset(faceMeshFile)
			videoFx.setStringVal("Face Mesh Face Size Custom Package Id", faceMeshId)
			const makeUpFile = '/static/30E14E79-D7AC-4F14-A7A4-38C53A87693D.1.makeup'
			const makeUpId = await installAsset(makeUpFile)
			videoFx.setStringVal("Makeup Lip Package Id", makeUpId)
			const lutUrl = '/static/test.mslut'
			response = await Axios.get(lutUrl, { responseType: 'arraybuffer' })
			const lutName = '/' + lutUrl.split('/').pop()
			await FS.writeFile(lutName, new Uint8Array(response.data))
			videoFx.setStringVal("Whitening Lut File", lutName)
			// 更新UI上的时间线时长及播放进度
			// Update current time and duration
			this.maxValue = this.timeline.getDuration()
			this.timelineDuration = convertTimeCode(this.maxValue)
			this.streamingContext.onPlaybackTimelinePosition = (timeline, position) => {
				if (timeline.getInternalObject() === this.timeline.getInternalObject()) {
					this.currentValue = position
					this.currentTime = convertTimeCode(position)
				} else if (timeline.getInternalObject() === this.templateTimeline.getInternalObject()) {
					this.t_currentTime = convertTimeCode(position)
				}
			}
			this.streamingContext.onWebRequestWaitStatusChange = (isVideo, waiting) => {
		    // console.log("onWebRequestWaitStatusChange isVideo:", isVideo, "waiting:", waiting)
  		};
			// 定位时间线画面
			// Seek timeline to get the image of live window at the current time 
			this.streamingContext.seekTimeline(
				this.timeline,
				this.currentValue,
				NvsVideoPreviewSizeModeEnum.LiveWindowSize,
				NvsSeekFlagEnum.BuddyHostVideoFrame
			)
			loading.close()
		},
		data() {
			return {
				streamingContext: null,
				timeline: null,
				templateTimeline: null,
				assetPackageManager: null,
				track: null,
				currentTime: '00:00:00',
				timelineDuration: '00:00:00',
				currentValue: 0,
				maxValue: 0,
				t_currentTime: '00:00:00',
				t_timelineDuration: '00:00:00',
				assetList: [],
				compileTimer: null,
				exportVideoFinish: false,
				videoUrl: ''
			}
		},
		methods: {
			play(timeline) {
				this.streamingContext.playbackTimeline(
					timeline,
					this.currentValue,
					-1,
					NvsVideoPreviewSizeModeEnum.LiveWindowSize,
					true,
					NvsPlaybackFlagEnum.BuddyHostVideoFrame
				)
			},
			stop() {
				this.streamingContext.stop()
			},
			seek() {
				this.currentTime = convertTimeCode(this.currentValue)
				this.streamingContext.seekTimeline(
					this.timeline,
					this.currentValue,
					NvsVideoPreviewSizeModeEnum.LiveWindowSize,
					NvsSeekFlagEnum.BuddyHostVideoFrame
				)
			},
			async multiTrack() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)',
				})
				await this.streamingContext.streamingEngineReadyForTimelineModification()
				const videoTrack = this.timeline.appendVideoTrack()
				const videoClip = videoTrack.appendClip2(this.m3u8Name, 5000000, 30000000)
				if (videoClip) {
					// 对视频做缩放、平移、旋转和动画等调整
					// Use property fx to set scale, translation, rotation and so on.
					videoClip.enablePropertyVideoFx(true)
					const propertyFx = videoClip.getPropertyVideoFx()
					if (propertyFx) {
						propertyFx.setFloatVal('Scale X', 0.5)
						propertyFx.setFloatVal('Scale Y', 0.5)
						propertyFx.setFloatVal('Trans X', -100)
						propertyFx.setFloatVal('Trans Y', 100)
						propertyFx.setFloatVal('Rotation', 30)
						propertyFx.setFloatVal('Opacity', 0.9)
						const inAnimationPackageUrl =
							'https://qasset.meishesdk.com/material/pu/videofx/0A2158E2-A290-4CFB-B1FD-868A96ED9E8B/0A2158E2-A290-4CFB-B1FD-868A96ED9E8B.8.videofx'
						const inAnimationUuid = await installAsset(inAnimationPackageUrl)
						const outAnimationPackageUrl =
							'https://qasset.meishesdk.com/material/pu/videofx/771622B8-87FF-4FB0-9E57-8E1B48054DD2/771622B8-87FF-4FB0-9E57-8E1B48054DD2.3.videofx'
						const outAnimationUuid = await installAsset(outAnimationPackageUrl)
						// 入动画，或者组合动画
						// The Package Id parameter means in-animation or in-out-animation
						propertyFx.setStringVal('Package Id', inAnimationUuid)
						// 入动画开始时间和结束时间，按照视频片段内的时间戳计算
						// The Package Effect In parameter means the start time of in-animation, 
						// and the Package Effect Out parameter means the end time of in-animation,
						// these values are relative to start of the video clip  
						propertyFx.setFloatVal('Package Effect In', 0)
						propertyFx.setFloatVal('Package Effect Out', 2000000)
						// 出动画
						// The Package2 Id parameter means out-animation
						propertyFx.setStringVal('Package2 Id', outAnimationUuid)
						// 出动画开始时间和结束时间，按照视频片段内的时间戳计算
						// The Package2 Effect In parameter means the start time of out-animation, 
						// and the Package2 Effect Out parameter means the end time of out-animation,
						// these values are relative to start of the video clip 
						propertyFx.setFloatVal('Package2 Effect In', 22000000)
						propertyFx.setFloatVal('Package2 Effect Out', 25000000)
						this.assetList.push(inAnimationUuid)
						this.assetList.push(outAnimationUuid)
					}
				}
				this.streamingContext.seekTimeline(
					this.timeline,
					this.currentValue,
					NvsVideoPreviewSizeModeEnum.LiveWindowSize,
					NvsSeekFlagEnum.BuddyHostVideoFrame
				)
				loading.close()
			},
			async addTransition() {
				const loading = this.$loading({
					text: 'Package installing...',
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)',
				})
				await this.streamingContext.streamingEngineReadyForTimelineModification()
				this.track.addClip2(this.m3u8Name, 10000000, 30000000, 38000000)
				// 添加内建转场
				// 内建转场列表可以参看：https://www.meishesdk.com/android/doc_ch/html/content/FxNameList_8md.html
				// Set transition by builtin name
				// Builtin name list related link: https://www.meishesdk.com/android/doc_ch/html/content/FxNameList_8md.html
				this.track.setBuiltinTransition(0, 'Turning')
				// 添加包转场
				// Set transition by package
				const packageUrl =
					'https://qasset.meishesdk.com/material/pu/transition/02D05082-E3C3-498D-AAB2-15DC62AB2018/02D05082-E3C3-498D-AAB2-15DC62AB2018.1.videotransition'
				const assetUuid = await installAsset(packageUrl)
				this.track.setPackagedTransition(1, assetUuid)
				this.assetList.push(assetUuid)
				this.streamingContext.seekTimeline(
					this.timeline,
					this.currentValue,
					NvsVideoPreviewSizeModeEnum.LiveWindowSize,
					NvsSeekFlagEnum.BuddyHostVideoFrame
				)
				loading.close()
			},
			async addTimelineVideoFx() {
				const loading = this.$loading({
					text: 'Package installing...',
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)',
				})
				await this.streamingContext.streamingEngineReadyForTimelineModification()
				// 添加内建特效
				// 内建特效列表及参数可以参看：https://www.meishesdk.com/android/doc_ch/html/content/FxNameList_8md.html
				// Add timeline video fx by builtin name
				// Builtin name list related link: https://www.meishesdk.com/android/doc_ch/html/content/FxNameList_8md.html
				const timelineVideoFx = this.timeline.addBuiltinTimelineVideoFx(0, 5000000, 'Gaussian Blur')
				timelineVideoFx.setFloatVal('Radius', 20)
				// 添加包特效
				// Add timeline video fx by package
				const packageUrl =
					'https://qasset.meishesdk.com/material/pu/videofx/8EA07793-A3BB-4719-9882-3534E7D60618/8EA07793-A3BB-4719-9882-3534E7D60618.videofx'
				const assetUuid = await installAsset(packageUrl)
				this.timeline.addPackagedTimelineVideoFx(0, 5000000, assetUuid)
				this.assetList.push(assetUuid)
				this.streamingContext.seekTimeline(
					this.timeline,
					this.currentValue,
					NvsVideoPreviewSizeModeEnum.LiveWindowSize,
					NvsSeekFlagEnum.BuddyHostVideoFrame
				)
				loading.close()
			},
			async addCaption() {
				const loading = this.$loading({
					text: 'Package installing...',
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)',
				})
				await this.streamingContext.streamingEngineReadyForTimelineModification()
				// 添加字幕样式的字幕，文字为中文时，需要设置中文字体
				// Add caption with package style. You need register font of Chinese to set Chinese text of caption.
				const packageUrl =
					'https://qasset.meishesdk.com/material/captionstyle/E30D10CF-6693-4BDD-BE66-418F86BB1578.5.captionstyle'
				const assetUuid = await installAsset(packageUrl)
				const caption = this.timeline.addCaption('你好', 0, 5000000, assetUuid, false)
				this.assetList.push(assetUuid)
				const fontUrl = 'https://alieasset.meishesdk.com/font/站酷酷黑体.ttf'
				const response = await Axios.get(fontUrl, {
					responseType: 'arraybuffer',
				})
				const fontInFS = '/' + fontUrl.split('/').pop()
				await FS.writeFile(fontInFS, new Uint8Array(response.data))
				// 对字幕做字体设置、缩放、平移和旋转等调整
				// Set font family, translation, scale and rotation of caption
				caption.setFontByFilePath(fontInFS)
				caption.setCaptionTranslation(new NvsPointF(100, 100))
				caption.scaleCaption2(2)
				caption.rotateCaption2(45)
				this.streamingContext.seekTimeline(
					this.timeline,
					this.currentValue,
					NvsVideoPreviewSizeModeEnum.LiveWindowSize,
					NvsSeekFlagEnum.BuddyHostVideoFrame
				)
				loading.close()
			},
			async addModularCaption() {
				const packageUrl = 'https://qasset.meishesdk.com/material/captionstyle/48734DC5-6E58-46A9-9F48-E18CF1E25A1F.3.captionrenderer'
				const assetUuid = await installAsset(packageUrl)
				const caption = this.timeline.addModularCaption('花字', 0, 5000000 );
				caption.applyModularCaptionRenderer(assetUuid);
				this.assetList.push(assetUuid)
				const fontUrl = 'https://alieasset.meishesdk.com/font/站酷酷黑体.ttf'
				const response = await Axios.get(fontUrl, { responseType: 'arraybuffer' })
				const fontInFS = '/' + fontUrl.split('/').pop()
				await FS.writeFile(fontInFS, new Uint8Array(response.data))
				caption.setFontByFilePath(fontInFS)
				caption.setFontSize(100)
			},
			async addSticker() {
				const loading = this.$loading({
					text: 'Package installing...',
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)',
				})
				await this.streamingContext.streamingEngineReadyForTimelineModification()
				// 添加动画贴纸
				// Add animated sticker
				const packageUrl =
					'https://qasset.meishesdk.com/material/pu/animatedsticker/A1509C3D-7F5C-43CB-96EE-639ED7616BB7/A1509C3D-7F5C-43CB-96EE-639ED7616BB7.1.animatedsticker'
				const assetUuid = await installAsset(packageUrl)
				const sticker = this.timeline.addAnimatedSticker(
					1000000,
					5000000,
					assetUuid,
					false,
					false,
					''
				)
				this.assetList.push(assetUuid)
				// 对贴纸做缩放、平移和旋转等调整
				// Set translation, scale and rotation of animated sticker
				sticker.setTranslation(new NvsPointF(-100, 100))
				sticker.scaleAnimatedSticker2(0.8)
				sticker.rotateAnimatedSticker2(-30)
				// 设置贴纸平移关键帧
				// Set key frames of translation
				sticker.setCurrentKeyFrameTime(0)
				sticker.setTranslation(new NvsPointF(-200, -100))
				sticker.setCurrentKeyFrameTime(4000000)
				sticker.setTranslation(new NvsPointF(0, 0))
				this.streamingContext.seekTimeline(
					this.timeline,
					this.currentValue,
					NvsVideoPreviewSizeModeEnum.LiveWindowSize,
					NvsSeekFlagEnum.BuddyHostVideoFrame
				)
				loading.close()
			},
			async addTimelineClip() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)',
				})
				await this.streamingContext.streamingEngineReadyForTimelineModification()
				// 构建片段时间线
				// Create new timeline as video clip adding to video track
				const clipTimeline = this.streamingContext.createTimeline(
					new NvsVideoResolution(960, 540),
					new NvsRational(25, 1),
					new NvsAudioResolution(44100, 2)
				)
				const videoTrack = clipTimeline.appendVideoTrack()
				videoTrack.addClip2(this.m3u8Name, 0, 50000000, 60000000)
				this.track.addTimelineClip(clipTimeline, 0)
				this.streamingContext.seekTimeline(
					this.timeline,
					this.currentValue,
					NvsVideoPreviewSizeModeEnum.LiveWindowSize,
					NvsSeekFlagEnum.BuddyHostVideoFrame
				)
				loading.close()
			},
			// It needs to be used in conjunction with the backend service.
			async exportVideo () {
				const loading = this.$loading({
					text: 'Exporting video...',
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)',
				})
				await this.streamingContext.streamingEngineReadyForTimelineModification()
				this.exportVideoFinish = false
				const interactProjectID = generateUUID().toUpperCase()
				let footageInfoList = []
				// 设置时间线里面对象的附件信息
				// Set object attachment of timeline
				await setTimelineAttachment(this.timeline, footageInfoList)
				const innerInfo = {
					minSdkVersion: '2.18.0',
					supportedAspectRatio: '16v9',
					defaultAspectRatio: '16v9',
					uuid: interactProjectID,
					version: 1,
					innerAssetTotalCount: 0,
				}
				// 生成时间线合成的相关文件并上传
				// Generate all related files needed by exporting and upload them
				FS.writeFile('/interactproject/info.json', JSON.stringify(innerInfo))
				this.assetPackageManager.writeProjectXml(this.timeline, NvsTimelineAspectRatioEnum['16v9'], interactProjectID)
				const ret = this.assetPackageManager.generateProjectPackage('/interactproject', interactProjectID, '/interactproject')
				if (!ret) {
					loading.close()
					this.$message.error('Generate project failed, please contact us to get the license!')
					return
				}
				this.assetPackageManager.onFinishTemplatePackageGenerate = async (path, err) => {
					if (err === 0) {
						const data = FS.readFile(path)
						FS.unlink(path)
						try {
							const projectUrl = await upload({
								file: new Blob([data]),
								extension: 'project',
								uuid: interactProjectID,
								uploadModule: 'multi_project',
							})
						
							const projectXmlFilePath = '/compile.xml'
							writeCompileXml(this.assetList, footageInfoList, interactProjectID, projectUrl, projectXmlFilePath)
							const xmlData = FS.readFile(projectXmlFilePath, {encoding: 'utf8'})
							const xmlUrl = await upload({
								file: xmlData,
								extension: 'xml',
								uploadModule: 'temp',
							})
							// 合成视频
							// Create video
							const resp = await api.video_create({
								projectId: '',
								projectUrl: xmlUrl,
								title: 'test',
								coverUrl: ''
							})
							// 合成进度状态
							// Progress and status of video creation
							this.compileTimer = setInterval(async () => {
								let jobInfoResult = await api.job_info({
									jobIds: [ resp.data.data.jobId ]
								})
								jobInfoResult = jobInfoResult.data.data[resp.data.data.jobId]
								if (jobInfoResult.status === 1) {
									this.videoUrl = jobInfoResult.videoUrl
									this.exportVideoFinish = true
									clearInterval(this.compileTimer)
									loading.close()
									this.$message.info('Export video finish')
								} else if (jobInfoResult.status === 2) {
									clearInterval(this.compileTimer)
									loading.close()
									this.$message.error('Export video fail')
								}
							}, 1000)
						} catch (e) {
							loading.close()
							this.$message.error('Upload file failed, please contact us to get the license!')
							return
						}
					} else {
						loading.close()
						this.$message.error('Generate project failed, please contact us to get the license!')
						return
					}
				}
			},
			downloadVideo () {
				let a = document.createElement("a");
				a.href = this.videoUrl;
				a.click();
			},
			async exportTimelineData() {
				// const data = await transcodeTimelineToProjectData(this.timeline)
				// console.log("Current timeline data:",data)
				// alert("数据已经打印到控制台，请查看")
			},
			async useURLFileAddToTrack() {
				const url = prompt("请输入文件URL地址", "https://alieasset.meishesdk.com/test/resource/video/2025/03/03/90951/45fb77281d514157bc25d97d24f826e7.mp4")
				const  result = await	createLocalFile({ webAssetUrl:url, uuid: generateUUID() })
				if (!result.webLocalPath) {
					alert("文件格式不支持或者下载失败")
					return
				}
				await this.streamingContext.streamingEngineReadyForTimelineModification()
				const videoTrack = this.timeline.appendVideoTrack()
				const videoClip = videoTrack.appendClip2(result.webLocalPath,0, 5000000 * 20 * 4)
				if (videoClip) {
					// // 对视频做缩放、平移、旋转和动画等调整
					videoClip.enablePropertyVideoFx(true)
					const propertyFx = videoClip.getPropertyVideoFx()
					// if (propertyFx) {
					// 	propertyFx.setFloatVal('Scale X', 0.5)
					// 	propertyFx.setFloatVal('Scale Y', 0.5)
					// }		
				}
				this.maxValue = this.timeline.getDuration()
				this.timelineDuration = convertTimeCode(this.maxValue)
				this.streamingContext.seekTimeline(
						this.timeline,
						this.currentValue,
						NvsVideoPreviewSizeModeEnum.LiveWindowSize,
						NvsSeekFlagEnum.BuddyHostVideoFrame
				)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.sdk-demo {
		height: 100%;
	}
	.live-window-box {
		display: flex;
		column-gap: 30px;
	}
	#live-window {
		width: 800px;
		height: 450px;
		background-color: #928;
	}
	#template-live-window {
		width: 800px;
		height: 450px;
		background-color: #000;
	}
	.btns {
		height: 40px;
		line-height: 40px;
		margin-top: 5px;
		background: cornflowerblue;
		text-align: center;
		span {
			display: inline-block;
			padding: 0px 10px;
			margin: 0 10px;
			border-radius: 6px;
			cursor: pointer;
			&:hover {
				background: rgb(14, 45, 218);
				color: #fff;
			}
		}
	}
	.features {
		height: 40px;
		margin-top: 15px;
		display: flex;
		column-gap: 15px;
		align-items: center;
		justify-content: center;
		button {
			height: 40px;
			background: cornflowerblue;
			cursor: pointer;
		}
	}
</style>
