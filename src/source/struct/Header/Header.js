/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/22
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import OneCol from 'component/Layout/OneCol.js'

import action from  'actions/action.js';
import store from 'src/store.js'

import './header.scss'
import 'images/weixin.jpg'




// Map Redux actions to component props
function disLogin(dispatch) {
    return {
        click: () => dispatch(action.popLogin)
    }
}



// Map Redux actions to component props
function disSignUp(dispatch) {
    return {
        clickS: () => dispatch(action.popSignUp)
    }
}


class Login extends Component{
    render(){
        return(
            <li onClick={this.props.click}>登 录</li>
        );
    }
}


class SignUp extends Component{
    render(){
        return(
            <li onClick={this.props.clickS}>注 册</li>
        );
    }
}

const XSignUp=connect(null,disSignUp)(SignUp);

const XLogin=connect(null,disLogin)(Login);




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
                            <Provider store={store}>
                                <XLogin />
                            </Provider>

                            <Provider store={store}>
                                <XSignUp />
                            </Provider>


                            <li>帮助中心</li>
                        </ul>
                    </div>
            </OneCol>

        );
    }
}

