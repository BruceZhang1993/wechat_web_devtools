'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js');class c extends a.Component{onCancelClick(){'function'==typeof this.props.callback&&this.props.callback(!1)}onConfirmClick(){'function'==typeof this.props.callback&&this.props.callback(!0)}render(){let c=this.props,d='string'===c.content?c.content:c.content.toString();return a.createElement('div',{className:'ui-dialog',style:{width:'420px'}},a.createElement('div',{className:'ui-dialog-bd'},a.createElement('div',{className:'ui-msg'},a.createElement('div',{className:'ui-msg-icon'},a.createElement('i',{className:'ui-icon-info'})),a.createElement('p',{className:'ui-msg-content'},decodeURIComponent(d))),a.createElement('div',{className:'ui-msg-action'},a.createElement('button',{className:'ui-button ui-button-default',style:c.showCancel?{}:b.displayNone,onClick:this.onCancelClick.bind(this)},c.cancelText||'\u53D6\u6D88'),a.createElement('button',{className:'ui-button ui-button-primary',style:c.showConfirm?{}:b.displayNone,onClick:this.onConfirmClick.bind(this)},c.confirmText||'\u786E\u5B9A'))))}}module.exports=c}(require('lazyload'),require);