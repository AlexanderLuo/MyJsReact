/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/27
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';

require('./pop.scss');





export default class Confirm extends Component {


    constructor(props) {
        super(props);
        this.state={
            visible:true
        }
    }


    render() {
        return (
            <div className={"modal-mask"+" "+(this.props.visible?"":"yc")}>
                <div className="modal-box">
                    <div className="modal-header">
                        <h3>{this.props.title}</h3>
                        <i className="modal-close" onClick={ this.props.cancel }>X</i>
                    </div>
                    <div className="modal-body">
                        {
                            React.Children.map(this.props.children, function (child) {
                                    return  {child} ;
                                })
                        }
                    </div>
                    <div className="modal-footer">
                        <button className="btn" onClick={this.props.cancel }>取 消</button>
                        <button className="btn btn-primary" onClick={this.props.confirm}>确 定</button>
                    </div>
                </div>
            </div>
        );
    }
}

Confirm.defaultProps={
    title:"提示",
}