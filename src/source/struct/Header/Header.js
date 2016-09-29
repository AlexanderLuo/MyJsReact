/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/22
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import OneCol from 'component/Layout/OneCol.js'
import Li from 'Tag/Li.js'


import action from  'actions/action.js';
import store from 'src/store.js'


import './header.scss'
import 'images/weixin.jpg'



const SignIn=connect(null,(dispatch)=>{
    return {
        click: () => dispatch(action.setVisible(true))
    }
})(Li);

const SignUp=connect(null,(dispatch)=>{
    return {
        click: () => dispatch(action.setVisible(true))
    }
})(Li)



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
                            <SignIn label={"登 录"}/>
                            <SignUp label={"注 册"}/>
                            <li>帮助中心</li>
                        </ul>
                    </div>
            </OneCol>

        );
    }
}

