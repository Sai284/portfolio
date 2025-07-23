import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutMeSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Theme Toggle */}
      <ThemeToggle />

      <StarBackground />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection/>
        <SkillsSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>
      


    </div>
  );
};