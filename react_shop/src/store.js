import { configureStore, createSlice } from '@reduxjs/toolkit';

const lg = console.log;

let user = createSlice({
    name: 'user',
    initialState: 'kim',
    reducers: {
        fnc_changeName(state) {
            lg(`redux fnc_changeName state = ${state}`);
            return 'john ' + state;
        },
    },
});

export let { fnc_changeName } = user.actions;

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 },
    ],
    reducers: {
        addCount(state, action) {
            lg(`redux addCount의 action = ${JSON.stringify(action)}`)
            state[action.payload].count++
        },
        minCount(state, action) {
            lg(`redux minCount의 action = ${JSON.stringify(action)}`)
            state[action.payload].count--
        }
    },
});

export let { addCount, minCount } = cart.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
});