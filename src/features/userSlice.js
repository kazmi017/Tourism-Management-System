import {createSlice} from "@reduxjs/toolkit";


export const userslice= createSlice({
    name:"users",
    initialState:{
        user:{
            email:"none",
            isloggedIn:false
        }
    },
    reducers:{
        login: (state,action) =>{
            state.user= action.payload;
        }
    }
});

export const {login}=userslice.actions;

export const selectUser=(state)=> state.user.user;

export default userslice.reducer;