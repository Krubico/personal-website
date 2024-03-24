import { useEffect } from "react";

// TODO: Fix bug when reload page, 2 characters spawn at once
export const useTypeWriter = ({
  delayBefore,
  finalText,
  setText,
  timeStep,
}: {
  delayBefore?: number;
  finalText: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  timeStep: number;
}) => {
  useEffect(() => {
    let currText = "";
    let i = 0;
    const typeWriter = () => {
      if (i < finalText.length) {
        currText += finalText.charAt(i);
        setText(currText);
        setTimeout(typeWriter, timeStep);
        i++;
      }
    };
    if (delayBefore) {
      setTimeout(typeWriter, delayBefore);
    } else {
      setTimeout(typeWriter);
    }
  }, []);
};
