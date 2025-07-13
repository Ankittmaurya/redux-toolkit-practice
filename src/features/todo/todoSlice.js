import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todoArr = state.todos;
            todoArr.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload);
        },
        toggleTodo: (state,action)=>{
            const todoItem = state.todos.find((todo)=> todo.id === action.payload);
            if (todoItem) {
                todoItem.completed = !todoItem.completed
            }
        },
        updateTodo: (state,action)=>{
            const {id,text} = action.payload
            const todo = state.todos.find((item)=> item.id === id)
            todo.text = text
        }
    }
})

export const {addTodo,removeTodo,toggleTodo,updateTodo} = TodoSlice.actions;

export default TodoSlice.reducer

