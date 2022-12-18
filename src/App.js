import "bootstrap/dist/css/bootstrap.min.css";
import { TodosContextProvider } from "./store/TodosContext";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";

function App() {
  return (
    <TodosContextProvider>
      <div className="container">
        <AddTodo />
        <TodosList />
      </div>
    </TodosContextProvider>
  );
}

export default App;
