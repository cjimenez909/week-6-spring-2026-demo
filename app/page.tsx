import { Navbar } from "@/app/components/Navbar";
import { HomeSection } from "@/app/home/HomeSection";
import { AboutSection } from "@/app/about/AboutSection";
import { SkillsSection } from "@/app/skills/SkillsSection";
import { ProjectSection } from "@/app/projects/ProjectSection";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-zinc-50">
      {/* Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto flex flex-col">
        {/* Home Section */}
        <HomeSection />

        {/* About Section */}
        <AboutSection />

        {/* SKills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectSection />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
