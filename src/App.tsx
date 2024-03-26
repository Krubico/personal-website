import { NavbarSimple } from "components/Navbar";
import "./index.css";
import { ImgWithRoundedCorners } from "components/Image";
import { HeroContent } from "components/HeroContent";
import { ProjectCard } from "components/ProjectCard";
import { FaLinkedin } from "react-icons/fa";
import { BaseTabs } from "components/Tabs";
import { GrInProgress } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { Footer } from "components/Footer";
import { BaseIconButton } from "components/BaseIconButton";
import { VideoPlayer } from "components/VideoPlayer";
import { SkillsSection } from "components/SkillsSection";
import { Chat } from "components/Chat";
import { BaseButton } from "components/BaseButton";
import { PersonalStatus } from "components/PersonalStatus";
import { ProjectShowcase } from "components/ProjectShowcase";
import { WorkCard } from "components/WorkCard";
import { CSSGrid } from "components/CSSGrid";
// TODO: Font size at least 16px
function App() {
  // TODO: Replace with actual project content
  interface Project {
    title: string;
    description: string;
    url: string;
  }

  const projectContent: Array<Project> = [
    {
      title: "AutoClass",
      description: "Find the optimal classifier for your dataset!",
      url: "https://github.com/Krubico/AutoClass",
    },

    {
      title: "Back to Basics",
      description:
        "Train and validate your RCNN Computer Vision models with Pytorch!",
      url: "https://github.com/Krubico/Yet-Another-RCNN-CV-Model",
    },
  ];

  interface TabData {
    label: string;
    icon: JSX.Element;
    child: JSX.Element;
  }

  // TODO: Build Mechanism to stop too long titles and descriptions
  const tabsData: Array<TabData> = [
    {
      label: "Active",
      icon: <FaCode />,
      child: (
        <div className="flex gap-12">
          {projectContent.map((project) => {
            return (
              <div
                key={project.title}
                className="flex justify-center mt-16 mb-16"
              >
                <ProjectCard
                  onButtonClick={() => window.open(project.url)}
                  icon={
                    <img src="public/assets/autoclass-bg-removed.jpg"></img>
                  }
                  title={project.title}
                  description={project.description}
                ></ProjectCard>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      label: "In Progress",
      icon: <GrInProgress />,
      child: (
        <>
          {projectContent.map((project) => {
            return (
              <div
                key={project.title}
                className="flex justify-center mt-16 mb-16"
              >
                <ProjectCard
                  onButtonClick={() => window.open(project.url)}
                  icon={
                    <img src="public/assets/autoclass-bg-removed.jpg"></img>
                  }
                  title={project.title}
                  description={project.description}
                ></ProjectCard>
              </div>
            );
          })}
        </>
      ),
    },
  ];

  return (
    <div className="wrapper">
      <div className="parallax custom-cursor h-[110vh] px-10 bg-geo-pattern">
        <div id="layout" className="relative h-[100vh] max-w-[1100px] m-auto">
          <div className="absolute w-full">
            <NavbarSimple />
          </div>
          <div
            id="about-section"
            className="flex h-full items-center gap-6 md:justify-between sm:justify-center justify-center "
          >
            <div className="flex">
              <HeroContent />
              <div className="bg-tori-gate bg-contain bg-no-repeat">
                <div className="h-full translate-x-10">
                  <ImgWithRoundedCorners />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="projects-section" className="bg-black bg-bottom bg-cover">
        <div className="max-w-[1100px] -translate-y-10 mx-auto">
          <VideoPlayer />
        </div>
        <div className="flex justify-center">
          <div className="my-16">
            <BaseTabs startValue={tabsData[0].label} data={tabsData}></BaseTabs>
          </div>
        </div>
      </div>

      <ProjectShowcase />

      <div className="bg-sandevistan bg-black w-[100wh] h-[100vh] bg-contain bg-no-repeat bg-center">
        <div className="h-full grid grid-cols-2 grid-rows-2 gap-y-0 gap-x-40">
          <div className="justify-self-start self-end col-start-2 col-span-1">
            <WorkCard />
          </div>
          <div className="justify-self-end self-start col-start-1 row-start-2 col-span-1">
            <WorkCard />
          </div>
        </div>
      </div>

      <div className="bg-geo-pattern">
        <div id="layout" className="h-[100vh] max-w-[1100px] m-auto">
          <Chat />
        </div>
      </div>

      <div className="bg-geo-pattern px-10">
        <div className="flex flex-col">
          <div className="flex flex-col gap-10 mx-auto my-20">
            <p className="m-auto max-w-[40rem] text-4xl text-center font-semibold">
              Let's Build Together!
            </p>
            <div className="flex justify-center">
              <BaseIconButton
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/yong-jia-hui-50a87a19b/"
                  );
                }}
              >
                <FaLinkedin />
                <p>LinkedIn</p>
              </BaseIconButton>
            </div>
          </div>
          <div className="mb-10">
            <SkillsSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
