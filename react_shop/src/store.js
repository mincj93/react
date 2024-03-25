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
    // useState의 이름(name) 과 초기화값(initialState) 을 정의
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 },
    ],

    reducers: {
        //useState의 상태를 변경하는 함수들을 정의.
        addCount(state, action) {
            state[action.payload].count++
        },
        minCount(state, action) {
            if (state[action.payload].count != 0) {
                state[action.payload].count--
            }
        },
        deleteList(state, action) {
            lg(`action.payload == ${JSON.stringify(action.payload)}`) // 인덱스번호인 i 값이 들어잇음.
            state.splice(action.payload, 1);
        }
    },
});

export let { addCount, minCount, deleteList } = cart.actions;

export default configureStore({
    // 생성한 리덕스state 등록 및 export
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
});