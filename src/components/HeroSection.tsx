import { NavBar } from "./NavBar";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0.5, 0], [0, distance]);
  }

  const animationYOffset = useParallax(scrollYProgress, 300);

  const scaleAnimationProgress = useTransform(
    scrollYProgress,
    [0.5, 0],
    [1, 0.9],
  );

  const opacityAnimationProgress = useTransform(
    scrollYProgress,
    [0.5, 0],
    [1, 0.5],
  );

  return (
    <section className="flex w-full flex-col items-center justify-center text-left text-base">
      <motion.div
        style={{
          zIndex: 0,
          opacity: opacityAnimationProgress,
          y: animationYOffset,
          scale: scaleAnimationProgress,
        }}
      >
        <div className="justfy-center relative z-0 text-center text-[71.68px]">
          <div className=" top-[0px] flex flex-row items-center">
            <div
              ref={ref}
              className="justfy-center z-[0]  flex h-[640.9px] flex-row items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -200, y: 200, rotate: -45 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
              >
                <img
                  className="relative w-[473.7px] object-cover opacity-30"
                  alt=""
                  src="/backgroundconceptremovebgpreview-3@2x.png"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200, y: 200, rotate: 45 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
              >
                <img
                  className="relative ml-[-50px]  w-[473.7px] rotate-180 object-contain opacity-30"
                  alt=""
                  src="/backgroundconceptremovebgpreview-3@2x.png"
                />
              </motion.div>
            </div>
            <div className="absolute z-[1] !m-[0] flex flex-col items-center justify-center gap-[64px]">
              <b className="relative inline-block w-[855px]">
                <span className="text-[5rem]">{`I build products that `}</span>
                <span className="!bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(80.72deg,_#cc00ae,_#cc0058)]">
                  innovate
                </span>
                <span> for you</span>
              </b>
              <div className="flex flex-col items-center justify-center text-left text-[48.91px]">
                <b className="relative">Jia Hui</b>
                <div className="font-manrope relative inline-block w-[419px] text-base font-medium">{`Software & Robotics Developer`}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
