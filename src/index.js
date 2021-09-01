import {pipe} from 'lodash/fp';

// 需求 将字符串去空格 转小写 再包裹div

// 过程式编程
let i = ' hello WORLD    ';
let o = '<div>' + i.trim().toLowerCase() + '</div>';

// 函数式编程 参数或返回值是一个函数

let trim = str => str.trim();
let toLower = str => str.toLowerCase();
let wrapDiv = str => `<div>${str}</div>`;
//若想自定义包装类型 则可按照类型返回一个函数
let wrap = type => str => `<${type}>${str}<${type}>`;
//函数式 将函数组合，按照给定的顺序执行 命名为为一个新的函数
let transform = pipe(trim,toLower,wrap('h1'));
let output = transform(' hello WORLD    ');
console.log(output);
