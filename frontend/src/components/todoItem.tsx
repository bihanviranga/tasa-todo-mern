import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Pencil, Check2, Trash } from 'react-bootstrap-icons';

import { TodoItem } from '../types/todo';
import { useAppDispatch } from '../hooks';
import { deleteTodo } from '../redux/slices/todoSlice';
import './todoItem.css';

const TodoItemElement = (props: { item: TodoItem }) => {
  const dispatch = useAppDispatch();
  const { item } = props;

  const handleDelete = () => {
    dispatch(deleteTodo(item._id));
  };

  return (
    <Container className="todoItemContainer">
      <Row className="align-items-center">
        <Col sm={1}>
          <Button size="sm" variant="outline-success">
            <Check2 />
          </Button>
        </Col>
        <Col>
          <Row>{item.name}</Row>
          <Row className="text-secondary">{item.description}</Row>
        </Col>
        <Col sm={1}>
          <Button size="sm" variant="outline-primary">
            <Pencil />
          </Button>
        </Col>
        <Col sm={1}>
          <Button size="sm" variant="outline-danger" onClick={handleDelete}>
            <Trash />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoItemElement;
