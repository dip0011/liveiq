import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { LogosBar } from "@/components/landing/LogosBar";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { SetupSteps } from "@/components/landing/SetupSteps";
import { RevenueCards } from "@/components/landing/RevenueCards";
import { FAQSection } from "@/components/landing/FAQSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { NAV_LINKS_LANDING } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Navbar links={NAV_LINKS_LANDING} variant="landing" />
      <main>
        <HeroSection />
        <LogosBar />
        <TestimonialSection />
        <ComparisonTable />
        <SetupSteps />
        <RevenueCards />
        <FAQSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
