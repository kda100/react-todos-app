import { ListGroup } from "react-bootstrap";
import { Fragment, useContext } from "react";
import TodosContext from "../store/TodosContext";

function TodosList(props) {
  const context = useContext(TodosContext);
  console.log(context.todos);

  return (
    <Fragment>
      <h1>Todos List</h1>
      <ListGroup>
        {context.todos.map((todo, index) => (
          <ListGroup.Item key={index}>{todo}</ListGroup.Item>
        ))}
      </ListGroup>
    </Fragment>
  );
}

export default TodosList;
