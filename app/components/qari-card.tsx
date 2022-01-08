import { useLoaderData } from "remix";

import type { QariType } from "~/lib/qari";

import { SocialIcon } from ".";

export const QariCard = () => {
  const { data } = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-12 md:grid-cols-3 xl:grid-cols-4">
      {data.map((qari: QariType) => {
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
