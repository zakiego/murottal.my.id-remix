import { AnalyticType } from "~/lib/analytic";
import { supabase } from "~/utils/supabaseClient";

export const PostAnalytic = async ({ id, type }: AnalyticType) => {
  console.log(id);
  await supabase
    .from("qari_stats")
    .insert([{ qari_id: id.toString(), type: type }]);
};
