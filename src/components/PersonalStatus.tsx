export function PersonalStatus() {
  return (
    <div className="flex gap-2 items-center">
      <div
        style={{
          boxShadow: "0 0 1rem 0.5rem #fff, 0 0 1.5rem 1rem #dfd",
          background:
            "radial-gradient(circle at center, green 0, transparent  100%)",
        }}
        className=" bg-transparent aspect-square w-3 rounded-full"
      ></div>
      <p className="font-medium text-sm text-green-500">Available</p>
    </div>
  );
}
