import { Link } from "remix";

import { Navbar } from ".";

export default function TerimKasih() {
  return (
    <div className="min-h-screen px-6 md:px-11 lg:px-16 py-7 md:py-14 from-white via-white to-[#EBF0FE] bg-gradient-to-br">
      <body>
        <nav>
          <Navbar />
        </nav>
        <main className="mt-10">
          <div className="max-w-3xl mx-auto text-center text-black-smooth">
            <p className="text-3xl font-bold ">Terima kasih!</p>
            <p className="font-semibold ">
              Semoga Allah membalas kebaikanmu ❤️
            </p>
            <div className="mt-4">
              Kembali ke{" "}
              <Link className="text-[#002884]" to="/">
                beranda
              </Link>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}
