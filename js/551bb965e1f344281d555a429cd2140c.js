'use strict';!function(require,directRequire){const a=require('path'),b=require('./949d8235c744ced2a80121e4dba34c28.js'),c=require('./common/locales/index.js'),d=require('./162bf2ee28b76d3b3d95b685cede4146.js');module.exports=async function(a,e={}){if(!a.attr&&!a.attr.platform)return;let f,g='ext.json',h=await d(a);try{f=h.getFile(g)}catch(a){return}try{f=JSON.parse(f)}catch(a){let c=new Error(a.message);throw c.code=b.EXT_JSON_PARSE_ERR,c}if(!f.extEnable)return'';let i=f.extPages||{},j={};for(let d in i){if(j[d]){let a=new Error(c.config.JSON_PAGES_REPEAT.formateLocales([g,d]));throw a.code=b.EXT_JSON_PAGES_ERR,a}j[d]=!0}return f}}(require('lazyload'),require);