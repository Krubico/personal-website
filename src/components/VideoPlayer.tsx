import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (vidRef.current) {
      vidRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePauseVideo = () => {
    if (vidRef.current) {
      vidRef.current.pause();
      setIsPlaying(false);
    }
  };
  // TODO: Change length of clip
  return (
    <div className="relative  mx-10">
      <video
        className="rounded-xl"
        onEnded={() => setIsPlaying(false)}
        onClick={handlePauseVideo}
        ref={vidRef}
      >
        <source src="public/assets/night-city.mp4" type="video/mp4" />
      </video>
      {!isPlaying ? (
        <button
          onClick={handlePlayVideo}
          className="flex p-5 top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 absolute rounded-full backdrop-blur-md"
        >
          <FaPlay className="opacity-80 w-20 h-20 translate-x-[10%] text-black" />
        </button>
      ) : null}
    </div>
  );
}
