export function Chip({ text }: { text: string }) {
  return (
    <div className="Chip flex items-center justify-center gap-2.5 rounded-3xl bg-blue-400 px-4 py-1 ">
      <div className=" font-manrope text-sm font-normal text-black">{text}</div>
    </div>
  );
}
