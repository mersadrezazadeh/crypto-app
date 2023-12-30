"use server";

import createSupabaseServerClient from "@/utils/supabase/server";

async function readUserSession() {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.getSession();
}

export default readUserSession;
