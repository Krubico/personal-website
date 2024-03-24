import React from "react";
export function HeroSection({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  return <div className="px-10 pt-10">{children}</div>;
}
