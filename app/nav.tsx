import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { logout } from "./login/actions";

export default async function Nav() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="flex justify-between items-center p-5">
      <Link href="/">
        <h1 className="text-2xl text-green-500 font-bold">Clove 🍀</h1>
      </Link>
      <div>
        {user ? (
          <form action={logout}>
            <Button type="submit" variant="link">
              Logout
            </Button>
          </form>
        ) : (
          <Button asChild variant="link">
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
