/*
 * @Description: 
 * @Author: houcw
 * @Date: 2021-12-16 14:41:40
 * @LastEditTime: 2021-12-16 15:38:50
 * @LastEditors: houcw
 * @Reference: 
 */
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class ToDoUi extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <div>
                <Input placeholder='请输入' style={{ width: '250px' }} value={this.props.inputValue} onChange={this.props.changeInputValue} />
                <Button type='primary' onClick={this.props.addItem}>增加</Button>
            </div>
            <div>
                <List
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (<List.Item onClick={() => { this.props.deleteItem(index) }}>{item.name}</List.Item>)}
                />
            </div>
        </div>);
    }
}

export default ToDoUi;
