/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/28
 * Email 496952252@qq.com
 */
import fetch from 'isomorphic-fetch'

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


 function selectSubreddit(subreddit){
    return{
        type:"SELECT_SUBREDDIT",
        subreddit
    }
}
 function invalidateSubreddit(subreddit) {
    return {
        type: "INVALIDATE_SUBREDDIT",
        subreddit
    }
}


 function requestPosts(subreddit) {
    return {
        type: "REQUEST_POSTS",
        subreddit
    }
}

 function receivePosts(subreddit, json) {
    return {
        type: "RECEIVE_POSTS",
        subreddit,
        items:json,
        receivedAt: Date.now()
    }
}



function fetchPosts() {
    return function (dispatch) {
        dispatch(requestPosts("a"));
        return fetch('http://localhost:3000/json')
            .then(response => response.json())
            .then(Promise =>dispatch(receivePosts("a",Promise))
        )
    }
}




export default {
    setVisible,
    changeText,
    signIn,
    selectSubreddit,
    invalidateSubreddit,
    requestPosts,
    receivePosts,
    fetchPosts

}