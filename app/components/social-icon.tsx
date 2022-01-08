import { telegram, youtube } from "~/assets/icon";

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
