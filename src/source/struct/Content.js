/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/22
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';

import OneCol from 'component/Layout/OneCol.js'
import TwoCol from 'component/Layout/TwoCol.js'
import ThreeCol from 'component/Layout/ThreeCol.js'


import Product from 'component/Product.js'
import Lab_In_Clear from 'component/InputBox/TipInput.js'




import GuideList from './MainTop/GuideList.js'
import GuideAdve from './MainTop/GuideAdve.js'


require('./content.scss');




class ContentTop  extends Component{
    render(){
        return(
                <ThreeCol
                    shellClass={"content_top"}
                    leftClass={"top_left"}
                    centerClass={"top_center"}
                    rightClass={"top_right"}
                    >
                    <GuideList />
                    <GuideAdve />
                    <GuideList />
                </ThreeCol>
        );
    }

}


export default class Content extends Component {
    render() {
        return (
                <ContentTop />
        );
    }
}