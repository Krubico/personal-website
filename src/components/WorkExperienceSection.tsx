import { BentoSet } from "./BentoSet";
import { WorkExperienceHeader } from "./WorkExperienceHeader";
import { WorkExperience } from "./WorkExperience";
export function WorkExperienceSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-[128px] self-stretch text-left text-white">
      <WorkExperienceHeader />
      <div className="font-manrope flex flex-col self-stretch px-main-content-padding py-0 text-11xl text-black">
        <div className="flex flex-row flex-wrap items-center justify-center gap-[64px_80px] self-stretch">
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}
