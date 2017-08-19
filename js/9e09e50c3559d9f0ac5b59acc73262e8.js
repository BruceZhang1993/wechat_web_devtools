'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('redux'),d=require('./a1dd553cc059d528bb0ef56afed53968.js'),e=require('./eadce02c750c875a10680bcfedadec88.js'),f=require('./5dc59f418d85e854c1a12d402d29e2d7.js'),g=require('./35a5c665bbd039baf968211c3ff216fc.js'),{connect:h}=require('react-redux');class i extends a.Component{constructor(a){super(a),this.state={lazyLoaded:!1,src:''}}componentDidMount(){}componentWillUnmount(){}componentWillReceiveProps(a){a.show&&this.setState({lazyLoaded:!0})}playOrPause(a){a.stopPropagation(),this.props.status==f.MUSIC_STATE_PLAY?g.pauseMusic():g.resumeMusic()}render(){let c=this.props,d=c.coverImgUrl?{}:b.displayNone,e=c.show?{}:b.displayNone,g=c.status==f.MUSIC_STATE_PAUSE?{}:b.displayNone,h=c.status==f.MUSIC_STATE_PLAY?{}:b.displayNone,i=c.title;if('background'==c.mode){let a=c.singer;i?a&&(i=`${a} - ${i}`):i=a}return a.createElement('div',{className:'music-card',style:e,onClick:this.playOrPause.bind(this)},a.createElement('div',{className:'music-card-main'},a.createElement('p',{className:'music-card-status'},'\u6B63\u5728\u64AD\u653E'),a.createElement('p',{className:'music-card-name'},i)),a.createElement('div',{className:'music-card-image',style:d},a.createElement('img',{className:'music-card-image_img',src:c.coverImgUrl})),a.createElement('div',{className:'music-card-opr'},a.createElement('i',{className:'music-card-play-icon',style:g}),a.createElement('i',{className:'music-card-pause-icon',style:h})))}}module.exports=h((a)=>{let b=a.simulator.music||{};return _extends({show:a.toolbar.clickKey==e.MUSICCARD},b)},()=>{return{}})(i)}(require('lazyload'),require);