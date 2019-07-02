import React from 'react'


let AddTodo = ({ addTodo, addTodoAsync }) => {
    let input

    return (
        <div>
            <form>
                <input type="text" ref={node => {
                    input = node
                }} />
                <button onClick={(e)=>{
                    e.preventDefault()
                    console.log(input.value)
                    if (!input.value.trim()){return}
                    addTodo(input.value)
                    input.value = ''
                }}>
                    Add Todo
                </button>
                <button onClick={(e)=>{
                    e.preventDefault()
                    if (!input.value.trim()){return}
                    addTodoAsync(input.value)
                    input.value = ''
                }}>
                    Add Todo Async
                </button>
            </form>
        </div>
    )
}

export default AddTodo