import React, { Component } from 'react';

import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoApp extends Component {

    render() {
        return (
            <div>
                <TodoHeader name="汪峰" todoCount={ 88 }/>
                <TodoInput 
                    style={{width: 200,height: 30}}
                    placeholder="请输入待办内容..."
                    type="text"    
                />
                <TodoList />
            </div>
        )
    }
}

export default TodoApp;

// export default TodoApp;
// module.exports = TodoApp;
