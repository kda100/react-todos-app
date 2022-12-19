import { ListGroup } from "react-bootstrap";
import { Fragment, useContext } from "react";
import TodosContext from "../store/TodosContext";

/**
 * Component to display the todos list.
 */
function TodosList(props) {
  const context = useContext(TodosContext);
  console.log(context.todos);

  return (
    <Fragment>
      <h1>Todos List</h1>
      <ListGroup as="ol" numbered>
        {context.todos.map((todo, index) => (
          <ListGroup.Item as="li" key={index}>
            {todo}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Fragment>
  );
}

export default TodosList;
