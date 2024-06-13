import InputFocus from "./InputFocus";
import StoringPreviousValue from "./StoringPreviousValue";

const UseRef = () => {
  return (
    <>
      <div className="p-2.5 border-2 border-slate-400 rounded-md max-w-fit flex flex-col gap-2 h-fit">
        <InputFocus />
      </div>

      <div className="p-2.5 border-2 border-slate-400 rounded-md max-w-fit flex flex-col gap-2 h-fit">
        <StoringPreviousValue />
      </div>
    </>
  );
};

export default UseRef;
