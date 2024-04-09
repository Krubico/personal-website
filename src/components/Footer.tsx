import { Typography } from "@material-tailwind/react";
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full">
      <hr className="border-t border-blue-gray-50"></hr>
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex w-full flex-col items-center justify-center py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a>Krubics</a>. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center"></div>
        </div>
      </div>
    </footer>
  );
}
