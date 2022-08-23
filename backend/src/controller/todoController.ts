import { Request, Response } from 'express';

import TodoItem from '../entity/todoItem';

export const getAllTodos = async (_req: Request, res: Response) => {
  try {
    const todos = await TodoItem.find();
    res.send(todos);
  } catch (err) {
    console.error('Failed to get todos:', err);
    res.status(500);
    res.send();
  }
};

export const createNewTodo = async (req: Request, res: Response) => {
  try {
    const todo = new TodoItem({
      name: req.body.name,
      description: req.body.description,
      completed: false,
    });
    await todo.save();
    res.status(201).json({
      todo,
    });
  } catch (err) {
    console.error('Failed to create new todo: ', err);
    res.status(500);
    res.send();
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await TodoItem.findByIdAndDelete(id);
    res.send();
  } catch (err) {
    console.error('Failed to delete todo:', err);
    res.status(500);
    res.send();
  }
};
