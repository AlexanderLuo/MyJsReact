/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/28
 * Email 496952252@qq.com
 */

// Reducer
function reducer(state = { visibleFilter:{signIn:false,signUp:false},account: "" ,password:""}, action='') {
    switch (action.type) {
        case 'popSignIn':
            return { visibleFilter:{signIn:true}};
        case 'popSignUp':
            return { visibleFilter:{signUp:true}};
        case 'popOut':
            return { visibleFilter:{signIn:false,signUp:false}};
        case "changeText":
            if(action.account)
            state.account=action.account;
            if(action.password)
            state.password=action.password;
            return state;
        case "signIn":
            return{
                account,
                password
            }
        default:
            return state
    }
}


module.exports = reducer
//
//module.exports = combineReducers({
//    items
//})
