import React from 'react'
import Footer from './Footer'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'

const App = () => (
    <div>
        <AddTodoContainer />
        <TodoListContainer />
        <Footer />
    </div>
)

export default App