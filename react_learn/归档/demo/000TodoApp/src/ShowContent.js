import React, { Component } from 'react';

class ShowContent extends Component {

    static get defaultProps() {
        return {
            content: ""
        }
    }

    static propTypes = {
        content: React.PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);

        console.log("ShowContent + constructor");
    }

    
    componentWillMount(){
        console.log("ShowContent + componentWillMount");
    }

    componentDidMount() {
        console.log("ShowContent + componentDidMount");
    }


    shouldComponentUpdate( NEXTPROPS , NEXTSTATE ) {
        console.log("ShowContent + shouldComponentUpdate");
        // console.log(NEXTSTATE);
        return true;
    }
    componentWillReceiveProps( NEXTPROPS ) {
        console.log("ShowContent + componentWillReceiveProps");
    }

    componentWillUpdate( NEXTPROPS , NEXTSTATE ) {
        console.log("ShowContent + componentWillUpdate");
    }

    componentDidUpdate( NEXTPROPS , NEXTSTATE ) {
        console.log("ShowContent + componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("ShowContent + componentWillUnmount");
    }



    render() {
        console.log("ShowContent + render");
        return (
            <p>{ this.props.content }</p>
        )
    }
}

module.exports = ShowContent;