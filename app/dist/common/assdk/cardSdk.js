"use strict";function init(){function r(r,e){for(var o=r.appid,f=r.ext_appid,u=r.args,g=i.getCurrentProject(),l=u.cardList||[],C={},j=[],S=0,m=l.length;S<m;S++){var O=l[S];O.card_id=O.cardId,O.card_ext=O.cardExt,delete O.cardId,delete O.cardExt,C[O.card_id]?C[O.card_id]++:(j.push(O),C[O.card_id]=1)}var v={appid:f?f:o,getitem_list:j},x={appid:o,ext_appid:f,platform:g.platform?1:0,isapp:1},A={url:_+"?"+s.stringify(x),body:JSON.stringify(v),method:"post",needToken:1};a.info("cardSdk.js addCard begin "+JSON.stringify(A)),d(A,function(r,d,i){if(r)a.error("cardSdk.js batchAddCard error "+JSON.stringify(r)),e({errMsg:"addCard:fail "+r});else{a.info("cardSdk.js addCard get "+i);var s=JSON.parse(i),o=s.baseresponse,f=o.errcode,_="";if(0===f){var g=s.json_ret_list.map(function(r){return r=JSON.parse(r),r.amount=C[r.card_tp_id],r});return void t.showAddCardView({cardList:g,cardArgs:u,callback:e})}_=f==c?"not permission":f==n?"invalid extAppID":f==p?"extAppID not auth":o.errmsg||f,e({errMsg:"addCard:fail "+_})}})}function e(r,e){var o=r.appid,f=r.ext_appid,_=r.args,g=i.getCurrentProject(),l=_.cardList||[],C=l.map(function(r){return{card_tp_id:r.cardId,code:r.code}}),j={appid:f?f:o,items:C},S={isapp:1,platform:g.platform?1:0,appid:o,ext_appid:f},m={url:u+"?"+s.stringify(S),body:JSON.stringify(j),method:"post",needToken:1};a.info("cardSdk.js openCard begin "+JSON.stringify(m)),d(m,function(r,d,i){if(r)a.error("cardSdk.js openCard error "+JSON.stringify(r)),e({errMsg:"openCard:fail "+r});else{a.info("cardSdk.js openCard get "+i);var s=JSON.parse(i),o=s.baseresponse,f=o.errcode,_="";if(0===f){var u=s.json_ret?JSON.parse(s.json_ret):{card_array:[]},g=s.error_json_ret_list.map(function(r){return JSON.parse(r)});return t.showOpenCardView({cardList:u.card_array,errData:g}),void e({errMsg:"openCard:ok"})}_=f==c?"not permission":f==n?"invalid extAppID":f==p?"extAppID not auth":o.errmsg,e({errMsg:"openCard:fail "+_})}})}var a=require("../log/log.js"),d=require("../request/request.js"),i=require("../../stores/projectStores.js"),t=require("../../actions/webviewActions.js"),s=require("querystring"),o=require("../../config/errcodeConfig.js"),n=o.DEV_PLATFORM_INVALID_EXT_APPID,p=o.DEV_PLATFORM_EXT_APPID_NOT_AUTH,c=o.NOT_LIMITS_CARD,f=require("../../config/urlConfig.js"),_=f.batchGetCardInfoURL,u=f.batchViewCardURL;_exports={addCard:r,openCard:e}}var _exports;init(),module.exports=_exports;