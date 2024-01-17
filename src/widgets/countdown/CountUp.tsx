import { useCallback, useEffect } from "react";
import { Control } from "./Control";
import { Timer } from "./Timer";
import { useCountUp } from "./useCountDown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { forward } from "../../app/store/reducers/timer/timer.slice";
import { TimerVariants } from "../../app/store/reducers/timer/timer.const";

export const CountUp = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state: RootState) => state.timer);
  const { isStopped, resetTo, time, toggle } = useCountUp(timer[timer.variant]);

  const reset = useCallback(
    () => resetTo(timer[timer.variant]),
    [timer.variant]
  );
  console.log(timer.variant);

  const forwardFn = useCallback(() => {
    dispatch(forward(time));
    toggle(true);
    reset();
  }, [time]);

  useEffect(() => {
    if (timer.variant === TimerVariants.REST_TIME && time >= timer.REST_TIME) {
      toggle(true);
      reset();
      dispatch(forward(0));
    }
  }, [timer.variant, time]);

  return (
    <div className="flex flex-col gap-4">
      <Timer
        initialTime={
          timer.variant === TimerVariants.POMADORO_TIME ? 60 : timer.REST_TIME
        }
        isStopped={isStopped}
        time={time}
        toggle={toggle}
      />
      <Control reset={reset} forward={forwardFn} />
    </div>
  );
};
