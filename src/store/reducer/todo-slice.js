import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: ["list1", "list2", "list3", "list4", "list5",]
  },
  reducers: {
    editTodo(state, action) {
      const index = action.payload.index;
      const todo = action.payload.todo;
      state.todos[index] = todo;
    },
    addNewTodo(state, action) {
      state.todos.push(action.payload.todo);
    },
    deleteTodo(state, action) {
      state.todos.splice(action.payload.index, 1);
    }
  }
})
export const todoActions = todoSlice.actions;
export default todoSlice;