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
    <div className="flex z-10 flex-wrap text-center whitespace-nowrap">
      <div className="flex flex-col flex-1 grow shrink-0 justify-center p-2.5 basis-0">
        <button
          onClick={() => onRoleSelect("buyer")}
          className={`flex flex-col justify-center items-center h-22 px-16 w-full border border-black border-solid max-md:px-5 text-3xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] ${
            selectedRole === "buyer"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-50"
          }`}
          aria-pressed={selectedRole === "buyer"}
        >
          BUYER
        </button>
      </div>
      <div className="flex flex-col flex-1 grow shrink-0 justify-center p-2.5 basis-0">
        <button
          onClick={() => onRoleSelect("seller")}
          className={`flex flex-col justify-center items-center h-22 px-16 w-full border border-black border-solid max-md:px-5 text-3xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] ${
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