import { useState } from "react";

export const ArrowUseState = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const [randomNumber, setRandomNumber] = useState(() => {
    const randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
  });

  const generateRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newNumber);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>

      <h1>Random Number: {randomNumber}</h1>
      <button onClick={generateRandomNumber}>Random Number</button>
    </div>
  );
};
