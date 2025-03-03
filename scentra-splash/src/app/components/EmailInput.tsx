"use client";
import * as React from "react";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function EmailInput({ value, onChange }: EmailInputProps) {
  return (
    <div className="flex flex-col justify-center p-2.5 max-md:max-w-full">
      <div className="flex flex-col justify-center items-start h-22 w-full bg-white border border-black border-solid max-md:pr-5 max-md:max-w-full">
        <input
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 p-2.5 text-gray-500 text-3xl outline-none w-full transition-all duration-200 focus:ring-2 focus:ring-black focus:ring-opacity-50 hover:bg-gray-50"
          aria-label="Email address"
        />
      </div>
    </div>
  );
}