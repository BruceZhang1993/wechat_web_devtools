'use strict';!function(require,directRequire){const a=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),b=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),c=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),d=require('./db2217eb4cff896bdcbc50abe005058f.js'),e=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js');module.exports={appMax:()=>{return(b)=>{global.Win.maximize(),b({type:a.WINDOW_MAXIMIZE})}},appMin:()=>{return(c,d)=>{try{if(d().window.windowStatus.mode===b.WINDOW_MODE.MIN)return}catch(a){}global.Win.minimize(),c({type:a.WINDOW_MINIMIZE})}},appFullscreen:()=>{return(b)=>{b({type:a.WINDOW_FULLSCREEN})}},appResize:(b)=>{return(c)=>{c({type:a.WINDOW_RESIZE,position:b})}},recordFocus:(b)=>(c,d)=>{const e=d();b!==e.window.focus&&c({type:a.WINDOW_RECORD_FOCUS,focus:b})},setMask:(c,d=b.MASK_TYPE.GLOBAL_BLOCKING)=>{return{type:a.WINDOW_SET_MASK,maskType:d,show:c}},setMainWindow:(d)=>(e)=>{(d!==b.MAIN_WINDOW_TYPE.WEB_DEBUGGER||d!==b.MAIN_WINDOW_TYPE.DEV)&&(c.lastSelect=null),e({type:a.WINDOW_SET_MAIN_WINDOW,mainWindow:d})},setAboutWindow:(b)=>{return{type:a.WINDOW_SET_ABOUT,data:b}},setDebuggerWindow:(b)=>{return{type:a.WINDOW_SET_DEBUGGER,data:b}},setSimulator:(b)=>{return{type:a.WINDOW_SET_SIMULATOR,data:b}},setCustomCompile:(b)=>{return{type:a.WINDOW_SET_CUSTOMCOMPILE,data:b}},setQCloud:(b)=>{return{type:a.WINDOW_SET_QCLOUD,data:b}},setProjectManagement:(c)=>async(e,f)=>{if(c.show){const a=f();if(a.window.projectManagement.show)try{const a=await d.onWindowRegistered(b.WINDOW_REGISTRY.PROJECT_MANAGEMENT);return void a.window.focus()}catch(a){}}e({type:a.WINDOW_SET_PROJECT_MANAGEMENT,data:c})},setEditor:(b)=>{return{type:a.WINDOW_SET_EDITOR,data:b}},toggleDebugWindow:()=>{return{type:a.WINDOW_TOGGLE_DEBUGGER}},toggleSimulatorWindow:()=>{return{type:a.WINDOW_TOGGLE_SIMULATOR}},toggleSimulatorPosition:()=>{return{type:a.WINDOW_TOGGLE_SIMULATOR_POSITION}},toggleEditorWindow:()=>{return{type:a.WINDOW_TOGGLE_EDITOR}}}}(require('lazyload'),require);