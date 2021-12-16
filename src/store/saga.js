/*
 * @Description: 
 * @Author: houcw
 * @Date: 2021-12-16 21:47:51
 * @LastEditTime: 2021-12-16 22:17:43
 * @LastEditors: houcw
 * @Reference: 
 */
import { takeEvery,put } from 'redux-saga/effects'  
import {GET_NAME_LIST} from './actionTypes'
import { getListAction }from './actionCreators'
import axios from 'axios'
function* mySaga() {

    yield takeEvery(GET_NAME_LIST, getNameList)
 }

 function * getNameList(){
    const res = yield axios.get('https://www.fastmock.site/mock/4b36fd4b70215303e1337f48490ee85a/houcw/test/list')
    const action = getListAction(res.data.data)
    yield put(action)
 }

export default mySaga;