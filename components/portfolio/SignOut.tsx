import createSupabaseServerClient from "@/utils/supabase/server";
import { redirect } from "next/navigation";

function SignOut() {
  async function logout() {
    "use server";

    const supabase = await createSupabaseServerClient();

    await supabase.auth.signOut();

    redirect("/auth");
  }

  return (
    <form action={logout}>
      <button>SignOut</button>
    </form>
  );
}

export default SignOut;
