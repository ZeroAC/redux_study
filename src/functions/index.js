import { pipe } from "lodash/fp";

// 需求 将字符串去空格 转小写 再包裹div

// 过程式编程
let i = " hello WORLD    ";
let o = "<div>" + i.trim().toLowerCase() + "</div>";

// 函数式编程 参数或返回值是一个函数

let trim = (str) => str.trim();
let toLower = (str) => str.toLowerCase();
let wrapDiv = (str) => `<div>${str}</div>`;
//若想自定义包装类型 则可按照类型返回一个函数
let wrap = (type) => (str) => `<${type}>${str}<${type}>`;
//函数式 将函数组合，按照给定的顺序执行 命名为为一个新的函数
let transform = pipe(trim, toLower, wrap("h1"));
let output = transform(" hello WORLD    ");
console.log(output);

// 浅拷贝
let user = {
  name: "zero",
  age: 100,
};

let lowerCopyUser = { ...user, name: "zz" }; //复制user里的内容 并修改名字为zz

console.table({ user, lowerCopyUser });
// 深拷贝
let userFullInfo = {
  name: "zero",
  address: {
    country: "china",
    city: "beijing",
  },
};
let deepCopyUser = {
  //深拷贝user 并修改地址中的城市为长沙
  ...userFullInfo,
  address: {
    ...userFullInfo.address,
    city: "changsha",
  },
};
console.table({ userFullInfo, deepCopyUser });

// 不变性 即增删改操作 不在原对象上进行 而是提升为一个新的变量 从而保证是纯函数 即不对输入值或全局变量本身做出改变

// Add
let input = [1, 2, 3];
let index = input.indexOf(2); //查找2的下标
let addInput = [...input.slice(0, index), 4, ...input.slice(index)]; //比如向在1的后面插入数字四 为了保证不变性 需要解构复制

//Delete
let delInput = input.filter((x) => x !== 2); //删除2

//Update
let updateInput = input.map((x, idx) => (idx === 1 ? x * 2 : x)); //将下标为1的数更新为两倍

console.table({ input, addInput, delInput, updateInput });
