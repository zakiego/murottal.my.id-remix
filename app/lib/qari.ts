export type Qari = {
  id: number;
  name: string;
  name_ar?: string;
  image?: string;
  desc?: string;
  social?: Social;
};

export type Social = {
  youtube?: string;
  instagram?: string;
  telegram?: string;
  twitter?: string;
  web?: string;
};

export type Analytictype = {
  id: number;
  type: "image" | "youtube" | "telegram";
};
