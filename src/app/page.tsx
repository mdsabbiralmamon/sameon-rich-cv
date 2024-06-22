import AboutSection from "@/components/HomePage/AboutSection/AboutSection";
import CurrentActivities from "@/components/HomePage/CurrentActivities/CurrentActivities";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <div className="heroSection container mx-auto mt-24">
        <HeroSection />
      </div>
      <div className="current container mx-auto">
        <CurrentActivities />
      </div>
      <div className="about container mx-auto">
        <AboutSection />
      </div>
    </>
  );
}
