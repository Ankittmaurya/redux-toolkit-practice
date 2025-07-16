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
        },
        setTodos: (state,action)=>{
            state.todos = action.payload
        }
    }
})

export const {addTodo,removeTodo,toggleTodo,updateTodo,setTodos} = TodoSlice.actions;

export default TodoSlice.reducer

