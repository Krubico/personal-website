import { ProjectCard } from "components/ProjectCard";
export function ProjectShowcase() {
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
      title: "AutoClass",
      description: "Find the optimal classifier for your dataset!",
      url: "https://github.com/Krubico/AutoClass",
    },
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
  return (
    <div
      id="projects-section"
      className="flex parallax bg-tori-gate bg-bottom bg-contain bg-no-repeat h-[200vh]"
    >
      <div className="flex flex-col items-center justify-center max-w-[1100px] h-[200vh] mx-auto bottom-0">
        {projectContent.map((project) => {
          return (
            <div key={project.title} className="flex animation justify-center">
              <ProjectCard
                onButtonClick={() => window.open(project.url)}
                icon={<img src="public/assets/autoclass-bg-removed.jpg"></img>}
                title={project.title}
                description={project.description}
              ></ProjectCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
