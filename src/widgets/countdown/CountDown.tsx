import { useCallback } from "react";
import { Control } from "./Control";
import { Timer } from "./Timer";
import { useCountDown } from "./useCountDown";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";

export const CountDown = () => {
  const timer = useSelector((state: RootState) => state.timer);
  const { isStopped, resetTo, time, toggle } = useCountDown(
    timer[timer.variant]
  );

  const reset = useCallback(
    () => resetTo(timer[timer.variant]),
    [timer.variant]
  );

  return (
    <div className="flex flex-col gap-4">
      <Timer
        initialTime={timer[timer.variant]}
        isStopped={isStopped}
        time={time}
        toggle={toggle}
      />
      <Control reset={reset} setTime={resetTo} />
    </div>
  );
};
