"use server";

import createSupabaseServerClient from "@/utils/supabase/server";

export async function signUpWithEmailAndPassword({
  email,
  password,
  ...data
}: {
  email: string;
  password: string;
  confirm: string;
}) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.auth.signUp({ email, password });

  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.auth.signInWithPassword({ email, password });

  return JSON.stringify(result);
}
