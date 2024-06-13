import { useState, useRef, useEffect } from "react";

// This component demonstrates how to store the previous value of a state variable using a ref.
const StoringPreviousValue = () => {
  // Declare a state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  // Declare a ref to store the previous value of 'count'
  const prevCountRef = useRef();

  // useEffect hook runs after every render when 'count' changes
  useEffect(() => {
    // Store the current value of 'count' in 'prevCountRef'
    prevCountRef.current = count;
  }, [count]); // Dependency array includes 'count', so this effect runs whenever 'count' changes

  return (
    <div className="grid gap-2">
      <span>Storing Previous Value</span>
      {/* Display the current value of 'count' */}
      <h1 className="font-semibold">Count: {count}</h1>
      {/* Display the previous value of 'count' stored in 'prevCountRef.current' */}
      <h2 className="font-semibold">Previous Count: {prevCountRef.current}</h2>
      <button
        className="max-w-fit bg-slate-50 text-blue-950 rounded-sm px-2"
        // Update the 'count' state when the button is clicked
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
};

export default StoringPreviousValue;
