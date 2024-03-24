export function ChatBubbleHuman({ text }: { text: string }) {
  return (
    <div className="flex overflow-hidden p-2 bg-white justify-start items-start max-w-96 rounded-xl !rounded-br-sm ">
      <p className="text-base">{text}</p>
    </div>
  );
}
