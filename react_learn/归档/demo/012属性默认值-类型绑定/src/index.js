import React from 'react';
import ReactDOM from 'react-dom';

// import Person from './Person';

let Person = require('./Person');

ReactDOM.render(
  <div>
    <Person name="梅超风"/>
    <Person name="liyc" tel="13331184066" qq="452649730"/>
    <Person name="没来风" tel="13366666666"/>
  </div>,
  document.getElementById('root')
);