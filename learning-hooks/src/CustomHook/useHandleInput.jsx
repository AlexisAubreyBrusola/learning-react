import { useState } from "react";

export const useHandleInput = () => {
  const [state, setState] = useState("");

  const handleInputChange = (e) => {
    setState(e.target.value);
  };

  return [state, setState, handleInputChange];
};
