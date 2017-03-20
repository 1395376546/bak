import React, { Component,PropTypes } from 'react';

class TodoInput extends Component {

    static get defaultProps() {
        return {
            type: "text",
            style: {width: 300,height: 30},
            placeholder: "请输入待办内容..."
        }
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
        style: PropTypes.object.isRequired,
        placeholder: PropTypes.string.isRequired
    }


    render() {

        return (
            <input {...this.props}/>
        )
    }
}

module.exports = TodoInput;
