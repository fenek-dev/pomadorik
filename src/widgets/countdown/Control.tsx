import React from "react";

interface ControlProps {
  reset: () => void;
  forward: () => void;
}

export const Control = React.memo(({ reset, forward }: ControlProps) => {
  return (
    <div className="flex justify-evenly items-center">
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
      <button
        className="btn btn-circle"
        onClick={forward}
        title="Rest"
        aria-label="Rest"
      >
        <svg
          className="w-6 h-6 text-primary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 12 16"
        >
          <path d="M11 0a1 1 0 0 0-1 1v5.7a2.028 2.028 0 0 0-.177-.194L3.33.732A2 2 0 0 0 0 2.227v11.546A1.977 1.977 0 0 0 1.181 15.6a1.982 1.982 0 0 0 2.147-.33l6.5-5.773A1.88 1.88 0 0 0 10 9.3V15a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z" />
        </svg>
      </button>
    </div>
  );
});
