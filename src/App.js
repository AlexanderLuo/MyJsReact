import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'

import store from 'src/store.js'
import action from 'actions/action.js'

import Header from 'struct/Header/Header.js'
import Banner from 'struct/Banner/Banner.js'
import Content from 'struct/Content.js'


import SignInPop from 'struct/PopOut/SignInPop.js'





export default class App extends Component {
  render() {
    return (
   <div>
        <div>
            <Header />
            <Banner />
            <Content />
        </div>
            <SignInPop />
   </div>
    );
  }
}
connect()(App)




