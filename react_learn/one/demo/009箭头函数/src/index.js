import React from 'react';
import ReactDOM from 'react-dom';

// a b
// ES 5
function aAddB(a,b) {
  return a + b;
}

// ES6 箭头函数
const aAddB1 = (a,b) => {
  return a + b;
}

const aAddB2 = (a,b) => a + b;

// ES 5
function printA(a) {
  console.log(a);
}

const printA1 = (a) => {
  console.log(a);
}

const printA2 = (a) => console.log(a);



function printAAddB(a,b) {
  let c = a + b;
  console.log(c);
}


const printAAddB1 = (a,b) => {
  let c = a + b;
  console.log(c);
}






// 数据里面放的是对象
// JSX
let names = [
  "孔壹学院",
  "孔门有壹训",
  "北京从零到壹科技有限公司",
  "院为天下先"
];

ReactDOM.render(
  <div>
    {
      names.map((name) => {
          return <h1>{name}</h1>
      })
    }
  </div>,
  document.getElementById('root')
);

