import { ChangeEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useAppDispatch } from '../hooks';
import { createNewTodo } from '../redux/slices/todoSlice';

const TodoForm = () => {
  const dispatch = useAppDispatch();

  const defaultFormFields = {
    name: '',
    description: '',
  };

  const [showModal, setShowModal] = useState(false);
  const [inputFields, setInputFields] = useState(defaultFormFields);

  const handleModalClose = () => {
    setShowModal(false);
    setInputFields(defaultFormFields);
  };

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(createNewTodo(inputFields));
    handleModalClose();
  };

  return (
    <Container>
      <Button variant="outline-primary" onClick={() => setShowModal(true)}>
        Add new todo
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>Add new todo</Modal.Header>
        <Modal.Body>
          <Container>
            <Form.Group>
              <Form.Label className="mb-1">Name</Form.Label>
              <Form.Control
                name="name"
                value={inputFields.name}
                onChange={handleTextChange}
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label className="mb-1">Description</Form.Label>
              <Form.Control
                name="description"
                value={inputFields.description}
                onChange={handleTextChange}
              />
            </Form.Group>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-success"
            onClick={handleSubmit}
            disabled={inputFields.name === ''}
          >
            Add
          </Button>
          <Button variant="outline-secondary" onClick={handleModalClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TodoForm;
