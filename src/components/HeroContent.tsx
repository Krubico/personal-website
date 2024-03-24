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
    <div className="flex flex-col justify-center min-w-[50%] max-w-[60%] gap-3">
      <p className="text-9xl font-cyberpunk text-cyberpunk-yellow">
        {titleText}
      </p>
      <div className="flex flex-col font-base gap-4">
        <div className="flex gap-3 justify-start items-center ">
          <MdBusinessCenter className="text-2xl" />
          <p className="text-2xl text-black">{firstRole}</p>
        </div>
        <div className="flex gap-3 justify-start items-center">
          <FaCode className="text-2xl" />
          <p className="text-2xl text-black">{secondRole}</p>
        </div>
        <div className="flex gap-3 justify-start items-center ">
          <BsRobot className="text-2xl" />
          <p className="text-2xl text-black">{thirdRole}</p>
        </div>
        <p className="font-base">{descText}</p>
      </div>
      <div className="mt-auto">
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
