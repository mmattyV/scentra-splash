import * as React from "react";
import Image from "next/image";

export function CommunitySection() {
  return (
    <section className="flex flex-col items-center px-20 pb-3.5 mt-20 w-full bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[845px]">
        <div className="flex gap-2.5 items-center justify-center self-center max-w-full ">
          <Image
            src="/social-logos.svg"
            alt="Social media icons"
            width={1400}
            height={700}
            unoptimized
            className="object-contain"
          />
        </div>
        <div className="w-full max-md:max-w-full">
          <div className="flex flex-col -mt-10 max-w-full leading-10 text-center w-[822px]">
            <h2 className="text-5xl text-yellow-50 border border-black border-solid max-md:max-w-full max-md:text-4xl max-md:leading-9">
              Welcome fragrance enthusiasts!
            </h2>
            <p className="self-center text-left text-2xl mt-8 text-neutral-400 max-md:max-w-full">
              We&apos;re excited to build this platform with you in mind, taking
              inspiration from the community-driven features you love about
              existing marketplaces. Imagine being able to click on your
              favorite fragrance to instantly see its notes, along with current
              market details like the highest bids and asks—all designed to
              enhance your experience.
            </p>
          </div>
          <div className="w-full border-[0.5px] border-neutral-400 my-16"></div>
          <div className="flex flex-col mt-7 max-w-full leading-10 text-center min-h-[340px] w-[814px]">
            <h3 className="text-3xl text-yellow-50 border border-black border-solid max-md:max-w-full">
              For Verified Sellers:
            </h3>
            <p className="self-center text-left text-2xl my-8 text-neutral-400 max-md:max-w-full">
              If you&apos;re a verified seller on Reddit or Facebook, we&apos;re
              inviting you to sign up for our waitlist below by linking your
              account. This is your fast track to becoming verified on our
              platform, ensuring a secure marketplace for every transaction.
              Welcome aboard!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
