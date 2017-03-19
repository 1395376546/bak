import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoStore from '../Store/TodoStore';
import TodoAction from '../Action/TodoAction';


class TodoListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getState()
        }
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


    componentDidMount() {
        this.addObserver = TodoStore.addListener(() => {
            this.setState({
                todos: TodoStore.getState()
            });
        });
        
    }

    componentWillUnmount() {
        this.addObserver();
    }
}

module.exports = TodoListContainer;