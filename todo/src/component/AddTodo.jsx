import axios from 'axios'
import React, { useState } from 'react'

function AddTodo() {
    const [task, setTask ] = useState({taskName:""})
    const [iserror, setError] = useState(false)

    const onHandelChange = (value)=>{
        setTask({...task})
    }

    const addTodo = async ()=>{
        if(!task.taskName.match('[A-Za-z])')){
            setError(true)
        }else{
            const response = await axios.post("https://jsonplaceholder.typicode.com/todos",{...task})
        }
    }


  return (
    <div>
        {iserror ? alert("please Enter charcter only") : null }
        <input className="todo-input" placeholder="Enter Task Name" onChange={(e)=> onHandelChange(e.target.value)} type="text" />
        <button className="todo-btn btn-cancle">Cancle</button>
        <button onClick={addTodo} className="todo-btn btn-create" >Create Task</button>
    </div>
  )
}

export default AddTodo