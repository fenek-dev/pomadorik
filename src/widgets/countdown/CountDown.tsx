import { useCallback } from "react";
import { Control } from "./Control";
import { Timer } from "./Timer";
import { useCountDown } from "./useCountDown";
const initialTime = 1500;
export const CountDown = () => {
  const { isStopped, resetTo, time, toggle } = useCountDown(initialTime);

  const reset = useCallback(() => {
    resetTo(initialTime);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Timer
        initialTime={initialTime}
        isStopped={isStopped}
        time={time}
        toggle={toggle}
      />
      <Control reset={reset} />
    </div>
  );
};
