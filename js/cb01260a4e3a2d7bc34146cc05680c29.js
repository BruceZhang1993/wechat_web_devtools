'use strict';!function(require,directRequire){const a=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),b=require('./3bfffbe88b3d923921f851c0697974fe.js');module.exports={shareAppMessage:async function(c,d){let e=d.args,f=e.imageUrl;f&&(f=b.getBaseURL(f)),c({type:a.SIMULATOR_SHARE_APP_MSG,data:{callbackID:d.callbackID,desc:e.desc,title:e.title,api:d.api,imageUrl:f}})},showShareMenuWithShareTicket:async function(b,c){return b({type:a.SIMULATOR_SET_SHARE_BTN,data:{show:!0,withShareTicket:!0}}),{errMsg:`${c.api}:ok`}},showShareMenu:async function(b,c){return b({type:a.SIMULATOR_SET_SHARE_BTN,data:{show:!0}}),{errMsg:`${c.api}:ok`}},hideShareMenu:async function(b,c){return b({type:a.SIMULATOR_SET_SHARE_BTN,data:{show:!1}}),{errMsg:`${c.api}:ok`}},updateShareMenuShareTicket:async function(b,c){return b({type:a.SIMULATOR_SET_SHARE_BTN,data:{withShareTicket:c.args.withShareTicket}}),{errMsg:`${c.api}:ok`}},updateShareMenuDynamic:async function(b,c){return b({type:a.SIMULATOR_SET_SHARE_BTN,data:{isDynamic:c.args.isDynamic}}),{errMsg:`${c.api}:ok`}},shareAppMessageDirectly:async function(c,d){let e=d.args,f=e.imageUrl;f&&(f=b.getBaseURL(f)),c({type:a.SIMULATOR_SHARE_APP_MSG,data:{callbackID:d.callbackID,desc:e.desc,title:e.title,api:d.api,imageUrl:f}})}}}(require('lazyload'),require);