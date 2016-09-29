/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/24
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class TipInput extends Component {
    constructor(props) {
        super(props);
    }

    changeHandle(){
        const node=ReactDOM.findDOMNode(this.refs.input);
        const text=node.value.trim();
        this.props.change(text);
    }
    clickHandle(){
        const node=ReactDOM.findDOMNode(this.refs.input);
        //this.props.clear();
        node.value="";
    }

    render() {
        return (
            <div>,
                <label>{this.props.label}</label>
                <input
                       placeholder={this.props.tip}
                       value={this.props.value}
                       onChange={this.changeHandle.bind(this)}
                       ref="input" />
                <button onClick={e =>this.clickHandle(e)}>clear</button>
            </div>
        );
    }

}



TipInput.defaultProps={
    label: "标题",
    tip: "请输入内容"
}

