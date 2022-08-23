import { Router } from 'express';

// import TodoItem from '../entity/todoItem';
import { getAllTodos } from '../controller/todoController';

const router = Router();

router.get('/', getAllTodos);

router.post('/', (_req, res) => {
  res.send('todo POST');
});

router.patch('/', (_req, res) => {
  res.send('todo PATCH');
});

router.delete('/', (_req, res) => {
  res.send('todo DELETE');
});

export default router;
