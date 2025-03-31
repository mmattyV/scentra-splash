"use client";
import * as React from "react";

interface NumProductsInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function NumProductsInput({ value, onChange }: NumProductsInputProps) {
  return (
    <div className="flex flex-col justify-center p-2.5 w-full">
      {/* Container with border and focus-within styling */}
      <div className="relative h-14 w-full bg-white border border-black pr-2 rounded-2xl focus-within:border-black focus-within:ring focus-within:ring-black focus-within:ring-opacity-50 transition-all">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="# of products you would list on launch"
          required
          aria-label="Number of products to list upon launch"
          className="absolute inset-0 w-full h-full p-2 box-border text-black text-lg placeholder:text-gray-500 outline-none transition-all duration-200"
        />
      </div>
    </div>
  );
}