import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TodoList from './components/todoList';

function App() {
  return (
    <Container className="mt-4">
      <Row className="text-center">
        <h1>Todo List</h1>
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
