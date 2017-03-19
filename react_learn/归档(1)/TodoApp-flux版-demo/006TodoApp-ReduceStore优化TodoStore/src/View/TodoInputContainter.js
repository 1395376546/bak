import React, { Component } from 'react';
import TodoAction from '../Action/TodoAction';
import TodoInput from './TodoInput';


class TodoInputContainer extends Component {


    render() {

        return (
            <TodoInput 
                    style={{width: 200,height: 30}}
                    placeholder="请输入待办内容..."
                    type="text"  
                    autoFocus={true} 
                    onKeyDown={(e) => {
                        
                        if(e.keyCode === 13 && e.target.value !== "") {
                            TodoAction.createItem(e.target.value)
                            e.target.value = "";
                        }
                    }}
                />
        )
    }
}

module.exports = TodoInputContainer;