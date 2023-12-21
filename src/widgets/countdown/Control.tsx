import React from "react";

interface ControlProps {
  reset: () => void;
}

export const Control = React.memo(({ reset }: ControlProps) => {
  return (
    <div>
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
    </div>
  );
});
