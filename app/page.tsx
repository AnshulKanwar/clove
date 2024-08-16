import { createClient } from "@/lib/supabase/server";
import Kanban from "@/components/kanban/kanban";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("tasks")
    .select()
    .is("parent", null);

  return (
    <main className="h-full">
      <Kanban tasks={data!} />
    </main>
  );
}
