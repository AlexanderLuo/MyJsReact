/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/22
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';

import './guide.scss'


class GuideListPart extends Component{
    render(){
        return(
            <ul>
                <li>
                    <a>产品1</a>
                    <a>产品2</a>
                    <a>产品3</a>
                </li>

            </ul>
        );

    }
}

export default class GuideList extends Component {
    render() {
        return (
            <div className="guide_list">
                <h2>企业全程服务</h2>
                <div className="guide_list_part">
                    <ul>
                        <div>服务1</div>
                        <GuideListPart />
                        <div>服务2</div>
                        <GuideListPart />
                        <div>服务3</div>
                        <GuideListPart />
                    </ul>
                </div>
            </div>
        );
    }
}


