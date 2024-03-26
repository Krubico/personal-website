import { InfiniteSlider } from "components/InfiniteSlider";
import Chip from "@mui/material/Chip";

export function WorkCard() {
  const skills = ["AI", "DevOps", "Networking", "Robotics"];
  return (
    <div
      id="work-card-layout"
      className="inline-flex flex-col gap-3 py-16 px-16  aspect-[115/80] w-[28rem] bg-futuristic-border bg-cover"
    >
      <div id="title-with-chips" className="flex flex-col gap-2">
        <p className="text-cyberpunk-yellow text-3xl">DSTA Software Intern</p>
        <div className="flex gap-1">
          {skills.map((skill) => {
            return <Chip color="primary" variant="filled" label={skill} />;
          })}
        </div>
      </div>

      <InfiniteSlider>
        <div className="flex">
          <div className="flex rounded-sm p-3 mx-2 bg-cyberpunk-yellow w-40">
            <p>500% Increase in AI System</p>
          </div>
          <div className="flex rounded-sm p-3 mx-2 bg-cyberpunk-yellow w-40">
            Launched a new Innovative Project
          </div>
          <div className="flex rounded-sm p-3 mx-2 bg-cyberpunk-yellow w-40">
            2x Boost Development Productivity
          </div>
        </div>
      </InfiniteSlider>
    </div>
  );
}
