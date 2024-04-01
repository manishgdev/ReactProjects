import './App.css';
import { useState } from 'react';
import { Task } from './Task';

/*
  Spred Operator Syntax
  for Array => [...todoList, task]
  for object => {...task, completed:true}
*/

function App() {

  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id : todoList.length === 0? 1 : todoList[todoList.length-1].id + 1,
      taskName : newTask,
      completed: false
    }
    setTodoList([...todoList, task])
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id )
    setTodoList(newTodoList)
  }

  const updateTask = (id) => {
    const updatedTask = todoList.map((task) => {
      if(task.id === id) {
        return {...task, completed:true}
      }
      return task
    })
    setTodoList(updatedTask)
  }

  return (
    <div className="App">
      <div className="addTask">
        <input type='text' onChange={handleChange}/>
        <button onClick={addTask }>Add Task</button>
      </div>
      <div className='list'>
        {
          todoList.map((task, key) => {
            return <Task taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} updateTask={updateTask} key={key}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
