import { SkillBlock } from "./SkillBlock";
import { easeIn, motion } from "framer-motion";
export function SkillsSection() {
  return (
    <div className="font-manrope z-[1] flex flex-col items-center justify-center  self-stretch text-base">
      <div className="relative h-[63px] w-[323px]">
        <img
          className="absolute left-[0px] top-[0px] h-[63px] w-[323px]"
          alt=""
          src="/vector-1.svg"
        />
        <div className="absolute left-[50px] top-[0px] h-[63px] w-56 bg-whitesmoke " />
        <div className="absolute left-[67px] top-[17px] flex flex-row items-center justify-start">
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ type: easeIn, repeat: Infinity, duration: 2 }}
          >
            <img
              className="relative h-10 w-10 object-cover"
              alt=""
              src="/down-arrow@2x.png"
            />
          </motion.div>
          <div className="relative font-medium">Learn More</div>
        </div>
      </div>
      <div className="box-border flex flex-col items-center justify-center self-stretch bg-whitesmoke px-main-content-padding text-left text-31xl">
        <div className="justify flex flex-row flex-wrap max-lg:justify-center">
          <img
            className="top-[20vh] h-[400px] w-[400px] object-cover md:mb-[15vh] lg:sticky"
            alt=""
            src="/image@2x.png"
          />
          <div className="flex flex-col items-center justify-start">
            {/*TODO: Change animation*/}
            <motion.div
              className="top-[10vh] mb-[50vh] max-lg:sticky"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
            >
              <b className="inline-block shrink-0">What can I do for you?</b>
            </motion.div>
            <SkillBlock
              skill="Full Stack Web Development"
              zIndex={0}
              bottomMargin={30}
              topOffset={20}
            />
            <SkillBlock
              skill="Full Stack Web Development"
              zIndex={1}
              bottomMargin={20}
              topOffset={30}
            />
            <SkillBlock
              skill="Full Stack Web Development"
              zIndex={2}
              bottomMargin={10}
              topOffset={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
