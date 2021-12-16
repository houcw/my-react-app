/*
 * @Description: 
 * @Author: houcw
 * @Date: 2021-12-16 11:56:51
 * @LastEditTime: 2021-12-16 22:14:14
 * @LastEditors: houcw
 * @Reference: 
 */
import {
    CHANGE_INPUT,
    ADD_ITEM,
    DELETE_ITEM,
    GET_LIST,
    GET_NAME_LIST
} from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = (value) => ({
    type: ADD_ITEM,
    value
})

export const deleteItemAction = (value) => ({
    type: DELETE_ITEM,
    value
})

export const getListAction = (value) => ({
    type: GET_LIST,
    value
})

export const getNameList = (value) => ({
    type: GET_NAME_LIST,
    value
})

export const getList = () => {
    return (dispatch) => {
        axios.get('https://www.fastmock.site/mock/4b36fd4b70215303e1337f48490ee85a/houcw/test/list').then((res) => {
            // const data = res.data
            // console.log(data)
            dispatch(getListAction(res.data.data))
        })
    }
}