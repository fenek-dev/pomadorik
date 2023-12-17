import React from "react";

interface CountDownProps {
  text: string;
  value: number;
  onTap?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const CountDown = ({ text, value, onTap }: CountDownProps) => {
  return (
    <div
      onClick={onTap}
      className="radial-progress"
      style={
        { "--value": value, "--size": "15rem", "--thickness": "8px" } as Record<
          string,
          string | number
        >
      }
      role="progressbar"
    >
      <p className="font-bold text-lg">{text}</p>
    </div>
  );
};
