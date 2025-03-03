"use client";
import * as React from "react";
import { Hero } from "@/app/components/Hero";
// import { WaitlistForm } from "@/app/components/WaitlistForm";

export default function WaitlistPage() {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-11 font-bold text-black bg-white max-md:px-5">
      <div className="flex flex-col items-center max-w-full w-[1050px]">
        <Hero />
        {/* <WaitlistForm /> */}
      </div>
    </main>
  );
}
