'use strict';!function(require,directRequire){function a(a){try{let b=JSON.parse(a.content),c={type:i.DBType.system,title:b.title||'',content:b.content||'',timestamp:a.create_time},d={title:b.title||'',message:b.content||''};switch(b.tips_type){case i.TipsType.toast:{d.priority=1,d.requireInteraction=!1;break}case i.TipsType.info:{d.priority=2,d.requireInteraction=!0;break}case i.TipsType.link:{d.priority=2,d.requireInteraction=!0,d.buttons=[{title:b.confirmText||'\u67E5\u770B\u8BE6\u60C5'}],d.callback=function(a){0===a&&nw.Shell.openExternal(b.link)},c.link=b.link;break}}return k(d),c}catch(a){h.error(`handleSystemTipsMsg ${a}`)}}function b(a){const b=l.getState(),c=b.settings&&b.settings.notification||{};try{let b=JSON.parse(a.content),d={type:i.DBType.bbs,title:b.title||'',content:b.content||'',timestamp:a.create_time},e={title:b.title||'',message:b.content||'',priority:2,requireInteraction:!0};switch(b.tips_type){case i.CmdTipsType.showNewFeature:return;case i.CmdTipsType.visitBBS:return e.buttons=[{title:b.confirmText||'\u67E5\u770B\u8BE6\u60C5'}],e.callback=(a)=>{0==a&&m.BBS(b.link)},d.link=b.link,c.bbs&&k(e,!0),d;case i.CmdTipsType.mobileTest:return d.type=i.DBType.system,c.sys&&(e.buttons=[{title:b.confirmText||'\u67E5\u770B\u8BE6\u60C5'}],e.callback=async(a)=>{if(0==a)try{const{body:a}=await f({url:`${g.getMobileTestOpenTicket}`,needToken:1,needAppID:1});nw.Window.open(`${b.link}&devcode=${a.open_ticket}`,{width:o.SIZE.MOBILE_TEST_REPORT.WIDTH,height:o.SIZE.MOBILE_TEST_REPORT.HEIGHT,min_width:o.SIZE.MOBILE_TEST_REPORT.MIN_WIDTH})}catch(a){console.info(`mobile init open report error: ${a}`)}},k(e)),d;}}catch(a){h.error(`handleSystemTipsMsg ${a}`)}}async function c(c){const d=l.getState(),e=d.settings&&d.settings.notification||{};let f=[];for(let d=c.length-1;0<=d;d--){let g,h=c[d];switch(h.type){case i.MsgType.tips:{e.sys&&(g=a(h));break}case i.MsgType.cmdTips:{e.bbs&&(g=b(h));break}case i.MsgType.systemMsg:break;default:}g&&f.push(g)}0<f.length&&(await n.open(),await n.insert(f),await n.close())}function d(a){if(a&&a.data){let b=JSON.parse(a.data).list;c(b)}}async function e(){let a,b=j.syncKey,c=j.batchSyncKey,{body:e}=await f({url:g.syncMessage,method:'post',body:JSON.stringify({sync_key:[b,c]}),needToken:1});try{let a=e.sync_data[0],b=e.sync_data[1];d(a),d(b),a&&(j.syncKey=a.sync_key),b&&(j.batchSyncKey=b.sync_key)}catch(b){a=`sync catch error ${b}`}a&&h.error(a)}const f=require('./15ba1827c7f6564a45df6bd44da3a977.js'),g=require('./f171257bbcaef547a3cf27266ccb0db2.js'),h=require('./72653d4b93cdd7443296229431a7aa9a.js'),i=require('./bcb48ae14d243711d3b31cb0f602d209.js'),j=directRequire('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),k=require('./d3ce001ab1e75959382f6a7e0156dd17.js'),l=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),m=require('./25d0beb4120ce2acafb4e03b95444fda.js'),n=require('./948f9199c1cd0ba6cb9d19ad84972410.js'),o=require('./56c390e04c10e91a4aa2a2c19d9a885d.js');let p=null;module.exports={startSync:function(){e().catch((a)=>{h.error(`start sync error: ${a}`)}),p=setInterval(()=>{e().catch((a)=>{h.error(`start sync error: ${a}`)})},600000)},stopSync:function(){clearInterval(p)},sync:e}}(require('lazyload'),require);