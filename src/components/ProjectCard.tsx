import { useCallback } from "react";
import { motion } from "framer-motion";
export function ProjectCard() {
  // const { scrollYProgress } = useScroll();

  return (
    <div className="font-manrope relative h-[802px] shrink-0 cursor-pointer self-stretch overflow-hidden  rounded-2xl text-left text-31xl shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(235,_255,_0,_0.2),_rgba(90,_204,_0,_0.2)_50.59%,_rgba(248,_249,_242,_0.2)),_#f8f9f2]">
      <div className=" flex flex-col items-center justify-start gap-[48px]">
        <div className="flex h-[296px] w-[729px] flex-row items-center justify-center gap-[32px]">
          <img
            className="relative h-[200px] w-[200px] object-cover"
            alt=""
            src="/group-27@2x.png"
          />
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <b className="relative font-title-description">AutoClass</b>
            <div className="flex flex-row items-start justify-start gap-[10px] text-base">
              <div className="flex flex-row items-start justify-start">
                <div className="box-border flex w-[45px]  shrink-0 flex-row items-center justify-center rounded-31xl bg-white px-0 py-1">
                  <div className="relative font-medium">AI</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="box-border flex w-[45px]  shrink-0 flex-row items-center justify-center rounded-31xl bg-white px-0 py-1">
                  <div className="relative font-medium">AI</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="box-border flex w-[45px]  shrink-0 flex-row items-center justify-center rounded-31xl bg-white px-0 py-1">
                  <div className="relative font-medium">AI</div>
                </div>
              </div>
            </div>
            <div className="relative text-25xl-8 font-medium text-primary">
              ML now 10x easier
            </div>
          </div>
        </div>
        <div className="flex w-[905px] translate-y-20 flex-row items-start justify-center gap-[105px]">
          <img
            className="relative h-[392.3px] w-[400px] rounded-11xl object-cover"
            alt=""
            src="/rectangle-1835@2x.png"
          />
          <img
            className="relative h-[430px] w-[400px] rounded-11xl object-cover"
            alt=""
            src="/rectangle-1838@2x.png"
          />
        </div>
      </div>
    </div>
  );
}
