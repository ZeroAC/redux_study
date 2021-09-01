import { Map } from "immutable";
import { produce } from "immer";

/**
 * immutable的方式
 */
// 不可变对象
let user = Map({ name: "zero", age: 99 });
console.log(user.get("name")); //获取指定键值
console.log(user.toJS()); //转为js格式的对象

let isBoy = (user) => {
  return user.set("isBoy", true); //该对象不可变 返回新的修改后的对象
};
let newUser = isBoy(user);
console.log(newUser.toJS());

/**
 * immer的方式 (推荐)
 */
user = { name: "zero", age: 99 };

isBoy = (user) => {
  return produce(user, (newUser) => {
    newUser.isBoy = true;
  }); //该对象不可变 返回新的修改后的对象
};
newUser = isBoy(user);
console.log(newUser);
