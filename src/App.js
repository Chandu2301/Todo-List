import { useState } from "react";
import AddTodo from "./AddTodo";
import "./styles.css";
import Todos from "./Todos";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h2>Todo List</h2>
      <AddTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}
