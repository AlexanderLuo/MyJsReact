/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/22
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';
import OneCol from '../../component/Layout/OneCol.js'


import '../../../images/weixin.jpg'
import { Provider, connect } from 'react-redux'
require('./header.scss');



const popLoginAction = { type: 'popLogin' }







// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        pop: () => dispatch(popLoginAction)
    }
}




class Login extends Component{
    render(){
        return(
            <li onClick={this.props.pop}>登 录</li>
        );
    }
}

const XLogin=connect(null,mapDispatchToProps)(Login);



// Connected Component
//const XLogin=connect(mapStateToProps,null)(Word);
//
//

//


export default class Header extends Component {
    render(){
        return (
            <OneCol shellClass={"header"}>
                    <div className="top_left drop_down">
                        <span >移动版</span>
                        <div className="drop_down_child">
                            <div className="cont1"><img src="../../images/weixin.jpg" /></div>
                            <div className="cont2">
                                <p>点击</p>
                                <a>下载APP</a>
                            </div>
                        </div>
                    </div>
                    <div className="top_right">
                        <ul className="top_menu">
                            <li>注册</li>
                            <Provider store={this.props.store}>
                                <XLogin />
                            </Provider>
                            <li>帮助中心</li>
                        </ul>
                    </div>
            </OneCol>

        );
    }
}