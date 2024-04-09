import { FunctionComponent, useCallback } from "react";
import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { WorkExperienceSection } from "../components/WorkExperienceSection";
import { ProjectSection } from "../components/ProjectsSection";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

const DesktopWebsite: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[192px] bg-floralwhite  text-center  font-aquire text-164xl-5 text-black contain-paint">
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <WorkExperienceSection />
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default DesktopWebsite;
