import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";

import { ErrorPage, Navbar, QariCard, Saran } from "~/components/";

import { QariAPI } from "./api/v1/qari";

export const loader: LoaderFunction = () => {
  return QariAPI();
};

export default function Index() {
  const { error } = useLoaderData();

  if (error) return <ErrorPage error={error.message} />;

  return (
    <div className="min-h-screen px-6 md:px-11 lg:px-16 py-7 md:py-14 from-white via-white to-[#EBF0FE] bg-gradient-to-br">
      <body>
        <nav>
          <Navbar />
        </nav>
        <div className="mt-4">
          <Saran />
        </div>
        <main className="mt-10">
          <QariCard />
        </main>
      </body>
    </div>
  );
}
