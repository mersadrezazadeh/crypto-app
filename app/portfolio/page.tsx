import readUserSession from "@/utils/supabase/session";
import { redirect } from "next/navigation";
import SignOut from "../../components/portfolio/SignOut";

async function PortfolioPage() {
  const {
    data: { session },
  } = await readUserSession();

  if (!session) return redirect("/auth");

  return (
    <div>
      <SignOut />
      {/* Portfolio layout */}
    </div>
  );
}

export default PortfolioPage;
