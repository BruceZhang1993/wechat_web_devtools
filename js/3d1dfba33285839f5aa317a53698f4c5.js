'use strict';!function(require,directRequire){function a(a){let b=g.createHash('md5');return b.update(a).digest('hex')}const b=require('fs'),c=require('path'),d=require('mkdir-p'),e=require('babel-core'),f=require('uglify-js'),g=require('crypto'),h=require('./162bf2ee28b76d3b3d95b685cede4146.js'),{bufToUTF8:j}=require('./efc820e1b92d6e4063535296d4a24213.js'),{FILE_NOT_UTF8:i,BABEL_TRANS_JS_ERR:k,UGLIFY_JS_ERR:l,BABILI_JS_ERR:m}=require('./949d8235c744ced2a80121e4dba34c28.js');var n={};module.exports=function(g,o={}){n[g.hash]||(n[g.hash]={});let p=n[g.hash];return new Promise(async(q,r)=>{let{es6:s,minified:u}=g.setting,{distPath:v}=o,w=await h(g),x=w.getAllJSFiles();for(let h=0,o=x.length;h<o;h++){let o=x[h],q=w.getFile(o,null),y=j(q);if(void 0===y){let a=new Error(o);return a.code=i,r(a)}let z=Date.now(),t=a(y),A=`${o}_${s}_${u}`;if(p[A]&&p[A].md5===t)y=p[A].jsCode;else if(s||u){if(s){try{let a=e.transform(y,{presets:['es2015','stage-0'],babelrc:!1});y=a.code}catch(a){let b=JSON.stringify({file:o,error:a}),c=new Error(b);return c.code=k,r(c)}if(u){let a=f.minify(y,{toplevel:!0});if(a.error){let b=JSON.stringify({file:o,error:`${a.error.line} - ${a.error.message}`}),c=new Error(b);return c.code=l,r(c)}y=a.code}}else try{let a=e.transform(`(function(){\n ${y} \n})()`,{presets:['minify'],babelrc:!1});y=a.code}catch(a){let b=JSON.stringify({file:o,error:a}),c=new Error(b);return c.code=m,r(c)}n[g.hash][`${o}_${s}_${u}`]={md5:t,jsCode:y}}console.log(`${o} compilejs cost time: ${Date.now()-z}`);let B=c.join(v,o),C=c.dirname(B);d.sync(C),b.writeFileSync(B,y)}q()})}}(require('lazyload'),require);