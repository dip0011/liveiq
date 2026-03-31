import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AgencyHero } from "@/components/agency/AgencyHero";
import { TrustBar } from "@/components/agency/TrustBar";
import { SuperPowers } from "@/components/agency/SuperPowers";
import { AgencyFAQ } from "@/components/agency/AgencyFAQ";
import { NAV_LINKS_AGENCY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Agency Concierge",
  description:
    "Scale your agency with a world-class AI Concierge. Convert leads. Track attribution. Win and retain more clients.",
};

export default function AgencyPage() {
  return (
    <>
      <Navbar links={NAV_LINKS_AGENCY} variant="agency" />
      <main>
        <AgencyHero />
        <TrustBar />
        <SuperPowers />
        <AgencyFAQ />
      </main>
      <Footer />
    </>
  );
}
