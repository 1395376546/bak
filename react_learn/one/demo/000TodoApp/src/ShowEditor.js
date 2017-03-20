import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ShowContent from './ShowContent';


class ShowEditor extends Component {

    constructor(props) {
        super(props);

        console.log("ShowEditor + constructor");

        this.state = {
            textValue: "请输入内容..."
        }
    }

    
    componentWillMount(){
        console.log("ShowEditor + componentWillMount");
    }

    componentDidMount() {
        console.log("ShowEditor + componentDidMount");
    }


    shouldComponentUpdate( NEXTPROPS , NEXTSTATE ) {
        console.log("ShowEditor + shouldComponentUpdate");
        // console.log(NEXTSTATE);
        return true;
    }
    componentWillReceiveProps( NEXTPROPS ) {
        console.log("ShowEditor + componentWillReceiveProps");
    }

    componentWillUpdate( NEXTPROPS , NEXTSTATE ) {
        console.log("ShowEditor + componentWillUpdate");
    }

    componentDidUpdate( NEXTPROPS , NEXTSTATE ) {
        console.log("ShowEditor + componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("ShowEditor + componentWillUnmount");
    }

    render() {
        console.log("ShowEditor + render")
        return (
            <div>
                <h1>输入</h1>
                <textarea
                    ref="textarea1" 
                    style={{width: 300,height: 100}}
                    defaultValue={ this.state.textValue }
                    onChange={function () {
                        this.changeTextValue();
                    }.bind(this)}   
                />
                <h1>输出</h1>
                <ShowContent content={ this.state.textValue }/>
            </div>
        )
    }



    changeTextValue = () => {
        let textValue = ReactDOM.findDOMNode(this.refs.textarea1).value;
        this.setState({textValue});

    }
}

module.exports = ShowEditor;