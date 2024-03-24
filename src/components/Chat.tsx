import { ChatBubbleAI } from "components/ChatBubbleAI";
import { ChatBubbleHuman } from "components/ChatBubbleHuman";
import { useRef, useEffect, useState } from "react";
import { ChatInput } from "components/ChatInput";

export function Chat() {
  const [currPrompt, setCurrPrompt] = useState<string>("");
  const [aiResponseInProgress, setAiResponseInProgress] =
    useState<boolean>(false);
  const [prevPrompts, setPrevPrompts] = useState<string[]>([]);
  const [prevAiResponses, setPrevAiResponses] = useState<string[]>([]);

  const handleSubmit = (prompt: string) => {
    setPrevPrompts([...prevPrompts, prompt]);
    setCurrPrompt("");
    setAiResponseInProgress(true);
  };

  // TODO: Abstract this logic to a custom hook
  useEffect(() => {
    if (aiResponseInProgress) {
      // TODO: Make logic to get response from backend
      setTimeout(() => {
        setPrevAiResponses([...prevAiResponses, "Response from AI!"]);
        setAiResponseInProgress(false);
      }, 3000);
    }
    if (messagesEndRef.current) {
      (messagesEndRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [aiResponseInProgress]);

  const messagesEndRef = useRef(null);

  return (
    <section
      id="chat-section"
      className="bg-black h-full rounded-md flex flex-col justify-end"
    >
      {/* TODO: Style scrollbar */}
      {/* TODO: Do loading... progress */}
      <div className="flex flex-col px-3 overflow-scroll no-scrollbar">
        <ChatBubbleAI text="Hello! I'm Krubics, your friendly AI assistant. How can I help you today?" />
        {prevPrompts.map((prompt, index) => {
          for (let i = 0; i < prevAiResponses.length; i++) {
            return (
              <>
                <div className="ml-auto">
                  <ChatBubbleHuman key={`prompt-${index}`} text={prompt} />
                </div>
                {prevPrompts.length !== prevAiResponses.length &&
                index === prevPrompts.length - 1 ? null : (
                  <ChatBubbleAI
                    key={`response-${index}`}
                    text={prevAiResponses[i]}
                  />
                )}
              </>
            );
          }
        })}
        {aiResponseInProgress ? (
          <ChatBubbleAI text="Hmm Lemme Think..." />
        ) : null}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="p-4">
        <ChatInput
          inputText={currPrompt}
          setInputText={setCurrPrompt}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}

// <div className="flex flex-col gap-3 p-3">
//   <ChatBubbleAI text="Hello! I'm Krubics, your friendly AI assistant. How can I help you today?" />
//   <ChatInput inputText={prompt} setInputText={setPrompt} />
// </div>;
