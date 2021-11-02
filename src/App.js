/*
 * @Description:
 * @Author: houcw
 * @Date: 2020-12-03 17:11:06
 * @LastEditTime: 2021-11-02 11:20:58
 * @LastEditors: houcw
 * @Reference:
 */

import "./App.css";
import { Button } from "antd";
const name = "Josh Perez";
function nameFun(user) {
  return user.firstName + user.lastName;
}
const obj = {
  firstName: "hou",
  lastName: "chengwei",
};
const element = (
  <div className="center">
    <p>{name}</p>
    <p>hello {nameFun(obj)}</p>
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  </div>
);

function App() {
  return element;
}

export default App;
