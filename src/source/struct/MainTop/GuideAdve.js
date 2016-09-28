/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/22
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';

import Slider from 'component/Slider/Slider.js'
require('./guide.scss');

import 'images/s1.jpg'
import 'images/s2.jpg'
import 'images/s3.jpg'
import 'images/hot1.jpg'
import 'images/hot2.jpg'
import 'images/hot3.jpg'


const IMAGE_DATA = [
    {
        src: '../../../images/s1.jpg',
        alt: 'images-1'
    },
    {
        src: '../../../images/s2.jpg',
        alt: 'images-2'
    },
    {
        src: '../../../images/s3.jpg',
        alt: 'images-3'
    }
];


export default class GuideAdve extends Component {
    render() {
        return (
            <div className="guide_adve">

                <div className="adve_left">
                    <Slider
                        items={IMAGE_DATA}
                        speed={1.2}
                        delay={2.1}
                        pause={true}
                        autoplay={true}
                        dots={true}
                        arrows={true}
                        />
                </div>

                <div className="adve_rigth">
                    <div className="item">
                        <img src="../../../images/hot1.jpg" />
                    </div>
                    <div className="item">
                        <img src="../../../images/hot2.jpg" />
                    </div>
                    <div className="item">
                        <img src="../../../images/hot3.jpg" />
                    </div>
                </div>

            </div>
        );
    }
}