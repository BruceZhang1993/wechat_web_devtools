"use strict";function init(){function e(e){i.info("shortCut.js "+e)}var t=require("../actions/actions.js"),i=require("../log/log.js"),o="win32"===process.platform,r=[],n=[],s={key:"F5",active:function(){t.reload()},failed:function(e){i.info("shortCut.js "+e)}},a=new nw.Shortcut(s);if(r.push(a),o){var l={key:"Ctrl+B",active:function(){t.reBuild()},failed:function(e){i.info("shortCut.js "+e)}},c=new nw.Shortcut(l);r.push(c);var f={key:"Ctrl+R",active:function(){t.reload()},failed:function(e){i.info("shortCut.js "+e)}},d=new nw.Shortcut(f);r.push(d);var u={key:"Ctrl+Left",active:function(){t.goback()},failed:function(e){i.info("shortCut.js "+e)}},h=new nw.Shortcut(u);r.push(h);var p={key:"Ctrl+Right",active:function(){t.goforward()},failed:function(e){i.info("shortCut.js "+e)}},C=new nw.Shortcut(p);r.push(C);var g={key:"Ctrl+L",active:function(){t.focusAddressBar()},failed:function(e){i.info("shortCut.js "+e)}},y=new nw.Shortcut(g);r.push(y),Array.prototype.push.apply(n,[{key:"Ctrl+N",active:t.newFile,failed:e},{key:"Ctrl+S",active:t.save,failed:e},{key:"Shift+Ctrl+S",active:t.saveAll,failed:e},{key:"Ctrl+W",active:t.closeFile,failed:e},{key:"Ctrl+Z",active:t.undo,failed:e},{key:"Shift+Ctrl+Z",active:t.redo,failed:e},{key:"Ctrl+C",active:t.copy,failed:e},{key:"Ctrl+X",active:t.cut,failed:e},{key:"Ctrl+V",active:t.paste,failed:e},{key:"Ctrl+[",active:t.unindent,failed:e},{key:"Ctrl+]",active:t.indent,failed:e},{key:"Alt+Up",active:t.moveLineUp,failed:e},{key:"Alt+Down",active:t.moveLineDown,failed:e},{key:"Shift+Alt+Up",active:t.copyLineUp,failed:e},{key:"Shift+Alt+Down",active:t.copyLineDown,failed:e},{key:"Ctrl+F",active:t.find,failed:e},{key:"Shift+Ctrl+F",active:t.globalFind,failed:e},{key:"Ctrl+H",active:t.replace,failed:e},{key:"Ctrl+F1",active:t.toggleSimulatorView,failed:e},{key:"Ctrl+F2",active:t.toggleFileTreeView,failed:e},{key:"Ctrl+P",active:t.gotoFile,failed:e},{key:"Ctrl+E",active:t.gotoRecentFile,failed:e}].map(function(e){return new nw.Shortcut(e)}))}_exports={},_exports.registerCommon=function(){o&&!_exports.hasCommonRegistered&&(r.forEach(function(e){try{nw.App.registerGlobalHotKey(e)}catch(t){i.info("shortCut.js registerCommon, failed when register "+e.key+". context: hasCommonRegistered = "+_exports.hasCommonRegistered)}}),_exports.hasCommonRegistered=!0)},_exports.unRegisterCommon=function(){o&&_exports.hasCommonRegistered&&(r.forEach(function(e){try{nw.App.unregisterGlobalHotKey(e)}catch(t){i.info("shortCut.js unRegisterCommon, failed when unregister "+e.key+". context: hasCommonRegistered = "+_exports.hasCommonRegistered)}}),_exports.hasCommonRegistered=!1)},_exports.registerEdit=function(){o&&!_exports.hasEditRegistered&&(n.forEach(function(e){try{nw.App.registerGlobalHotKey(e)}catch(t){i.info("shortCut.js registerEdit, failed when register "+e.key+". context: hasEditRegistered = "+_exports.hasEditRegistered)}}),_exports.hasEditRegistered=!0)},_exports.unRegisterEdit=function(){o&&_exports.hasEditRegistered&&(n.forEach(function(e){try{nw.App.unregisterGlobalHotKey(e)}catch(t){i.info("shortCut.js unRegisterEdit, failed when unregister "+e.key+". context: hasEditRegistered = "+_exports.hasEditRegistered)}}),_exports.hasEditRegistered=!1)},_exports.hasCommonRegistered=!1,_exports.hasEditRegistered=!1}var _exports;init(),module.exports=_exports;