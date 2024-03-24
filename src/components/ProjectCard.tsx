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
      style={{
        background:
          // TODO: Make colors a props
          "linear-gradient(white, white) padding-box, linear-gradient(to right bottom, red, purple) border-box",
        borderRadius: "1rem",
        border: "3px solid transparent",
      }}
      className="flex rounded-md bg-white min-w-64"
    >
      <div className="flex flex-col m-4">
        <div className="flex gap-3 items-center">
          {icon}
          <p className=" text-2xl font-bold text-black">{title}</p>
        </div>
        <div className="flex flex-col justify-start my-3 p-0">
          <p className="w-64 text-lg text-black-200">{description}</p>
        </div>
        <BaseButton onClick={onButtonClick} className="font-hacked">
          Check It Out
        </BaseButton>
      </div>
    </div>
  );
}
