"use strict";function init(){function e(){return"edit"===r.getLastShow()}var o=this,t=require("../../actions/webviewActions.js"),n=require("../../stores/webviewStores.js"),r=(require("../../stores/projectStores.js"),require("../../stores/windowStores.js")),i=require("../../actions/windowActions.js"),a=require("../../actions/projectActions.js"),c=require("../../common/request/request.js"),d=(require("../../config/errcodeConfig.js"),require("../log/log.js")),m=require("../../utils/newReport.js"),p=("darwin"===process.platform,require("../../config/urlConfig.js")),s=p.getBbsTicket,u=p.checkApiAuth,l=p.getAuthList,f=p.setAuth,v=p.getUserPhoneNumber,g=p.checkWeRunState,x=!1;r.on("EDITOR_FOCUS",function(){return x=!0}),r.on("EDITOR_BLUR",function(){return x=!1}),_exports={newFile:function(){e()&&i.execEditorCommand({command:"newTempFile"})},save:function(){e()&&i.execEditorCommand({command:"save"})},saveAll:function(){e()&&i.execEditorCommand({command:"saveAll"})},closeFile:function(){e()&&i.execEditorCommand({command:"close"})},closeProject:function(){a.close(),m("project_"+close,o.props.project.appid)},undo:function(){e()&&i.execEditorCommand({command:"undo"})},redo:function(){e()&&i.execEditorCommand({command:"redo"})},copy:function(){e()&&r.isEditorFocus()?i.execEditorCommand({command:"copy"}):global.contentDocument.execCommand("copy")},cut:function(){e()&&r.isEditorFocus()?i.execEditorCommand({command:"cut"}):global.contentDocument.execCommand("cut")},paste:function(){e()&&r.isEditorFocus()?i.execEditorCommand({command:"paste",data:nw.Clipboard.get().get("text")}):global.contentDocument.execCommand("paste")},unindent:function(){e()&&i.execEditorCommand({command:"unindent"})},indent:function(){e()&&i.execEditorCommand({command:"indent"})},format:function(){e()&&i.execEditorCommand({command:"format"})},moveLineUp:function(){e()&&i.execEditorCommand({command:"moveLineUp"})},moveLineDown:function(){e()&&i.execEditorCommand({command:"moveLineDown"})},copyLineUp:function(){e()&&i.execEditorCommand({command:"copyLineUp"})},copyLineDown:function(){e()&&i.execEditorCommand({command:"copyLineDown"})},find:function(){e()&&i.execEditorCommand({command:"find"})},globalFind:function(){e()&&i.execEditorCommand({command:"globalFind"})},replace:function(){e()&&i.execEditorCommand({command:"replace"})},toggleSimulatorView:function(){i.execEditorCommand({command:"toggleSimulatorView"})},toggleFileTreeView:function(){i.execEditorCommand({command:"toggleFileTreeView"})},gotoFile:function(){e()&&i.execEditorCommand({command:"gotoFile"})},gotoRecentFile:function(){e()&&i.execEditorCommand({command:"gotoRecentFile"})},reBuild:function(){var e=n.getCurrentWebviewID();t.setWebviewAction(e,{act:"reBuild"})},showSetting:function(){i.showSetting()},jumpDoc:function(){nw.Shell.openExternal("https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html")},jumpBbs:function(e){c({url:s,needToken:1},function(o,t,n){if(!o){var r=JSON.parse(n),a=r.open_ticket;a?e?nw.Shell.openExternal(e+"&devcode="+a):nw.Shell.openExternal("https://developers.weixin.qq.com/welogin?devcode="+a):i.showConfirm({content:"登录社区失败 错误信息  "+n,type:"alert",callback:function(){}})}})},showChangeLog:function(){nw.Shell.openExternal("https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html")},showAbout:function(){i.showAbout()},reload:function(){var e=n.getCurrentWebviewID();t.setWebviewAction(e,{act:"reLoad"})},goback:function(){var e=n.getCurrentWebviewID();t.setWebviewAction(e,{act:"goBack"})},goforward:function(){var e=n.getCurrentWebviewID();t.setWebviewAction(e,{act:"goForward"})},focusAddressBar:function(){var e=n.getCurrentWebviewID();i.focusAddressBar(e)},checkApiAuth:function(e,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=e.appid,r=e.ext_appid,i=e.platform;c({url:u+"?appid="+n+"&ext_appid="+r+"&platform="+(i?1:0)+"&_r="+Math.random(),method:"post",body:JSON.stringify({appid:e.ext_appid?e.ext_appid:e.appid,jsapi:o}),needToken:1},function(e,o,n){if(e)return t(e);var r=void 0;try{r=JSON.parse(n);var i=r.baseresponse,a=i?parseInt(i.errcode):-1e4;if(0===a)t(null,{desc:r.auth_desc,scope:r.scope,state:r.state});else{var c=i?i.errmsg:"unknown error "+a;t(c)}}catch(e){return void t("system error "+e)}})},getAuthList:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},t=e.appid,n=e.ext_appid,r=e.platform;c({url:l+"?appid="+t+"&ext_appid="+n+"&platform="+(r?1:0)+"&_r="+Math.random(),method:"post",body:JSON.stringify({appid:e.ext_appid?e.ext_appid:e.appid}),needToken:1},function(e,t,n){if(e)return o(e);var r=void 0;try{r=JSON.parse(n)}catch(e){return void o("system error "+n)}var i=r.baseresponse,a=i?parseInt(i.errcode):-1e4;0===a?o(null,r.auth_item):(d.error("common/actions/actions.js getAuthList error "+a),o(a))})},setAuth:function(e,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=e.appid,r=e.ext_appid,i=e.platform;c({url:f+"?appid="+n+"&ext_appid="+r+"&platform="+(i?1:0)+"&_r="+Math.random(),method:"post",body:JSON.stringify({appid:e.ext_appid?e.ext_appid:e.appid,auth_item:o}),needToken:1},function(e,o,n){if(e)return t(e);var r=void 0;try{r=JSON.parse(n)}catch(e){return void t("system error "+n)}var i=r.baseresponse,a=i?parseInt(i.errcode):-1e4;0===a?t(null):(d.error("common/actions/actions.js setAuth error "+a),t(a))})},getUserPhoneNumber:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},t=e.appid,n=e.ext_appid,r=e.platform;c({url:v+"?appid="+t+"&ext_appid="+n+"&platform="+(r?1:0)+"&_r="+Math.random(),method:"post",body:JSON.stringify({appid:e.ext_appid?e.ext_appid:e.appid}),needToken:1},function(e,t,n){if(e)return o("系统错误 "+e);var r=void 0;try{r=JSON.parse(n)}catch(e){return d.error("common/actions/actions.js getUserPhoneNumber error "+n),void o("系统错误 "+n)}var i=r.jsapi_baseresponse,a=i?parseInt(i.errcode):-1e4;if(0===a)try{var c=JSON.parse(r.data);o(null,c)}catch(e){o("获取数据错误 "+e)}else a==-12001?o("该 appid 没有权限"):a==-12004?o("请先使用 wx.login 登录"):(d.error("common/actions/actions.js getUserPhoneNumber error "+a),o("系统错误 errorCode:"+a))})},checkWeRunState:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},t=e.appid,n=e.ext_appid,r=e.platform;c({url:g+"?appid="+t+"&ext_appid="+n+"&platform="+(r?1:0)+"&_r="+Math.random(),method:"post",body:JSON.stringify({appid:e.ext_appid?e.ext_appid:e.appid}),needToken:1},function(e,t,n){if(e)return o("系统错误 "+e);var r=void 0;try{r=JSON.parse(n)}catch(e){return d.error("common/actions/actions.js checkWeRunState error "+n),void o("系统错误 "+n)}var i=r.baseresponse,a=i?parseInt(i.errcode):-1e4;0===a?o(null,r.state,r.wording):(d.error("common/actions/actions.js checkWeRunState error "+a),o("系统错误 errorCode:"+a))})}}}var _exports;init(),module.exports=_exports;