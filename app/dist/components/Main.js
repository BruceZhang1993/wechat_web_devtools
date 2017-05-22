"use strict";function init(){var e,t=require("path"),o=require("../lib/react.js"),i=(require("./popup/popup.js"),require("./menubar/menubar.js")),r=require("./toolbar/toolbar.js"),s=require("./sidebar/sidebar.js"),n=require("./develop/develop.js"),p=require("./detail/detail.js"),a=(require("./setting/setting.js"),require("./edit/edit.js")),h=require("../weapp/utils/projectManager.js").manager,m=require("../actions/projectActions.js"),c=require("../stores/projectStores.js"),u=require("./about/about.js"),l=require("../stores/windowStores.js"),d=require("../actions/windowActions.js"),j=(require("../stores/webviewStores.js"),require("../actions/webviewActions.js"),require("../weapp/utils/tools.js")),_=require("../common/menu/menu.js"),g=o.createClass({displayName:"Main",getInitialState:function(){var e=this.props.project?l.getLastShow():"debug",t=0,o=0;return{show:e,memory:t,cpu:o}},optProject:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};l.setLastShow(e),this.setState({show:e},t)},_fileWatcher:function(o,i,r,s){var n=this;if(this.props.project){var p=l.getEditorConfig("autoRefresh"),a=l.getEditorConfig("autoSave");if(p){void 0!==e&&clearTimeout(e);var h=function(){var o=t.extname(r);j.whiteFileExtName[o]&&m.restart(n.props.project),e=void 0};p&&a&&this._fileChangeFromEditor?e=setTimeout(function(){h()},3500):h()}}},_openProjectFile:function(){this.optProject("edit")},_memory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=0;this._memoryTime++;for(var o in e){var i=e[o];i.privateMemory&&(t+=i.privateMemory)}t=parseInt(t/1024/1024),this._memorySum+=t,this._memoryNow=t,this._memoryPre=parseInt(this._memorySum/this._memoryTime)},_cpu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=0,o=0;this._cpuTime++;for(var i in e){var r=e[i];r.cpu&&(t+=r.cpu)}this._cpuSUm+=t,t=t.toFixed(2),o=(this._cpuSUm/this._cpuTime).toFixed(2),this._systemCpuSPAN.innerText="内存占用 "+this._memoryNow+"/"+this._memoryPre+" mb, CPU "+t+"/"+o+"%"},_onFileChangeFromEditor:function(){var e=this;this._fileChangeFromEditor=!0;var t=l.getEditorConfig("autoRefresh"),o=l.getEditorConfig("autoSave");setTimeout(function(){return e._fileChangeFromEditor=!1},t&&o?7e3:2e4)},componentDidMount:function(e){if(h.on("FILE_CHANGE",this._fileWatcher),c.on("FILE_CHANGE_FROM_EDITOR",this._onFileChangeFromEditor),this._memoryTime=0,this._memorySum=0,this._cpuTime=0,this._cpuSUm=0,l.initEditorConfig(),global.appConfig.isDev){var t=this._systemCpuSPAN=document.createElement("span");t.style.cssText="position:absolute;top: 10px;right: 10%;margin-bottom: 10px;",global.contentDocumentBody.appendChild(t),chrome.processes.onUpdatedWithMemory.addListener(this._memory),chrome.processes.onUpdated.addListener(this._cpu)}},componentWillUnmount:function(){h.removeListener("FILE_CHANGE",this._fileWatcher),c.removeListener("FILE_CHANGE_FROM_EDITOR",this._onFileChangeFromEditor),global.appConfig.isDev&&(chrome.processes.onUpdatedWithMemory.removeListener(this._memory),chrome.processes.onUpdated.removeListener(this._cpu),this._systemCpuSPAN&&this._systemCpuSPAN.remove())},showSetting:function(){d.showSetting()},setMacMenu:function(){"darwin"===process.platform&&(this.props.project?"edit"===this.state.show?global.nwWindow.menu=_.menuWithEdit:global.nwWindow.menu=_.menu:global.nwWindow.menu=_.webDevMenu)},render:function(){var e="",t="";return this.setMacMenu(),this.props.project&&(e=o.createElement(a,{show:this.state.show,project:this.props.project,optProject:this.optProject}),t=o.createElement(p,{project:this.props.project,optProject:this.optProject,show:this.state.show})),o.createElement("div",{className:"main"},o.createElement(i,{lastWinStatus:this.props.lastWinStatus,appQuit:this.props.appQuit,appMin:this.props.appMin,appMax:this.props.appMax,showSetting:this.showSetting,project:this.props.project,show:this.state.show}),o.createElement(r,{project:this.props.project}),o.createElement("div",{className:"body"},o.createElement(s,{show:this.state.show,project:this.props.project,optProject:this.optProject}),o.createElement(n,{show:this.state.show,optDebugger:this.optDebugger,project:this.props.project}),e,t),o.createElement(u,null))}});_exports=g}var _exports;init(),module.exports=_exports;