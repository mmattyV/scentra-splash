import * as React from "react";

interface WaitlistButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function WaitlistButton({ onClick, type = "button" }: WaitlistButtonProps) {
  return (
    <div className="flex flex-col justify-center p-2.5 text-center text-white w-full">
      <button
        type={type}
        onClick={onClick}
        className="flex flex-col items-center h-14 px-8 w-full bg-black border border-black transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 rounded-2xl"
      >
        <span className="flex-1 flex items-center justify-center text-lg">
          JOIN WAITLIST
        </span>
      </button>
    </div>
  );
}