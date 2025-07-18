import React, { useReducer, useState } from "react";
//Note: type tells what to do,
// payload tells how to do it.

// Reducer function for count logic
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "incrementBy":
      return state + action.payload;
    case "decrementBy":
      return state - action.payload;
    default:
      throw new Error("Unknown action");
  }
}

export default function MixedCounter() {
  const [count, dispatch] = useReducer(counterReducer, 0); // main counter
  const [inputAmount, setInputAmount] = useState(1); // input state

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Count: {count}</h2>

      {/* Simple +1 / -1 buttons using useReducer */}
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>

      <br />
      <br />

      {/* Input controlled by useState */}
      <input
        type="number"
        value={inputAmount}
        onChange={(e) => setInputAmount(Number(e.target.value))}
      />

      {/* Buttons to dispatch actions with payload from input */}
      <button
        onClick={() => dispatch({ type: "incrementBy", payload: inputAmount })}
      >
        +Amount
      </button>
      <button
        onClick={() => dispatch({ type: "decrementBy", payload: inputAmount })}
      >
        -Amount
      </button>
    </div>
  );
}
