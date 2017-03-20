import React, { Component,PropTypes } from 'react';
import TodoInput from './TodoInput';



class TodoItem extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        };
    }

    static get defaultProps() {
        return {
            title: "逻辑思维",
            checked: true,
            id: 100,
            toggleItem: () => {},
            deleteItem: () => {},
            editItem: () => {}
        }
    }


    static propTypes = {
        title: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        toggleItem: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        editItem: PropTypes.func.isRequired
    }

    changeEditableValue = () => {
        this.setState({
            isEditable: !this.state.isEditable
        });
    }


// 只读模式
    onlyRead = () => {
        const {
            title,
            checked,
            toggleItem,
            id,
            deleteItem
        } = this.props;

        return (
            <div>
                <input 
                    type="checkbox" 
                    checked={checked}
                    onChange={() => {
                        toggleItem(id)
                    }}
                />
                <span onDoubleClick={() => {
                    this.changeEditableValue();  
                }}>{title}</span>
                <button onClick={() => {
                       deleteItem(id);
                }}>x</button>
            </div>
        )
    }

// 编辑模式
    editMode = () => {
        const {
            title,
            checked,
            toggleItem,
            id,
            deleteItem,
            editItem
        } = this.props;

        return (
            <div>
                <input 
                    type="checkbox" 
                    checked={checked}
                    onChange={() => {
                        toggleItem(id)
                    }}
                />
                <TodoInput 
                    autoFocus={true}
                    style={{width: 200,height: 25}}
                    defaultValue={title}
                    onBlur={() => {
                        this.changeEditableValue();
                    }}
                    onKeyDown={(e) => {
                        if(e.keyCode === 13 && e.target.value !== "") {
                            editItem(id,e.target.value);
                            this.changeEditableValue();
                        }
                        
                    }}
                />
                <button onClick={() => {
                       deleteItem(id);
                }}>x</button>
            </div>
        )
    }


    render() {

        return this.state.isEditable ? this.editMode() : this.onlyRead();
    }
}

module.exports = TodoItem;