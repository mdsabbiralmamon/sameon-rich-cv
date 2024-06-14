import CurrentActivities from "@/components/HomePage/CurrentActivities/CurrentActivities";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <div className="heroSection container mx-auto">
        <HeroSection />
      </div>
      <div className="current container mx-auto my-24">
        <CurrentActivities />
      </div>
    </>
  );
}
