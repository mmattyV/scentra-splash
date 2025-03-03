import * as React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 mb-4">
      <div className="relative w-full max-w-[300px] aspect-[0.63] max-sm:pb-4 max-sm:w-[180px]">
        <Image
          src="/logo.svg"
          alt="Scentra Logo"
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-contain"
        />
      </div>
      <h1 className="mt-6 text-5xl font-bold leading-none w-full max-w-[900px] px-4 md:whitespace-nowrap">
        The Smart Way to Buy & Sell Fragrances
      </h1>
      <p className="mt-10 text-4xl font-light w-full max-w-[800px] px-4">
        Scentra is the first peer-to-peer marketplace built for fragrance lovers.
      </p>
    </div>
  );
}