import { useCountDown } from "./useCountDown";

export const CountDown = () => {
  const { toggle, value, isPaused, remains } = useCountDown({
    time: 200,
  });
  return (
    <div
      className="radial-progress"
      style={
        { "--value": value, "--size": "15rem", "--thickness": "8px" } as Record<
          string,
          string | number
        >
      }
      onClick={toggle}
      role="progressbar"
    >
      <p className="font-bold text-lg">
        {!isPaused && value === 100 ? "Tap to start" : Math.floor(remains || 0)}
      </p>
    </div>
  );
};
