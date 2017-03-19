import React from 'react';
import ReactDOM from 'react-dom';

/*ReactDOM.render(
  <div>
    <h1>21点见</h1>
    <h1>21点见</h1>
    <h1>21点见</h1>
  </div>,
  document.getElementById('root')
);*/


// JSX

// xml js


// XML  div  p span  person dog wife 
// HTML  div  p span
/*<person></person>*/

/*const name = "I am a dog";

<h1>{name}</h1>*/


/*const name = "You are dogs!"


ReactDOM.render(
  <div>
    {name}
  </div>,
  document.getElementById('root')
);*/






/*ReactDOM.render(
  <div>
    <h1>孔壹学院</h1>
    <h1>孔门有壹训</h1>
    <h1>北京从零到壹科技有限公司</h1>
  </div>,
  document.getElementById('root')
);*/


// 数据里面放的是对象
// JSX
let names = [
  <h1>孔壹学院</h1>,
  <h1>孔门有壹训</h1>,
  <h1>北京从零到壹科技有限公司</h1>,
  <h1>院为天下先</h1>
];

ReactDOM.render(
  <div>
    {names}
  </div>,
  document.getElementById('root')
);