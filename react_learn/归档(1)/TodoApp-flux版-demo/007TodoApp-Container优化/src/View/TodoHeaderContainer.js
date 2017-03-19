import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoStore from '../Store/TodoStore';
import {Container} from 'flux/utils';


class TodoHeaderContainer extends Component {

    static getStores() {
        return [TodoStore];
    }

    static calculateState(prevState) {
        return {
            todos: TodoStore.getState(),
        };
    }

    render() {

        const { todos } = this.state;

        let todoCount = todos.filter((todo) => !todo.checked).length;

        return (
            <TodoHeader name="汪峰" todoCount={ todoCount }/>
        )
    }


    
}

module.exports = Container.create(TodoHeaderContainer);