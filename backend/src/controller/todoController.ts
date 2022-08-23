import { Request, Response } from 'express';

import TodoItem from '../entity/todoItem';

export const getAllTodos = async (_req: Request, res: Response) => {
  const todos = await TodoItem.find();
  res.send(todos);
};

export const temp = 1;
