'use strict';!function(require,directRequire){const a=require('./15ba1827c7f6564a45df6bd44da3a977.js'),b=require('./3bfffbe88b3d923921f851c0697974fe.js'),c=require('./f171257bbcaef547a3cf27266ccb0db2.js'),d=require('./0634ee2ebd3e560d9d4804ecc960160f.js');module.exports={getUserAutoFillData:async function(d,e){let f=e.args,g={appid:b.getProjectAppID(),get_all_info:!1,source:1,user_info_list:f.fields},{body:h}=await a({url:`${c.getUserAutoFillData}`,method:'post',body:JSON.stringify(g),needToken:1,needAppID:1});return{errMsg:`${e.api}:ok`,userData:h.user_info_json||'{}',authStatus:h.auth_status,authInfo:h.auth_info,authGroupList:h.auth_group_list}},setUserAutoFillData:async function(d,e){let f={appid:b.getProjectAppID(),source:1,user_info_json:args.dataList},{body:g}=await a({url:`${c.setUserAutoFillData}`,method:'post',body:JSON.stringify(f),needToken:1,needAppID:1});return{errMsg:`${e.api}:ok`}},requestAuthUserAutoFillData:async function(e,f){let g=f.args,h=f.callbackID,i=f.api;e({type:d.SIMULATOR_SET_CONFIRM,data:{show:!0,title:'\u662F\u5426\u5141\u8BB8\u81EA\u52A8\u586B\u5199',content:g.wording,subList:g.authGroupList,callback:async(f)=>{let j={appid:b.getProjectAppID(),source:1,auth_info_list:g.fields||[],auth_status:g.authStatus,user_confirm:f},{body:k}=await a({url:`${c.requestAuthUserAutoFillData}`,method:'post',body:JSON.stringify(j),needToken:1,needAppID:1}).then(()=>{e({type:d.JSSDK_CALLBACK,data:{callbackID:h,res:{errMsg:`${i}:ok`}}})}).catch((a)=>{e({type:d.JSSDK_CALLBACK,data:{callbackID:h,res:{errMsg:`${i}:fail ${a}`}}})})}}})},deleteUserAutoFillData:async function(d,e){let f=e.args,g={appid:b.getProjectAppID(),source:1,group_key:f.groupKey,group_id:f.groupId},{body:h}=await a({url:`${c.deleteUserAutoFillData}`,method:'post',body:JSON.stringify(g),needToken:1,needAppID:1});return{errMsg:`${e.api}:ok`}}}}(require('lazyload'),require);