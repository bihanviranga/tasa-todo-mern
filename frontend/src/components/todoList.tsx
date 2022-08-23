import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { useAppDispatch, useAppSelector } from '../hooks';
import { getAllTodos } from '../redux/slices/todoSlice';
import TodoItemElement from './todoItem';

const TodoList = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todos.items);
  const listMode = useAppSelector((state) => state.todos.listMode);

  const triggerGetAllTodos = () => {
    dispatch(getAllTodos());
  };

  useEffect(() => {
    triggerGetAllTodos();
  }, []);

  return (
    <Container>
      {todos.map((todo) => {
        if (listMode === 'all' || (listMode === 'favs' && todo.favourite)) {
          return (
            <Row key={todo._id} className="my-2">
              <TodoItemElement item={todo} />
            </Row>
          );
        }
      })}
    </Container>
  );
};

export default TodoList;
