import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { TodoItem, TodoItemCreateUpdateDto } from '../../types/todo';

const API_BASE = 'http://localhost:8080/api/todo';

interface TodoSliceState {
  items: TodoItem[];
}

const initialState: TodoSliceState = { items: [] };

export const getAllTodos = createAsyncThunk('todos/getAll', async () => {
  try {
    const response = await axios.get(API_BASE);
    return response.data;
  } catch (err) {
    console.error('Failed to get todos:', err);
  }
});

export const createNewTodo = createAsyncThunk(
  'todos/create',
  async (data: TodoItemCreateUpdateDto) => {
    try {
      const response = await axios.post(API_BASE, data);
      return response.data;
    } catch (err) {
      console.error('Failed to create todo:', err);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/delete',
  async (id: string) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
    } catch (err) {
      console.error('Failed to delete todo:', err);
    }
  },
);

export const updateTodo = createAsyncThunk(
  'todos/update',
  async (args: { id: string; data: TodoItem }) => {
    try {
      const { id, data } = args;
      const response = await axios.put(`${API_BASE}/${id}`, data);
      return response.data;
    } catch (err) {
      console.error('Failed to update todo:', err);
    }
  },
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(getAllTodos.rejected, () => {
      console.error('Failed to get todos');
    });

    builder.addCase(createNewTodo.fulfilled, (state, action) => {
      state.items.push(action.payload.todo);
    });
    builder.addCase(createNewTodo.rejected, () => {
      console.error('Failed to create todo');
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.meta.arg);
    });
    builder.addCase(deleteTodo.rejected, () => {
      console.error('Failed to delete todo');
    });

    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.items = state.items.map((item) => {
        if (item._id === action.meta.arg.id) {
          return action.payload.todo;
        } else {
          return item;
        }
      });
    });
    builder.addCase(updateTodo.rejected, () => {
      console.error('Failed to update todo');
    });
  },
});

export default todoSlice.reducer;
