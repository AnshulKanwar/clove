import Kanban from "@/components/kanban/kanban";
import { createClient } from "@/lib/supabase/server";

export default async function TaskPage({ params }: { params: { id: number } }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("tasks")
    .select()
    .eq("id", params.id)
    .single();

  return <Kanban task={data!} />;
}
