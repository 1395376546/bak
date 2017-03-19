import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {

    render() {
        return (
            <ul>
                <li>
                    <TodoItem 
                        id={100}
                        title="重新定义公司" 
                        checked={false}/>
                </li>
                <li>
                    <TodoItem 
                        id={101}
                        title="单点突破" 
                        checked={true}/>
                </li>
                <li>
                    <TodoItem 
                        id={102}
                        title="打造个人超级IP" 
                        checked={false}/>
                </li>
            </ul>
        )
    }
}

module.exports = TodoList;
