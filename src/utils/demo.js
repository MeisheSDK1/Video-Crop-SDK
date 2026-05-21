// // 对视频做裁剪
// // 设置 Crop 特效参数，Bounding的值是归一化后的，
// const cropVideoFx = videoClip.appendRawBuiltinFx('Crop')
// cropVideoFx.setMenuVal('Coordinate System Type', 'NDC')
// cropVideoFx.setFloatVal('Bounding Left', 0)
// cropVideoFx.setFloatVal('Bounding Top', 1)
// cropVideoFx.setFloatVal('Bounding Right', 1)
// cropVideoFx.setFloatVal('Bounding Bottom', -0)

// 视频缩放
// videoClip.enablePropertyVideoFx(true)
// const propertyFx = videoClip.getPropertyVideoFx()
// propertyFx.setFloatVal('Scale X', 0.5)
// propertyFx.setFloatVal('Scale Y', 0.5)

// 视频片段变换模式
// // 信封
// propertyFx.setFloatVal('Scan Value', 0)
// propertyFx.setMenuVal('Fill Mode', 'AspectFit')
// // 裁剪
// propertyFx.setFloatVal('Scan Value', 1)
// propertyFx.setMenuVal('Fill Mode', 'PanAndScan')
// // 拉伸
// propertyFx.setFloatVal('Scan Value', 0)
// propertyFx.setMenuVal('Fill Mode', 'Stretch')


// 视频片段添加背景
// videoClip.enablePropertyVideoFx(true)
// const propertyFx = videoClip.getPropertyVideoFx()
// propertyFx.setFloatVal('Scale X', 0)
// propertyFx.setFloatVal('Scale Y', 0)
// // 背景色
// propertyFx.setMenuVal('Background Mode', 'Color Solid')
// propertyFx.setColorVal('Background Color', new NvsColor(1, 0, 0, 1))
// // 图片
// const imagePath = 'https://alieasset.meishesdk.com/test/resource/image/2024/12/20/71024/1976523ccda543189bb1e8ed7dd21d4c.png'
// const responseImg = await Axios.get(imagePath, { responseType: 'arraybuffer' })
// const imageFilePath = '/' + imagePath.split('/').pop()
// await FS.writeFile(imageFilePath, new Uint8Array(responseImg.data))
// propertyFx.setMenuVal('Background Mode', 'Image File')
// propertyFx.setStringVal('Background Image', imageFilePath)
// // 设置背景为模糊
// propertyFx.setMenuVal('Background Mode', 'Blur')
// propertyFx.setFloatVal('Background Blur Radius', 100)


// 监听seek 或者播放 时加载状态
// streamingContext.onWebRequestWaitStatusChange = (isVideo, waiting) => {
//   console.log("onWebRequestWaitStatusChange isVideo:", isVideo, "waiting:", waiting)
// };


// 视频遮罩
// const mosaicFx = videoClip.insertRawBuiltinFx('Mosaic', 0)
// mosaicFx.setFloatVal('Unit Size', 0)
// mosaicFx.setIgnoreBackground(true);
// mosaicFx.setInverseRegion(false);
// mosaicFx.setRegional(true);
// const value = {
//   x1: -0.5, y1: 0.5,
//   x2: -0.5, y2: -0.5,
//   x3: 0.5, y3: -0.5,
//   x4: 0.5, y4: 0.5,
// };
// const region = new NvsVectorFloat();
// region.push_back(value.x1);
// region.push_back(value.y1);
// region.push_back(value.x2);
// region.push_back(value.y2);
// region.push_back(value.x3);
// region.push_back(value.y3);
// region.push_back(value.x4);
// region.push_back(value.y4);
// mosaicFx.setRegion(region);


// 视频遮罩
// const mosaicFx = videoClip.insertRawBuiltinFx('Mosaic', 0)
// mosaicFx.setFloatVal('Unit Size', 0)
// mosaicFx.setIgnoreBackground(true);
// mosaicFx.setInverseRegion(false);
// mosaicFx.setRegional(true);
// let value = {
//   x1: -0.5, y1:  0.5,
//   x2: -0.5, y2: -0.5,
//   x3:  0.5,  y3: -0.5,
//   x4:  0.5,  y4:  0.5,
// };
// const type = 'ellipse'
// if ( type === 'rect') {
//   // 方形
//   const region = new NvsVectorFloat();
//   region.push_back(value.x1);
//   region.push_back(value.y1);
//   region.push_back(value.x2);
//   region.push_back(value.y2);
//   region.push_back(value.x3);
//   region.push_back(value.y3);
//   region.push_back(value.x4);
//   region.push_back(value.y4);
//   mosaicFx.setRegion(region);
// } else if (type === 'ellipse') {
//   // 四个点转椭圆参数
//   const centerXVal = value.x1 + (value.x4 - value.x1) / 2;
//   const centerYVal = value.y1 - (value.y4 - value.y3) / 2;
//   const aVal = (value.x4 - value.x1) / 2;
//   const bVal = (value.y4 - value.y3) / 2;
//   const angleVal = 0;
//   value = {
//     centerX: centerXVal, centerY: centerYVal,
//     a: aVal, b: bVal,
//     angle: angleVal,
//   };
//   const center = new NvsPointF(value.centerX, value.centerY);
//   mosaicFx.setEllipseRegion(center, value.a, value.b, angleVal);
// }
