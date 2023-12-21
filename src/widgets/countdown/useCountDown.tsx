import { useEffect, useState } from "react";
import { useToggle } from "../../shared/hooks";

export const useCountDown = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [isStopped, toggleStop] = useToggle(true);

  useEffect(() => {
    let interval: number | undefined;
    if (!isStopped) {
      interval = setInterval(
        () =>
          setTime((v) => {
            if (v <= 0) {
              toggleStop();
              return v;
            }
            return v - 0.25;
          }),
        250
      );
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStopped]);

  const resetTo = (time: number) => {
    setTime(time);
    toggleStop(true);
  };

  const toggle = () => {
    if (time > 0 || !isStopped) toggleStop();
  };

  return {
    setTime,
    toggle,
    time,
    resetTo,
    isStopped,
  };
};
