// Use case: Accessing DOM elements directly using

import { useRef } from "react";

// When the button is clicked, the input element will be focused
const InputFocus = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="grid gap-2">
      <h1>Input Focus</h1>
      <div className="flex gap-2">
        <input
          type="text"
          ref={inputRef}
          className="bg-transparent border-2 border-slate-400 px-1"
        />
        <button
          onClick={handleClick}
          className="bg-slate-50 text-blue-950 rounded-sm px-2"
        >
          Focus
        </button>
      </div>
    </div>
  );
};

export default InputFocus;
