"use client";
import * as React from "react";
import { useState } from "react";
import { EmailInput } from "./EmailInput";
import { RoleSelector } from "./RoleSelector";
import { WaitlistButton } from "./WaitlistButton";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"buyer" | "seller">("buyer");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      setStatus("idle");
      // Handle form submission
      console.log("Submitting:", { email, role });
      setStatus("success");
      setMessage("Successfully joined the waitlist!");
    } catch (error) {
      console.log("Error while submitting waitlist form: ", error);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="flex flex-col justify-center self-stretch p-2.5 mt-10 text-2xl leading-none max-md:max-w-full">
      <form className="px-20 py-14 w-full border border-black border-solid max-w-[1050px] max-md:px-5">
      <div className="mb-2 mt-4">
          <EmailInput value={email} onChange={setEmail} />
        </div>
        <div className="mb-2">
          <RoleSelector selectedRole={role} onRoleSelect={setRole} />
        </div>
        <div className="mb-4">
          <WaitlistButton onClick={handleSubmit} disabled={!email || !role} />
        </div>
        {message && (
          <div
            className={`mt-4 p-3 rounded-md text-base transition-all duration-300 ease-in-out ${
              status === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
            role="alert"
          >
            {message}
          </div>
        )}
      </form>
    </section>
  );
}