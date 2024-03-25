import { configureStore, createSlice } from '@reduxjs/toolkit';

const lg = console.log;

let userSlice = createSlice({
    name: 'user',
    initialState: { name: 'kim', age: 20 },
    reducers: {
        increase(state) {
            // state.age += 1
            state.age = state.age + 1;
        }
    }
});

export let { increase } = userSlice.actions;

export default userSlice;