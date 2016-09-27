/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/26
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';


require('./layout.scss');

export default class OneCol extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.shellClass}>
                <div className={this.props.boxClass}>
                    {
                        React.Children.map(this.props.children, function (child) {
                            return <div>{child} </div>;
                        })
                    }
                </div>
            </div>
        );
    }
}

OneCol.defaultProps={
    shellClass:"shell_box",
    boxClass:"max_box"
}