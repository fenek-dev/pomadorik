import { useEffect, useState } from "react";
import { useToggle } from "../../shared/hooks";

export const useCountUp = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [isStopped, toggle] = useToggle(true);

  useEffect(() => {
    let interval: number | undefined;
    if (!isStopped) {
      interval = setInterval(
        () =>
          setTime((v) => {
            return v + 0.1;
          }),
        100
      );
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStopped]);

  const resetTo = (time: number) => {
    setTime(time);
    toggle(true);
  };

  return {
    setTime,
    toggle,
    time,
    resetTo,
    isStopped,
  };
};
