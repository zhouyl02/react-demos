import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      deltaX: 0,
      deltaY: 0,
    };
    this.myRef = React.createRef();
  }
  render() {
    return (
        // 调用onclick浏览器会给你一个event对象
      <button ref={this.myRef} className="button2" onClick={this.x.bind(this)}> 
        <span className="value">{this.props.value}</span>
        {this.state.active === true ? (
          <span
            className="circle"
            onAnimationEnd={this.y.bind(this)}
            style={{ left: this.state.deltaX, top: this.state.deltaY }}
          />
        ) : (
          ''
        )}
      </button>
    );
  }
//   zzz只是拿到浏览器给的event对象的一个东西
  x(zzz) {
    let { x, y } = this.myRef.current.getBoundingClientRect();
    let { clientX, clientY } = zzz;
    let deltaX = clientX - x - 5;
    let deltaY = clientY - y - 5;
    this.setState({
      active: true,
      deltaX: deltaX,
      deltaY: deltaY,
    });
    console.log('里面的函数');    
    this.props.onClick && this.props.onClick.call(null, 'fuck');
  }
  y() {
    this.setState({
      active: false,
    });
  }
}
