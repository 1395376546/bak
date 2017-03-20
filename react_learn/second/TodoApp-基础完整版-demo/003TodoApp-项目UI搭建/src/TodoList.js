import React, { Component } from 'react';

class TodoList extends Component {

    render() {
        return (
            <ul>
                <li>
                    <input type="checkbox"/>
                    <span>重新定义公司</span>
                    <button>x</button>
                </li>
                <li>
                    <input type="checkbox"/>
                    <span>逻辑思维</span>
                    <button>x</button>
                </li>
                <li>
                    <input type="checkbox"/>
                    <span>单点突破</span>
                    <button>x</button>
                </li>
            </ul>
        )
    }
}

module.exports = TodoList;
