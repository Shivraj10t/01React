import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    {
      id: 1,
      text: "hello shivraj",
      isComplited: false,
    },
  ],
};
export const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isComplited: false,
      };
      console.log(action);
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    // editTodo: (state, action) => {},
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
