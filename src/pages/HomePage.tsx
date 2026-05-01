import { GlobalHeader } from "../components/layout/GlobalHeader";
import { SubNavigationBar } from "../components/layout/SubNavigationBar";
import { ContactSection } from "../features/home/sections/ContactSection";
import { HeroSection } from "../features/home/sections/HeroSection";
import { ProblemSolvingSection } from "../features/home/sections/ProblemSolvingSection";
import { ProjectsSection } from "../features/home/sections/ProjectsSection";
import { ResumeSnapshotSection } from "../features/home/sections/ResumeSnapshotSection";
import { SkillsSection } from "../features/home/sections/SkillsSection";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="home-page">
      <GlobalHeader />
      <SubNavigationBar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ProblemSolvingSection />
        <SkillsSection />
        <ResumeSnapshotSection />
        <ContactSection />
      </main>
    </div>
  );
}
