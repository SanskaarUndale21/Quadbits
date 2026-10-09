import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import TeamSection from "@/components/TeamSection";
import VentureSection from "@/components/VentureSection";
import AchievementTimeline from "@/components/AchievementTimeline";
import CapabilityMap from "@/components/CapabilityMap";
import ProjectGallery from "@/components/ProjectGallery";
import HackathonAdvantage from "@/components/HackathonAdvantage";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export default function Home() {
  return (
    <Providers>
      <Navbar />
      <main>
        <Hero />
        <StorySection />
        <TeamSection />
        <VentureSection />
        <AchievementTimeline />
        <CapabilityMap />
        <ProjectGallery />
        <HackathonAdvantage />
        <ContactSection />
      </main>
      <Footer />
    </Providers>
  );
}
