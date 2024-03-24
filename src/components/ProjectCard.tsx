import { BaseButton } from "components/BaseButton";

export function ProjectCard({
  icon,
  title,
  description,
  onButtonClick,
}: {
  icon: React.ReactNode | React.ReactNode[];
  title: string;
  description: string;
  onButtonClick: React.MouseEventHandler;
}): JSX.Element {
  return (
    <div
      onClick={onButtonClick}
      style={{
        background:
          // TODO: Make colors a props
          "linear-gradient(white, white) padding-box, linear-gradient(to right bottom, red, purple) border-box",
        borderRadius: "1rem",
        border: "3px solid transparent",
      }}
      className="flex rounded-md bg-white min-w-64"
    >
      <div className="flex min-w-96 p-10 justify-start gap-5 items-center">
        <div className="flex flex-col h-32">
          <p className="text-7xl">Title</p>
          <p className="text-3xl max-w-80">
            Eye Catching Hook: dwadawdwadwadwad
          </p>
        </div>
        <div className="rounded-full max-w-96 aspect-square">{icon}</div>
      </div>
    </div>
  );
}
