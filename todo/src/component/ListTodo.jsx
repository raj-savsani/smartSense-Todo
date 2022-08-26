import axios from "axios";
import React, { useEffect, useState } from "react";
import downArrow from "../image/downward-arrow.svg";
import upArrow from "../image/up-arrow.svg";

function ListTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log("data:", data);
    setTodos(data);
  };

  const toggleState = (value)=>{
    if(value === "checked"){
        axios.put("https://jsonplaceholder.typicode.com/todos/1",{})
    }
  }

  return (
    <div className="todo-main-table">
      <div className="todo-header">
        <div>Issues</div>
        <div>Action</div>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <div className="todoline">
              <div className="todo-checkbox">
                <input onChange={(e)=> toggleState(e.target.value)} type="checkbox"></input>
              </div>
              <div className="todo-title">{todo.title}</div>
              <div className="todo-action">
                {index !== todos.length ? <img src={downArrow}></img> : null}
                {index !== 0 ? <img src={upArrow}></img> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListTodo;
