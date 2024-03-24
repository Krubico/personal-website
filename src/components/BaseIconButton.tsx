import { BaseButton } from "./BaseButton";

export function BaseIconButton({
  onClick,
  children,
  style,
}: {
  onClick?: React.MouseEventHandler;
  children?: string | JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
}) {
  return (
    <BaseButton
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        columnGap: "0.5rem",
      }}
      onClick={onClick}
    >
      {children}
    </BaseButton>
  );
}
