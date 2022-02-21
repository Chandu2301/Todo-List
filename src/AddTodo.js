import { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
  const [inputText, setInputText] = useState("");
  const addTodo = () => {
    if (inputText.trim().length === 0) return;
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 700 }
    ]);

    setInputText("");
  };

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={inputText} onChange={inputHandler} />
      <button onClick={addTodo}>Add Todo</button>
    </form>
  );
};

export default AddTodo;
