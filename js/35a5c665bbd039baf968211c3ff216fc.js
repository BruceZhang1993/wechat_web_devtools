'use strict';!function(require,directRequire){const a=require('./a1dd553cc059d528bb0ef56afed53968.js'),b=require('./5dc59f418d85e854c1a12d402d29e2d7.js'),c=require('./0634ee2ebd3e560d9d4804ecc960160f.js');let d;module.exports={initMusic:function(e){d||(d=document.createElement('audio'),global.contentDocumentBody.appendChild(d),d.addEventListener('play',()=>{e({type:c.SIMULATOR_SET_BACKGROUND_AUDIO,data:{status:b.MUSIC_STATE_PLAY}}),a.triggerOnEvent({eventName:'onMusicPlay',data:{dataUrl:d.src}}),a.triggerOnEvent({eventName:'onBackgroundAudioStateChange',data:{state:'play'}})}),d.addEventListener('pause',()=>{d&&!d.ended&&(!d.error&&e({type:c.SIMULATOR_SET_BACKGROUND_AUDIO,data:{status:b.MUSIC_STATE_PAUSE}}),a.triggerOnEvent({eventName:'onMusicPause',data:{dataUrl:d.src}}),a.triggerOnEvent({eventName:'onBackgroundAudioStateChange',data:{state:'pause'}}))}),d.addEventListener('ended',()=>{e({type:c.SIMULATOR_SET_BACKGROUND_AUDIO,data:{status:b.MUSIC_STATE_END}}),a.triggerOnEvent({eventName:'onMusicEnd',data:{dataUrl:d.src}}),a.triggerOnEvent({eventName:'onBackgroundAudioStateChange',data:{state:'ended'}}),d.remove(),d=void 0}),d.addEventListener('waiting',()=>{a.triggerOnEvent({eventName:'onBackgroundAudioStateChange',data:{state:'waiting'}})}),d.addEventListener('error',(f)=>{e({type:c.SIMULATOR_SET_BACKGROUND_AUDIO,data:{status:b.MUSIC_STATE_ERROR}});let{target:g}=f,{error:h}=g,i=h.code;i=i===h.MEDIA_ERR_NETWORK?10002:i===h.MEDIA_ERR_DECODE?10003:10001;let j=h.code;a.triggerOnEvent({eventName:'onMusicError',data:{dataUrl:d.src,errMsg:'Error: '+d.error.code}}),a.triggerOnEvent({eventName:'onBackgroundAudioStateChange',data:{state:'error',errMsg:j,errCode:i}}),d.remove(),d=void 0}))},playMusic:function(a={}){a.src&&a.src!=d.src?(d.src=a.src,d.play(),d.currentTime=a.startTime||0):d.src&&d.play()},pauseMusic:function(a={}){d&&!d.paused&&d.pause()},resumeMusic:function(a={}){d&&d.paused&&d.play()},stopMusic:function(b={}){if(!d)return;let c=d.src;setTimeout(()=>{a.triggerOnEvent({eventName:'onMusicEnd',data:{dataUrl:c}}),a.triggerOnEvent({eventName:'onBackgroundAudioStateChange',data:{state:'stop'}})}),d.remove(),d=void 0},seekMusic:function(a={}){d&&!d.paused&&(d.currentTime=1*a.currentTime)},getAudioBufferd:function(){let a=d?d.buffered:'';if(a){let c=d.currentTime;for(let d,b=0,e=a.length;b<e;b++)if(d=a,a.start(b)<=c&&a.end(b)>=c)return a.end(b)}return 0},getAudio:function(){return d},removeAudio:function(){d&&(d.remove(),d=void 0)}}}(require('lazyload'),require);