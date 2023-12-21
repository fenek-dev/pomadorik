import { useCountDown } from "./useCountDown";
const initialTime = 10;
export const CountDown = () => {
  const { isStopped, resetTo, setTime, time, toggle } =
    useCountDown(initialTime);
  return (
    <div
      className="radial-progress"
      style={
        { "--value": time, "--size": "15rem", "--thickness": "8px" } as Record<
          string,
          string | number
        >
      }
      onClick={toggle}
      role="progressbar"
    >
      <p className="font-bold text-lg">
        {isStopped && time === initialTime
          ? "Tap to start"
          : Math.floor(time || 0)}
      </p>
    </div>
  );
};
