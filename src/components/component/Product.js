/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/22
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';

import '../../images/pic.png'

export default class Product extends Component {
    render() {
        return (
            <div className="single">
                <div className="pic"><img src="../../images/pic.png"/></div>

                <div className="cont">
                    <div className="top">
                        <h3>
                            <a>品牌设计</a>
                        </h3>
                    </div>
                    <div className="bottom">
                        <p>dd</p>
                    </div>
                </div>
            </div>
        );
    }
}