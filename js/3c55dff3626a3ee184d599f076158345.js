'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js');class c extends a.Component{constructor(a){super(a),this.state={lazyLoaded:a.show}}componentWillReceiveProps(a){a.show&&this.setState({lazyLoaded:!0})}onSelectClick(a,b){b.stopPropagation(),'function'==typeof this.props.onSelectClick&&this.props.onSelectClick(a)}render(){if(!this.state.lazyLoaded)return null;let b=this.props.list.map((b,c)=>{return a.createElement('div',{className:'ui-dropdown-item',key:c,onClick:this.onSelectClick.bind(this,c)},b)});return a.createElement('div',{className:'ui-popover',style:{display:this.props.show&&0<this.props.list.length?'':'none',left:this.props.left||0,top:this.props.top||0,width:this.props.width||'auto'}},a.createElement('div',{className:'ui-dropdown',style:{height:this.props.height||'auto'}},b))}}module.exports=c}(require('lazyload'),require);