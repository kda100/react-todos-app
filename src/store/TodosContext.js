import { createContext, useState } from "react";

const TodosContext = createContext({
  todos: [],
  addTodo: (todo) => {},
});

export function TodosContextProvider(props) {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  }

  const context = {
    todos,
    addTodo,
  };

  return (
    <TodosContext.Provider value={context}>
      {props.children}
    </TodosContext.Provider>
  );
}

export default TodosContext;
