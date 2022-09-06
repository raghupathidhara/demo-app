import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: string
    name: string
    age: number
}

interface Users {
    users: User[]
}

const initialState: Users = {
    users: []
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload)
        },

        deleteUser: (state, action: PayloadAction<string>) => {
            const index = state.users.findIndex(user => user.id === action.payload)
            state.users.splice(index, 1)
        }
    }
})

export const { addUser, deleteUser } = userSlice.actions
export default userSlice.reducer