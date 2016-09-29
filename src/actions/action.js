/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/28
 * Email 496952252@qq.com
 */

import ReduxUtil from 'src/ReduxUtil'



//
//const popSignUp={type:'popSignUp'};
//const popOut={ type:"popOut"};
//
//
//const SignIn={type:'signIn'};
//
//
//const changeText=function(account=""){
//    return{
//        type:"changeText",
//        account:account
//    }
//};

module.exports = {

    popSignIn:ReduxUtil.actionCreater('popSignIn'),
    popSignUp:ReduxUtil.actionCreater('popSignUp'),
    popOut:ReduxUtil.actionCreater('popOut'),
    changeText:ReduxUtil.actionCreater('chageText',text),
    signIn:ReduxUtil.actionCreater('signIn')
}