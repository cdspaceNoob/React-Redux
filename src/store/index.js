// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
// const redux = require("redux");

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

// 액션 생성자. 직접 액션 객체를 생성할 필요가 없다.
export const counterActions = counterSlice.actions;

export default store;
