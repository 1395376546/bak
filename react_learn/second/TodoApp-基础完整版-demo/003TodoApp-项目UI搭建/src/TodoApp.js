import React, { Component } from 'react';

import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoApp extends Component {

    render() {
        return (
            <div>
                <TodoHeader />
                <TodoInput />
                <TodoList />
            </div>
        )
    }
}

export default TodoApp;

// export default TodoApp;
// module.exports = TodoApp;
