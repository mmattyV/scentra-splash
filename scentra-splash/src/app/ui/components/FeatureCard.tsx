import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="flex flex-col items-center self-stretch min-w-60 w-[600px]">
      {/* Thin grey line */}
      <div className="w-full border-[0.5px] border-gray-300 my-3"></div>
      <h3 className="self-stretch font-bold text-2xl md:text-2xl lg:text-2xl leading-tight text-black">
        {title}
      </h3>
      <p className="mt-3.5 text-2xl md:text-2xl lg:text-2xl leading-tight text-neutral-500">
        {description}
      </p>
    </article>
  );
}