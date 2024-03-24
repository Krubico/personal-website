import { useEffect, useState } from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function NavList() {
  // TODO: Add the correct hrefs to the anchor tags
  return (
    <ul className="my-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 text-sm">
        <a
          href="#about-section"
          className="flex items-center hover:text-green-500 transition-colors"
        >
          About
        </a>
        <hr className="border-2 border-cyberpunk-yellow" />
      </li>
      <li className="p-1 text-sm">
        <a
          href="#projects-section"
          className="flex items-center hover:text-green-500 transition-colors"
        >
          Projects
        </a>
        <hr className="border-2 border-cyberpunk-yellow" />
      </li>
      <FaGithub className="text-lg" />
      <FaLinkedin className="text-lg" />
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <Navbar color="transparent">
        <div className="flex items-center justify-end text-blue-gray-900">
          <div className="hidden lg:block md:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
