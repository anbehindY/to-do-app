import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    completeTask: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload)
      state.todos[index].completed = true
    },
  }
})


export const { addTodo, removeTodo, completeTask } = todoSlice.actions

export default todoSlice.reducer
