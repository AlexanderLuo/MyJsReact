/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/26
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';

require('./layout.scss');

export default class ThreeCol extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.shellClass}>
                <div className={this.props.boxClass}>

                    {
                        React.Children.map(this.props.children, (child,index)=> {

                            if(index ===0){
                                return <div className={this.props.leftClass}> {child} </div>;
                            }
                            if(index === 1){
                                return <div className={this.props.centerClass}>{child} </div>;
                            }
                            if(index ===2){
                                return <div className={this.props.rightClass}>{child} </div>;
                            }

                        })
                    }
                </div>
            </div>
        );
    }
}

ThreeCol.defaultProps={
    shellClass:"shell_box",
    boxClass:"max_box",
    leftClass:"left_part",
    centerClass:"center_part",
    rightClass:"right_part"
}