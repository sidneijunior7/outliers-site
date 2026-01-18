import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import StepsSection from "@/components/StepsSection";
import FoundersSection from "@/components/FoundersSection";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhySection />
        <StepsSection />
        <FoundersSection />
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
