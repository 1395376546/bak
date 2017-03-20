import React, { Component } from 'react';

import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

let todos = [
    {
        id: 100,
        title: "单点突破",
        checked: false
    },
    {
        id: 101,
        title: "打造个人超级IP",
        checked: false
    },
    {
        id: 102,
        title: "粉丝经济",
        checked: true
    },
    {
        id: 103,
        title: "计算机组成原理",
        checked: true
    }
];



class TodoApp extends Component {

    render() {

        // let todoCount = todos.filter((todo) => {
        //     return !todo.checked;
        // }).length;

        let todoCount = todos.filter((todo) => !todo.checked).length;

        return (
            <div>
                <TodoHeader name="汪峰" todoCount={ todoCount }/>
                <TodoInput 
                    style={{width: 200,height: 30}}
                    placeholder="请输入待办内容..."
                    type="text"    
                />
                <TodoList todos={todos}/>
            </div>
        )
    }
}

export default TodoApp;

// export default TodoApp;
// module.exports = TodoApp;
