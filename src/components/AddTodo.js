import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import TodosContext from "../store/TodosContext";

// Form for adding todos to todo List.

function AddTodo(props) {
  const context = useContext(TodosContext);
  const [enteredTodo, setEnteredTodo] = useState("");

  //handles form submission
  function onSubmitTodoHandler(event) {
    event.preventDefault();
    context.addTodo(enteredTodo);
    setEnteredTodo("");
  }

  //handles changing form input
  function onChangeTodoHandler(event) {
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
          onChange={onChangeTodoHandler}
        />
      </Form.Group>
      <Button className="mt-2" variant="primary" type="submit">
        Add Todo
      </Button>
    </Form>
  );
}

export default AddTodo;
