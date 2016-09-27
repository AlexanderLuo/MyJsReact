/**
 * Copyright by Alexrander Luo.
 * Create Date 2016/9/24
 * Email 496952252@qq.com
 */

import React, { Component } from 'react';

export default class Lab_In_Clear extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputText:''
        }
    }

    handChange=function(){
        this.setState({
            inputText:this.refs.input.value.trim()
        })
    }

    getText=function(){
        console.log(this.state.inputText)
        return this.state.inputText;

    }
    setText=function(text){
        this.setState({
            inputText:text.trim()
        })
    }


    render() {
        return (
            <div>
                <label>{this.props.labelText}</label>
                <input
                    placeholder={this.props.hinderText}
                    //regExp={this.props.regExp}
                    // onKeyUp={this.handleKeyUp}
                    onChange={this.handChange.bind(this)}
                    value={this.state.inputText}
                    ref='input'
                    ></input>
                <button onClick={this.getText.bind(this)} >  clear</button>
            </div>
        );
    }
}



Lab_In_Clear.defaultProps={
    labelText: "酒店地址",
    hinderText: "请填写酒店地址",
    //regExp: /^\w{5,8}$/
}

