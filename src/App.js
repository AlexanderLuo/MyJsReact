import React, { Component } from 'react';


import Header from './js/struct/Header/Header.js'
import Banner from './js/struct/Banner/Banner.js'
import Content from './js/struct/Content.js'
import Confirm from './js/component/Pop/Confirm.js'



import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

//
////Pure UI
//class Word extends Component{
//    render(){
//        return(
//          <span>{this.props.value}</span>
//        );
//    }
//}
//Word.defaultProps={
//    value:0
//}
//
//class Button extends Component{
//    render(){
//        return(
//            <button onClick={this.props.click}>
//                点击猴子
//            </button>
//        );
//    }
//}
//
//Button.defaultProps={
//    click:function(){
//        console.log("click")
//    }
//}

//// Map Redux state to component props
//function mapStateToProps(state) {
//    return {
//        value: state.count
//    }
//}
//
//
//// Map Redux actions to component props
//function mapDispatchToProps(dispatch) {
//    return {
//        click: () => dispatch(increaseAction)
//    }
//}
//// Connected Component
//const XWord=connect(mapStateToProps,null)(Word);
//const XButton=connect(null,mapDispatchToProps)(Button);






//Action
const increaseAction = { type: 'increase' }



// Reducer
function reducer(state = { count: 0 }, action="") {
    switch (action.type) {
        case 'increase':
            return { count: count + 1 };
        case 'popLogin':
            console.log(1);
            return { visible:true};
        default:
            return state
    }
}


// Store
const store = createStore(reducer)
//

//Map Redux state to component props
function mapStateToProps(state) {
    return {
        visible: state.visible
    }
}

const XConfirm=connect(mapStateToProps,null)(Confirm);



export default class App extends Component {
  render() {
    return (
        <div>
            <Header store={store}/>
            <Banner />
            <Content />
            <Provider store={store}>
                <XConfirm store={store}>


                </XConfirm>
            </Provider>

        </div>


    );
  }
}



//<Provider store={store}>
//    <XWord />
//</Provider>
//<Provider store={store}>
//    <XButton />
//    </Provider>