import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { useAppDispatch } from '../hooks';
import { TodoItemCreateUpdateDto } from '../types/todo';
import { createNewTodo } from '../redux/slices/todoSlice';
import TodoForm from './todoForm';

const TodoAdd = () => {
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (data: TodoItemCreateUpdateDto) => {
    dispatch(createNewTodo(data));
  };

  return (
    <Container>
      <Button variant="outline-primary" onClick={() => setShowModal(true)}>
        Add new todo
      </Button>

      <TodoForm
        modalType="add"
        showModal={showModal}
        onModalClose={handleModalClose}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default TodoAdd;
