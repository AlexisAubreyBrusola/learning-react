import { useReducer } from "react";
import Button from "../Button";

// const initialState = { count: 0 };

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div className="text-white flex flex-col gap-4">
      <h1 className="font-bold text-[1.75rem] text-center">useReducer</h1>
      <p className="text-[1.25rem]">
        <strong>Count: </strong>
        <span>{count.count}</span>
      </p>

      <div className="flex gap-2">
        <Button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </Button>
        <Button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </Button>
        <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>
      </div>
    </div>
  );
};

export default Counter;
