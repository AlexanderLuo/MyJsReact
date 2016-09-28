/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/28
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'

import store from 'src/store.js'
import action from 'actions/action.js'


import Confirm from 'component/Pop/Confirm.js'
import TipInput from 'component/InputBox/TipInput.js'


function mapDis(dispatch){
    return {
        cancel:()=>dispatch(action.popOut),
        //confirm:()=>dispatch(action.confirm)
    }
}

function mapPro(state){
    return{
        visible:state.visibleFilter.signIn
    }
}

const XConfirm=connect(mapPro,mapDis)(Confirm);






function mapDisAccount(dispatch){
    return {
        change:(account)=>dispatch(action.changeText(account))
    }
}


function mapProAccount(state){
    return{
        value:state.account
    }
}
const Account=connect(mapProAccount,mapDisAccount)(TipInput);



export default class SignInPop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <XConfirm>
                <Account labelText={"账号"} />
                <TipInput labelText={"密码"} />
            </XConfirm>
        );
    }
}



SignInPop.defaultProps = {}