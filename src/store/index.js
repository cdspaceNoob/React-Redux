import { createStore } from "redux";
// const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if ((action.type = "INCREMENT")) {
    return {
      counter: state.counter + 1,
    };
  }

  if ((action.type = "DECREMENT")) {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;

// const subscriberCounter = () => {
//   const latestCounter = store.getState();
//   console.log(latestCounter);
// };

// store.subscriber(subscriberCounter);

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
