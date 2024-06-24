import { useHandleInput } from "./useHandleInput";
import { useCount } from "./useCount";
import Button from "../Button";
import Input from "../Input";
import { useRef, useEffect } from "react";

const Count = () => {
  const [startValue, setStartValue, startValueInputChange] = useHandleInput();
  const [increDecreValue, setIncreDecreValueValue, inceDecreValueInputChange] =
    useHandleInput();

  const [count, increment, decrement, reset, isReset] = useCount(
    startValue,
    increDecreValue
  );

  const startValRef = useRef(null);
  const increDecreRef = useRef(null);

  useEffect(() => {
    startValRef.current.value = "";
    increDecreRef.current.value = "";
    setStartValue();
    setIncreDecreValueValue();
  }, [isReset, setStartValue, setIncreDecreValueValue]);

  return (
    <div className="grid gap-6">
      <div className="input-container grid gap-4">
        <Input
          type={"number"}
          placeholder={"Starting Value"}
          onChange={startValueInputChange}
          refs={startValRef}
        />
        <Input
          type={"number"}
          placeholder={"Incremental/Decremental Value"}
          onChange={inceDecreValueInputChange}
          refs={increDecreRef}
        />
      </div>

      <div className="info-container grid text-white gap-2">
        <p>
          <strong>Starting Value: </strong>
          <span>{startValue}</span>
        </p>
        <p>
          <strong>Incremental/Decremental Value: </strong>
          <span>{increDecreValue}</span>
        </p>
        <h1 className="text-lg font-bold">Count: {count}</h1>
      </div>

      <div className="flex gap-2">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
};

export default Count;
