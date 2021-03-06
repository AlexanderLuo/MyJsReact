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
    }

    cancelHandle(){
        this.props.cancel()
    }
    confirmHandle(){
        this.props.confirm()
    }


    render() {
        return (
            <div className={(this.props.visible?"modal-mask":"yc")}>
                <div className="modal-box">
                    <div className="modal-header">
                        <h3>{this.props.title}</h3>
                        <i className="modal-close" onClick={e =>this.cancelHandle(e) }>X</i>
                    </div>
                    <div className="modal-body">
                        {
                            React.Children.map(this.props.children, function (child) {
                                    return  <div>{child}</div> ;
                                })
                        }
                    </div>
                    <div className="modal-footer">
                        <button className="btn" onClick={e =>this.cancelHandle(e) }>取 消</button>
                        <button className="btn btn-primary" onClick={e =>this.confirmHandle(e)}>确 定</button>
                    </div>
                </div>
            </div>
        );
    }
}

Confirm.defaultProps={
    title:"提示",
}