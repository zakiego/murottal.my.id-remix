export default function Index() {
  return (
    <div className="flex min-h-screen bg-black">
      <div className="m-auto space-y-3 text-center text-white/90">
        <h1 className="text-xl md:text-4xl">
          Welcome to{" "}
          <a
            className="px-2 py-1 font-semibold text-blue-400 transition-all duration-300 ease-in-out rounded-md bg-gray-800/95 hover:bg-gray-800/80"
            href="https://remix.run/"
          >
            Remix Run
          </a>
        </h1>
        <h2 className="text-lg md:text-2xl">
          With{" "}
          <a
            className="px-2 py-1 text-blue-400 transition-all duration-300 ease-in-out rounded-md bg-gray-800/95 hover:bg-gray-800/80"
            href="https://tailwindcss.com/"
          >
            Tailwind CSS
          </a>
        </h2>
        <div className="px-2 py-1 text-xs transition duration-700 ease-in-out rounded-md md:text-base hover:bg-gray-800/80">
          <a href="https://github.com/zakiego/remix-tailwindcss-starter">
            https://github.com/zakiego/remix-tailwindcss-starter
          </a>
        </div>
      </div>
    </div>
  );
}
