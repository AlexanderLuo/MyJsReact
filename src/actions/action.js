/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/28
 * Email 496952252@qq.com
 */


const popSignIn = { type: 'popSignIn' };
const popSignUp={type:'popSignUp'};
const popOut={ type:"popOut"};

const changeText=function(account=""){
    return{
        type:"changeText",
        account:account
    }
};




module.exports = {
    popSignIn,
    popSignUp,
    popOut,
    changeText
}