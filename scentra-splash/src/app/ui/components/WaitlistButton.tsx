import * as React from "react";

interface WaitlistButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function WaitlistButton({ onClick, type = "button" }: WaitlistButtonProps) {
  return (
    <div className="flex flex-col justify-center p-2.5 text-center text-3xl text-white max-md:max-w-full">
      <button
        type={type}
        onClick={onClick}
        className="flex flex-col items-center h-22 px-16 w-full bg-black border border-black border-solid max-md:px-5 max-md:max-w-full transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <span className="flex-1 flex items-center justify-center">
          JOIN WAITLIST
        </span>
      </button>
    </div>
  );
}