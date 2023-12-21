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
            if (v <= 0.2) {
              toggleStop();
              return v;
            }
            return v - 0.1;
          }),
        100
      );
    }
    return () => {
      console.log("hello", interval);

      clearInterval(interval);
    };
  }, [isStopped]);

  const resetTo = (time: number) => {
    setTime(time);
    !isStopped && toggleStop();
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
