"use client";
import * as React from "react";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function EmailInput({ value, onChange }: EmailInputProps) {
  return (
    <div className="flex flex-col justify-center p-2.5 w-full">
      {/* Container with border */}
      <div className="relative h-14 md:h-22 w-full bg-white border border-black pr-2 md:pr-5">
        <input
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Email"
          required
          aria-label="Email address"
          className="absolute inset-0 w-full h-full p-2 box-border text-black text-lg md:text-3xl placeholder:text-gray-500 outline-none transition-all duration-200 focus:ring-1 focus:ring-black focus:ring-inset focus:ring-opacity-50 hover:bg-gray-50"
        />
      </div>
    </div>
  );
}