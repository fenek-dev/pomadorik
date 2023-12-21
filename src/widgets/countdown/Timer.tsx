import React from "react";
import { AnyInlineStyleType } from "../../shared/types/style";
import { secondsToHms } from "../../shared/utils";

interface TimerProps {
  time: number;
  initialTime: number;
  toggle: () => void;
  isStopped: boolean;
}

export const Timer = ({ time, initialTime, isStopped, toggle }: TimerProps) => {
  const hms = secondsToHms(time);

  return (
    <div
      className="radial-progress bg-primary bg-opacity-10 border-opacity-50 "
      style={
        {
          "--value": (time / initialTime) * 100,
          "--size": "15rem",
          "--thickness": "8px",
        } as AnyInlineStyleType
      }
      onClick={toggle}
      role="progressbar"
    >
      <div>
        <p className="font-bold text-xl text-center">
          <span className="countdown font-mono text-4xl">
            <span
              style={{ "--value": hms.minutes } as AnyInlineStyleType}
            ></span>
            :
            <span
              style={{ "--value": hms.seconds } as AnyInlineStyleType}
            ></span>
          </span>
        </p>
        <div className="flex justify-center mt-4">
          {isStopped ? (
            <svg
              className="w-8 h-8 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 14 16"
            >
              <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z" />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 12 16"
            >
              <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
