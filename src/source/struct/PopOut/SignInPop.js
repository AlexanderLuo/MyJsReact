/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/28
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'


import action from 'actions/action.js'


import Confirm from 'component/Pop/Confirm.js'
import TipInput from 'component/InputBox/TipInput.js'



 const XConfirm =connect(
     (state)=>{
     return {
         visible:state.signIn
     }
 },
     (dispatch)=>{
     return {
         cancel:()=>dispatch(action.setVisible(false)),
         confirm:()=>dispatch(action.signIn())

     }}
 )(Confirm);

    const Account=connect(
        null,
        (dispatch)=>{
            return  {
                change:(text)=>dispatch(action.changeText("account",text))
            }
        }
    )(TipInput);

    const Password=connect(
        null,
        (dispatch)=>{
            return  {
                change:(text)=>dispatch(action.changeText("password",text))
            }
        }
    )(TipInput);




export default class SignInPop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <XConfirm>
                <Account lable={"账户"} />
                <Password lable={"密码"} />
            </XConfirm>
        );
    }
}



SignInPop.defaultProps = {}