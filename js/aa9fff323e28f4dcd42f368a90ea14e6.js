'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('./a8a5e64abb9f7f8caefeee1a1f0c9d3a.js');class d extends a.Component{constructor(a){super(a)}onShowClick(a){a.stopPropagation(),'function'==typeof this.props.onShowClick&&this.props.onShowClick()}onSelectClick(a){event.stopPropagation(),'function'==typeof this.props.onSelectClick&&this.props.onSelectClick(a)}render(){let b=this.props,d=b.show?'ui-icon-arrow-up-o':'ui-icon-arrow-down-o';return a.createElement('div',{className:'simulator-toolbar-item',onClick:this.onShowClick.bind(this)},a.createElement('p',null,b.currentWording),a.createElement('i',{className:d}),a.createElement(c,_extends({},this.props,{onSelectClick:this.onSelectClick.bind(this)})))}}module.exports=d}(require('lazyload'),require);