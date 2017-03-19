import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {

    render() {
        return (
            <ul>
                <li>
                    <TodoItem title="重新定义公司" checked={false}/>
                </li>
                <li>
                    <TodoItem title="单点突破" checked={true}/>
                </li>
                <li>
                    <TodoItem title="打造个人超级IP" checked={false}/>
                </li>
            </ul>
        )
    }
}

module.exports = TodoList;
