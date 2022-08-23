import { Router } from 'express';

import {
  getAllTodos,
  createNewTodo,
  deleteTodo,
  updateTodo,
} from '../controller/todoController';

const router = Router();

router.get('/', getAllTodos);

router.post('/', createNewTodo);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;
