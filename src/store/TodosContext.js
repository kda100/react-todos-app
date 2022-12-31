import { createContext, useState } from "react";

//creates todos global context
const TodosContext = createContext({
  todos: [],
  addTodo: (todo) => {},
});

/**
 * Provides the todos state to all components contained within its children.
 */
export function TodosContextProvider(props) {
  const [todos, setTodos] = useState([]);

  /**
   * @param {string} todo
   */
  function addTodo(todo) {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  }

  //context of todos.
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
