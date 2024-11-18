export function RegisterHeader() {
  return (
    <header className="flex flex-col gap-10">
      {" "}
      <h1 className="text-center font-semibold flex flex-col gap-1 text-2xl text-gray-600">
        Join to the
        <span
          className="text-5xl text-cyan-500"
          style={{
            WebkitTextStroke: "2px #22c55e",
          }}
        >
          Rick and Morty
        </span>{" "}
        Universe
      </h1>
      <p className="font-semibold text-lg text-orange-500">
        Create your account
      </p>
    </header>
  );
}
