/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/28
 * Email 496952252@qq.com
 */

// Reducer
function reducer(state = { visibleFilter:{def:false,signUp:false},count: 0 }, action='') {
    switch (action.type) {
        case 'popLogin':
            return { visibleFilter:{def:true}};
        case 'popSignUp':
            return { visibleFilter:{signUp:true}};
        case 'popOut':
            return { visibleFilter:{def:false,signUp:false}};
        default:
            return state
    }
}


module.exports = reducer
