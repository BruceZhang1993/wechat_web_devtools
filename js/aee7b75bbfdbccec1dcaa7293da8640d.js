'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('./d559680a1a0c2551cbce1a9fb152cb99.js');class d extends a.Component{constructor(a){super(a)}componentWillReceiveProps(){}handleGroupClick(a){let b=a.currentTarget.dataset,c=this.props.list[b.index];this.props.hideGroupList(c)}hide(){this.props.hideGroupList(),this.props.hideShare({callbackID:this.props.callbackID,res:{errMsg:`${this.props.api}:cancel`}})}render(){let d=this.props,e=d.show?{}:b.displayNone,f=d.list.map((b)=>{return a.createElement('div',{key:b.room_topic,className:'weui-cell weui-cell_access',onClick:this.handleGroupClick.bind(this)},a.createElement('div',{className:'weui-cell__hd'},a.createElement('img',{className:'thread-avatar',src:'https://mmrb.github.io/avatar/bear.jpg'})),a.createElement('div',{className:'weui-cell__bd'},a.createElement('p',{className:'thread-name'},b.room_topic,a.createElement('span',null,'(100\u4EBA)'))))});return a.createElement('div',{className:'simulator',style:{display:d.show?'':'none',width:d.screenWidth,height:d.screenHeight,transform:`translate3d(-50%,0,0) scale(${d.deviceScale})`,transformOrigin:'50% 0'}},a.createElement(c,{width:d.width,height:d.navigationbarHeight,backgroundColor:'#efeff4',frontColor:'#000000',showLeftBtn:!0,title:'\u8BF7\u9009\u62E9\u4E00\u4E2A\u804A\u5929',onLeftBtnClick:this.hide.bind(this)}),a.createElement('div',{className:'webview'},a.createElement('div',{className:'threads'},a.createElement('div',{className:'weui-cells__title'},a.createElement('p',null,'\u6700\u8FD1\u804A\u5929')),a.createElement('div',{className:'weui-cells'},f))))}}module.exports=d}(require('lazyload'),require);