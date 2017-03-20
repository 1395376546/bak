import React, { Component } from 'react';


class TodoItem extends Component {

    render() {

        return (
            <div>
                <input type="checkbox"/>
                <span>重新定义公司</span>
                <button>x</button>
            </div>
        )
    }
}

module.exports = TodoItem;