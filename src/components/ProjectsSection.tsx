import { ProjectCard } from "./ProjectCard";

export function ProjectSection() {
  return (
    <>
      <header className="font-section-header flex flex-col items-center justify-start self-stretch px-spacing-lg py-[0rem] text-left text-[11.469rem] text-black">
        <b className="relative self-stretch">Projects</b>
        <b className="relative self-stretch text-right">Selected</b>
      </header>
      <div className="relative flex flex-col items-center justify-center gap-[128px] self-stretch px-main-content-padding py-0">
        <div className="flex w-full flex-col gap-spacing-xxl">
          <div className="sticky top-0 flex h-[100vh] items-center overflow-hidden">
            <div className="w-full">
              <ProjectCard />
            </div>
          </div>
          <div className="scroll-linear left-project-card-animation  sticky top-0 w-full">
            <ProjectCard />
          </div>
          <div className="scroll-linear right-project-card-animation  sticky top-0 w-full">
            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
}
