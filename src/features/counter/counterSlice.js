import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const CounterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: (state,action)=>{
            if(state.value < 10){
                state.value = state.value + 1
            }
            
        },
        decrement: (state,action)=>{
            if(state.value > 0){
                state.value = state.value - 1
            }
            
        }
    }
})
export const {increment,decrement} = CounterSlice.actions;

export default CounterSlice.reducer;