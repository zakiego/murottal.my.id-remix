export default function Index() {
  return (
    <div className="bg-black flex min-h-screen">
      <div className="m-auto space-y-3">
        <h1 className="text-white/90 text-4xl">
          Welcome to{" "}
          <a
            className="text-blue-400 bg-gray-800/95 rounded-md px-2 py-1 hover:bg-gray-800/80 transition-all ease-in-out duration-300"
            href="https://remix.run/"
          >
            Remix Run
          </a>
        </h1>
        <div className="rounded-md px-2 py-1 text-white/90  hover:bg-gray-800/80 transition duration-700 ease-in-out">
          <a href="https://github.com/zakiego/remix-tailwindcss-starter">
            https://github.com/zakiego/remix-tailwindcss-starter
          </a>
        </div>
      </div>
    </div>
  );
}
