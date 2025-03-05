"use client";
import * as React from "react";

interface NumProductsInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function NumProductsInput({ value, onChange }: NumProductsInputProps) {
  return (
    <div className="flex flex-col justify-center p-2.5 max-md:max-w-full">
      <div className="flex flex-col justify-center items-start h-22 w-full bg-white border border-black border-solid max-md:pr-5 max-md:max-w-full">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter the number of products you would list upon launch"
          required
          aria-label="Number of products to list upon launch"
          className="flex-1 p-2.5 text-black text-3xl placeholder:text-gray-500 outline-none w-full transition-all duration-200 focus:ring-2 focus:ring-black focus:ring-opacity-50 hover:bg-gray-50"
        />
      </div>
    </div>
  );
}