import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type User = {
    id:  number | null;
    name: string | null;
}

const initialState:User = {
    id: null,
    name: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action:PayloadAction<User>) {
            state.id = action.payload.id;
            state.name = action.payload.name;
        },
        removeUser(state, action:PayloadAction<{userExit:boolean}>) {
            if(action.payload.userExit) {
                state.id = null;
                state.name = null;
            }
        }
    }
})

export default userSlice.reducer;
export const {addUser, removeUser} = userSlice.actions;