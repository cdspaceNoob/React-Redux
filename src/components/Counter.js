import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.counter;
  });
  const isShow = useSelector((state) => {
    return state.counter.showCounter;
  });

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  // const increaseHandler = () => {
  //   dispatch({ type: "INCREASE", amount: 5 });
  // };

  // const incrementHandler = () => {
  //   dispatch({ type: "INCREMENT" });
  // };

  // const decrementHandler = () => {
  //   dispatch({ type: "DECREMENT" });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: "TOGGLE" });
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShow && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
