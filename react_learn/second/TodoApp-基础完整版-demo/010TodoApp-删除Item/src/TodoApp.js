import React, { Component } from 'react';

import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


let _toggleItemList = (todos,id) => {
    // 100  
    let target = todos.find((todo) => {
        return todo.id === id;
    });

    target.checked = !target.checked;

    return todos;
}


let  _deleteItemList = (todos,id) => {
    // 1.先找到要删除的Item的索引
    let idx = todos.findIndex((todo) => {
        return todo.id === id;
    });

    // 按照索引进行删除
    todos.splice(idx,1);

    return todos;
}

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
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
            ]
        }
    }




    render() {

        const { todos } = this.state;

        let todoCount = todos.filter((todo) => !todo.checked).length;

        return (
            <div>
                <TodoHeader name="汪峰" todoCount={ todoCount }/>
                <TodoInput 
                    style={{width: 200,height: 30}}
                    placeholder="请输入待办内容..."
                    type="text"    
                />
                <TodoList 
                    todos={todos}
                    toggleItemList={(id) => {
                        this.setState({
                            todos: _toggleItemList(todos,id)
                        });
                    }}  
                    deleteItemList={(id) => {
                        this.setState({
                            todos: _deleteItemList(todos,id)
                        });
                    }}  
                />
            </div>
        )
    }
}

export default TodoApp;

// export default TodoApp;
// module.exports = TodoApp;
