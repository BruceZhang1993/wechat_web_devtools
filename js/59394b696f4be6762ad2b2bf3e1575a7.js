'use strict';!function(require,directRequire){var a=Math.min,b=Math.max;const c=require('react'),d=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),f=34;class e extends c.Component{constructor(a){super(a),this.state={translateY:0},this.lastWheelTime=Date.now()}componentDidMount(){this.setCurrent(this.props.current)}componentWillReceiveProps(a){a.current!=this.props.current&&this.setCurrent(a.current)}checkSelect(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.onMouseUp()},250)}setCurrent(a){console.error(a),this.setState({translateY:(3-a)*f})}onMouseDown(a){this.touch=!0,this.startY=a.pageY,this.lastTranslateY=this.state.translateY||0}onMouseMove(c){if(!this.touch)return;let d=c.pageY-this.startY+this.lastTranslateY;d=b((3-this.props.array.length+1)*f,d),d=a(3*f,d),this.setState({translateY:d}),this.checkSelect()}onMouseWheel(c){let d=Date.now();if(200>d-this.lastWheelTime)return;this.lastWheelTime=d;let e=this.state.translateY;0>c.deltaY?e+=f:e-=f,e=b((3-this.props.array.length+1)*f,e),e=a(3*f,e),this.setState({translateY:e}),this.checkSelect()}onMouseUp(){console.error('up'),this.touch=!1,this.startY=0,this.lastTranslateY=0;let c=this.state.translateY;c=b((3-this.props.array.length+1)*f,c),c=a(3*f,c);let d=3-parseInt(c/f);isNaN(d)||(c=(3-d)*f,this.setState({translateY:c}),this.current!=d&&(this.current=d,this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.props.onPickerSelect&&this.props.onPickerSelect(this.current)},0)))}onMouseEnter(){}render(){let a={transform:`translate3d(0px, ${this.state.translateY}px, 0px)`,transition:'all 0.3s'},b=this.props.array.map((a)=>{return c.createElement('div',{key:a,className:'weui-picker__item'},a)});return c.createElement('div',{className:'weui-picker__group',onMouseDown:this.onMouseDown.bind(this),onMouseMove:this.onMouseMove.bind(this),onMouseUp:this.onMouseUp.bind(this),onMouseEnter:this.onMouseEnter.bind(this),onMouseLeave:this.onMouseUp.bind(this),onWheel:this.onMouseWheel.bind(this),style:this.props.hidden?d.displayNone:{}},c.createElement('div',{className:'weui-picker__mask'}),c.createElement('div',{className:'weui-picker__indicator'}),c.createElement('div',{className:'weui-picker__content',style:a},b))}}module.exports=e}(require('lazyload'),require);