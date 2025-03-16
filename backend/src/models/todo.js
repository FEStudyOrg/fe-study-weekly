import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  /* userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }, */
  task: { type: String, required: true },
  category: {
    type: String,
    enum: ['study', 'exercise', 'chore'],
    required: true,
    default: 'chore',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    required: false,
    default: 'medium',
  },
  dueDate: { type: Date, required: false },
  isCompleted: { type: Boolean, required: false, default: false },
});

export default mongoose.model('Todo', todoSchema);
