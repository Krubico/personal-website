export function InfiniteSlider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row overflow-hidden slider-animated">
      <div className="flex slide-animation optimization animate-loop-slow">
        {children}
      </div>
      <div className="flex slide-animation optimization animate-loop-slow">
        {children}
      </div>
    </div>
  );
}
