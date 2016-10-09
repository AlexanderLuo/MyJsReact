/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/28
 * Email 496952252@qq.com
 */



const initState={

    signIn:false,
    signUp:false,
    account:"",
    password:"",
    isFetching: false,
    didInvalidate: false,
    items: []
};


// Reducer
function reducer(state = initState, action={}) {
    switch (action.type) {
        case 'signIn':
            console.log(state.account,state.password)
            return state;
        case 'setVisible':
            return {...state,signIn:action.isShow};
        case 'changeText':
            if(action.id ==="account"){
                return {...state,account:action.text}
            }
            if(action.id ==="password"){
                return {...state,password:action.text}
            }
            return state;
        case 'SELECT_SUBREDDIT':
            console.log("select");
            return state;
        case 'INVALIDATE_SUBREDDIT':
            console.log("refresh")
            return {...state,didInvalidate:true};

        case 'RECEIVE_POSTS':
            return {...state,items:action.items};
        case 'REQUEST_POSTS':
            console.log("req")
            return state;
        default:
            return state
    }
}


module.exports = reducer
//
//module.exports = combineReducers({
//    items
//})
