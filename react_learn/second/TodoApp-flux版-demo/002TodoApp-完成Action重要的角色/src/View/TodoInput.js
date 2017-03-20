import React, { Component,PropTypes } from 'react';

class TodoInput extends Component {

    static get defaultProps() {
        return {
            type: "text",
            style: {width: 300,height: 30},
            placeholder: "请输入待办内容...",
            autoFocus: false,
            onKeyDown: () => {},
            onBlur: () => {}
        }
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
        style: PropTypes.object.isRequired,
        placeholder: PropTypes.string.isRequired,
        autoFocus: PropTypes.bool.isRequired,
        onKeyDown: PropTypes.func.isRequired,
        onBlur: PropTypes.func.isRequired
    }


    render() {

        return (
            <input 
                {...this.props}
            />
        )
    }
}

module.exports = TodoInput;
