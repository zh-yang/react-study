import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import todoApp from './reducers'
import App from './components/App'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { watchIncrementAsync } from './sagas'

const sagaMiddleware = createSagaMiddleware()

// let store = createStore(todoApp,applyMiddleware(logger))
let store = createStore(todoApp, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(watchIncrementAsync)

//自定义logger
// let next = store.dispatch
// store.dispatch = function dispatchAndLog(action) {
//     console.log('dispatching', action);
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
// }

export default ()=>(
    <Provider store={store}>
        <App />
    </Provider>
)