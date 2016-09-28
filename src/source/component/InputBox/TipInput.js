/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/24
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';

export default class TipInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>{this.props.labelText}</label>
                <input
                    placeholder={this.props.hinderText}
                    onChange={this.props.change}
                    >
                </input>
                <button onClick={this.props.clear}>clear</button>
            </div>
        );
    }
}



TipInput.defaultProps={
    labelText: "标题",
    hinderText: "请输入内容"
}

