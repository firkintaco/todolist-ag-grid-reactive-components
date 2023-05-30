import React, { useState } from "react";
import "./App.css";
import TodoTable from "./TodoTable";
import ReactiveButton from "reactive-button";

function App() {
  const [todo, setTodo] = useState({
    description: "",
    date: new Date(Date.now()).toLocaleString().split(" ")[0],
    status: "",
  });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({
      description: "",
      date: new Date(Date.now()).toLocaleString().split(" ")[0],
      status: "",
    });
  };

  return (
    <div className="App">
      <br />
      <input
        placeholder="Description"
        style={{ margin: "0.25rem", padding: "1rem" }}
        name="description"
        value={todo.description}
        onChange={inputChanged}
      />

      <input
        placeholder="Status"
        style={{ margin: "0.25rem", padding: "1rem" }}
        name="status"
        value={todo.status}
        onChange={inputChanged}
      />
      <ReactiveButton
        style={{ margin: "1rem" }}
        color="yellow"
        onClick={addTodo}
        idleText="Add"
        rounded
      />
      <ReactiveButton
        onClick={() => setTodos([])}
        style={{ margin: "1rem" }}
        color="dark"
        idleText="Clear"
        rounded
      />
      <TodoTable todos={todos} />
    </div>
  );
}

export default App;
