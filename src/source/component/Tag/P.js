/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/10/9
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';

export default class P extends Component {
    constructor(props) {
        super(props);
    }




    render() {
        return (
            <p>
                {this.props.label}
                {this.props.data.map(function(el){
                    return <a> {el['age']} </a>
                })}
            </p>
        );
    }
}


P.defaultProps = {

}