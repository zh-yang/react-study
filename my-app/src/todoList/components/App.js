import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import TodoListContainer from '../containers/TodoListContainer'

const App = () => (
    <div>
        <AddTodo />
        <TodoListContainer />
        <Footer />
    </div>
)

export default App