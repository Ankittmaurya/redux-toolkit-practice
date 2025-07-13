import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null
}

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        loginStart: (state)=>{
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state,action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.loading = false
        }
    }
})