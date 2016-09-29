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
        const value=node.value.trim();
        this.props.change(value);
    }

    render() {
        return (
            <div>
                <label>{this.props.labelText}</label>
                <input
                       placeholder={this.props.tipText}
                       value={this.props.value}
                       onChange={this.changeHandle.bind(this)}
                       ref="input" />
                <button onClick={this.props.clear}>clear</button>
            </div>
        );
    }
}





TipInput.defaultProps={
    labelText: "标题",
    tipText: "请输入内容"
}

