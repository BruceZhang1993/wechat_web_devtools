"use strict";function init(){function e(){var e=s.getCurrentProject(),t=i.getWidgetOffset(e.compileType),r=t.height,o=t.width;return e.compileType==n.search&&(r-=30,o-=36),{windowHeight:r,windowWidth:o}}function t(t,r,o){var i=e();i.errMsg="getSystemInfo:ok",r(i)}function r(t,r,o){var i=e();i.errMsg="getSystemInfoSync:ok",r(i)}function o(e,t,r){var o=e.sdkName;t({errMsg:o+"ok",networkType:g.getNetworkType()})}var i=require("../../stores/windowStores.js"),s=require("../../stores/projectStores.js"),n=require("../../config/compileTypeConfig.js"),g=require("../../stores/webviewStores.js"),a=require("../../config/weappConfig.js");a.default_android_tabbar_height,a.default_android_titlebar_height,a.default_ios_tabbar_height,a.default_ios_titlebar_height;_exports={getSystemInfoSync:r,getSystemInfo:t,getNetworkType:o,getNetworkTypeSync:o}}var _exports;init(),module.exports=_exports;