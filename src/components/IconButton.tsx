export function IconButton({
  iconUrl,
  iconText,
  onClick,
}: {
  iconUrl: string;
  iconText: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative h-[10.563rem] w-[8.125rem] cursor-pointer bg-[transparent] p-0 [border:none]"
    >
      <div className="absolute left-[0rem] top-[0rem] flex flex-col items-center justify-start gap-[0.063rem]">
        <div className="relative flex flex-row items-start justify-start gap-[0.625rem]">
          <div className="relative z-[0] h-[8.125rem] w-[8.125rem] rounded-[50%] bg-white" />
          <img
            className="absolute left-[2.5rem] top-[2.5rem] z-[1] !m-[0] h-[3.125rem] w-[3.125rem] object-cover"
            alt=""
            src={iconUrl}
          />
        </div>
        <p className="font-manrope relative m-0 text-center text-[1.75rem] font-medium text-white">
          {iconText}
        </p>
      </div>
    </button>
  );
}
