import * as React from "react";

interface WaitlistButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function WaitlistButton({ onClick, disabled }: WaitlistButtonProps) {
  return (
    <div className="flex flex-col justify-center p-2.5 text-center text-3xl text-white max-md:max-w-full">
      <button
        onClick={onClick}
        disabled={disabled}
        className="flex flex-col items-center h-22 px-16 w-full bg-black border border-black border-solid max-md:px-5 max-md:max-w-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] hover:bg-gray-900"
      >
        <span className="flex-1 flex items-center justify-center">
          JOIN WAITLIST
        </span>
      </button>
    </div>
  );
}