import React, { useEffect, useState } from "react";
import { CountDown } from "../widgets/countdown/CountDown";

export const MainPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount((v) => v + 0.1), 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="flex justify-center items-center h-full">
      <CountDown text="Tap to start" value={count} />
    </section>
  );
};
