import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoStore from '../Store/TodoStore';
import TodoAction from '../Action/TodoAction';
import {Container} from 'flux/utils';


class TodoListContainer extends Component {

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
        return (
            <TodoList 
                    todos={todos}
                    toggleItemList={TodoAction.toggleItem}  
                    deleteItemList={TodoAction.deleteItem} 
                    editItemList={TodoAction.editItem} 
            />
        )
    }


    
}

module.exports = Container.create(TodoListContainer);