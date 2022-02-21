import Todo from "./Todo";

const Todos = ({ todos, setTodos }) => {
  return todos.map((todo) => (
    <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
  ));
};

export default Todos;
