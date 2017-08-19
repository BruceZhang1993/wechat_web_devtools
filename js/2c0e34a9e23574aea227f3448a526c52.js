'use strict';!function(require,directRequire){const a=require('react'),{connect:b}=require('react-redux'),c=require('prop-types'),d=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),e=require('./a8c87029da0fa06e986298d447ab0fe2.js'),f=require('./e98c60a262d8d98e69e574a9d12a21df.js'),g=require('./5451dfc4d939398d913dc724d952b02b.js'),h=require('./6620a0cf7dad1b400d60f0fdae40f524.js'),i=require('./efaddce19b790978e16990920754b000.js'),j=require('./584aae91d7c83393222029103ba1ac29.js'),k=require('./925e13dda17a5a2e1cbaf0212c56c31c.js'),l=require('./0df497a6fb76113a0a8e66dad897263e.js'),m=require('./aee2b6963336bb84d2ce0e0ed38dae60.js'),n=require('redux'),o=require('./305ee7aae8bf1f85c9751bc34b96196b.js'),p=require('./0ac4da1c7ab84710f2c94e3bf0cf4861.js'),q=require('./fe312864f5142b11bfe28ad1bc5ad2f8.js'),r=require('./d3ca3f15cb99fc14bb8fbfeeb32ad0f5.js'),s=require('./b1ba6dfcea5ed09bd8f7edf39a8149d6.js'),t=require('./7d9f39319673925120c4a1020d58dbd7.js'),u=require('./a3b5b3f603a2b65817dc1171b7ec7a8d.js'),v=require('./8e764a20d4ff4876a256ceb36e40c37e.js'),w=require('./da7c31daaf542cf1796023d8e344b98a.js'),x=require('./d326caa17e34aabeda5187fbed6e1e47.js'),y=require('./00bb746364abbf48ca081de687ce505a.js'),z=require('./bf5bd8b977a68a4f788a29b92aa86a0e.js'),A=require('./d24cc22e4b11eda71b5615ee005c61df.js'),B=require('./c465c4038a3000251743734c502c80ed.js'),C=require('./dc59f57d54946e61d27c95ab24d8cb4f.js'),D=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),E=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),F=require('./3b66d845db4d098b7a16cb0357f5c072.js'),G=require('./eadce02c750c875a10680bcfedadec88.js'),H=require('./2a36cc34e5f44e62f9188b9fc0871d70.js'),I=require('./37d8b9297fb1bd87f9a3ac407b8006a0.js'),J=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),K=require('./f4b122ca93225892eb1487c959c929f6.js'),L='darwin'===process.platform;class M extends a.Component{constructor(a){super(a),this.state={},this._onConfigUpdate=this.onConfigUpdate.bind(this),this.reportMemoryTimer=null,this._onResize=this.onResize.bind(this),this._onMove=this.onMove.bind(this)}componentDidMount(){this.props.win&&(global.windowMap.set('MAIN',this.props.win),this.props.win.setMinimumSize(d.MIN_MAIN_WINDOW_WIDTH,d.MIN_MAIN_WINDOW_HEIGHT),this.props.win.on('resize',this._onResize),g.init(this.props.win),g.update());let a=C.get();a&&a.scene&&this.props.updateSceneConfig(a),H.startSync(),C.on('CONFIG_UPDATE',this._onConfigUpdate),this.reportMemoryTimer=setInterval(this.reportMemory.bind(this),600000),this.props.requestProjectAttr(this.props.project)}componentWillUnmount(){C.off('CONFIG_UPDATE',this._onConfigUpdate),H.stopSync(),clearInterval(this.reportMemoryTimer)}componentWillReceiveProps(a){a.workbenchShow!=this.props.workbenchShow&&a.workbenchShow&&(a.win.width=Math.max(a.win.width,a.simulatorWindowWidth+100))}getChildContext(){return{currentNWWindow:this.props.win?this.props.win:global.Win}}onResize(a,b){this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.props.windowActions.appResize({width:a,height:b}),this.resizeTimer=null},20)}onMove(a,b){this.moveTimer&&clearTimeout(this.moveTimer),this.moveTimer=setTimeout(()=>{this.props.windowActions.appResize({x:a,y:b}),this.moveTimer=null},20)}checkWindowStatus(){let a=this.props.windowStatus.mode;if(a==d.WINDOW_MODE.FULLSCREEN)this.props.win.enterFullscreen();else if(a==d.WINDOW_MODE.WINDOW_MAXIMIZE)this.props.win.maximize();else if(a==d.WINDOW_MODE.FREE){let a=this.props.windowStatus.position;this.props.win.moveTo(a.x,a.y),this.props.win.resizeTo(a.width,a.height)}}onBodyClick(a){this.props.clickkey!=G.NONE&&this.props.bodyClick(a),a.target.partition?'persist:editor'===a.target.partition?this.props.recordFocus(d.WINDOW_FOCUS.EDITOR):'persist:devtools'===a.target.partition&&this.props.recordFocus(d.WINDOW_FOCUS.DEVTOOLS):this.props.recordFocus(d.WINDOW_FOCUS.BODY)}reportMemory(){chrome.processes.getProcessInfo([],!0,(a)=>{let b=0;for(let c in a){let d=a[c];d.privateMemory&&(b+=d.privateMemory)}w('memory_monitor',this.props.project.appid,`${parseInt(b/1024/1024)},${this.props.restartTimes}`)})}onConfigUpdate(a){this.props.updateSceneConfig(a)}onAboutClick(){this.props.windowActions.setAboutWindow({show:!0})}getSimulator(b){let c=this.props,d=c.simulatorWindowWidth;return c.simulatorShow?!c.workbenchShow&&(d='100%'):d=0,b===E.weapp?a.createElement(j,{width:d}):b===E.search||b===E.conversation?a.createElement(u,{width:d}):null}getService(b){let c=this.props.debuggerHeight;return b===E.weapp?a.createElement(s,{height:c}):b===E.search||b===E.conversation?a.createElement(t,{height:c}):null}getOptionsComponents(){let b=this.props,c=[];return b.uploadinfoShow&&c.push(a.createElement(y,{key:'upload'})),b.confirmShow&&c.push(a.createElement(z,{key:'confirm'})),b.noticecenterShow&&c.push(a.createElement(v,{key:'noticecenter'})),c}render(){let b=this.props,c=b.project.compileType,e='workbench';b.workbenchShow||(e+=' ui-invisible');let f=null;return this.props.maskType&&this.props.maskType===d.MASK_TYPE.GLOBAL_BLOCKING&&(f=a.createElement('div',{className:'ui-mask ui-mask-transparent'})),a.createElement('div',{style:{height:'inherit'},onClick:this.onBodyClick.bind(this)},a.createElement(k,null),a.createElement('div',{className:'left'===b.simulatorPosition?'main':'main main-reverse'},a.createElement(p,{compileType:c}),a.createElement(q,null),this.getOptionsComponents(),this.getSimulator(c),a.createElement('div',{className:e},a.createElement(i,null),this.getService(c)),a.createElement(x,null),this.props.showQCloudUploading?a.createElement(r,null):null,this.props.showCustomAnalysis?a.createElement(l,null):null,this.props.showMobileTest?a.createElement(m,null):null,this.props.showSelectProject?a.createElement(A,{detach:!0}):null,this.props.showCreateProject?a.createElement(B,{detach:!0}):null),a.createElement(K,null),f)}}M.childContextTypes={currentNWWindow:c.object},module.exports=b((a)=>{let b=a.window.debug||{},c=a.window.editor||{},d=a.window.simulator||{},e=a.info.uploadInfo||{},f=a.info.confirmInfo||{},g=a.toolbar.clickKey;return{debuggerHeight:b.height||100,simulatorWindowWidth:d.width||500,workbenchShow:b.show||c.show,simulatorShow:d.show,simulatorPosition:d.position,uploadinfoShow:e.show,noticecenterShow:G.NOTICECENTER==g||G.LOGINQRCODE==g,clickkey:g,confirmShow:f.show,maskType:a.window.mask.show?a.window.mask.type:'',showCustomAnalysis:a.debug.customAnalysis.isOpen,showMobileTest:a.debug.mobileTest.isOpen,showSelectProject:!!a.window.popup.selectProject&&a.window.popup.selectProject.show,showCreateProject:!!a.window.popup.createProject&&a.window.popup.createProject.show,showQCloudUploading:a.window.qcloud.uploading&&a.window.qcloud.uploading.show,project:a.project.current,restartTimes:d.restartTimes,windowStatus:a.window.windowStatus}},(a)=>{return{bodyClick:(b)=>{a(I.bodyClick(b))},recordFocus:(b)=>a(e.recordFocus(b)),maximizeWindow:()=>a(e.appMax()),requestProjectAttr:(b)=>{J.requestProjectAttr(b)(a)},windowActions:D.bindActionCreators(e,a),updateSceneConfig:D.bindActionCreators(F.updateSceneConfig,a)}})(M)}(require('lazyload'),require);