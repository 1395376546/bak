import React, { Component,PropTypes } from 'react';


class TodoItem extends Component {

    static get defaultProps() {
        return {
            title: "逻辑思维",
            checked: true,
            id: 100
        }
    }


    static propTypes = {
        title: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }

    render() {

        const {
            title,
            checked
        } = this.props;

        return (
            <div>
                <input 
                    type="checkbox" 
                    checked={checked}
                    onChange={() => {

                    }}
                />
                <span>{title}</span>
                <button>x</button>
            </div>
        )
    }
}

module.exports = TodoItem;