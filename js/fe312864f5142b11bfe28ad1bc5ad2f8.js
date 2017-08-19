'use strict';!function(require,directRequire){const a=require('react'),b=require('redux'),c=require('./a8c87029da0fa06e986298d447ab0fe2.js'),d=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),e=require('./25d0beb4120ce2acafb4e03b95444fda.js'),f=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),g=require('./0794878a22a26634e42df858bbaca543.js'),h=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),i=require('./72410b6d4968336cd8b2fc1d41f52cdf.js'),{connect:j}=require('react-redux');class k extends a.Component{constructor(a){super(a),this.state={tickSrc:!1,tickNodeModules:!1,tickPackageJSON:!1}}onClose(){this.props.close()}async onConfirm(){try{this.props.close(),this.props.saveQCloudInfoData({uploadStatus:h.STATUS.LOADING,currentOperation:i.CLOUD_ACTION_UPLOAD});let a='PROXY dev-proxy.oa.com:8080'===nw.App.getProxyForURL('https://gz.file.myqcloud.com');this.props.showUploading(h.QCLOUD_UPLOADING_STATUS.UPLOADING,`请等待上传完成通知`);const b=await g.uploadSvrCode(this.props.project,{src:this.state.tickSrc,node_modules:this.state.tickNodeModules,packagejson:!0,onBeforeUpload:(b)=>{if(a){const a=b.pDataLength/1024,c=(a/40).toFixed(0);this.props.showUploading(h.QCLOUD_UPLOADING_STATUS.UPLOADING,`因开发网上传速度受限，预计需时 ${c}s，请等待上传完成通知`,c)}else this.props.showUploading(h.QCLOUD_UPLOADING_STATUS.UPLOADING,`请等待上传完成通知`)}}),c=b.fileName;this.props.saveQCloudInfoData({data:b,uploadStatus:h.STATUS.SUCCESS,currentOperation:''}),this.props.showUploading(h.QCLOUD_UPLOADING_STATUS.SUCCESS)}catch(a){this.props.showUploading(h.QCLOUD_UPLOADING_STATUS.FAIL,a.toString()),this.props.saveQCloudInfoData({uploadStatus:h.STATUS.FAIL,currentOperation:''})}}onQuestionMarkClick(){nw.Shell.openExternal('https://github.com/tencentyun/wafer2-startup')}toggleSrcCheckbox(){this.setState({tickSrc:!this.state.tickSrc})}toggleNodeModulesCheckbox(){this.setState({tickNodeModules:!this.state.tickNodeModules})}togglePackageJSONCheckbox(){this.setState({tickPackageJSON:!this.state.tickPackageJSON})}render(){let b=this.props;const c={width:'420px'};return b.show||(c.display='none'),a.createElement('div',{className:'ui-dialog',style:c},a.createElement('div',{className:'ui-dialog-hd'},a.createElement('h3',{className:'ui-dialog-title'},'\u4E0A\u4F20\u817E\u8BAF\u4E91')),a.createElement('div',{className:'ui-dialog-bd'},a.createElement('div',{className:'ui-form'},a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('div',{className:'ui-form-controls'},a.createElement('label',{htmlFor:'',className:'ui-checkbox',onClick:this.toggleSrcCheckbox.bind(this)},a.createElement('input',{type:'checkbox'}),a.createElement('i',{className:this.state.tickSrc?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},'node_modules \u4E4B\u5916\u7684\u4EE3\u7801')))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('div',{className:'ui-form-controls'},a.createElement('label',{htmlFor:'',className:'ui-checkbox',onClick:this.toggleNodeModulesCheckbox.bind(this)},a.createElement('input',{type:'checkbox'}),a.createElement('i',{className:this.state.tickNodeModules?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},'node_modules')))))),a.createElement('div',{className:'ui-dialog-ft'},a.createElement('div',{className:'ui-dialog-action'},a.createElement('a',null,a.createElement('i',{className:'ui-icon-ask',onClick:this.onQuestionMarkClick.bind(this)}))),a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-default',onClick:this.onClose.bind(this)},'\u53D6\u6D88'),a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.onConfirm.bind(this)},'\u786E\u5B9A'))))}}module.exports=j((a)=>{return{project:a.project.current,show:a.window.qcloud.uploadShow}},(a)=>{return{showUploading:(b=h.QCLOUD_UPLOADING_STATUS.UPLOADING,d='',e='')=>{a(c.setQCloud({uploading:{show:!0,status:b,text:d,estimateTime:e}}))},closeUploading:()=>{a(c.setQCloud({uploading:{show:!1,status:h.QCLOUD_UPLOADING_STATUS.UPLOADING,text:''}}))},close:()=>{a(c.setQCloud({uploadShow:!1}))},saveQCloudInfoData:(b)=>{a(d.setProjectQCloud(b))},notifyFail:(b)=>a(f.setConfirmInfo({show:!0,showCancel:!1,title:'\u4E0A\u4F20\u81F3\u817E\u8BAF\u4E91\u5931\u8D25',content:b,callback:async()=>{a(f.setConfirmInfo({show:!1}))}}))}})(k)}(require('lazyload'),require);