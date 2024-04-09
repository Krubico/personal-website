import { IconButton } from "./IconButton";
export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center self-stretch rounded-b-none rounded-t-3xl p-[4rem] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0),_rgba(72,_104,_255,_0.2)_61.42%,_rgba(255,_0,_218,_0.2)),_#000]">
      <aside className="font-section-header flex flex-row items-center justify-start gap-[0.5rem] self-stretch text-left text-[3.056rem] text-white">
        <img
          className="relative h-[6.25rem] w-[6.25rem] object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <h6 className="font-inherit relative m-0 text-inherit font-bold">
          Jia Hui
        </h6>
      </aside>
      <ul className="m-0 flex flex-row flex-wrap items-center justify-center gap-[1rem_4rem]">
        <button className="relative h-[10.563rem] w-[8.125rem] cursor-pointer bg-[transparent] p-0 [border:none]">
          <div className="absolute left-[0rem] top-[0rem] flex flex-col items-center justify-start gap-[0.063rem]">
            <div className="relative flex flex-row items-start justify-start gap-[0.625rem]">
              <div className="relative z-[0] h-[8.125rem] w-[8.125rem] rounded-[50%] bg-white" />
              <img
                className="absolute left-[2.5rem] top-[2.5rem] z-[1] !m-[0] h-[3.125rem] w-[3.125rem] object-cover"
                alt=""
                src="/email@2x.png"
              />
            </div>
            <p className="font-manrope relative m-0 text-center text-[1.75rem] font-medium text-white">
              Copy Email
            </p>
          </div>
        </button>
        <IconButton
          iconUrl="/open-document@2x.png"
          iconText="Resume"
          onClick={() => {}}
        />
        <IconButton
          iconUrl="/linkedin@2x.png"
          iconText="LinkedIn"
          onClick={() => {}}
        />
      </ul>
    </footer>
  );
}
