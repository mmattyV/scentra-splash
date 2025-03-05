"use client";
import * as React from "react";

interface RoleSelectorProps {
  selectedRole: "buyer" | "seller";
  onRoleSelect: (role: "buyer" | "seller") => void;
}

export function RoleSelector({
  selectedRole,
  onRoleSelect,
}: RoleSelectorProps) {
  return (
    <div className="flex flex-wrap text-center whitespace-nowrap">
      <div className="flex flex-col flex-1 justify-center p-2.5">
        <button
          type="button"
          onClick={() => onRoleSelect("buyer")}
          className={`flex flex-col justify-center items-center text-lg md:text-3xl h-14 md:h-22 px-8 md:px-16 w-full border border-black transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ${
            selectedRole === "buyer"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-50"
          }`}
          aria-pressed={selectedRole === "buyer"}
        >
          BUYER
        </button>
      </div>
      <div className="flex flex-col flex-1 justify-center p-2.5">
        <button
          type="button"
          onClick={() => onRoleSelect("seller")}
          className={`flex flex-col justify-center items-center text-lg md:text-3xl h-14 md:h-22 px-8 md:px-16 w-full border border-black transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ${
            selectedRole === "seller"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-50"
          }`}
          aria-pressed={selectedRole === "seller"}
        >
          SELLER
        </button>
      </div>
    </div>
  );
}