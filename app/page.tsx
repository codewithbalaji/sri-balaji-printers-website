import { Hero } from "@/components/sections/hero";
import { ServiceTeasers } from "@/components/sections/service-teasers";
import { TrustStrip } from "@/components/sections/trust-strip";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceTeasers />
      <TrustStrip />
      <CtaBand />
    </>
  );
}
