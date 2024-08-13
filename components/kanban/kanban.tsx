import { createClient } from "@/lib/supabase/server";
import Board from "./board";
import { Status } from "@/lib/types";
import Droppable from "./droppable";
import { DragEndEvent } from "@dnd-kit/core";

export default async function Kanban() {
  const supabase = createClient();
  const { data, error } = await supabase.from("tasks").select();

  function filterTasks(status: Status) {
    return data?.filter((task) => task.status === status);
  }

  return (
    <Droppable>
      <div className="h-full p-3 grid grid-cols-3 gap-3">
        <Board id="todo" tasks={filterTasks("todo")!} />
        <Board id="doing" tasks={filterTasks("doing")!} />
        <Board id="done" tasks={filterTasks("done")!} />
      </div>
    </Droppable>
  );
}
