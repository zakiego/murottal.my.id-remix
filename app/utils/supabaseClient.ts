import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hqxduecuxrozqlaicqkg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDQyNjYzNiwiZXhwIjoxOTQ2MDAyNjM2fQ.Wt4wU7tz4uj_RLixHSWzxOT9HQ0JeoU01tV_h0uYKJM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
