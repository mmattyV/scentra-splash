"use client";

import * as React from "react";
import Image from "next/image";
import { ibmPlexSerifExtraLight } from "@/app/ui/fonts";

export function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("waitlist-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-30">
      {/* Fixed button on the top right */}
      <div className="fixed top-5 right-12">
        <button
          onClick={scrollToForm}
          className="gap-2.5 hidden sm:block self-stretch px-6 py-2 mt-6 w-full text-xl leading-none text-center text-white hover:scale-105 transition-transform bg-black min-h-[50px] rounded-2xl shadow-[0px_7px_4px_rgba(255,255,255,0.25)] max-md:mt-10"
        >
          GET UPDATES
        </button>
      </div>

      {/* Centered content */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-5">
          {/* Responsive container for the SVG image */}
          <div className="w-full max-w-[320px]">
            <Image
              src="text-logo.svg"
              alt="Scentra logo"
              width={955}
              height={120}
              unoptimized
              className="object-contain object-bottom"
            />
          </div>
          <h1
            className={`${ibmPlexSerifExtraLight.className} self-stretch p-2.5 text-3xl leading-[2.5rem] text-center text-black`}
          >
            The future of fragrance exchange.
            <br />
            Drifting your way.
          </h1>
        </div>
      </div>
    </section>
  );
}