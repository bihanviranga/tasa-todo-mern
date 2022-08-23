import { createSlice } from '@reduxjs/toolkit';

import { TodoItem } from '../../types/todo';

const initialState: TodoItem[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
