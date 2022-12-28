import {configureStore} from '@reduxjs/toolkit';
import { customReducer } from './Reducer';
import { customReducer1 } from './Reducer1';

const store = configureStore({
    reducer:{
        custom:customReducer,
        custom1:customReducer1
    }
});

export default store;