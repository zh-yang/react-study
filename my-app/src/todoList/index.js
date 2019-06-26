import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp,applyMiddleware(logger))

export default ()=>(
    <Provider store={store}>
        <App />
    </Provider>
)