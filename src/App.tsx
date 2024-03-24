import { NavbarSimple } from "components/Navbar";
import "./index.css";
import { ImgWithRoundedCorners } from "components/Image";
import { HeroContent } from "components/HeroContent";
import { ProjectCard } from "components/ProjectCard";
import { Carousel, IconButton } from "@material-tailwind/react";
import { FaLinkedin } from "react-icons/fa";
import { BaseTabs } from "components/Tabs";
import { GrInProgress } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { Footer } from "components/Footer";
import { GrNext, GrPrevious } from "react-icons/gr";
import { BaseIconButton } from "components/BaseIconButton";
import { VideoPlayer } from "components/VideoPlayer";
import { SkillsSection } from "components/SkillsSection";
import { Chat } from "components/Chat";

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
        // TODO: Change navigation color
        <Carousel
          autoplay={true}
          loop={true}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 lg:!left-4 md:!left-4 sm:!left-24 left-28 -translate-y-2/4"
            >
              <GrPrevious />
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 md:!right-4 sm:!right-24 right-28 -translate-y-2/4"
            >
              <GrNext />
            </IconButton>
          )}
        >
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
        </Carousel>
      ),
    },
    {
      label: "Upcoming",
      icon: <GrInProgress />,
      child: (
        <Carousel>
          {projectContent.map((project) => {
            return (
              <div
                key={project.title}
                className="flex justify-center mt-16 mb-16"
              >
                <ProjectCard
                  onButtonClick={() => window.open(project.url)}
                  icon={
                    <img
                      className="w-10 h-10"
                      src="public/assets/classification.jpg"
                    ></img>
                  }
                  title={project.title}
                  description={project.description}
                ></ProjectCard>
              </div>
            );
          })}
        </Carousel>
      ),
    },
  ];

  return (
    <>
      <div className="h-[110vh] px-10 bg-geo-pattern">
        <div id="layout" className="relative h-[100vh] max-w-[1100px] m-auto">
          <div className="absolute w-full">
            <NavbarSimple />
          </div>
          <div className="h-full flex flex-col justify-center">
            <div
              id="about-section"
              className="flex w-full flex-wrap md:justify-between sm:justify-center justify-center gap-6"
            >
              <HeroContent />
              <div className="bg-tori-gate bg-contain">
                <div className="translate-x-10">
                  <ImgWithRoundedCorners />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects-section"
        className=" bg-blue-gray-400 bg-bottom bg-contain"
      >
        <div className="max-w-[1100px] -translate-y-10 mx-auto">
          <VideoPlayer />
        </div>
        <div className="flex justify-center">
          <div className="my-16">
            <BaseTabs startValue={tabsData[0].label} data={tabsData}></BaseTabs>
          </div>
        </div>
      </div>

      <div className="bg-geo-pattern px-10">
        <div className="flex flex-col">
          <div className="flex flex-col gap-10 mx-auto my-20">
            <p className="m-auto max-w-[40rem] text-4xl text-center font-semibold">
              Let's connect and see what cool things we can build together!
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
      <div className="bg-geo-pattern">
        <div id="layout" className="h-[100vh] max-w-[1100px] m-auto">
          <Chat />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
