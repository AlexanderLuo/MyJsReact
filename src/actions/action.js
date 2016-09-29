/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/28
 * Email 496952252@qq.com
 */


//const setVisible={
//    type:"setVisible"
//};
function setVisible(isShow){
    return{
        type:"setVisible",
        isShow
    }
}
function changeText(id,text){
    return{
        type:"changeText",
        id:id,
        text:text
    }
}

function signIn(){
    return{
        type:"signIn"
    }
}


export default {
    setVisible,
    changeText,
    signIn
}