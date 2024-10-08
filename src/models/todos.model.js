import mongoose from "mongoose";

const subTodoListSchema = new mongoose.Schema({
  todoName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    default: "To Do",
  },
  dueDate: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
});

const todoSchema = new mongoose.Schema(
  {
    todoListName: {
      type: String,
      required: true,
      unique: true,
    },
    subTodo: [subTodoListSchema],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    backgroundImage: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
