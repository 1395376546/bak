import React, { Component,PropTypes } from 'react';


class TodoItem extends Component {

    static get defaultProps() {
        return {
            title: "逻辑思维",
            checked: true,
            id: 100,
            toggleItem: () => {}
        }
    }


    static propTypes = {
        title: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        toggleItem: PropTypes.func.isRequired
    }

    render() {

        const {
            title,
            checked,
            toggleItem,
            id
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
                <span>{title}</span>
                <button>x</button>
            </div>
        )
    }
}

module.exports = TodoItem;