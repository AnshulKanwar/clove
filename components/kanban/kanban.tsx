import { createClient } from "@/lib/supabase/server";
import Board from "./board";
import { Status } from "@/lib/types";

export default async function Kanban() {
  const supabase = createClient();
  const { data, error } = await supabase.from("tasks").select();

  function filterTasks(status: Status) {
    return data?.filter((task) => task.status === status);
  }

  return (
    <div className="h-full p-3 grid grid-cols-3 gap-3">
      <Board name="Todo" tasks={filterTasks("todo")!} />
      <Board name="Doing" tasks={filterTasks("doing")!} />
      <Board name="Done" tasks={filterTasks("done")!} />
    </div>
  );
}
