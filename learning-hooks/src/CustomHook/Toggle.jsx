import { useToggle } from "./useToggle";

const Toggle = () => {
  const [isVisible, toggle] = useToggle();
  return (
    <div className="flex flex-col items-center gap-6">
      <button onClick={toggle} className="bg-[#2e3b65] px-6 py-2 min-w-[100px]">
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <h1 className="text-xl">What is up!!!</h1>}
    </div>
  );
};

export default Toggle;
