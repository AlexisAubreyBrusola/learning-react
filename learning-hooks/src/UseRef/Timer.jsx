import { useState, useRef } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setSeconds(0);
  };

  return (
    <div className="flex flex-col gap-3">
      <h1>Timer</h1>
      <p>Seconds: {seconds}</p>

      <div className="flex flex-col gap-3">
        <button
          onClick={startTimer}
          className="bg-slate-50 text-blue-950 rounded-sm px-2 max-w-[35%]"
        >
          {seconds > 0 ? "Continue" : "Start"}
        </button>
        <button
          onClick={stopTimer}
          className="max-w-[35%] bg-slate-50 text-blue-950 rounded-sm px-2"
        >
          Stop
        </button>

        <button
          onClick={resetTimer}
          className="max-w-[35%] bg-slate-50 text-blue-950 rounded-sm px-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
