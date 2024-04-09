import { useState } from "react";
import { useTypeWriter } from "../hooks/useTypeWriter";
// TODO: Get better icons
import { BsRobot } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BaseIconButton } from "components/BaseIconButton";
import { FaCode } from "react-icons/fa";
import { EmailForm } from "components/EmailForm";
import { ChatBubbleHuman } from "components/ChatBubbleHuman";

export function HeroContent() {
  const [titleText, setTitleText] = useState<string>("");
  const [firstRole, setFirstRole] = useState<string>("");
  const [secondRole, setSecondRole] = useState<string>("");
  const [thirdRole, setThirdRole] = useState<string>("");
  const [descText, setDescText] = useState<string>("");

  const finalTitleText = "Krubics";
  const firstRoleTitle = "Entrepreneur";
  const secondRoleTitle = "Software Engineer";
  const thirdRoleTitle = "Robotics Engineer";
  const finalDescText = "GIMME INTERNSHIP PLEASE";

  useTypeWriter({
    finalText: finalTitleText,
    setText: setTitleText,
    timeStep: 300,
  });

  // TODO: Find a more elegant solution
  let delayBefore = 500 * finalTitleText.length;
  const timeStep = 50;
  useTypeWriter({
    delayBefore: delayBefore,
    finalText: firstRoleTitle,
    setText: setFirstRole,
    timeStep: timeStep,
  });
  useTypeWriter({
    delayBefore: delayBefore,
    finalText: secondRoleTitle,
    setText: setSecondRole,
    timeStep: timeStep,
  });
  useTypeWriter({
    delayBefore: delayBefore,
    finalText: thirdRoleTitle,
    setText: setThirdRole,
    timeStep: timeStep,
  });

  delayBefore += timeStep * 20;
  useTypeWriter({
    delayBefore: delayBefore,
    finalText: finalDescText,
    setText: setDescText,
    timeStep: timeStep,
  });

  return (
    <div className="flex flex-col justify-between min-w-[50%] max-w-[60%] gap-3">
      <p className="text-9xl font-cyberpunk text-cyberpunk-yellow">
        {titleText}
      </p>
      <p className="text-3xl">
        I like learning, inventing and challenging norms
      </p>
      <div className="">
        <BaseIconButton
          style={{ width: "10rem" }}
          onClick={() => {
            window.open("https://www.linkedin.com/in/yong-jia-hui-50a87a19b/");
          }}
        >
          <FaLinkedin />
          <p>FOLLOW ME</p>
        </BaseIconButton>
      </div>
    </div>
  );
}
