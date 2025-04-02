import * as React from "react";
import { FeatureCard } from "./FeatureCard";
import Image from "next/image";

export function FeatureSection() {
  return (
    <section className="relative mt-16 w-full max-md:mt-10">
      {/* Bottles image section – lifted upward to be partially under Hero */}
      <div className="w-full -mt-10 sm:-mt-40 lg:-mt-80 relative z-0">
        <Image
          src="/bottles.svg"
          alt="Bottles image"
          width={1172}
          height={1440}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Feature cards overlaying the bottom of the image */}
      <div className="relative z-10 -mt-0 sm:-mt-20 px-6 flex flex-wrap justify-center items-start gap-7 md:gap-10 lg:gap-16 text-3xl leading-10 max-md:w-full">
        <FeatureCard
          title="Buy with confidence"
          description="Purchase your favorite fragrances knowing every used product is verified through our multi-step authenticity process."
        />
        <FeatureCard
          title="Sell secondhand"
          description="Join as a verified seller to effortlessly list, price, and sell both new and pre-loved fragrances securely."
        />
        <FeatureCard
          title="Get the best prices"
          description="Discover competitive offers as our platform aggregates market data to ensure you always receive exceptional value."
        />
      </div>
    </section>
  );
}
