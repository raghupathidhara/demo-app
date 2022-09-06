import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store= configureStore({
    reducer:{
        usersData: userSlice
    }
})

export type RootState= ReturnType<typeof store.getState>
export type ActionDispatch= typeof store.dispatch

export default store