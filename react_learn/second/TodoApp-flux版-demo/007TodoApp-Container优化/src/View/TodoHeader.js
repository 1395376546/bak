import React, { Component,PropTypes } from 'react';

class TodoHeader extends Component {

    static get defaultProps() {
        return {
            name: "章子怡",
            todoCount: 98
        }
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        todoCount: PropTypes.number.isRequired
    }


    render() {
        const { name, todoCount } = this.props;
        return (
            <div>
                <h1>我的待办清单</h1>
                <h3>哈喽，{ name }，你有 { todoCount } 项待办未处理</h3>
            </div>
        )
    }
}


module.exports = TodoHeader;
