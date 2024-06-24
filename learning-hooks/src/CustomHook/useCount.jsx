import { useState, useEffect } from "react";

export const useCount = (numStart = 0, countValue = 1) => {
  const [count, setCount] = useState(numStart);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    setCount(numStart);
  }, [numStart]);

  const increment = () => {
    setCount(Number(count) + Number(countValue));
  };

  const decrement = () => {
    setCount(Number(count) - Number(countValue));
  };

  const reset = () => {
    setCount(0);
    setIsReset((prevState) => !prevState);
  };

  return [count, increment, decrement, reset, isReset];
};
