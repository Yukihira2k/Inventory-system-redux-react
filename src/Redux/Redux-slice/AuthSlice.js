import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name:"Auth",
    initialState:({
        isLoggedIn:false,
        setAccount:true,
        
    }),
    reducers:{
        login: (state)=>{
            state.isLoggedIn = true
            console.log(state.isLoggedIn)
        },
        logout: (state)=>{
            state.isLoggedIn = false

        },
        signIn: (state)=>{
            state.setAccount = !state.setAccount
        }
    }
})

export const {login,logout,signIn} = AuthSlice.actions

export default AuthSlice.reducer