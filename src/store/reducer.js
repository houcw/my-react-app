/*
 * @Description: 
 * @Author: houcw
 * @Date: 2021-12-15 22:36:14
 * @LastEditTime: 2021-12-16 16:14:45
 * @LastEditors: houcw
 * @Reference: 
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}  //默认数据
const reducer = (state = defaultState, action) => {  //就是一个方法函数

    if (action.type === CHANGE_INPUT) {

        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_ITEM) { //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push({ name: newState.inputValue })  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)  //删除数组中对应的值
        return newState
    }

    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.value
        return newState
    }
    return state
}
export default reducer
