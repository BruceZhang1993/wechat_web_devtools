'use strict';!function(require,directRequire){function a(a,b){let c=b?`${f.newReportURL}?haveappid=1&appid=${b}`:`${f.newReportURL}?haveappid=0`,d={url:c,forceLogin:-1,body:JSON.stringify({client_useinfo:a,client_time:parseInt(+new Date/1e3)}),method:'post',needToken:-1,needCheckErrCode:-1};e(d).then(()=>{}).catch(()=>{})}function b(b,c,d){let e=[];e.push({type:g[b],times:1,data:d}),a(e,c)}function c(){let b=[];for(let a in h)b.push({type:g[a],times:h[a]});b.length&&(0<b.length&&a(b,i),h={})}function d(b){let c=[];c.push({type:g[b],times:1}),a(c,'')}const e=require('./15ba1827c7f6564a45df6bd44da3a977.js'),f=require('./f171257bbcaef547a3cf27266ccb0db2.js'),g={project_init:1,project_open:2,url_open:3,project_edit:4,project_debug:5,project_detail:6,project_background:7,project_foreground:8,project_restart:9,project_close:10,project_compile:11,project_shortcut_restart:12,tool_error_nw:13,tool_error_web:14,project_delete:15,project_createsuc:16,project_tourist:17,memory_monitor:18};var h={},i=-1;setInterval(()=>{c()},300000),module.exports=async function(a,e,f){return f?void b(a,e,f):e?void(-1!=i&&e!==i&&c(),i=e,!h[a]&&(h[a]=0),h[a]++,h[a]>10&&c()):void d(a)}}(require('lazyload'),require);