Search.setIndex({docnames:["autocode","examples","faq","index","installing"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["autocode.rst","examples.rst","faq.rst","index.rst","installing.rst"],objects:{"phase.pyphase":[[0,1,1,"","RGBDVideoStream"],[0,1,1,"","RGBDVideoWriter"],[0,1,1,"","StereoVision"],[0,3,1,"","bgr2bgra"],[0,3,1,"","bgr2rgba"],[0,3,1,"","bgra2rgba"],[0,0,0,"-","calib"],[0,3,1,"","cvMatIsEqual"],[0,3,1,"","depth2xyz"],[0,3,1,"","disparity2depth"],[0,3,1,"","disparity2xyz"],[0,3,1,"","flip"],[0,3,1,"","getVersionMajor"],[0,3,1,"","getVersionMinor"],[0,3,1,"","getVersionPatch"],[0,3,1,"","getVersionString"],[0,3,1,"","normaliseDisparity"],[0,3,1,"","processStereo"],[0,3,1,"","processStereoFiles"],[0,3,1,"","readImage"],[0,3,1,"","savePLY"],[0,3,1,"","scaleImage"],[0,3,1,"","showImage"],[0,0,0,"-","stereocamera"],[0,0,0,"-","stereomatcher"],[0,0,0,"-","types"],[0,3,1,"","xyz2depth"]],"phase.pyphase.RGBDVideoStream":[[0,2,1,"","close"],[0,2,1,"","getDownsampleFactor"],[0,2,1,"","getHFOV"],[0,2,1,"","getHeight"],[0,2,1,"","getLoadThreadResult"],[0,2,1,"","getReadThreadResult"],[0,2,1,"","getWidth"],[0,2,1,"","isFinished"],[0,2,1,"","isLoadThreadRunning"],[0,2,1,"","isLoaded"],[0,2,1,"","isOpened"],[0,2,1,"","isReadThreadRunning"],[0,2,1,"","load"],[0,2,1,"","loadThreaded"],[0,2,1,"","read"],[0,2,1,"","readThreaded"],[0,2,1,"","restart"],[0,2,1,"","setDownsampleFactor"]],"phase.pyphase.RGBDVideoWriter":[[0,2,1,"","add"],[0,2,1,"","close"],[0,2,1,"","getSaveThreadResult"],[0,2,1,"","isOpened"],[0,2,1,"","isSaveThreadRunning"],[0,2,1,"","save"],[0,2,1,"","saveThreaded"]],"phase.pyphase.StereoVision":[[0,2,1,"","connect"],[0,2,1,"","disconnect"],[0,2,1,"","getCalibration"],[0,2,1,"","getCamera"],[0,2,1,"","getDownsampleFactor"],[0,2,1,"","getHFOV"],[0,2,1,"","getHeight"],[0,2,1,"","getMatcher"],[0,2,1,"","getReadThreadResult"],[0,2,1,"","getWidth"],[0,2,1,"","isCapturing"],[0,2,1,"","isConnected"],[0,2,1,"","isReadThreadRunning"],[0,2,1,"","isValidCalibration"],[0,2,1,"","read"],[0,2,1,"","setDownsampleFactor"],[0,2,1,"","setTestImagePaths"],[0,2,1,"","startCapture"],[0,2,1,"","startReadThread"],[0,2,1,"","stopCapture"]],"phase.pyphase.calib":[[0,1,1,"","CalibrationFileType"],[0,1,1,"","CameraCalibration"],[0,1,1,"","StereoCameraCalibration"]],"phase.pyphase.calib.CalibrationFileType":[[0,4,1,"","INVALID"],[0,4,1,"","OPENCV_YAML"],[0,4,1,"","ROS_YAML"],[0,5,1,"","name"],[0,5,1,"","value"]],"phase.pyphase.calib.CameraCalibration":[[0,2,1,"","calibrationFromIdeal"],[0,2,1,"","getCameraCX"],[0,2,1,"","getCameraCY"],[0,2,1,"","getCameraFX"],[0,2,1,"","getCameraFY"],[0,2,1,"","getCameraMatrix"],[0,2,1,"","getDistortionCoefficients"],[0,2,1,"","getDownsampleFactor"],[0,2,1,"","getImageHeight"],[0,2,1,"","getImageWidth"],[0,2,1,"","getProjectionCX"],[0,2,1,"","getProjectionCY"],[0,2,1,"","getProjectionFX"],[0,2,1,"","getProjectionFY"],[0,2,1,"","getProjectionMatrix"],[0,2,1,"","getProjectionTX"],[0,2,1,"","getRectificationMatrix"],[0,2,1,"","isValid"],[0,2,1,"","remapPoint"],[0,2,1,"","setDownsampleFactor"]],"phase.pyphase.calib.StereoCameraCalibration":[[0,2,1,"","calibrationFromIdeal"],[0,2,1,"","calibrationFromYAML"],[0,2,1,"","getBaseline"],[0,2,1,"","getDownsampleFactor"],[0,2,1,"","getHFOV"],[0,2,1,"","getQ"],[0,2,1,"","isValid"],[0,2,1,"","isValidSize"],[0,2,1,"","rectify"],[0,2,1,"","remapPoint"],[0,2,1,"","saveToYAML"],[0,2,1,"","setDownsampleFactor"]],"phase.pyphase.stereocamera":[[0,1,1,"","AbstractStereoCamera"],[0,1,1,"","DeimosStereoCamera"],[0,1,1,"","PhobosStereoCamera"],[0,1,1,"","PylonStereoCamera"],[0,1,1,"","TitaniaStereoCamera"],[0,1,1,"","UVCStereoCamera"],[0,3,1,"","createStereoCamera"]],"phase.pyphase.stereocamera.AbstractStereoCamera":[[0,2,1,"","connect"],[0,2,1,"","disconnect"],[0,2,1,"","enableDataCapture"],[0,2,1,"","enableHardwareTrigger"],[0,2,1,"","getCaptureCount"],[0,2,1,"","getDownsampleFactor"],[0,2,1,"","getFrameRate"],[0,2,1,"","getHeight"],[0,2,1,"","getReadThreadResult"],[0,2,1,"","getWidth"],[0,2,1,"","isCapturing"],[0,2,1,"","isConnected"],[0,2,1,"","isContinousReadThreadRunning"],[0,2,1,"","isReadThreadRunning"],[0,2,1,"","read"],[0,2,1,"","resetCaptureCount"],[0,2,1,"","setDataCapturePath"],[0,2,1,"","setDownsampleFactor"],[0,2,1,"","setExposure"],[0,2,1,"","setFrameRate"],[0,2,1,"","setLeftAOI"],[0,2,1,"","setLeftFlipX"],[0,2,1,"","setLeftFlipY"],[0,2,1,"","setReadThreadCallback"],[0,2,1,"","setRightAOI"],[0,2,1,"","setRightFlipX"],[0,2,1,"","setRightFlipY"],[0,2,1,"","setTestImagePaths"],[0,2,1,"","startCapture"],[0,2,1,"","startContinousReadThread"],[0,2,1,"","startReadThread"],[0,2,1,"","stopCapture"],[0,2,1,"","stopContinousReadThread"]],"phase.pyphase.stereocamera.DeimosStereoCamera":[[0,2,1,"","connect"],[0,2,1,"","disconnect"],[0,2,1,"","enableDataCapture"],[0,2,1,"","enableHardwareTrigger"],[0,2,1,"","getCaptureCount"],[0,2,1,"","getDownsampleFactor"],[0,2,1,"","getFrameRate"],[0,2,1,"","getHeight"],[0,2,1,"","getReadThreadResult"],[0,2,1,"","getWidth"],[0,2,1,"","isCapturing"],[0,2,1,"","isConnected"],[0,2,1,"","isContinousReadThreadRunning"],[0,2,1,"","isReadThreadRunning"],[0,2,1,"","read"],[0,2,1,"","resetCaptureCount"],[0,2,1,"","setDataCapturePath"],[0,2,1,"","setDownsampleFactor"],[0,2,1,"","setExposure"],[0,2,1,"","setFrameRate"],[0,2,1,"","setLeftAOI"],[0,2,1,"","setLeftFlipX"],[0,2,1,"","setLeftFlipY"],[0,2,1,"","setReadThreadCallback"],[0,2,1,"","setRightAOI"],[0,2,1,"","setRightFlipX"],[0,2,1,"","setRightFlipY"],[0,2,1,"","setTestImagePaths"],[0,2,1,"","startCapture"],[0,2,1,"","startContinousReadThread"],[0,2,1,"","startReadThread"],[0,2,1,"","stopCapture"],[0,2,1,"","stopContinousReadThread"]],"phase.pyphase.stereocamera.PhobosStereoCamera":[[0,2,1,"","connect"],[0,2,1,"","disconnect"],[0,2,1,"","enableDataCapture"],[0,2,1,"","enableHardwareTrigger"],[0,2,1,"","getCaptureCount"],[0,2,1,"","getDownsampleFactor"],[0,2,1,"","getFrameRate"],[0,2,1,"","getHeight"],[0,2,1,"","getReadThreadResult"],[0,2,1,"","getWidth"],[0,2,1,"","isCapturing"],[0,2,1,"","isConnected"],[0,2,1,"","isContinousReadThreadRunning"],[0,2,1,"","isReadThreadRunning"],[0,2,1,"","read"],[0,2,1,"","resetCaptureCount"],[0,2,1,"","setDataCapturePath"],[0,2,1,"","setDownsampleFactor"],[0,2,1,"","setExposure"],[0,2,1,"","setFrameRate"],[0,2,1,"","setLeftAOI"],[0,2,1,"","setLeftFlipX"],[0,2,1,"","setLeftFlipY"],[0,2,1,"","setReadThreadCallback"],[0,2,1,"","setRightAOI"],[0,2,1,"","setRightFlipX"],[0,2,1,"","setRightFlipY"],[0,2,1,"","setTestImagePaths"],[0,2,1,"","startCapture"],[0,2,1,"","startContinousReadThread"],[0,2,1,"","startReadThread"],[0,2,1,"","stopCapture"],[0,2,1,"","stopContinousReadThread"]],"phase.pyphase.stereocamera.PylonStereoCamera":[[0,2,1,"","connect"],[0,2,1,"","disconnect"],[0,2,1,"","enableDataCapture"],[0,2,1,"","enableHardwareTrigger"],[0,2,1,"","getCaptureCount"],[0,2,1,"","getDownsampleFactor"],[0,2,1,"","getFrameRate"],[0,2,1,"","getHeight"],[0,2,1,"","getReadThreadResult"],[0,2,1,"","getWidth"],[0,2,1,"","isCapturing"],[0,2,1,"","isConnected"],[0,2,1,"","isContinousReadThreadRunning"],[0,2,1,"","isReadThreadRunning"],[0,2,1,"","read"],[0,2,1,"","resetCaptureCount"],[0,2,1,"","setDataCapturePath"],[0,2,1,"","setDownsampleFactor"],[0,2,1,"","setExposure"],[0,2,1,"","setFrameRate"],[0,2,1,"","setLeftAOI"],[0,2,1,"","setLeftFlipX"],[0,2,1,"","setLeftFlipY"],[0,2,1,"","setReadThreadCallback"],[0,2,1,"","setRightAOI"],[0,2,1,"","setRightFlipX"],[0,2,1,"","setRightFlipY"],[0,2,1,"","setTestImagePaths"],[0,2,1,"","startCapture"],[0,2,1,"","startContinousReadThread"],[0,2,1,"","startReadThread"],[0,2,1,"","stopCapture"],[0,2,1,"","stopContinousReadThread"]],"phase.pyphase.stereocamera.TitaniaStereoCamera":[[0,2,1,"","connect"],[0,2,1,"","disconnect"],[0,2,1,"","enableDataCapture"],[0,2,1,"","enableHardwareTrigger"],[0,2,1,"","getCaptureCount"],[0,2,1,"","getDownsampleFactor"],[0,2,1,"","getFrameRate"],[0,2,1,"","getHeight"],[0,2,1,"","getReadThreadResult"],[0,2,1,"","getWidth"],[0,2,1,"","isCapturing"],[0,2,1,"","isConnected"],[0,2,1,"","isContinousReadThreadRunning"],[0,2,1,"","isReadThreadRunning"],[0,2,1,"","read"],[0,2,1,"","resetCaptureCount"],[0,2,1,"","setDataCapturePath"],[0,2,1,"","setDownsampleFactor"],[0,2,1,"","setExposure"],[0,2,1,"","setFrameRate"],[0,2,1,"","setLeftAOI"],[0,2,1,"","setLeftFlipX"],[0,2,1,"","setLeftFlipY"],[0,2,1,"","setReadThreadCallback"],[0,2,1,"","setRightAOI"],[0,2,1,"","setRightFlipX"],[0,2,1,"","setRightFlipY"],[0,2,1,"","setTestImagePaths"],[0,2,1,"","startCapture"],[0,2,1,"","startContinousReadThread"],[0,2,1,"","startReadThread"],[0,2,1,"","stopCapture"],[0,2,1,"","stopContinousReadThread"]],"phase.pyphase.stereocamera.UVCStereoCamera":[[0,2,1,"","connect"],[0,2,1,"","disconnect"],[0,2,1,"","enableDataCapture"],[0,2,1,"","enableHardwareTrigger"],[0,2,1,"","getCaptureCount"],[0,2,1,"","getDownsampleFactor"],[0,2,1,"","getFrameRate"],[0,2,1,"","getHeight"],[0,2,1,"","getReadThreadResult"],[0,2,1,"","getWidth"],[0,2,1,"","isCapturing"],[0,2,1,"","isConnected"],[0,2,1,"","isContinousReadThreadRunning"],[0,2,1,"","isReadThreadRunning"],[0,2,1,"","read"],[0,2,1,"","resetCaptureCount"],[0,2,1,"","setDataCapturePath"],[0,2,1,"","setDownsampleFactor"],[0,2,1,"","setExposure"],[0,2,1,"","setFrameRate"],[0,2,1,"","setLeftAOI"],[0,2,1,"","setLeftFlipX"],[0,2,1,"","setLeftFlipY"],[0,2,1,"","setReadThreadCallback"],[0,2,1,"","setRightAOI"],[0,2,1,"","setRightFlipX"],[0,2,1,"","setRightFlipY"],[0,2,1,"","setTestImagePaths"],[0,2,1,"","startCapture"],[0,2,1,"","startContinousReadThread"],[0,2,1,"","startReadThread"],[0,2,1,"","stopCapture"],[0,2,1,"","stopContinousReadThread"]],"phase.pyphase.stereomatcher":[[0,1,1,"","AbstractStereoMatcher"],[0,1,1,"","StereoBM"],[0,1,1,"","StereoHOBM"],[0,1,1,"","StereoI3DRSGM"],[0,1,1,"","StereoParams"],[0,1,1,"","StereoSGBM"],[0,3,1,"","createStereoMatcher"]],"phase.pyphase.stereomatcher.AbstractStereoMatcher":[[0,2,1,"","compute"],[0,2,1,"","getComputeThreadResult"],[0,2,1,"","isComputeThreadRunning"],[0,2,1,"","setComputeThreadCallback"],[0,2,1,"","startComputeThread"]],"phase.pyphase.stereomatcher.StereoBM":[[0,2,1,"","compute"],[0,2,1,"","getComputeThreadResult"],[0,2,1,"","isComputeThreadRunning"],[0,2,1,"","setComputeThreadCallback"],[0,2,1,"","setMinDisparity"],[0,2,1,"","setNumDisparities"],[0,2,1,"","setWindowSize"],[0,2,1,"","startComputeThread"]],"phase.pyphase.stereomatcher.StereoHOBM":[[0,2,1,"","compute"],[0,2,1,"","getComputeThreadResult"],[0,2,1,"","isComputeThreadRunning"],[0,2,1,"","setComputeThreadCallback"],[0,2,1,"","setMinDisparity"],[0,2,1,"","setNumDisparities"],[0,2,1,"","setWindowSize"],[0,2,1,"","startComputeThread"]],"phase.pyphase.stereomatcher.StereoI3DRSGM":[[0,2,1,"","compute"],[0,2,1,"","enableInterpolation"],[0,2,1,"","enableSubpixel"],[0,2,1,"","getComputeThreadResult"],[0,2,1,"","isComputeThreadRunning"],[0,2,1,"","isLicenseValid"],[0,2,1,"","setComputeThreadCallback"],[0,2,1,"","setMinDisparity"],[0,2,1,"","setNumDisparities"],[0,2,1,"","setSpeckleMaxDiff"],[0,2,1,"","setSpeckleMaxSize"],[0,2,1,"","setWindowSize"],[0,2,1,"","startComputeThread"]],"phase.pyphase.stereomatcher.StereoParams":[[0,5,1,"","interpolation"],[0,5,1,"","matcherType"],[0,5,1,"","minDisparity"],[0,5,1,"","numDisparities"],[0,5,1,"","windowSize"]],"phase.pyphase.stereomatcher.StereoSGBM":[[0,2,1,"","compute"],[0,2,1,"","getComputeThreadResult"],[0,2,1,"","isComputeThreadRunning"],[0,2,1,"","setComputeThreadCallback"],[0,2,1,"","setMinDisparity"],[0,2,1,"","setNumDisparities"],[0,2,1,"","setWindowSize"],[0,2,1,"","startComputeThread"]],"phase.pyphase.types":[[0,1,1,"","CameraDeviceInfo"],[0,1,1,"","CameraDeviceType"],[0,1,1,"","CameraInterfaceType"],[0,1,1,"","CameraReadResult"],[0,1,1,"","LeftOrRight"],[0,1,1,"","MatrixFloat"],[0,1,1,"","MatrixUInt8"],[0,1,1,"","Point2d"],[0,1,1,"","Point2f"],[0,1,1,"","Point2i"],[0,1,1,"","RGBDVideoFrame"],[0,1,1,"","StereoImagePair"],[0,1,1,"","StereoMatcherComputeResult"],[0,1,1,"","StereoMatcherType"],[0,1,1,"","StereoVisionReadResult"]],"phase.pyphase.types.CameraDeviceInfo":[[0,5,1,"","device_type"],[0,2,1,"","getLeftCameraSerial"],[0,2,1,"","getRightCameraSerial"],[0,2,1,"","getUniqueSerial"],[0,5,1,"","interface_type"],[0,2,1,"","setLeftCameraSerial"],[0,2,1,"","setRightCameraSerial"],[0,2,1,"","setUniqueSerial"]],"phase.pyphase.types.CameraDeviceType":[[0,4,1,"","DEVICE_TYPE_DEIMOS"],[0,4,1,"","DEVICE_TYPE_GENERIC_PYLON"],[0,4,1,"","DEVICE_TYPE_GENERIC_UVC"],[0,4,1,"","DEVICE_TYPE_INVALID"],[0,4,1,"","DEVICE_TYPE_PHOBOS"],[0,4,1,"","DEVICE_TYPE_TITANIA"],[0,5,1,"","name"],[0,5,1,"","value"]],"phase.pyphase.types.CameraInterfaceType":[[0,4,1,"","INTERFACE_TYPE_GIGE"],[0,4,1,"","INTERFACE_TYPE_USB"],[0,4,1,"","INTERFACE_TYPE_VIRTUAL"],[0,5,1,"","name"],[0,5,1,"","value"]],"phase.pyphase.types.CameraReadResult":[[0,5,1,"","left"],[0,5,1,"","right"],[0,5,1,"","valid"]],"phase.pyphase.types.LeftOrRight":[[0,4,1,"","LEFT"],[0,4,1,"","RIGHT"],[0,5,1,"","name"],[0,5,1,"","value"]],"phase.pyphase.types.MatrixFloat":[[0,2,1,"","getAt"],[0,2,1,"","getColumns"],[0,2,1,"","getLayers"],[0,2,1,"","getLength"],[0,2,1,"","getRows"],[0,2,1,"","getSize"],[0,2,1,"","isEmpty"],[0,2,1,"","setAt"]],"phase.pyphase.types.MatrixUInt8":[[0,2,1,"","getAt"],[0,2,1,"","getColumns"],[0,2,1,"","getLayers"],[0,2,1,"","getLength"],[0,2,1,"","getRows"],[0,2,1,"","getSize"],[0,2,1,"","isEmpty"],[0,2,1,"","setAt"]],"phase.pyphase.types.Point2d":[[0,5,1,"","x"],[0,5,1,"","y"]],"phase.pyphase.types.Point2f":[[0,5,1,"","x"],[0,5,1,"","y"]],"phase.pyphase.types.Point2i":[[0,5,1,"","x"],[0,5,1,"","y"]],"phase.pyphase.types.RGBDVideoFrame":[[0,5,1,"","depth"],[0,5,1,"","image"],[0,5,1,"","valid"]],"phase.pyphase.types.StereoImagePair":[[0,5,1,"","left"],[0,5,1,"","right"]],"phase.pyphase.types.StereoMatcherComputeResult":[[0,5,1,"","disparity"],[0,5,1,"","valid"]],"phase.pyphase.types.StereoMatcherType":[[0,4,1,"","STEREO_MATCHER_BM"],[0,4,1,"","STEREO_MATCHER_HOBM"],[0,4,1,"","STEREO_MATCHER_I3DRSGM"],[0,4,1,"","STEREO_MATCHER_SGBM"],[0,5,1,"","name"],[0,5,1,"","value"]],"phase.pyphase.types.StereoVisionReadResult":[[0,5,1,"","disparity"],[0,5,1,"","left"],[0,5,1,"","right"],[0,5,1,"","valid"]],phase:[[0,0,0,"-","pyphase"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:property"},terms:{"0":[0,1,2],"1":[0,1],"1000":[0,1],"11":1,"2":0,"24":2,"25":1,"3":[0,1],"4":0,"40091829":1,"40098273":1,"49":1,"5":[0,1],"9":1,"char":0,"class":0,"float":0,"function":0,"import":1,"int":0,"new":0,"static":0,"true":[0,1],"void":0,"while":1,No:3,__cdecl:0,abstractstereocamera:0,abstractstereomatch:0,accept:1,add:[0,1],amd64:2,appli:0,apt:2,ar:0,arg0:0,arg1:0,arg2:0,arg3:0,arg4:0,arg5:0,arg:0,arrai:1,avi:1,base:0,between:3,bgr2bgra:0,bgr2rgba:0,bgr:0,bgra2rgba:0,bgra:0,bin:2,bool:0,bring:0,c:[0,2],calcul:0,calib:[0,1],calibr:[0,1],calibrationfiletyp:0,calibrationfromid:0,calibrationfromyaml:[0,1],callabl:0,cam:1,cam_result:1,camera:[0,3],camera_nam:1,cameracalibr:0,cameradeviceinfo:[0,1],cameradevicetyp:[0,1],camerainterfacetyp:[0,1],camerareadresult:0,cannot:3,captur:[0,1],capture_count:1,caus:2,check:[0,1],close:[0,1],cloud:0,code:0,colour:0,comput:[0,1],connect:[0,1],continu:1,convert:[0,3],creat:1,createstereocamera:0,createstereomatch:0,custom:0,cv2:1,cv:0,cvmatisequ:0,data:3,deb:2,debian:2,defin:1,degre:0,deimosstereocamera:0,depth2xyz:0,depth:[0,1],device_info:1,device_typ:[0,1],device_type_deimo:0,device_type_generic_pylon:0,device_type_generic_uvc:0,device_type_invalid:0,device_type_phobo:0,device_type_titania:[0,1],disconnect:[0,1],dispairti:0,dispar:[0,1],disparity2depth:[0,1],disparity2xyz:0,displai:[0,1],display_downsampl:1,doe:2,download:2,downsample_factor:1,e:0,easi:0,els:1,enabledatacaptur:0,enablehardwaretrigg:0,enableinterpol:[0,1],enablesubpixel:0,equal:0,error:1,exampl:3,except:[1,2],exist:[1,2],f:2,factor:0,fail:1,fals:1,faq:3,field:0,file:[0,2,3],filepath:0,first:0,flip:0,flip_cod:0,format:1,frame:1,framer:1,from:[0,2,3],g:0,gener:0,getat:0,getbaselin:0,getcalibr:[0,1],getcamera:[0,1],getcameraci:0,getcameracx:0,getcamerafi:0,getcamerafx:0,getcameramatrix:0,getcapturecount:0,getcolumn:[0,1],getcomputethreadresult:[0,1],getdistortioncoeffici:0,getdownsamplefactor:0,getframer:[0,1],getheight:0,gethfov:0,getimageheight:0,getimagewidth:0,getlay:0,getleftcameraseri:0,getlength:0,getloadthreadresult:[0,1],getmatch:[0,1],getprojectionci:0,getprojectioncx:0,getprojectionfi:0,getprojectionfx:0,getprojectionmatrix:0,getprojectiontx:0,getq:[0,1],getreadthreadresult:[0,1],getrectificationmatrix:0,getrightcameraseri:0,getrow:[0,1],getsavethreadresult:[0,1],getsiz:0,getuniqueseri:0,getversionmajor:0,getversionminor:0,getversionpatch:0,getversionstr:0,getwidth:0,gui:[0,2],hfov:0,horizont:0,i3dr:[0,2],i3drsgm:1,i:1,imag:[0,1],image_filepath:0,image_pair:1,img_disp:1,img_left:1,img_right:1,imread:1,imread_unchang:1,imshow:1,index:3,info:1,instal:[2,3],instanc:1,interface_typ:[0,1],interface_type_gig:0,interface_type_usb:[0,1],interface_type_virtu:0,interpol:0,invalid:[0,1],iscaptur:0,iscomputethreadrun:[0,1],isconnect:0,iscontinousreadthreadrun:0,isempti:[0,1],isfinish:[0,1],islicensevalid:[0,1],isload:0,isloadthreadrun:[0,1],isopen:[0,1],isreadthreadrun:[0,1],issavethreadrun:[0,1],issu:2,isvalid:[0,1],isvalidcalibr:0,isvalids:0,kwarg:0,left:[0,1],left_imag:[0,1],left_image_fil:1,left_image_path:0,left_seri:1,left_yaml:[0,1],leftorright:0,librari:[0,3],licens:1,license_valid:1,linux:2,load:[0,3],loadthread:[0,1],m:4,makedir:1,manag:2,mat1:0,mat2:0,mat:[0,3],mat_left_imag:1,matcher:[0,1],matcher_result:1,matcher_typ:1,matchertyp:0,matrix:0,matrixfloat:0,matrixuint8:[0,1],member:0,mindispar:0,miss:1,modul:3,modulenotfounderror:2,mp4:1,name:[0,3],ndarrai:0,non:1,none:0,normalis:0,normalisedispar:[0,1],np:1,np_depth:1,np_dispar:1,np_imag:1,np_image2:1,np_left_imag:1,np_right_imag:1,num_of_fram:1,numdispar:0,numpi:[0,3],object:0,open:1,opencv_yaml:0,opt:2,os:1,out_depth_video:1,out_fold:1,out_rgb_video:1,output_fold:0,over:0,overload:0,packag:[0,2,3],pair:1,pass:1,path:[1,2],ph_dispar:1,ph_left_imag:1,ph_right_imag:1,phase:[0,1,3,4],phase_dir:2,phase_vx:2,phobosstereocamera:0,pip:[2,3],ply:0,ply_filepath:0,png:1,point2d:0,point2f:0,point2i:0,point:0,print:1,process:[0,3],processstereo:[0,1],processstereofil:0,program:2,properti:0,pybind11_builtin:0,pybind11_object:0,pylonstereocamera:0,pyphas:[0,1],python:[0,2,4],q:0,rais:1,rang:1,read:[0,3],read_result:1,readimag:0,readthread:0,receiv:1,rect_image_pair:1,rectif:1,rectifi:[0,1],releas:2,remappoint:0,resetcapturecount:0,restart:0,result:1,ret:1,rgb:[0,1],rgba:0,rgbd:[0,3],rgbdvideofram:0,rgbdvideostream:[0,1],rgbdvideowrit:[0,1],right:[0,1],right_imag:[0,1],right_image_fil:1,right_image_path:0,right_seri:1,right_yaml:[0,1],ros_yaml:0,run:1,s:0,save:[0,3],savepli:0,savethread:[0,1],savetoyaml:0,scale:0,scale_factor:0,scaleimag:[0,1],second:0,self:0,set:2,setat:0,setcomputethreadcallback:0,setdatacapturepath:0,setdownsamplefactor:[0,1],setexposur:0,setframer:0,setleftaoi:0,setleftcameraseri:0,setleftflipi:0,setleftflipx:0,setmindispar:[0,1],setnumdispar:[0,1],setreadthreadcallback:0,setrightaoi:0,setrightcameraseri:0,setrightflipi:0,setrightflipx:0,setspecklemaxdiff:[0,1],setspecklemaxs:[0,1],settestimagepath:0,setuniqueseri:0,setwindows:[0,1],should:2,showimag:0,singl:0,size:[0,1],solut:2,split:1,start:1,startcaptur:0,startcomputethread:[0,1],startcontinousreadthread:0,startreadthread:[0,1],std:0,stereo:[0,3],stereo_matcher_bm:[0,1],stereo_matcher_hobm:0,stereo_matcher_i3drsgm:[0,1],stereo_matcher_sgbm:0,stereo_param:[0,1],stereobm:0,stereocamera:0,stereocameracalibr:[0,1],stereohobm:0,stereoi3drsgm:[0,1],stereoimagepair:0,stereomatch:[0,1],stereomatchercomputeresult:0,stereomatchertyp:[0,1],stereoparam:[0,1],stereosgbm:0,stereovis:[0,1],stereovisionreadresult:0,stopcaptur:0,stopcontinousreadthread:0,str:0,stream:[0,1],success:0,sudo:2,sv:1,thi:2,thread:1,timeout:0,titania:1,titaniastereocamera:0,togeth:0,two:0,type:[0,1],unsign:0,us:[0,2],uvcstereocamera:0,v0:2,valid:[0,1],valu:0,vertic:0,video:[0,3],view:0,vision:0,wait:1,waitkei:1,window:[0,2],window_nam:0,windows:0,wrapper:0,write:[0,1],writer:0,x:[0,2],xyz2depth:0,xyz:0,y:0,yaml:1},titles:["Module","Examples","FAQ","Indices and tables","Install"],titleterms:{No:2,between:1,camera:1,cannot:2,convert:1,data:1,exampl:1,faq:2,file:1,from:1,indic:3,instal:4,librari:2,load:[1,2],mat:1,modul:[0,2],name:2,numpi:1,packag:4,phase:2,pip:4,process:1,pyphas:3,read:1,rgbd:1,save:1,stereo:1,tabl:3,video:1}})