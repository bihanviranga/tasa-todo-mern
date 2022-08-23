import mongoose from 'mongoose';

const todoItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  favourite: {
    type: Boolean,
  },
});

const TodoItem = mongoose.model('TodoItem', todoItemSchema);

export default TodoItem;
