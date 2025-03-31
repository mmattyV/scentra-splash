import * as React from "react";
import { Hero } from "@/app/ui/components/Hero";
import { WaitlistForm } from "@/app/ui/components/WaitlistForm";
import { FeatureSection } from "@/app/ui/components/FeatureSection";
import { CommunitySection } from "@/app/ui/components/CommunitySection";

export default function Page() {
  return (
    <main className="flex overflow-hidden flex-col py-8 bg-white">
      <Hero />
      <FeatureSection />
      <CommunitySection />
      <WaitlistForm />
    </main>
  );
}
