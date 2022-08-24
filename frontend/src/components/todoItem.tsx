import { useState } from 'react';
import { Pencil, Check2, Trash, StarFill } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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

  const handleToggleCompleted = () => {
    dispatch(
      updateTodo({
        id: item._id,
        data: { ...item, completed: !item.completed },
      }),
    );
  };

  const handleToggleFavourite = () => {
    dispatch(
      updateTodo({
        id: item._id,
        data: { ...item, favourite: !item.favourite },
      }),
    );
  };

  return (
    <Container
      className={
        'todoItemContainer ' + (item.completed ? 'todoItemContainerDone' : '')
      }
    >
      <Row className="align-items-center">
        <Col sm={1}>
          <Button
            size="sm"
            variant={item.completed ? 'success' : 'outline-secondary'}
            onClick={handleToggleCompleted}
          >
            <Check2 />
          </Button>
        </Col>
        <Col>
          <Row className={item.completed ? 'text-decoration-line-through' : ''}>
            {item.name}
          </Row>
          <Row
            className={
              'text-secondary ' +
              (item.completed ? 'text-decoration-line-through' : '')
            }
          >
            {item.description}
          </Row>
        </Col>
        <Col sm={1}>
          <Button
            size="sm"
            variant={item.favourite ? 'warning' : 'outline-secondary'}
            onClick={handleToggleFavourite}
          >
            <StarFill />
          </Button>
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
