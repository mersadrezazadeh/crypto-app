import readUserSession from "@/utils/supabase/session";
import { redirect } from "next/navigation";

async function page() {
  const {
    data: { session },
  } = await readUserSession();

  if (session) return redirect("/portfolio");

  return <div>{/* AuthForm */}</div>;
}

export default page;
