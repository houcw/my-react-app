/*
 * @Description: 
 * @Author: houcw
 * @Date: 2021-12-15 21:49:15
 * @LastEditTime: 2021-12-16 22:13:39
 * @LastEditors: houcw
 * @Reference: 
 */
import React, { Component } from 'react';
import store from './store';
import {
    changeInputAction,
    addItemAction,
    deleteItemAction,
    // getList   thunk
    getNameList   //sagas
} from './store/actionCreators'
import ToDoUi from './todolistUI'

// import Unstate from './unStateUI'

// import axios from 'axios';
class todoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)

    }
    componentDidMount() {
        //订阅Redux的状态
        store.subscribe(this.storeChange)
        // 使用redux - thunk
        // store.dispatch(getList())

        store.dispatch(getNameList())
    }
    render() {
        return <div>
            {/* 有状态组件 */}
            <ToDoUi
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
            />
            {/* 无状态组件 */}
            {/* <Unstate inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                deleteItem={this.deleteItem} /> */}
        </div>

    }
    changeInputValue(e) {
        store.dispatch(changeInputAction(e.target.value))
    }
    storeChange() {
        this.setState(store.getState())
    }
    addItem() {
        store.dispatch(addItemAction())
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)

    }
}

export default todoList;

