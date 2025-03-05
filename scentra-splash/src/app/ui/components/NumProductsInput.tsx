"use client";
import * as React from "react";

interface NumProductsInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function NumProductsInput({ value, onChange }: NumProductsInputProps) {
  return (
    <div className="flex flex-col justify-center p-2.5 w-full">
      {/* Container with border */}
      <div className="relative h-14 md:h-22 w-full bg-white border border-black pr-2 md:pr-5">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="# of products you would list on launch"
          required
          aria-label="Number of products to list upon launch"
          className="absolute inset-0 w-full h-full p-2 box-border text-black text-xs md:text-2xl lg:text-3xl placeholder:text-gray-500 outline-none transition-all duration-200 focus:ring-1 focus:ring-black focus:ring-inset focus:ring-opacity-50 hover:bg-gray-50"
        />
      </div>
    </div>
  );
}