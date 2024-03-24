import { Input, Button } from "@material-tailwind/react";
import { MdSend } from "react-icons/md";
export function ChatInput({
  inputText,
  setInputText,
  onSubmit,
}: {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (a: string) => void;
}) {
  return (
    <div className="relative flex w-full">
      {/* TODO: Add enter submit functionality */}
      <Input
        crossOrigin
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        label="Message"
        className="min-w-20 active:rounded-full rounded-full"
      />
      <Button
        size="sm"
        color="white"
        disabled={!inputText}
        className="!absolute right-1 top-1 rounded"
        onClick={() => onSubmit(inputText)}
      >
        {inputText ? (
          <MdSend className="text-base blue" />
        ) : (
          <MdSend className="text-base gray" />
        )}
      </Button>
    </div>
  );
}
