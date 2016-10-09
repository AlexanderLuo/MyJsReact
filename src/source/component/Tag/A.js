/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/10/9
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';

export default class A extends Component {
    constructor(props) {
        super(props);
    }


    clickHandle(){
        this.props.click();
        console.log("click")
    }

    render() {
        return (
            <a onClick={e =>this.clickHandle(e) }>{this.props.label}</a>
        );
    }
}

A.defaultProps = {
    label:"link"
}