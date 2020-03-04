import React, { useState } from 'react'
const initialTodo = { text: '', id: '' }
const App = () => {
  const [todos, setTodos] = useState([])
  const [current, setCurrent] = useState(initialTodo)
  const [isEditing, setIsEditing] = useState(false)
  //////////////////////////////////////////////////////////////////////
  const addTodoHandler = () => {
    if (current.text && !isEditing) {
      setTodos([...todos, { text: current.text, id: String(Math.random()) }])
    }
    if (current.text && isEditing) {
      const { text, id } = current
      const foundIndex = todos.findIndex(todo => todo.id === id)
      const todosCopy = [...todos]
      todosCopy[foundIndex].text = text
      setTodos(todosCopy)
      setIsEditing(false)
    }
    setCurrent(initialTodo)
  }
  const editHandler = todoToEdit => {
    const current = todos.find(todo => todo.id === todoToEdit.id)
    setCurrent(current)
    setIsEditing(true)
  }
  const changeHandler = event =>
    setCurrent({
      id: current.id || String(Math.random()),
      text: event.target.value
    })
  ////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <h1>Todo app</h1>
      <div>
        <input type='text' onChange={changeHandler} value={current.text} />
        <button onClick={addTodoHandler}>
          {isEditing ? 'Save' : 'Add new'}
        </button>
      </div>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button
                onClick={() => setTodos(todos.filter(el => todo.id !== el.id))}
              >
                Delete
              </button>
              <button onClick={() => editHandler(todo)}>Edit</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default App