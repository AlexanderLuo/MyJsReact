import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'

import store from 'src/store.js'
import action from 'actions/action.js'


import Header from 'struct/Header/Header.js'
import Banner from 'struct/Banner/Banner.js'
import Content from 'struct/Content.js'
import Confirm from 'component/Pop/Confirm.js'




//Map Redux state to component props
function mapStateToProps(state) {
    console.log(1)
    return {
        visible: state.visibleFilter.def
    }
}



function mapStateToProps2(state) {
    return {
        visible: state.visibleFilter.signUp
    }
}




// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        popOut: () => dispatch(action.popOut)
    }
}

const XConfirmS=connect(mapStateToProps2,mapDispatchToProps)(Confirm);

const XConfirm=connect(mapStateToProps,mapDispatchToProps)(Confirm);






export default class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Banner />
            <Content />

            <Provider store={store}>
                <XConfirm title={"加一个filter"}>
                    <p>1111d</p>
                </XConfirm>
            </Provider>

            <Provider store={store}>
                <XConfirmS title={"加一个filter"}>
                    <p>这是2号窗帘</p>
                </XConfirmS>
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
//    </Provider>\\\\\


