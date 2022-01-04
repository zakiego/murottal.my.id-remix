import { json } from "remix";
import { LoaderFunction } from "remix";

import { supabase } from "~/utils/supabaseClient";

export const QariAPI = async () => {
  const { data, error } = await supabase
    .from("qari")
    .select("name, name_ar, image, social")
    .order("name", { ascending: true });

  return json({ data, error });
};

export const loader: LoaderFunction = async () => {
  return QariAPI();
};

export const action = async () => {
  return json({ error: true, message: "method GET only" });
};
