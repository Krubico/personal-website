export function ChatBubbleAI({ text }: { text: string }) {
  return (
    <div className="flex p-2 bg-white justify-start items-center max-w-96 gap-3 rounded-xl !rounded-bl-sm ">
      <img
        className="w-12 h-12 rounded-full"
        src="public/assets/my_ai_face.jpg"
      ></img>
      <p className="text-base">{text}</p>
    </div>
  );
}
