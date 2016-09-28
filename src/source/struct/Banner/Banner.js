/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/22
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';

import OneCol from 'component/Layout/OneCol.js'

import 'images/logo.png'

require('./banner.scss');

export default class Banner extends Component {
    render(){
        return(
            <OneCol shellClass={'banner'}>
                        <div className="banner_left">
                            <img src="../../images/logo.png" />
                        </div>
                        <div className="banner_right">
                            <input type="text"  ></input>
                            <button className="search btn">搜 索</button>
                            <button className="pub">发布需求</button>
                        </div>
            </OneCol>

        );
    }
}