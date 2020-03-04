import React, { useState } from 'react';
import classes from './app.module.scss'

function App() {
  const [todo, setTodo] = useState([])
  const [currentTodo, setCurrentTodo] = useState('')

  function handler(data) {
    console.log(data)
    
  }
  return (
    <div className={classes.maincontainer}>
      <div className={classes.headermain}>
        <h3>TODOS:</h3>
        <div className={classes.nav}>
          <input type="text" placeholder="Enter A Todo" onInput={(e) => setCurrentTodo(e.target.value)} />
          <button type="button" onClick={() => setTodo([...todo, currentTodo])}> Add</button>
        </div>
      </div>
      <div className={classes.todos}>
        <ul>
          {todo.map(todo => (
            <li key={todo}>{todo} <div className={classes.trash} onClick={handler(todo)}></div></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
