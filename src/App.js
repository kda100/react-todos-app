import "bootstrap/dist/css/bootstrap.min.css";
import { TodosContextProvider } from "./store/TodosContext";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";

/**
 * App represents top of component tree.
 */
function App() {
  return (
    <TodosContextProvider>
      <main className="container">
        <AddTodo />
        <TodosList />
      </main>
    </TodosContextProvider>
  );
}

export default App;
