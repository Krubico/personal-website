import { CSSProperties } from "react";

export function BaseButton({
  onClick,
  children,
  style,
}: {
  onClick?: React.MouseEventHandler;
  children?: string | JSX.Element | JSX.Element[];
  style?: CSSProperties;
}) {
  return (
    <button
      style={style}
      onClick={onClick}
      className="flex justify-center items-center bg-black text-white font-bold py-3 px-4 rounded-full hover:bg-green-500 hover:font-hacked active:font-hacked"
    >
      {children}
    </button>
  );
}
