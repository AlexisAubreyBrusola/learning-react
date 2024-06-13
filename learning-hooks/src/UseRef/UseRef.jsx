import InputFocus from "./InputFocus";
import StoringPreviousValue from "./StoringPreviousValue";
import Timer from "./Timer";

const UseRef = () => {
  return (
    <>
      <div className="p-2.5 border-2 border-slate-400 rounded-md w-[310px] flex flex-col gap-2 h-fit">
        <InputFocus />
      </div>

      <div className="p-2.5 border-2 border-slate-400 rounded-md w-[310px] flex flex-col gap-2 h-fit">
        <StoringPreviousValue />
      </div>

      <div className="p-2.5 border-2 border-slate-400 rounded-md w-[310px] flex flex-col gap-2 h-fit">
        <Timer />
      </div>
    </>
  );
};

export default UseRef;
