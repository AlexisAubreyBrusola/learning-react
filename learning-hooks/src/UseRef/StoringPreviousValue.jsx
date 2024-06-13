import { useState, useRef, useEffect } from "react";

const StoringPreviousValue = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="grid gap-2">
      <span>Storing Previous Value</span>
      <h1 className="font-semibold">Count: {count}</h1>
      <h2 className="font-semibold">Previous Count: {prevCountRef.current}</h2>
      <button
        className="max-w-fit bg-slate-50 text-blue-950 rounded-sm px-2"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
};

export default StoringPreviousValue;
