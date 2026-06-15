import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProofBar } from "@/components/landing/SocialProofBar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { DiagnosisShowcase } from "@/components/landing/DiagnosisShowcase";
import { Testimonial } from "@/components/landing/Testimonial";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--surface)" }}>
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <HowItWorks />
      <DiagnosisShowcase />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  );
}
