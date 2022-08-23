import { Router } from 'express';

import { getAllTodos, createNewTodo } from '../controller/todoController';

const router = Router();

router.get('/', getAllTodos);

router.post('/', createNewTodo);

router.patch('/', (_req, res) => {
  res.send('todo PATCH');
});

router.delete('/', (_req, res) => {
  res.send('todo DELETE');
});

export default router;
