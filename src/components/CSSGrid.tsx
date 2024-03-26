export function CSSGrid() {
  return (
    <div
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))" }}
      className="grid grid-cols-3 gap-4 grid-flow-row "
    >
      {Array.from({ length: 9 }, (_, i) => (
        <div key={i} className="bg-blue-500">
          {i}
        </div>
      ))}
    </div>
  );
}
