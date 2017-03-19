import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ShowEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textValue: "请输入内容..."
        }
    }

    // changeTextValue() {

    // }

    changeTextValue = () => {
        let textValue = ReactDOM.findDOMNode(this.refs.textarea1).value;
        // console.log(value);
        // 如何修改状态机变量的值
        // this.state.textValue = value;
        // this.setState(function (){
        //     return {
        //         textValue: value
        //     }
        // });

        // this.setState( () => {
        //     return {
        //         textValue: value
        //     }
        // });

        // this.setState({textValue: value});
        this.setState({textValue});

    }


    render() {

        return (
            <div>
                <h1>输入</h1>
                <textarea
                    ref="textarea1" 
                    style={{width: 300,height: 100}}
                    defaultValue={ this.state.textValue }
                    onChange={function () {
                        console.log(this);
                        this.changeTextValue();
                    }.bind(this)}   
                />
                <h1>输出</h1>
                <p>{ this.state.textValue }</p>
            </div>
        )
    }
}

module.exports = ShowEditor;