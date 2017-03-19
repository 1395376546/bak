import React, { Component,PropTypes } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {

    static get defaultProps() {
        return {
            todos: []
        }
    }

    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.object).isRequired
    }


    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo) => {
                        return (
                            <li>
                                <TodoItem 
                                    id={todo.id}
                                    title={todo.title} 
                                    checked={todo.checked}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

module.exports = TodoList;
