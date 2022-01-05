import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { Link } from "remix";

import { github, telegram, youtube } from "~/assets/icon";
import type { Analytictype, Qari } from "~/lib/qari";
import { supabase } from "~/utils/supabaseClient";

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

export const Saran = () => {
  return (
    <div className="transition-all ease-in-out opacity-90 hover:opacity-100">
      <Link
        to="saran"
        className="bg-[#002884]/70 text-white rounded-md px-2 py-1.5 font-semibold text-xs md:text-base"
      >
        Saya ingin menambahkan qori lainnya! 👋🏻
      </Link>
    </div>
  );
};

export const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold text-[#002884]">
          <Link to="/">Kumpulan Murottal</Link>
        </h1>
        <p className="text-sm md:text-lg font-medium text-[#6C7380]">
          Temukan qari kesukaanmu
        </p>
      </div>
      <div>
        <a href="https://github.com/zakiego/murottal.my.id">
          <img
            className="h-5 transition-all ease-in-out opacity-60 md:h-8 hover:opacity-90"
            src={github}
          />
        </a>
      </div>
    </div>
  );
};

export const QariCard = () => {
  const { data } = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-12 md:grid-cols-3 xl:grid-cols-4">
      {data.map((qari: Qari) => {
        return (
          <div
            key={qari.id}
            id="card"
            className="backdrop-blur-3xl flex py-5 md:py-12 shadow-card bg-white rounded-[34px] px-5"
          >
            <div className="justify-center my-auto text-center">
              <a href={qari.social?.youtube}>
                {/* PostAnalytic(qari.id, "image") */}
                <img
                  className="w-3/4 mx-auto rounded-full r"
                  src={qari.image}
                  alt={qari.name}
                />
              </a>
              <h1 className="mt-6 text-xs font-medium md:mt-8 md:text-xl text-black-smooth">
                {qari.name}
              </h1>
              <p className="mt-3 text-xs md:text-sm text-black-fade">
                {qari.name_ar}
              </p>
              <div className="flex justify-center mt-4 space-x-2 md:mt-5">
                {/* PostAnalytic(qari.id, "youtube") */}
                <SocialIcon kind="youtube" href={qari.social?.youtube} />

                {/* PostAnalytic(qari.id, "tekegram") */}
                <SocialIcon kind="telegram" href={qari.social?.telegram} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const PostAnalytic = async ({ id, type }: Analytictype) => {
  console.log(id);
  await supabase
    .from("qari_stats")
    .insert([{ qari_id: id.toString(), type: type }]);
};

export const SocialIcon = ({
  kind,
  href,
}: {
  kind: string;
  href: string | undefined;
}) => {
  if (href == null) return null;

  const components: any = {
    telegram: telegram,
    youtube: youtube,
  };

  const SocialSvg = components[kind];

  return (
    <a href={href}>
      <img
        src={SocialSvg}
        className="h-4 transition-all ease-in-out md:h-6 opacity-60 hover:opacity-100"
      />
    </a>
  );
};

export const ErrorPage = ({ error }: { error: string }) => {
  return (
    <div className="text-center">
      <div className="pt-10 text-xl font-medium md:text-3xl">
        Maaf sedang ada masalah ☹️
      </div>
      <div className="underline ">{error}</div>
    </div>
  );
};
