

import Constants from '../Constants/Constants'
import TodoDispatcher from '../Dispatcher/TodoDispatcher';

let TodoAction = {
    toggleItem(id) {
        TodoDispatcher.dispatch({
            id,
            type: Constants.TOGGLEITEM
        });
    },
    deleteItem(id) {
        TodoDispatcher.dispatch({
            id,
            type: Constants.DELETEITEM
        });
    },
    createItem(title) {
        TodoDispatcher.dispatch({
            title,
            type: Constants.CREATEITEM
        });
    },
    editItem(id,title) {
        TodoDispatcher.dispatch({
            title,
            id,
            type: Constants.EDITITEM
        });
    },
    loadData() {
        fetch('todos.json')
            .then((data) => data.json())
            .then((todos)=>{
                TodoDispatcher.dispatch({
                    todos,
                    type: Constants.LOADDATA
                });
            });
    }
}

module.exports = TodoAction;
