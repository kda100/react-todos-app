import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import TodosContext from "../store/TodosContext";

/**
 * Form for adding todos to todo List.
 */

function AddTodo(props) {
  const context = useContext(TodosContext);
  const [enteredTodo, setEnteredTodo] = useState("");

  /**
   * Add Todo to todo list in context
   * makes input field empty
   * @param {SyntheticBaseEvent} event
   */
  function onSubmitTodoHandler(event) {
    event.preventDefault();
    context.addTodo(enteredTodo);
    setEnteredTodo("");
  }

  /**
   * change state if enteredTodo on keystroke
   * @param {SyntheticBaseEvent} event
   */
  function onChangeTodoHandler(event) {
    setEnteredTodo(event.target.value);
  }

  return (
    <Form className="mt-3" onSubmit={onSubmitTodoHandler}>
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
      <Button className="mb-5" variant="primary" type="submit">
        Add Todo
      </Button>
    </Form>
  );
}

export default AddTodo;
