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
          className={`flex flex-col justify-center items-center text-lg h-14 px-8 w-full border border-black transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 rounded-2xl ${
            selectedRole === "buyer"
              ? "bg-black text-white"
              : "bg-white text-black"
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
          className={`flex flex-col justify-center items-center text-lg h-14 px-8 w-full border border-black transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 rounded-2xl ${
            selectedRole === "seller"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          aria-pressed={selectedRole === "seller"}
        >
          SELLER
        </button>
      </div>
    </div>
  );
}