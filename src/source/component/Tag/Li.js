/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/29
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';

export default class Li extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li onClick={this.props.click}>{this.props.label}</li>
        );
    }
}

Li.defaultProps = {
    label:""
}