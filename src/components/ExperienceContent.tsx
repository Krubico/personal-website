import { Chip } from "./Chip";
export function ExperienceContent() {
  return (
    <div className="flex  flex-col items-end justify-end gap-20">
      <div className=" flex flex-col items-start justify-start gap-2">
        <div className=" font-['Inter'] text-5xl font-bold text-black">
          DSTA
        </div>
        <div className="inline-flex flex-wrap items-start justify-start gap-2">
          <Chip text="AI" />
          <Chip text="Machine Learning" />
          <Chip text="Software Architecture" />
          <Chip text="DevOps" />
        </div>
        <div className="flex-inline flex-col">
          <span className="font-['Manrope'] text-3xl font-medium text-black">
            How did a robotics student make a{" "}
          </span>
          <span className="font-['Manrope'] text-3xl font-medium text-blue-600">
            lasting impact
          </span>
          <span className="font-['Manrope'] text-3xl font-medium text-black">
            {" "}
            in DSTA robotics team?
          </span>
        </div>
      </div>
      <div className=" inline-flex items-center justify-end gap-2">
        <img
          className="relative h-[50px] w-[50px] object-cover"
          alt=""
          src="/done@2x.png"
        />
        <div className=" font-['Helvetica Neue'] text-3xl font-normal text-black">
          Testimonial
        </div>
      </div>
    </div>
  );
}
