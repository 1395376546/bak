import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// ES 5  JS 
// ES 6 

// var let  const

// body div p span input


let Person = React.createClass({

    render: function() {
      return <h1>张柏芝</h1>
    }
});


//  ES6
class Person1 extends Component {
    render() {
        return (
          <div>
            <h1>谢霆锋</h1>
            <h1>张柏芝</h1>
            <h1>陈冠希</h1>
          </div>
        )
    }
}

ReactDOM.render(
  <Person1 />,
  document.getElementById('root')
);