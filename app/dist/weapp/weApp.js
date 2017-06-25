"use strict";function _defineProperty(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function init(){var e=global.appConfig.isDev,r=require("../config/config.js"),s=r.JSON_PARSE_ERROR,t=r.ES6_ERROR,i=r.JSON_FILE_ERROR,n=r.JSON_ENTRANCE_ERROR,p=r.JSON_CONTENT_ERROR,o=require("./trans/transManager.js"),c=require("./utils/tools.js"),a=(require("async"),require("fs")),l=require("path"),u=require("url"),g=(require("querystring"),require("./utils/vendorManager.js")),f=(require("glob"),require("./utils/projectManager.js")),d=require("../config/appserviceConfig.js"),h=require("../stores/projectStores.js"),j=require("../stores/windowStores.js"),v=require("../actions/windowActions.js"),w=require("../stores/configStores.js"),m=require("./utils/parseErr.js"),_=require("../utils/file.js"),q=require("../config/weappConfig.js"),y=q.default_scene,E=(require("../config/compileTypeConfig.js"),require("./tpl/errorTpl.js"),require("./tpl/appserviceErrorTpl.js"),l.join(__dirname,"appservice/asdebug.js")),S=a.readFileSync(E,"utf8"),C=(c.noBrowser.join(","),function(e){setTimeout(function(){var r=e.type,t=void 0;r===s?t=m.parseJsonParseErr(e):r===i?t=m.parseJsonFileErr(e):r===n?t=m.parseJsonEntranceErr(e):r===p&&(t=m.parseJsonContentErr(e)),v.showWeappError(e.type,t)},200)});_exports.getWidget=function(r,s){var i=c.getProject(r),n=u.parse(r),p=n.pathname,o=i.hash,a=/webnode\.js$/.test(p),j=/asdebug\.js$/.test(p),w=/widget$/.test(p),_=/search$/.test(p),q=/widget-sdk\.js$/.test(p),y=/widget-engine\.js$/.test(p),E=/WAWidget\.js$/.test(p),P=/reporter-sdk\.js/.test(p),R=/\.js$/.test(p),x=/favicon\.ico$/.test(p);if(x)s(null,{},"");else if(E)s(null,{},g.getFile("WAWidget.js"));else if(q)s(null,{},g.getFile("widget-sdk.js"));else if(y)s(null,{},g.getFile("widget-engine.js"));else if(P)s(null,{},g.getFile("reporter-sdk.js"));else if(a)s(null,{},g.getFile("webnode.js"));else if(j)s(null,{},S);else if(_){var O=void 0;try{O=f.getAppConfigJSONSync(i)}catch(e){return s(200,{},""),void C(e)}var F=h.getProjectConfig(i);O.projectConfig=F,O.appserviceConfig=d;var $=require("./tpl/widgetServiceTpl.js"),N="http://"+o+".widgetservice.open.weixin.qq.com/",J=[],b=[];f.getAllJSFileList(i,function(r,t){if(O.widgets){var i="",n="";O.widgets.forEach(function(e){i||"search"===e.type&&(i=l.normalize(e.path||""))}),i||J.push('<script>\n              console.group("'+new Date+" 搜索页编译错误\")\n              console.error(` app.json 中 widgets 中为找到 type='search' 的动态页配置`)\n              console.groupEnd()\n            </script>"),n=l.join(i,"widget");for(var p=!1,o=0,c=t.length;o<c;o++){var a=t[o];a=l.normalize(a),0==l.dirname(a).indexOf(i)&&(a.replace(/\.js$/,"")==n?(p=!0,J.push('<script src="'+N+a+'"></script>')):b.push('<script src="'+N+a+'"></script>'))}p||J.push('<script>\n              console.group("'+new Date+' 搜索页编译错误")\n              console.error(`未找到 '+n+".js `)\n              console.groupEnd()\n            </script>")}else J.push('<script>\n            console.group("'+new Date+' 搜索页编译错误")\n            console.error(` app.json 中 widgets 字段为空`)\n            console.groupEnd()\n          </script>');J=b.concat(J),e?(J.unshift('<script src="'+N+'widget-engine.js"></script>'),J.unshift('<script src="'+N+'widget-sdk.js"></script>'),J.unshift('<script src="'+N+'reporter-sdk.js"></script>'),J.unshift('<script src="'+N+'webnode.js"></script>')):J.unshift('<script src="'+N+'WAWidget.js"></script>'),J.unshift('<script src="'+N+'asdebug.js"></script>'),O.platform="devtools",J.unshift("<script>var __wxConfig = "+JSON.stringify(O)+"</script>\n"),$=$.replace("<script></script>",J.join("")),s(null,{},$)})}else if(w){var k=void 0;try{k=f.getAppConfigJSONSync(i)}catch(e){return s(200,{},""),void C(e)}var T=h.getProjectConfig(i);k.projectConfig=T,k.appserviceConfig=d;var A=require("./tpl/widgetServiceTpl.js"),W="http://"+o+".widgetservice.open.weixin.qq.com/",I=[],D=[];f.getAllJSFileList(i,function(r,t){if(k.widgets){var i="",n="";k.widgets.forEach(function(e){i||"conversation"===e.type&&(i=l.normalize(e.path||""))}),i||I.push('<script>\n              console.group("'+new Date+" 搜索页编译错误\")\n              console.error(` app.json 中 widgets 中为找到 type='conversation' 的动态页配置`)\n              console.groupEnd()\n            </script>"),n=l.join(i,"widget");for(var p=!1,o=0,c=t.length;o<c;o++){var a=t[o];a=l.normalize(a),0==l.dirname(a).indexOf(i)&&(a.replace(/\.js$/,"")==n?(p=!0,I.push('<script src="'+W+a+'"></script>')):D.push('<script src="'+W+a+'"></script>'))}p||I.push('<script>\n              console.group("'+new Date+' 动态页编译错误")\n              console.error(`未找到 '+n+".js `)\n              console.groupEnd()\n            </script>")}else I.push('<script>\n            console.group("'+new Date+' 动态页编译错误")\n            console.error(` app.json 中 widgets 字段为空`)\n            console.groupEnd()\n          </script>');I=D.concat(I),e?(I.unshift('<script src="'+W+'widget-engine.js"></script>'),I.unshift('<script src="'+W+'widget-sdk.js"></script>'),I.unshift('<script src="'+W+'reporter-sdk.js"></script>'),I.unshift('<script src="'+W+'webnode.js"></script>')):I.unshift('<script src="'+W+'WAWidget.js"></script>'),I.unshift('<script src="'+W+'asdebug.js"></script>'),k.platform="devtools",I.unshift("<script>var __wxConfig = "+JSON.stringify(k)+"</script>\n"),A=A.replace("<script></script>",I.join("")),s(null,{},A)})}else if(R){var L=r.replace("http://"+o+".widgetservice.open.weixin.qq.com/",""),z=L.replace(/\.js$/,""),B=void 0;try{B=f.getAppConfigJSONSync(i)}catch(e){return s(200,{},""),void C(e)}var M="",U="search"==i.compileType?"search":"conversation";B.widgets.forEach(function(e){M||e.type==U&&(M=e.path)});var K=l.join(M,"widget");f.getScripts({project:i,fileName:L,needRequire:l.normalize(z)===K},function(e,r){if(e)if(r){var n={file:e.sourceFileName,msg:e.msg};s(null,_defineProperty({},t,encodeURIComponent(JSON.stringify(n))),r)}else e.project=i,v.showWeappError(e.type,m.parseJsFileErr(e)),s(200,{},"");else s(null,{"Content-Type":"text/javascript; charset=UTF-8"},r)})}},_exports.getAppservice=function(r,s){var i=c.getProject(r),n=u.parse(r),p=n.pathname,o=/appservice$/.test(p),_=/appservice-sdk\.js$/.test(p),q=/asdebug\.js$/.test(p),E=/ascheck\.js$/.test(p),P=/webnode\.js$/.test(p),R=/reporter-sdk\.js/.test(p),x=/app_service_engine\.js/.test(p),O=(/\.js$/.test(p),/\.js\.map$/.test(p)),F=/WAService\.js/.test(p),$=/favicon\.ico$/.test(p);if($)s(200,{},"");else if(F)s(null,{},g.getFile("WAService.js",i.libVersion));else if(R)s(null,{},g.getFile("reporter-sdk.js"));else if(x)s(null,{},g.getFile("app_service_engine.js"));else if(_)s(null,{},g.getFile("appservice-sdk.js"));else if(q)s(null,{},S);else if(E)s(null,{},asCheck);else if(P)s(null,{},g.getFile("webnode.js"));else if(O){var N=l.join(i.projectpath,p);a.readFile(N,function(e,r){return e?void s(404,{},"do not find "+N):void s(200,{},r)})}else{var J=(i.appname.toLowerCase(),i.appid.toLowerCase(),i.hash),b=void 0;try{b=f.getAppConfigJSONSync(i)}catch(e){return s(200,{},""),void C(e)}var k=h.getProjectConfig(i);b.projectConfig=k,b.appserviceConfig=d;var T=b.pages||[];if(o){var A=require("./tpl/appserviceTpl.js"),W="http://"+J+".appservice.open.weixin.qq.com/",I=[],D=[],L=[],z=b.widget||"";f.getAllJSFileList(i,function(r,t){for(var n={},p=0,o=T.length;p<o;p++){var c=T[p]+".js";z&&(c=l.normalize(c),0==l.dirname(c).indexOf(z))||(n[c]=!0,I.push("<script>__wxRoute = '"+T[p]+"';__wxRouteBegin = true</script>"),I.push('<script src="'+W+c+'"></script>'),I.push('<script>\n              if(__wxRouteBegin) {\n                console.group("'+new Date+' page 编译错误")\n                console.error(` '+T[p]+" 出现脚本错误或者未正确调用 Page()`)\n                console.groupEnd()\n              }\n              </script>"))}for(var a=0,u=t.length;a<u;a++){var g=t[a];if(!n[g]){if("app.js"===g){L.push('<script src="'+W+g+'"></script>');continue}if(z&&(g=l.normalize(g),0==l.dirname(g).indexOf(z)))continue;D.push('<script src="'+W+g+'"></script>')}}I=D.concat(L).concat(I),e?(I.unshift('<script src="'+W+'app_service_engine.js"></script>'),I.unshift("\n"),I.unshift('<script src="'+W+'appservice-sdk.js"></script>'),I.unshift("\n"),I.unshift('<script src="'+W+'reporter-sdk.js"></script>'),I.unshift("\n"),I.unshift('<script src="'+W+'webnode.js"></script>'),I.unshift("\n")):I.unshift('<script src="'+W+'WAService.js"></script>'),I.unshift('<script src="'+W+'asdebug.js"></script>'),b.appname=i.appname,b.app_nickname=i.app_nickname||i.appname,b.appid=i.appid,b.apphash=i.hash,b.isTourist=i.isTourist,b.platform="devtools",i.isTourist&&(b.userInfo=j.getUserInfo()),b.urlCheck=i.urlCheck;var f,d,h=b.entryPagePath.replace(/\.html$/,""),v={},m=y;if(i.initPath.enable){h=i.initPath.page||h;var _=(i.initPath.query||"").split("&");if(_.forEach(function(e){var r=e.split("=");r[0]&&(v[r[0]]=r[1])}),m=i.initPath.scene||y,m==w.getMiniProgramScene()||m==w.getMiniProgramBackScene()){f={},i.initPath.appid&&(f.appId=i.initPath.appid);var q={};if(i.initPath.referData){try{q=JSON.parse(i.initPath.referData)}catch(e){I.push('<script>\n                    if(__wxRouteBegin) {\n                      console.group("'+new Date+' referrerInfo.data 编译错误")\n                      console.error(` 请确认编译条件中的启动数据设置是否正确`)\n                      console.groupEnd()\n                    }\n                    </script>'),q={}}f.extraData=q}}var E=i.initPath.groupInfo;E&&(d={},d.shareKey=E.shareKey||"",d.shareName=E.shareName||"")}b.appLaunchInfo={referrerInfo:f,shareInfo:d,path:h,scene:parseInt(m),query:v},I.unshift("<script>var __wxConfig = "+JSON.stringify(b)+"</script>"),A=A.replace("<script></script>",I.join("")),s(null,{},A)})}else{var B=r.replace("http://"+J+".appservice.open.weixin.qq.com/","");f.getScripts({project:i,fileName:B,needRequire:"app.js"===B||T.indexOf(B.replace(/\.js/,""))!==-1},function(e,r){e?r?(v.showWeappError(t,{file:e.sourceFileName,msg:e.msg}),s(200,{},"")):(e.project=i,v.showWeappError(e.type,m.parseJsFileErr(e)),s(200,{},"")):s(null,{"Content-Type":"text/javascript; charset=UTF-8"},r)})}}},_exports.getLocalIdResponse=function(e,r){if(_.isAppTmpPath(e)){var s=_.getRealPath(e);a.readFile(s,function(e,s){e?r(404,{"Weapp-Error":encodeURIComponent(e)},e.toString()):r(null,{},s)})}else r(404,{},"do not find "+e)},_exports.getResponse=function(e,r){var s=u.parse(e),t=s.pathname,i=/favicon\.ico$/.test(t);i?r(null,{},""):o.getResponse(e,r)},_exports.getWidgetPage=function(e,r){var s=c.getProject(e),t=u.parse(e),i=t.pathname,n=(s.hash,/widgetPage\.html$/.test(i)),p=/favicon\.ico$/.test(i);if(p)r(null,{},"");else if(n){var a=require("./tpl/widgetPageTpl.js");r(null,{},a)}else o.getWidgetResource(e,r)}}var _exports={};init(),module.exports=_exports;