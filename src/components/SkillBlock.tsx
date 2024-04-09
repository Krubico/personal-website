import { easeIn, motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
export function SkillBlock({
  skill,
  zIndex,
  topOffset,
  bottomMargin,
}: {
  skill: string;
  zIndex: number;
  bottomMargin: number;
  topOffset: number;
}) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { x: [300, 0] });
    }
  }, [isInView]);

  return (
    <motion.div
      style={{
        top: `${topOffset}` + "vh",
        zIndex: zIndex,
        marginBottom: `${bottomMargin}` + "vh",
      }}
      // TODO: Fix Scroll Bug
      className="mb-30 sticky flex flex-col items-start justify-start gap-[16px] rounded-2xl border-[2px] border-solid border-black bg-floralwhite p-8"
      // initial={{ opacity: 0, x: 200 }}
      animate={{ x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: easeIn, duration: 0.5 }}
    >
      <p className="text-25xl-8 font-medium">{skill}</p>
      <div className="flex h-[65px] w-[261px] flex-row flex-wrap items-center justify-start gap-[5px] font-title-description text-[48.8px]">
        <img
          className="relative h-[50px] w-[50px] object-cover"
          alt=""
          src="/exploding-head@2x.png"
        />
        <b className="relative">5+</b>
        <b className="relative text-11xl">{`Projects `}</b>
      </div>
      <div className="relative inline-block text-base font-medium">
        I created robust cloud backends and stunning visual frontend apps
      </div>
    </motion.div>
  );
}
