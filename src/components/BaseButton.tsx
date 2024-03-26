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
    <button onClick={onClick} style={style} className="cybr-btn z-[100]">
      {children}
      <span aria-hidden>_</span>
      <span aria-hidden className="cybr-btn__glitch">
        {children}
      </span>
      <span aria-hidden className="cybr-btn__tag">
        R25
      </span>
    </button>
  );
}
