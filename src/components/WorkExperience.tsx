import { motion } from "framer-motion";
import { useState } from "react";
import { ExperienceContent } from "./ExperienceContent";
import { BentoSet } from "./BentoSet";
export function WorkExperience() {
  const [currentComponent, setCurrentComponent] = useState<number>(1);

  const choose = () => {
    switch (currentComponent) {
      case 1:
        return <BentoSet contentArray={["Jia Hui", "Jia Hui", "Jia Hui"]} />;
      case 2:
        return (
          <BentoSet contentArray={["Jia Hui 2", "Jia Hui 2", "Jia Hui 2"]} />
        );
    }
  };
  return (
    <div className="grid-row-3 grid w-full gap-12 sm:grid-cols-1 md:grid-cols-2">
      <div className="sticky top-0 col-span-1 row-span-full flex h-[100vh] w-full items-center max-lg:hidden">
        {choose()}
      </div>
      <div className="col-span-1 row-span-full flex flex-col gap-12 max-lg:items-center">
        <BentoSet
          className="lg:hidden"
          contentArray={["Jia Hui", "Jia Hui", "Jia Hui"]}
        />
        <div className={"flex h-[100vh] items-center"}>
          <motion.div
            viewport={{ amount: "all" }}
            onViewportEnter={() => setCurrentComponent(1)}
          >
            <ExperienceContent />
          </motion.div>
        </div>
        <BentoSet
          className="lg:hidden"
          contentArray={["Jia Hui", "Jia Hui", "Jia Hui"]}
        />
        <div className={"flex h-[100vh] items-center"}>
          <motion.div
            viewport={{ amount: "all" }}
            onViewportEnter={() => setCurrentComponent(2)}
          >
            <ExperienceContent />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
