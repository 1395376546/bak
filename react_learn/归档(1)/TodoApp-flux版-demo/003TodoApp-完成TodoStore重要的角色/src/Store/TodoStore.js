
import Constants from '../Constants/Constants'
import TodoDispatcher from '../Dispatcher/TodoDispatcher';


const CHANGE_TODOS = "CHANGE_TODOS";

import EventEmitter from 'events';

const _emitter = new EventEmitter();

// 1.存储数据
// 2.View取数据必须来TodoStore来取

let todos = [];


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


let _createItem = (todos,title) => {
    let idx =  todos.length ? todos[todos.length - 1].id + 1 : 100;
    todos.push({
        id: idx,
        title,
        checked: false
    });

    return todos;
}


let _editItemList = (todos,id,title) => {
    let target = todos.find((todo) => {
        return todo.id === id;
    })
    target.title = title;
    return todos;
}



let TodoStore = {
    getTodos() {
        return todos;
    },
    addObserver(callback){
        _emitter.on(CHANGE_TODOS,callback);

        return () => _emitter.removeListener(CHANGE_TODOS,callback);
    },
    _dispatchToken: TodoDispatcher.register((ation) => {
        switch(ation.type){
            case Constants.TOGGLEITEM:
                todos = _toggleItemList(todos,action.id);
                break;
            case Constants.CREATEITEM:
                todos = _createItem(todos,action.title);
                break;
            case Constants.DELETEITEM:
                todos = _deleteItemList(todos,action.id);
                break;
            case Constants.EDITITEM:
                todos = _editItemList(todos,action.id,action.title);
                break;
            case Constants.LOADDATA:
                todos = action.todos;
                break;
            default:
                break;
        }
        _emitter.emit(CHANGE_TODOS);
    })
}


module.exports = TodoStore;


