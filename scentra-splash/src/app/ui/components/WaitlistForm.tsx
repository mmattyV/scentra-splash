"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { useActionState } from "react"; // Adjust import based on your project setup
import { registerEmail, State } from "@/app/lib/actions"; // Your server action
import { EmailInput } from "./EmailInput";
import { RoleSelector } from "./RoleSelector";
import { WaitlistButton } from "./WaitlistButton";
import { NumProductsInput } from "./NumProductsInput";
import { ibmPlexSerifExtraLight } from "@/app/ui/fonts"; // Adjust import based on your project setup

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [numProducts, setNumProducts] = useState("");
  const [role, setRole] = useState<"buyer" | "seller">("buyer");

  const initialState: State = { message: null, errors: {} };
  const [formState, formAction] = useActionState(registerEmail, initialState);

  // Reset form if submission is successful.
  useEffect(() => {
    if (
      formState.message &&
      typeof formState.message === "object" &&
      formState.message.success
    ) {
      setEmail("");
      setNumProducts("");
      setRole("buyer");
    }
  }, [formState.message]);

  return (
    <section className="flex flex-col justify-center items-center self-stretch p-4 md:p-10 mt-16 text-2xl leading-none min-w-[90vw] mx-auto">
      {/* Added heading above the form */}
      <h1
        className={`${ibmPlexSerifExtraLight.className} self-stretch p-2.5 text-4xl leading-[2.5rem] text-center text-black`}
      >
        Don&apos;t Miss a Whiff.
      </h1>
      <form
        id="waitlist-form"
        action={formAction}
        className="px-4 md:px-20 py-8 md:py-14 w-full max-w-[1050px] mx-auto"
      >
        {/* Email Input */}
        <div className="mb-4 mt-4">
          <EmailInput value={email} onChange={setEmail} />
          {/* Hidden input so that the server action receives the email value */}
          <input type="hidden" name="email" value={email} />
          {formState.errors?.email && (
            <p className="text-red-500 text-sm">
              {Array.isArray(formState.errors.email)
                ? formState.errors.email.join(", ")
                : formState.errors.email}
            </p>
          )}
        </div>

        {/* Role Selector */}
        <div className="mb-4">
          <RoleSelector selectedRole={role} onRoleSelect={setRole} />
          {/* Hidden input to send the role value */}
          <input type="hidden" name="role" value={role} />
          {formState.errors?.role && (
            <p className="text-red-500 text-sm">
              {Array.isArray(formState.errors.role)
                ? formState.errors.role.join(", ")
                : formState.errors.role}
            </p>
          )}
        </div>

        {/* For sellers, ask how many products they plan to list */}
        {role === "seller" && (
          <div className="mb-4 mt-4">
            <NumProductsInput value={numProducts} onChange={setNumProducts} />
            {/* Hidden input so that the server action receives the number of products */}
            <input type="hidden" name="numProducts" value={numProducts} />
            {formState.errors?.numProducts && (
              <p className="text-red-500 text-sm">
                {Array.isArray(formState.errors.numProducts)
                  ? formState.errors.numProducts.join(", ")
                  : formState.errors.numProducts}
              </p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <div className="mb-4">
          <WaitlistButton type="submit" />
        </div>

        {/* Success/Error Message */}
        {formState.message && (
          <div
            className={`mt-4 p-3 rounded-md text-base transition-all duration-300 ease-in-out ${
              typeof formState.message === "object" && formState.message.success
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
            role="alert"
          >
            {typeof formState.message === "object"
              ? formState.message.text
              : formState.message}
          </div>
        )}
      </form>
    </section>
  );
}