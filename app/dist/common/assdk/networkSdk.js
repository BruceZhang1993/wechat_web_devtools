"use strict";function init(){function e(e){var t=e.apphash,o=i.getProjectByHash(t),a=o.isTourist,r=o.urlCheck,n=!0;return a?n=!1:r||(n=!1),n}function t(t,o){var a=i.getCurrentProject(),r=a.appid,n=a.ext_appid,s=a.platform,l=t.args,d=i.getCurrentProjectConfig(),g=l.filePath,h=u.getRealPath(g);if(!c.existsSync(h))return o({errMsg:"uploadFile:fail file not found"});if(m>=d.Setting.MaxUploadConcurrent)return void o({errMsg:"uploadFile:fail exceed max upload connection count "+d.Setting.MaxUploadConcurrent});var w=function(e){o&&(o(e),m--,o=void 0)};try{m++;var v=T.getAppConfigJSONSync(a),M={url:l.url,headers:l.header||{},formData:l.formData||{},method:"post",timeout:v.networkTimeout&&v.networkTimeout.uploadFile||6e4};e(t)?M.agentOptions={secureProtocol:"TLSv1_2_method"}:M.tunnel=!1;var k=f.getProxyForURL(M.url);"DIRECT"!==k&&(M.proxy="http://"+k.replace("PROXY ","")),M.formData[l.name]=c.createReadStream(h),M.headers.Referer="https://servicewechat.com/"+(s&&n?n:r)+"/devtools/page-frame.html";p(M,function(e,t,o){var a={};a=e?t&&t.statusCode?{errMsg:"uploadFile:ok",statusCode:t.statusCode,data:o}:"EPROTO"===e.code?{errMsg:"uploadFile:fail 小程序要求的 TLS 版本必须大于等于 1.2"}:"ETIMEDOUT"===e.code?{errMsg:"uploadFile:fail timeout"}:{errMsg:"uploadFile:fail "+e}:{errMsg:"uploadFile:ok",statusCode:t.statusCode,data:o},w(a)})}catch(e){w({errMsg:"uploadFile:fail "+e})}}function o(t,o){var a=t.args,r=i.getCurrentProject(),n=r.appid,s=r.ext_appid,l=r.platform,m=i.getCurrentProjectConfig(),w=1024*g.DownloadFileSizeLimit*1024,v=a.header||{};if(v.Referer="https://servicewechat.com/"+(l&&s?s:n)+"/devtools/page-frame.html",h>=m.Setting.MaxDownloadConcurrent)return void o({errMsg:"downloadFile:fail exceed max download connection count "+m.Setting.MaxDownloadConcurrent});try{h++;var M=0,k=200,C=u.createNewLocalId(r)+d.extname(a.url.split("?")[0]),x=u.getRealPath(C),S=T.getAppConfigJSONSync(r),O=function(e){"function"==typeof o&&(o(e),h--,o=void 0)},D={method:"get",url:a.url,encoding:null,headers:v,timeout:S.networkTimeout&&S.networkTimeout.downloadFile||6e4,followRedirect:function(e){var t=!1;(r.urlCheck||r.isTourist)&&(t=!0);var o=e.statusCode;if(o>=300&&o<400&&(302==o||301==o))for(var a=e.caseless.get("location"),n=m.Network.DownloadDomain,s=0;s<n.length;s++)if(a&&0===a.indexOf(n[s])){t=!0;break}return t}};e(t)?D.agentOptions={secureProtocol:"TLSv1_2_method"}:D.tunnel=!1;var P=f.getProxyForURL(D.url);"DIRECT"!==P&&(D.proxy="http://"+P.replace("PROXY ",""));var F=p(D);F.on("response",function(e){if(k=e.statusCode,200!=k&&206!=k)O({errMsg:"downloadFile:ok",statusCode:k});else{var t=parseInt(e.headers["content-length"]);t>w&&(F.abort(),O({errMsg:"downloadFile:fail exceed max file size"}))}}).on("error",function(e){O(e&&"EPROTO"===e.code?{errMsg:"downloadFile:fail 小程序要求的 TLS 版本必须大于等于 1.2"}:e&&"ETIMEDOUT"===e.code?{errMsg:"downloadFile:fail timeout"}:{errMsg:"downloadFile:fail "+e})}).on("data",function(e){M+=e.length,M>w&&(F.abort(),O({errMsg:"downloadFile:fail exceed max file size"}))}).on("end",function(e){O({errMsg:"downloadFile:ok",tempFilePath:C,statusCode:k})}).pipe(c.createWriteStream(x)),timer=setTimeout(function(){O({errMsg:"download:fail timeout"}),F.abort()},timeout)}catch(e){__callback({errMsg:"downloadFile:fail "+e})}}function a(t,o){var a=t.args,r=i.getCurrentProjectConfig(),n=i.getCurrentProject(),s=n.appid,d=n.ext_appid,g=n.platform,h=a.filePath,M=u.getRealPath(h);if(!c.existsSync(M))return o({errMsg:"createUploadTask:fail file not found"});if(m>=r.Setting.MaxUploadConcurrent)return void o({errMsg:"createUploadTask:fail exceed max upload connection count "+r.Setting.MaxUploadConcurrent});try{m++;var k=T.getAppConfigJSONSync(n),C={url:a.url,headers:a.header||{},formData:a.formData||{},method:"post",timeout:k.networkTimeout&&k.networkTimeout.uploadFile||6e4};C.headers.Referer="https://servicewechat.com/"+(g&&d?d:s)+"/devtools/page-frame.html",e(t)&&(C.agentOptions={secureProtocol:"TLSv1_2_method"});var x=f.getProxyForURL(C.url);"DIRECT"!==x&&(C.proxy="http://"+x.replace("PROXY ",""));var S=c.createReadStream(M);C.formData[a.name]=S;var O=v++,D=c.statSync(M),P=0;S.on("data",function(e){P+=e.length,l.postMessageToAS({eventName:"onUploadTaskStateChange",type:"ON_NETWORK_EVENT",data:{uploadTaskId:O,state:"progressUpdate",progress:P/D.size}})});var F=function(e){w[O]&&(l.postMessageToAS({eventName:"onUploadTaskStateChange",type:"ON_NETWORK_EVENT",data:Object.assign({uploadTaskId:O},e)}),m--,delete w[O])},R=p(C,function(e,t,o){var a={};a=e?t&&t.statusCode?{state:"success",statusCode:t.statusCode,data:o}:"EPROTO"===e.code?{state:"fail",errMsg:"小程序要求的 TLS 版本必须大于等于 1.2"}:"ETIMEDOUT"===e.code?{statSync:"fail",errMsg:"timeout"}:{state:"fail",errMsg:""+e}:{state:"success",statusCode:t.statusCode,data:o},F(a)});R.on("abort",function(){setTimeout(function(){F({state:"fail",errMsg:"abort"})},0)}),w[O]={id:O,request:R},o({errMsg:"createUploadTask:ok",uploadTaskId:O})}catch(e){o({errMsg:"createUploadTask:fail "+e+"'"}),m--}}function r(e,t){var o=e.args,a=o.uploadTaskId,r=o.operationType,n=w[a];return n?"abort"!=r?t({errMsg:"operateDownloadTask:fail illegal operationType"}):(n.request&&n.request.abort(),void t({errMsg:"operateUploadTask:ok"})):t({errMsg:"operateUploadTask:fail task not found"})}function n(t,o){var a=t.args,r=i.getCurrentProject(),n=r.appid,s=r.ext_appid,m=r.platform,w=i.getCurrentProjectConfig(),v=1024*g.DownloadFileSizeLimit*1024,C=a.header||{};if(C.Referer="https://servicewechat.com/"+(m&&s?s:n)+"/devtools/page-frame.html",h>=w.Setting.MaxDownloadConcurrent)return void o({errMsg:"createDownloadTask:fail exceed max download connection count "+w.Setting.MaxDownloadConcurrent});try{h++;var x=0,S=200,O=u.createNewLocalId(r)+d.extname(a.url.split("?")[0]),D=u.getRealPath(O),P=T.getAppConfigJSONSync(r),F={method:"get",url:a.url,encoding:null,headers:C,timeout:P.networkTimeout&&P.networkTimeout.downloadFile||6e4,followRedirect:function(e){var t=!1;(r.urlCheck||r.isTourist)&&(t=!0);var o=e.statusCode;if(o>=300&&o<400&&(302==o||301==o))for(var a=e.caseless.get("location"),n=w.Network.DownloadDomain,s=0;s<n.length;s++)if(a&&0===a.indexOf(n[s])){t=!0;break}return t}};e(t)?F.agentOptions={secureProtocol:"TLSv1_2_method"}:F.tunnel=!1;var R=f.getProxyForURL(F.url);"DIRECT"!==R&&(F.proxy="http://"+R.replace("PROXY ",""));var y=k++,E=p(F),_=v,N=function(e){M[y]&&(delete M[y],h--,l.postMessageToAS({eventName:"onDownloadTaskStateChange",type:"ON_NETWORK_EVENT",data:Object.assign({downloadTaskId:y},e)}))},U=function(e){l.postMessageToAS({eventName:"onDownloadTaskStateChange",type:"ON_NETWORK_EVENT",data:{downloadTaskId:y,state:"progressUpdate",progress:e}})};E.on("response",function(e){if(S=e.statusCode,200!=S&&206!=S)N({state:"success",statusCode:S});else{var t=parseInt(e.headers["content-length"]);t>v?(E.abort(),N({state:"fail",errMsg:"downloadFile:fail exceed max file size"})):_=t}}).on("error",function(e){N(e&&"EPROTO"===e.code?{state:fail,errMsg:"小程序要求的 TLS 版本必须大于等于 1.2"}:e&&"ETIMEDOUT"===e.code?{state:"fail",errMsg:"timeout"}:{state:"fail",errMsg:""+e})}).on("data",function(e){x+=e.length,x>v?(N({state:"fail",errMsg:"exceed max file size"}),E.abort()):U(x/_)}).on("abort",function(){setTimeout(function(){N({state:"fail",errMsg:"abort"})},0)}).on("end",function(e){N({state:"success",tempFilePath:O,statusCode:S})}).pipe(c.createWriteStream(D)),M[y]={downloadTaskId:y,request:E},o({errMsg:"createDownloadTask:ok",downloadTaskId:y})}catch(e){o({errMsg:"createDownloadTask:fail "+e})}}function s(e,t){var o=e.args,a=o.downloadTaskId,r=o.operationType,n=M[a];return n?"abort"!=r?t({errMsg:"operateDownloadTask:fail illegal operationType"}):(n.request&&n.request.abort(),void t({errMsg:"operateDownloadTask:ok"})):t({errMsg:"operateDownloadTask:fail task not found"})}var i=require("../../stores/projectStores.js"),l=require("../../actions/webviewActions.js"),d=require("path"),u=require("../../utils/file.js"),c=require("fs"),p=require("request"),f=require("../../utils/tools.js"),g=require("../../config/appserviceConfig.js"),T=require("../../weapp/utils/projectManager.js"),m=0,h=0,w={},v=1,M={},k=1;_exports={downloadFile:o,uploadFile:t,createUploadTask:a,operateUploadTask:r,createDownloadTask:n,operateDownloadTask:s}}var _exports;init(),module.exports=_exports;