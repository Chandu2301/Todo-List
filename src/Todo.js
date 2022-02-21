import { useState } from "react";
import "./Todo.css";
const Todo = ({ todo, todos, setTodos }) => {
  console.log(todo);

  const [status, setStatus] = useState(false);
  const deleteHandler = () => {
    setTodos([...todos.filter((item) => item.id !== todo.id)]);
  };
  return (
    <div className="todo-card">
      <h4>{todo.text}</h4>
      <input type="checkbox" defaultValue={todo.completed} />
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Todo;
