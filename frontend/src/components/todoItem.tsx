import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Pencil, Check2, Trash } from 'react-bootstrap-icons';

import { TodoItem, TodoItemCreateUpdateDto } from '../types/todo';
import { useAppDispatch } from '../hooks';
import { deleteTodo, updateTodo } from '../redux/slices/todoSlice';
import TodoForm from './todoForm';
import './todoItem.css';

interface TodoItemElementProps {
  item: TodoItem;
}

const TodoItemElement = (props: TodoItemElementProps) => {
  const dispatch = useAppDispatch();
  const { item } = props;

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(item._id));
  };

  const handleEditModalClose = () => {
    setShowModal(false);
  };

  const handleEditModalSubmit = (data: TodoItemCreateUpdateDto) => {
    dispatch(updateTodo({ id: item._id, data: { ...item, ...data } }));
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
          <Button
            size="sm"
            variant="outline-primary"
            onClick={() => setShowModal(true)}
          >
            <Pencil />
          </Button>
        </Col>
        <Col sm={1}>
          <Button size="sm" variant="outline-danger" onClick={handleDelete}>
            <Trash />
          </Button>
        </Col>
        <TodoForm
          modalType="update"
          showModal={showModal}
          defaultValues={{ name: item.name, description: item.description }}
          onModalClose={handleEditModalClose}
          onSubmit={handleEditModalSubmit}
        />
      </Row>
    </Container>
  );
};

export default TodoItemElement;
