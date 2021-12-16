/*
 * @Description: 
 * @Author: houcw
 * @Date: 2021-12-15 18:54:24
 * @LastEditTime: 2021-12-15 18:59:20
 * @LastEditors: houcw
 * @Reference: 
 */
import React, { Component } from 'react';
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.isShow = this.isShow.bind(this)
    }
    render() {
        return (<div>
            <div className={this.state.isShow ? 'show' : 'hide'}>BOSS级人物-孙悟空</div>
            <div><button onClick={this.isShow}>召唤Boss</button></div>
        </div>);
    }
    isShow() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })

    }
}

export default Boss;