
import Constants from '../Constants/Constants'
import TodoDispatcher from '../Dispatcher/TodoDispatcher';

import { ReduceStore } from 'flux/utils';


let _toggleItemList = (todos,id) => {

    let newTodos = [...todos];

    // 100  
    let target = newTodos.find((todo) => {
        return todo.id === id;
    });

    target.checked = !target.checked;

    return newTodos;
}


let  _deleteItemList = (todos,id) => {
    let newTodos = [...todos];
    // 1.先找到要删除的Item的索引
    let idx = newTodos.findIndex((todo) => {
        return todo.id === id;
    });

    // 按照索引进行删除
    newTodos.splice(idx,1);

    return newTodos;
}


let _createItem = (todos,title) => {

    let newTodos = [...todos];
    let idx =  newTodos.length ? newTodos[todos.length - 1].id + 1 : 100;
    newTodos.push({
        id: idx,
        title,
        checked: false
    });

    return newTodos;
}


let _editItemList = (todos,id,title) => {
    let newTodos = [...todos];
    let target = newTodos.find((todo) => {
        return todo.id === id;
    })
    target.title = title;
    return newTodos;
}

class TodoStore extends ReduceStore {
  getInitialState() {
    return [];
  }

  reduce(todos, action) {
    switch (action.type) {
      case Constants.TOGGLEITEM:
                return _toggleItemList(todos,action.id);
            case Constants.CREATEITEM:
                return _createItem(todos,action.title);
            case Constants.DELETEITEM:
                return _deleteItemList(todos,action.id);
            case Constants.EDITITEM:
                return _editItemList(todos,action.id,action.title);
            case Constants.LOADDATA:
                return action.todos;
            default:
                return todos;
    }
  }
}

module.exports = new TodoStore(TodoDispatcher);


