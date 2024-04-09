export function BentoSet({
  className,
  contentArray,
}: {
  className?: string;
  contentArray: string[];
}) {
  // Change the following to Semantic HTML Tags
  return (
    <div
      className={
        `grid aspect-square grid-cols-2 grid-rows-2 gap-8 rounded-xl bg-black p-16 ` +
        className
      }
    >
      <div className="col-span-2 flex items-center  justify-center rounded-xl bg-white p-16">
        {contentArray[0]}
      </div>

      <div className="col-span-1 flex items-center justify-center rounded-xl bg-white  p-16">
        {contentArray[1]}
      </div>
      <div className="col-span-1 flex items-center justify-center rounded-xl bg-white  p-16">
        {contentArray[2]}
      </div>
    </div>
  );
}

// top-[50vh] -translate-y-1/2
