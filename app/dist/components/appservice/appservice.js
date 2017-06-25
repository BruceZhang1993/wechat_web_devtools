"use strict";function init(){var e,t=require("../../lib/react.js"),s=(require("../../lib/react-dom.js"),require("../../cssStr/cssStr.js")),o=require("../../stores/webviewStores.js"),i=require("../../stores/windowStores.js"),r=require("../../actions/webviewActions.js"),n=require("../../stores/projectStores.js"),a=require("../../actions/projectActions.js"),p=require("../../weapp/utils/tools.js"),c=require("./../../common/log/log.js"),d=require("../../common/assdk/asSdk.js"),h=require("../../debugger/debugger.js"),v=require("../../actions/windowActions.js"),u=require("./console/showconsole.js"),_=require("../../config/config.js"),l=require("./port/port.js"),g=require("./commands/commands.js"),m=require("../../config/compileTypeConfig.js"),E=require("../../config/webviewIDConfig.js"),f=E.APPSERVICE_WEBVIEW_ID,S=E.DEVTOOLS_WEBVIEW_ID,w="about:blank",A={},T=function(e,t){v.showConfirm({content:e,callback:t})},M=t.createClass({displayName:"DevTools",getInitialState:function(){var e=o.getNetworkType();return this.devtoolsWebview={},{isWxml:!1,networkType:e}},addContentScripts:function(e){e.addContentScripts([{name:"contentScripts",matches:["<all_urls>"],js:{files:["app/dist/contentscript/contentScript.js"]},run_at:"document_start"}])},_initport:function(e){var t=e.name;if(t==="webview"+f)this.port.init(e),this.port.postMessage("contentscript",{},"SHAKE_HANDS");else if(t==="webview"+S){if(this.devtoolsview.src===w)return;this.devtoolsPort.init(e),this.devtoolsPort.postMessage("contentscript",{},"SHAKE_HANDS")}},_externalPort:function(e){var t=this,s=e.name;"storage"===s?(this.storagePort.init(e),this.storagePort.postMessage("",{},"SHAKE_HANDS")):"appdata"===s?this.appdataPort.init(e):"wxml"===s?(this.wxmlPort.init(e),this.wxmlPort.postMessage("",{},"SHAKE_HANDS"),this.state.isWxml&&setTimeout(function(){t.wxmlPort.postMessage("",{},"SET_INSPECT_MODE")},200)):"bluetooth"===s?(this.bluetoothPort.init(e),this.bluetoothPort.postMessage("",{},"SHAKE_HANDS")):"sensor"===s&&(this.sensorPort.init(e),this.sensorPort.postMessage("",{},"SHAKE_HANDS"))},initRuntime:function(){chrome.runtime.onConnect.addListener(this._initport)},storageMessage:function(e){var t=this;if("GET_APP_DATA"===e.command){var s=this.props.project;this._upASData(s.appid,p.getProjectStorage(s))}else"EXEC_STORAGE_SDK"===e.command&&d.exec(e,function(s,o){setTimeout(function(){t.port.postMessage("appservice",s,"GET_ASSDK_RES",e)},0)})},sensorMessage:function(e){if("GET_SENSOR_STATUS"===e.command){var t=i.getSensorStatus();this._onSensorStatusChange(t)}},wxmlMessage:function(e){var t=this,s=e.command,i=e.ext,r=e.data;if("GET_CURRENT_DEBUGGEE"===s){var n=o.getCurrentWebviewID(),a=this.debuggeeMap[n];if(!a)return void c.error("appservice.js error do not find "+n+" debuggee");this.wxmlPort.postMessage("",{res:{debuggee:a},ext:i,args:r},"GET_CURRENT_DEBUGGEE")}else"SEND_COMMAND"===s?("DOM.setInspectMode"===r.method&&"none"===r.commandParams.mode&&this.setState({isWxml:!1}),h.sendCommand(r.debuggee,r.method,r.commandParams,function(e){t.wxmlPort.postMessage("",{res:e,ext:i,args:r},"GET_DEVTOOLS_RES")})):"OPEN_FILE"===s&&v.openProjectFile(r)},appdataMessage:function(e){var t=e.command;"GET_APP_DATA"===t?this.port.postMessage("appservice",{},"GET_APP_DATA"):"WRITE_APP_DATA"===t&&this.port.postMessage("appservice",e.data,"WRITE_APP_DATA")},bluetoothMessage:function(e){e.command},onMessage:function(e){var t=this;if("COMMAND_FROM_ASJS"===e.command){var s=e.sdkName;return g[s]?void g[s]({port:this.port}):"APP_SERVICE_COMPLETE"===s?void o.setAppServiceReadyState(!0):"send_app_data"===s?void(this.appdataPort.hasInit&&this.appdataPort.postMessage("",e,"SEND_APP_DATA")):"publish"===s?void r.asPublish(e):void d.exec(e,function(s,o){setTimeout(function(){t.port.postMessage("appservice",s,"GET_ASSDK_RES",e)},0)})}},initExternal:function(){chrome.runtime.onConnectExternal.addListener(this._externalPort)},newWindow:function(e){e.addEventListener("newwindow",function(e){var t=e.targetUrl;t&&("https://developers.google.com/web/tools/chrome-devtools/"===t&&(t="https://mp.weixin.qq.com/debug/wxadoc/dev/index.html"),nw.Window.open(t,{width:799,height:799}))})},_initAppservice:function(){function e(){function t(){r.removeEventListener("loadcommit",t),r.showDevTools(!0,p),i.asLoading=!1}p.removeEventListener("loadcommit",e);var i=this;r.addEventListener("loadcommit",t),this.asLoading=!0,o.setAppServiceReadyState(!1),r.src="http://"+s.props.project.hash+".appservice.open.weixin.qq.com/appservice"}if(!this.appserviceWebview){var t=this.refs.container,s=this,r=this.appserviceWebview=document.createElement("webview");r.style.cssText="height: 32px;\n                                         width: 175px;\n                                         position: absolute;\n                                         left: 450px;\n                                         top: -10px;";var a=r.getUserAgent();r.setUserAgentOverride(a+" appservice webview/"+f),r.setAttribute("partition","persist:appservice"),t.appendChild(r),this.addContentScripts(r);var p=this.devtoolsview=document.createElement("webview");p.className="devtools-content";var c=p.getUserAgent()+" asviewdevtools webview/"+S+" chromeRuntimeID/"+chrome.runtime.id;p.setUserAgentOverride(c),p.setAttribute("partition","persist:devtools"),t.appendChild(p),this.addContentScripts(p),this.newWindow(p),p.addEventListener("loadcommit",e),p.src=w,this.initRuntime(),this.initExternal(),this.onHeadersReceived(r),this.onBeforeSendHeaders(r),this.onErrorOccurred(r),this.onSyncMessage(r),this.onSyncDevtoolsMessage(p),i.on("WINDOW_SHOW_WEBAPP_ERROR",this._showWeappError),o.on("POST_MSG_TOAS",this._postMsgToAS),o.on("UP_AS_DATA",this._upASData),n.on("RESTART_PROJECT",this._restart),i.on("START_WEBVIEW_DEBUGGEE",this._startDebuggee),i.on("WINDOW_CHANGE_WEBVIEW_ID",this._changeWebview),i.on("SET_WEBVIEW_INFO",this._setWebviewInfo),i.on("WINDOW_GET_WEBAPP_ERROR",this._getWeappError),o.on("SIMULATOR_NETWORK_CHANGE",this._onSimulatorNetworkChange),n.on("ON_COMPILE_CHANGE",this._onCompileTypeChange)}},_postMsgToAS:function(e){this.port.postMessage("appservice",e,"MSG_FROM_WEBVIEW")},_upASData:function(e,t){var s={appid:this.props.project.appid,appname:this.props.project.appname,apphash:this.props.project.hash,storage:t};this.storagePort.postMessage("",s,"tabui-setAsData")},_upASBluetoothData:function(e,t){var s={bluetooth:t};this.bluetoothPort.postMessage("",s,"bluetooth-update")},_restart:function(e){var t=this;if(e.compileType===m.weapp){if(this.asLoading)return;o.setAppServiceReadyState(!1);var s=function e(s){t.asLoading=!1,t.appserviceWebview.removeEventListener("loadstop",e)},i="http://"+e.hash+".appservice.open.weixin.qq.com/appservice";e.ext_appid?n.setProjectExtAppInfo(e,function(e){e||(t.asLoading=!0,t.appserviceWebview.src=i,t.appserviceWebview.addEventListener("loadstop",s))}):(this.asLoading=!0,this.appserviceWebview.src=i,this.appserviceWebview.addEventListener("loadstop",s))}},_startDebuggee:function(e,t){var s=this,o=t.webview,n=t.webviewOffset;new Date;h.start(o,{webviewOffset:n},function(t){s.debuggeeMap[e]=t,s.wxmlPort.postMessage("",{debuggee:t},"CHANGE_DEBUGGEE"),r.touchSetSuc(e)},function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("DOM.inspectNodeRequested"===t&&s.setState({isWxml:!1}),"DOM.inlineStyleInvalidated"!==t&&"DOM.characterDataModified"!==t&&("DOM.nodeHighlightRequested"!==t||"DOM.nodeHighlightRequested"!==A.method||o.nodeId!==A.nodeId)){A="DOM.nodeHighlightRequested"===t?{method:t,nodeId:o.nodeId}:{};var r=i.getOffset();s.wxmlPort.postMessage("",{debuggee:e,method:t,params:o,offset:r},"ON_EVENT")}},function(e,t){s.wxmlPort.postMessage("",{debuggee:e},"ON_DETACH");for(var o in s.debuggeeMap)if(s.debuggeeMap[o].targetId===e.targetId)return void delete s.debuggeeMap[o]})},_changeWebview:function(e){var t=this.debuggeeMap[e];t&&this.wxmlPort.postMessage("",{debuggee:t},"CHANGE_DEBUGGEE")},_setWebviewInfo:function(e){for(var t in this.debuggeeMap)h.sendCommand(this.debuggeeMap[t],"Emulation.setDeviceMetricsOverride",{width:parseInt(e.width),height:parseInt(e.height),deviceScaleFactor:e.dpr,mobile:!0,fitWindow:!1})},_getWeappError:function(e,t,s){this.port.postMessage("appservice",{fileName:p.getFileNameFromUrl(t),errStr:s},"WINDOW_GET_WEBAPP_ERROR")},inspector:function(){this.setState({isWxml:!0}),this.devtoolsPort.postMessage("webframe",{name:"Wxml"},"SHOW_PANEL"),this.wxmlPort.hasInit&&this.wxmlPort.postMessage("",{},"SET_INSPECT_MODE")},onSyncDevtoolsMessage:function(e){e.addEventListener("dialog",function(e){var t=e.messageType||"",s=e.messageText;if("prompt"===t){var i=/^____sdk____/.test(s);if(i){var r=JSON.parse(s.replace(/^____sdk____/,"")),n=r.command;if("GET_GEO_SETTING"===n){var a=o.getGeoSetting();e.dialog.ok(JSON.stringify(a))}else"SET_GEO_SETTING"===n&&o.setGeoSetting(r.geoSetting)}}})},onSyncMessage:function(e){e.addEventListener("dialog",function(e){var t=e.messageType||"",s=e.messageText;if("prompt"===t){e.preventDefault();var o=/^____sdk____/.test(s);if(o){var i=JSON.parse(s.replace(/^____sdk____/,"")),r=i.command;if("COMMAND_FROM_ASJS"===r){i.sdkName;d.exec(i,function(t,s){var o={to:"appservice",msg:t,command:"GET_ASSDK_RES",ext:i};e.dialog.ok(JSON.stringify(o))})}}}else if("confirm"===t){e.preventDefault();var n=e.dialog;T(s,function(e){e?n.ok():n.cancel()})}})},onBeforeSendHeaders:function(t){var s=this,o=t.request,i=this.props.project;o.onBeforeSendHeaders.addListener(function(t){var o=t.url;if("main_frame"===t.type&&o.match(/\?load$/))return clearTimeout(e),e=setTimeout(function(){a.restart(s.props.project)},500),{cancel:!0};if(0!=o.indexOf("http://"+i.hash+".appservice.open.weixin.qq.com")&&"none"==s.state.networkType)return s.appserviceWebview.executeScript({code:'console.group("'+new Date+' 无网络状态模拟")\n                console.debug(`已开启无网络状态模拟，网络请求已被阻止；在工具栏切换网络状态，可恢复网络请求。`)\n                console.groupEnd()'}),{cancel:!0};var r=t.requestHeaders||[],n=r.findIndex(function(e){return"cookie"===e.name.toLowerCase()});r.splice(n,1);for(var p=0;p<r.length;++p)if("_Cookie"===r[p].name&&(r[p].name="Cookie"),"Referer"===r[p].name){var c=i.appid;i.platform&&i.ext_appid&&(c=i.ext_appid),r[p].value="https://servicewechat.com/"+c+"/devtools/page-frame.html"}return{requestHeaders:t.requestHeaders}},{urls:["<all_urls>"]},["blocking","requestHeaders"])},onHeadersReceived:function(){var e=this.appserviceWebview,t=e.request;t.onHeadersReceived.addListener(function(e){var t=e.type;if("xmlhttprequest"===t){var s=e.responseHeaders||[],o={};return s.forEach(function(e){var t=e.name,s=e.value;o[t]||(o[t]=[]),o[t].push(s)}),s.push({name:"for-weapp-devtools",value:JSON.stringify(o)}),{responseHeaders:s}}return{}},{urls:["<all_urls>"]},["blocking","responseHeaders"])},onErrorOccurred:function(e){var t=this,s=e.request;s.onErrorOccurred.addListener(function(e){var s=e.type;if("main_frame"===s&&0===e.error.indexOf("net::")&&"net::ERR_BLOCKED_BY_CLIENT"!==e.error)return void t.port.postMessage("contentscript",e,"ERR_CONNECTION_RESET")},{urls:["<all_urls>"]})},_showWeappError:function(e,t){var s=this;if("edit"===this.props.propshow&&/ERROR\:?$/.test(e)&&e!==_.WEBVIEW_ERROR&&setTimeout(function(){v.showTipsMsg({msg:"编译出现错误，请去控制台查看详细信息",type:"error"})},17),e&&0===e.indexOf("JSON"))return void u(this.appserviceWebview,e,t);if(/\?load$/.test(this.appserviceWebview.src))return void u(this.appserviceWebview,e,t);var o=0,i=setInterval(function(){var r=s.appserviceWebview.src||"";/\?load$/.test(r)?(u(s.appserviceWebview,e,t),clearInterval(i)):(o++,20===o&&clearInterval(i))},500)},_onSimulatorNetworkChange:function(e){this.setState({networkType:e})},_onCompileTypeChange:function(e){e===m.weapp&&this.appserviceWebview&&this._restart(this.props.project)},_onSensorStatusChange:function(e){this.sensorPort&&this.sensorPort.postMessage("",e,"SET_SENSOR_STATUS")},componentDidMount:function(){this.port=new l({onMessage:this.onMessage}),this.devtoolsPort=new l,this.storagePort=new l({onMessage:this.storageMessage}),this.wxmlPort=new l({onMessage:this.wxmlMessage}),this.appdataPort=new l({onMessage:this.appdataMessage}),this.bluetoothPort=new l({onMessage:this.bluetoothMessage}),this.sensorPort=new l({onMessage:this.sensorMessage}),this.debuggeeMap={}},componentWillUnmount:function(){this.devtoolsview&&this.devtoolsview.remove(),this.appserviceWebview&&this.appserviceWebview.remove(),o.removeListener("POST_MSG_TOAS",this._postMsgToAS),o.removeListener("UP_AS_DATA",this._upASData),o.removeListener("UP_BL_DATA",this._upASBluetoothData),n.removeListener("RESTART_PROJECT",this._restart),i.removeListener("START_WEBVIEW_DEBUGGEE",this._startDebuggee),i.removeListener("WINDOW_CHANGE_WEBVIEW_ID",this._changeWebview),i.removeListener("SET_WEBVIEW_INFO",this._setWebviewInfo),i.removeListener("WINDOW_GET_WEBAPP_ERROR",this._getWeappError),i.removeListener("WINDOW_SHOW_WEBAPP_ERROR",this._showWeappError),i.removeListener("SENSOR_STATUS_CHANGE",this._onSensorStatusChange),n.removeListener("ON_COMPILE_CHANGE",this._onCompileTypeChange),o.removeListener("SIMULATOR_NETWORK_CHANGE",this._onSimulatorNetworkChange),chrome.runtime.onConnectExternal.removeListener(this._externalPort),chrome.runtime.onConnect.removeListener(this._initport)},componentWillReceiveProps:function(e){e.show===m.weapp&&this._initAppservice()},render:function(){var e=this.props.show===m.weapp?{height:"100%"}:s.webviewDisplayNone;"edit"===this.props.propshow&&(e=s.webviewDisplayNone);var o="debug"===this.props.propshow?{}:s.displayNone,i=this.state.isWxml?"devtools-inspector devtools-inspector-active":"devtools-inspector";return t.createElement("div",{style:e,ref:"container",className:"devtools"},t.createElement("div",{className:"devtools-inspector-bg",style:o}),t.createElement("div",{style:o,onClick:this.inspector,className:i}))}});_exports=M}var _exports;init(),module.exports=_exports;