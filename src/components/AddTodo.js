import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import TodosContext from "../store/TodosContext";

function AddTodo(props) {
  const context = useContext(TodosContext);
  const [enteredTodo, setEnteredTodo] = useState("");

  function onSubmitTodoHandler(event) {
    event.preventDefault();
    context.addTodo(enteredTodo);
    setEnteredTodo("");
  }

  function onChangeTodo(event) {
    setEnteredTodo(event.target.value);
  }

  return (
    <Form onSubmit={onSubmitTodoHandler}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="todo">Todo</Form.Label>
        <Form.Control
          id="todo"
          type="text"
          placeholder="Todo"
          value={enteredTodo}
          onChange={onChangeTodo}
        />
      </Form.Group>
      <Button className="mt-2" variant="primary" type="submit">
        Add Todo
      </Button>
    </Form>
  );
}

export default AddTodo;
