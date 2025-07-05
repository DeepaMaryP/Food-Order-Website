import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    isLoggedIn: false
}

const userSlice = createSlice(
    {
        name: 'user',
        initialState: initialState,
        reducers: {
            login(state, action) {
                state.name = action.payload
                state.isLoggedIn = true;
            },
            logout(state,action){
                state.name = ""
                isLoggedIn = false;
            },
        },
    }
)

export const {login, logout} = userSlice.actions
export default userSlice.reducer