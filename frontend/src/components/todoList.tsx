import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { useAppDispatch, useAppSelector } from '../hooks';
import { getAllTodos } from '../redux/slices/todoSlice';
import TodoItemElement from './todoItem';

const TodoList = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todos.items);

  const triggerGetAllTodos = () => {
    dispatch(getAllTodos());
  };

  useEffect(() => {
    triggerGetAllTodos();
  }, []);

  return (
    <Container>
      {todos.map((todo) => (
        <Row key={todo._id} className="my-2">
          <TodoItemElement item={todo} />
        </Row>
      ))}
    </Container>
  );
};

export default TodoList;
