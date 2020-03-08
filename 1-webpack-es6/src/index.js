// es6 import 加入模組的方式
// import 的 mdn 說明 https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/import
import { es6, scss } from './other';

// 以下程式碼用到的 ES6 技術有二
// => 箭頭函式
// const 常數
[es6, scss].forEach((item) => {
  const h1 = document.createElement('h1');
  h1.textContent = item;

  document.body.appendChild(h1);
});

