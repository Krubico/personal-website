import { motion } from "framer-motion";

export function NavBar() {
  return (
    <motion.header
      className="flex flex-col items-center justify-center self-stretch px-main-content-padding py-[0rem]"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <nav className="font-section-header m-0 flex flex-row items-center justify-between self-stretch px-[0rem] py-spacing-sm text-left text-[1.913rem] text-black">
        <div className="flex flex-row items-center justify-start gap-[0.5rem]">
          <img
            className="relative h-[3.125rem] w-[3.125rem] object-cover"
            alt=""
            src="/logo-image@2x.png"
          />
          <b className="relative">Jia Hui</b>
        </div>
        <nav className="font-manrope m-0 flex flex-row items-center justify-center gap-[1rem] text-left text-[1.75rem] text-black max-lg:hidden">
          <div className="relative font-medium">About</div>
          <div className="relative font-medium">Experience</div>
          <div className="relative font-medium">Projects</div>
        </nav>
        <button className="flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-71xl bg-black p-[2rem] [border:none]">
          <b className="relative self-stretch text-center font-title-description text-[1.75rem] text-white">
            Let’s Connect
          </b>
        </button>
      </nav>
    </motion.header>
  );
}
