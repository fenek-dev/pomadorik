import React from "react";
import { secondsToMinutes } from "../../shared/utils";
import {
  TimerVariants,
  VARIANT_TEXTS,
} from "../../app/store/reducers/timer/timer.const";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { changeVariant } from "../../app/store/reducers/timer/timer.slice";

interface ControlProps {
  reset: () => void;
  setTime: (time: number) => void;
}

export const Control = React.memo(({ reset, setTime }: ControlProps) => {
  const dispatch = useDispatch();
  const timer = useSelector((state: RootState) => state.timer);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value as TimerVariants;

    setTime(timer[value]);
    dispatch(changeVariant(value));
  };

  return (
    <div className="flex gap-2">
      <button
        className="btn btn-circle"
        onClick={reset}
        title="Reset"
        aria-label="Reset"
      >
        <svg
          className="w-6 h-9 text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m12 7 3-3-3-3m0 12H5.5a4.5 4.5 0 1 1 0-9H14"
          />
        </svg>
      </button>
      <select
        className="focus:outline-0 select select-ghost w-full max-w-xs border-0 text-center mr-2"
        onChange={handleChange}
        value={timer.variant}
      >
        {Object.values(TimerVariants).map((value) => (
          <option className="uppercase" key={value} value={value}>
            {VARIANT_TEXTS[value]} {secondsToMinutes(timer[value])} MIN
          </option>
        ))}
      </select>
    </div>
  );
});
