/*
 * @Description: 
 * @Author: houcw
 * @Date: 2021-12-15 22:34:54
 * @LastEditTime: 2021-12-16 21:57:56
 * @LastEditors: houcw
 * @Reference: 
 */

import reducer from './reducer'
import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk' //引入redux-thunk

import createSagaMiddleware from 'redux-saga'   //引入saga
import mySagas from './saga' 
const sagaMiddleware = createSagaMiddleware();   //创建saga中间件


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer)          // 创建数据存储仓库

sagaMiddleware.run(mySagas)

export default store    