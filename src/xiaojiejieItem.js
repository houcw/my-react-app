/*
 * @Description: 
 * @Author: houcw
 * @Date: 2021-12-15 11:40:51
 * @LastEditTime: 2021-12-15 19:03:27
 * @LastEditors: houcw
 * @Reference: 
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.content !== this.props.content) {
            console.log('child render')
            return true
        } else {
            return false
        }

    }

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return <div onClick={this.handleClick}>{this.props.name}{this.props.content}</div>;
    }
    handleClick(index) {
        console.log(this.props.list)
        this.props.deleteItem(this.props.index)

    }
}
Item.propTypes = {
    content: PropTypes.string,
    list: PropTypes.array,
    index: PropTypes.number,
    deleteItem: PropTypes.func,
    name: PropTypes.string.isRequired
}
Item.defaultProps = {
    name: '你好'
}

export default Item;
