import React, { useState } from 'react'
const App = () => {
  const [todos, setTodos] = useState([])
  const [current, setCurrent] = useState({ text: '', id: '' })
  const [isEditing, setIsEditing] = useState(false)
  const addTodoHandler = () => {
    if (current.text && !isEditing) {
      setTodos([...todos, { text: current.text, id: String(Math.random()) }])
      setCurrent({ text: '' })
    }
    if (current.text && isEditing) {
      const { text, id } = current
      const foundIndex = todos.findIndex(todo => todo.id === id)
      const todosCopy = [...todos]
      todosCopy[foundIndex].text = text
      setTodos(todosCopy)
    }
  }
  const editHandler = todoToEdit => {
    const current = todos.find(todo => todo.id === todoToEdit.id)
    setCurrent(current)
    setIsEditing(true)
  }
  return (
    <div>
      <h1>Todo app</h1>
      <div>
        <input
          type='text'
          onChange={event =>
            setCurrent({
              id: current.id || String(Math.random()),
              text: event.target.value
            })
          }
          value={current.text}
        />
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
