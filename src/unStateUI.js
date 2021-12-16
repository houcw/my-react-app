/*
 * @Description: 
 * @Author: houcw
 * @Date: 2021-12-16 14:41:40
 * @LastEditTime: 2021-12-16 15:10:27
 * @LastEditors: houcw
 * @Reference: 
 */
import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const Unstate = (props) => {
    return (<div>
        <div>
            <Input placeholder='请输入' style={{ width: '250px' }} value={props.inputValue} onChange={props.changeInputValue} />
            <Button type='primary' onClick={props.addItem}>增加</Button>
        </div>
        <div>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={() => { props.deleteItem(index) }}>{item}</List.Item>)}
            />
        </div>
    </div>);
}




export default Unstate;
