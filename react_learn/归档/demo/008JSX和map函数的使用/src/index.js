import React from 'react';
import ReactDOM from 'react-dom';
// 数据里面放的是对象
// JSX
let names = [
  "孔壹学院",
  "孔门有壹训",
  "北京从零到壹科技有限公司",
  "院为天下先",
  "院为天下先111"
];

/*ReactDOM.render(
  <div>
    <h1>孔壹学院</h1>
    <h1>孔门有壹训</h1>
    <h1>北京从零到壹科技有限公司</h1>
    <h1>院为天下先</h1>
  </div>,
  document.getElementById('root')
);*/


let newNames = [
    <h1>孔壹学院</h1>,
    <h1>孔门有壹训</h1>,
    <h1>北京从零到壹科技有限公司</h1>,
    <h1>院为天下先</h1>
];


ReactDOM.render(
  <div>
    {
      names.map(function (name) {
          return <h1>{name}</h1>
      })
    }
  </div>,
  document.getElementById('root')
);

