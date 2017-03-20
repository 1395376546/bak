import React, { Component } from 'react';

class TodoInput extends Component {

    render() {
        return (
            <input 
                type="text" 
                style={{width: 300,height: 30}}
                placeholder="请输入待办内容..."
            />
        )
    }
}

module.exports = TodoInput;
