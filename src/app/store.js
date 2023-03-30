import { configureStore } from "@reduxjs/toolkit";

import  useReducer from "./slices/UserSlice";

const store = configureStore({
    reducer:{
        users:useReducer,
    },
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;