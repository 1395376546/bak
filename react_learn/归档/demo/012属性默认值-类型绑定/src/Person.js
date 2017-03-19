
import React, { Component,PropTypes } from 'react';

//  ES6
class Person extends Component {

    static get defaultProps() {
        return {
            name: "凤姐",
            tel: "110",
            qq: '110119118'
        }
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        tel: PropTypes.string.isRequired,
        qq: PropTypes.string.isRequired
    }


    render() {

        const {
            name,
            tel,
            qq
        } = this.props;

        return (
          <div>
            <h1>名字：{name}</h1>
            <h1>电话：{tel}</h1>
            <h1>QQ：{qq}</h1>
          </div>
        )
    }
}



// Person.defaultProps = {
//     name: "Hello",
//     tel: "13331184066",
//     qq: '88888888'
// }


// Person.propTypes = {
//     name: PropTypes.string.isRequired,
//     tel: PropTypes.string.isRequired,
//     qq: PropTypes.string.isRequired
// }


// export default Person;
module.exports = Person;