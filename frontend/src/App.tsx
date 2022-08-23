import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { useAppSelector, useAppDispatch } from './hooks';
import { switchListMode } from './redux/slices/todoSlice';
import TodoList from './components/todoList';
import TodoAdd from './components/todoAdd';

function App() {
  const dispatch = useAppDispatch();
  const listMode = useAppSelector((state) => state.todos.listMode);

  const handleListModeChange = (mode: string) => {
    if (mode === listMode) return;
    dispatch(switchListMode(mode));
  };

  return (
    <Container className="mt-4">
      <Row className="text-center">
        <h1>Todo List</h1>
      </Row>
      <Row className="justify-content-between">
        <Col sm={8}>
          <TodoAdd />
        </Col>
        <Col>
          <Row className="justify-content-end">
            <ButtonGroup>
              <Button
                variant={listMode === 'all' ? 'primary' : 'outline-secondary'}
                onClick={() => handleListModeChange('all')}
              >
                All todos
              </Button>
              <Button
                variant={listMode === 'favs' ? 'primary' : 'outline-secondary'}
                onClick={() => handleListModeChange('favs')}
              >
                Favourites
              </Button>
            </ButtonGroup>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
