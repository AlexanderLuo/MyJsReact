/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/27
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'






const Counter=({vakue})=>(
    <h1>{value}</h1>
)





export default class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> <Counter value={ store.getState }/></div>
        );
    }
}




Test.defaultProps = {}