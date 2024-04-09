import * as React from "react";

interface ProjectCardProps {
  imageSrc: string;
  projectName: string;
  tags: string[];
  statement: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  projectName,
  tags,
  statement,
}) => (
  <div className="flex flex-col items-center px-20 py-9 mt-96 max-w-full text-black bg-white rounded-2xl shadow-sm w-[460px] max-md:px-5 max-md:mt-10">
    <img
      src={imageSrc}
      alt={projectName}
      className="max-w-full rounded-full aspect-square w-[200px]"
    />
    <div className="mt-7 text-4xl font-medium">{projectName}</div>
    <div className="flex gap-2.5 pr-20 mt-4 max-w-full text-base whitespace-nowrap w-[262px] max-md:pr-5">
      {tags.map((tag) => (
        <div
          key={tag}
          className="justify-center px-4 py-1 bg-white rounded-[50px]"
        >
          {tag}
        </div>
      ))}
    </div>
    <div className="mt-4 text-3xl text-black text-opacity-50">{statement}</div>
  </div>
);

function MyComponent() {
  return (
    <div className="flex flex-col items-center pt-10 bg-stone-100">
      <header className="flex gap-5 justify-between items-center px-5 w-full font-bold max-w-[1100px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2 justify-center self-stretch my-auto text-3xl text-black">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7637f39878d8718d9c5a195c023572dbff45273821e1c22c3ee80b560fd784e?apiKey=fce190cbec644343be2d58edaf296402&"
            alt="Jia Hui"
            className="shrink-0 aspect-square w-[50px]"
          />
          <div className="flex-auto my-auto">Jia Hui</div>
        </div>
        <nav className="flex gap-3.5 self-stretch my-auto text-sm text-black whitespace-nowrap">
          <div>About</div>
          <div>Experience</div>
          <div>Projects</div>
        </nav>
        <div className="flex gap-2.5 self-stretch px-20 max-md:flex-wrap max-md:px-5">
          <div className="justify-center px-3 py-5 text-3xl text-white whitespace-nowrap bg-black rounded-[90px]">
            Resume
          </div>
          <div className="my-auto text-4xl text-black">Let's Connect</div>
        </div>
      </header>
      <main>
        <section className="mt-56 text-7xl text-center text-black bg-clip-text w-[855px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <span className="font-bold">I build products that </span>
          <span className="font-bold">innovate</span>
          <span className="font-bold"> for you</span>
        </section>
        <section>
          <h1 className="mt-20 text-5xl font-bold text-black max-md:mt-10 max-md:text-4xl">
            Jia Hui
          </h1>
          <p className="mt-5 text-3xl font-medium text-black">
            Software & Robotics Developer
          </p>
        </section>
        <div className="flex z-10 flex-col px-5 pt-4 pb-1.5 mt-24 w-56 max-w-full text-3xl font-medium text-center text-black bg-stone-100 max-md:mt-10">
          <div className="flex gap-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4932f2df9b80db8fbf58bfa27300015078ac90c0db00d5170480fed7a5b8e50?apiKey=fce190cbec644343be2d58edaf296402&"
              alt="Learn More"
              className="shrink-0 w-10 aspect-square"
            />
            <div>Learn More</div>
          </div>
        </div>
        <section className="flex justify-center items-center self-stretch px-16 py-20 w-full bg-stone-100 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-64 mb-36 w-full max-w-[1102px] max-md:my-10 max-md:max-w-full">
            <h2 className="self-end mr-32 text-5xl font-bold text-black max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
              What can I do for you?
            </h2>
            <div className="px-px mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/321d158eac95ee206bea28d466241eb890bb6c12014af7e6b310f9ec8244f9d2?apiKey=fce190cbec644343be2d58edaf296402&"
                    alt=""
                    className="mt-14 w-full aspect-square max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/baca4501-1a7e-4fd9-a26f-080a1251ee6d?apiKey=fce190cbec644343be2d58edaf296402&"
                    alt=""
                    className="w-full border border-black border-solid aspect-[2.22] stroke-[1px] stroke-black max-md:mt-9 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="justify-center self-stretch px-16 py-5 font-bold text-center text-white bg-black mt-[538px] text-[184px] max-md:pr-7 max-md:pl-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Work Experience
        </section>
        <section className="mt-52 w-full max-w-[1101px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col flex-wrap grow justify-center content-center px-6 py-7 w-full bg-black rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="justify-center px-7 pt-14 pb-14 text-3xl font-semibold text-black bg-white rounded-[30px] max-md:px-5 max-md:max-w-full">
                  Launch experimental defence project{" "}
                </div>
                <div className="mt-9 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                      <div className="grow justify-center px-9 py-6 w-full text-3xl font-semibold text-black bg-white rounded-[30px] max-md:px-5 max-md:mt-9">
                        500% speed increase in AI{" "}
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                      <div className="grow justify-center px-3 py-14 w-full text-3xl font-semibold text-black bg-white rounded-[30px] max-md:mt-9">
                        Top Performing Intern
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 pt-3 mt-48 text-black max-md:mt-10 max-md:max-w-full">
                <h3 className="mt-3 text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                  DSTA
                </h3>
                <div className="flex gap-2.5 pr-20 mt-4 text-base whitespace-nowrap max-md:flex-wrap max-md:pr-5">
                  <div className="justify-center px-4 py-1 bg-white rounded-[50px]">
                    AI
                  </div>
                  <div className="justify-center px-4 py-1 bg-white rounded-[50px]">
                    AI
                  </div>
                  <div className="justify-center px-4 py-1 bg-white rounded-[50px]">
                    AI
                  </div>
                  <div className="justify-center px-4 py-1 bg-white rounded-[50px]">
                    AI
                  </div>
                </div>
                <p className="mt-4 text-3xl font-medium text-blue-600 max-md:max-w-full">
                  How did a robotics student make a{" "}
                  <span className="text-blue-600">lasting impact</span> in DSTA
                  robotics team?
                </p>
                <div className="flex gap-2 self-start mt-14 text-3xl max-md:mt-10">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/707f92c4fff4c83abd20e7952d82591d6ec2618c06cae71c96845077b681ce17?apiKey=fce190cbec644343be2d58edaf296402&"
                    alt="Mentor Approved"
                    className="shrink-0 aspect-square w-[50px]"
                  />
                  <div className="my-auto">Mentor Approved</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-56 font-bold text-center text-black text-[184px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Selected Projects
        </section>
        <ProjectCard
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2b587d9cd7c893cd0b67f265c20429c4dd894081baf09d52e2ce4f658e2a3b52?apiKey=fce190cbec644343be2d58edaf296402&"
          projectName="Project Name"
          tags={["AI", "AI", "AI"]}
          statement="Eye Catching Statement (HOOK)"
        />
        <section className="flex flex-col self-stretch px-20 font-bold text-center text-black mt-[472px] text-[184px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <div className="max-md:max-w-full max-md:text-4xl">let's Build</div>
          <div className="self-end mt-16 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Together
          </div>
        </section>
      </main>
      <footer className="flex flex-col self-stretch px-10 pt-7 pb-20 mt-9 w-full bg-black max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2 self-start text-3xl font-bold text-white">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7637f39878d8718d9c5a195c023572dbff45273821e1c22c3ee80b560fd784e?apiKey=fce190cbec644343be2d58edaf296402&"
            alt="Jia Hui"
            className="shrink-0 aspect-square w-[50px]"
          />
          <div className="flex-auto my-auto">Jia Hui</div>
        </div>
        <div className="flex gap-3.5 items-center self-end mt-16 mb-8 text-3xl font-medium text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10">
          <div className="justify-center self-stretch px-10 py-7 rounded-[90px] max-md:px-5">
            Resume
          </div>
          <div className="justify-center self-stretch px-5 py-4 my-auto bg-white rounded-[90px]">
            LinkedIn
          </div>
          <div className="justify-center self-stretch px-3.5 py-4 my-auto bg-white rounded-[90px]">
            JH01.21@ichat.sp.edu.sg
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyComponent;
