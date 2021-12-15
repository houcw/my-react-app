/*
 * @Description:
 * @Author: houcw
 * @Date: 2021-12-15 10:21:48
 * @LastEditTime: 2021-12-15 15:10:08
 * @LastEditors: houcw
 * @Reference:
 */
import React, { Component, Fragment } from "react";

import Item from "./xiaojiejieItem";
import "./style.css";

class Xiaojiejie extends Component {
  constructor(props) {
    super(props); //调用父类的构造函数，固定写法
    this.state = {
      inputValue: "", // input中的值
      list: ["数据1", "数据2"], //服务列表
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="focus">加入服务：</label>
          <input
            id="focus"
            className="input"
            value={this.state.inputValue}
            onChange={this.ChangeFun.bind(this)}
            ref={(input) => {
              this.input = input;
            }}
          />{" "}
          <button onClick={this.addItem.bind(this)}> 增加服务 </button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              //   <li
              //     onClick={this.deleteItem.bind(this, index)}
              //     key={index + item}
              //   >
              //     {item}
              //   </li>
              <div key={index + item}>
                <Item
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}
                  list={this.state.list}
                  name="哈哈"
                ></Item>
              </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  ChangeFun(e) {
    // this.setState({
    //   inputValue: e.target.value,
    // });

    this.setState({
      inputValue: this.input.value,
    });
  }
  addItem() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
    });
  }
  // 删除项目
  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list,
    });

    // this.setState({
    // react 不能直接去操作state  this.state.list.splice(index,1)
    //     list:this.state.list.splice(index,1)
    // })
  }
}
export default Xiaojiejie;
