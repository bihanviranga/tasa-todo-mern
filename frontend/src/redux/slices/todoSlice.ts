import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { TodoItem } from '../../types/todo';

const API_BASE = 'http://localhost:8080/api/todo';

interface TodoSliceState {
  items: TodoItem[];
}

const initialState: TodoSliceState = { items: [] };

export const getAllTodos = createAsyncThunk('todos/getAll', async () => {
  const response = await axios.get(API_BASE);
  return response.data;
});

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
  },
});

export default todoSlice.reducer;
