import { ChangeEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { TodoItemCreateUpdateDto } from '../types/todo';

interface TodoFormProps {
  modalType: 'add' | 'update';
  showModal: boolean;
  defaultValues?: {
    name: string;
    description: string;
  };
  onModalClose: () => void;
  onSubmit: (data: TodoItemCreateUpdateDto) => void;
}

const TodoForm = (props: TodoFormProps) => {
  const { modalType, showModal, defaultValues, onModalClose, onSubmit } = props;

  const emptyFormFields = {
    name: '',
    description: '',
  };

  const [inputFields, setInputFields] = useState<TodoItemCreateUpdateDto>(
    modalType === 'update' && defaultValues ? defaultValues : emptyFormFields,
  );

  const handleModalClose = () => {
    onModalClose();
    setInputFields(emptyFormFields);
  };

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(inputFields);
    handleModalClose();
  };

  return (
    <Container>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          {modalType === 'add' ? 'Add new' : 'Update'} todo
        </Modal.Header>
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
            {modalType === 'add' ? 'Add' : 'Update'}
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
