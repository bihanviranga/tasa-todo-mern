import { Router } from 'express';

import {
  getAllTodos,
  createNewTodo,
  deleteTodo,
} from '../controller/todoController';

const router = Router();

router.get('/', getAllTodos);

router.post('/', createNewTodo);

router.patch('/', (_req, res) => {
  res.send('todo PATCH');
});

router.delete('/:id', deleteTodo);

export default router;
