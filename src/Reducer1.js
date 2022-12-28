import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    c1 : 342,
    d1 : 243
}

export const customReducer1 = createReducer(initialState, {
    increment : (state) => {
        state.c1 += 1;
    },

    incrementByValue : (state, action) => {
        state.c1 += action.payload;
    },

    decrement : (state) => {
        state.c1 -= 1;
    }
});