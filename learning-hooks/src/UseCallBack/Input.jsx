import { useState, useEffect, useCallback } from "react";

const Input = () => {
  const [userInput, setUserInput] = useState("");
  const [num1] = useState(4);
  const [num2] = useState(5);

  const sum = useCallback(() => num1 + num2, [num1, num2]);

  useEffect(() => {
    console.log(`Sum: ${sum}`);
  }, [sum]);

  return (
    <main className="App">
      <input
        type="text"
        placeholder="input"
        value={userInput}
        className="text-black px-2"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <h1>Output: {userInput || "--"}</h1>
    </main>
  );
};

export default Input;
