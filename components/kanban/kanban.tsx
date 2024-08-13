import { createClient } from "@/lib/supabase/server";
import Board from "./board";
import { Status } from "@/lib/types";
import Droppable from "./droppable";
import { DragEndEvent } from "@dnd-kit/core";
import { Plus } from "lucide-react";
import AddTask from "./add-task";

export default async function Kanban() {
  const supabase = createClient();
  const { data, error } = await supabase.from("tasks").select();

  function filterTasks(status: Status) {
    return data?.filter((task) => task.status === status);
  }

  return (
    <div className="h-full flex flex-col">
      <nav className="flex justify-between p-5">
        <h1 className="text-2xl text-green-500 font-bold">Clove 🍀</h1>
        <AddTask />
      </nav>
      <Droppable>
        <div className="grow px-3 pb-3 grid grid-cols-3 gap-3">
          <Board id="todo" tasks={filterTasks("todo")!} />
          <Board id="doing" tasks={filterTasks("doing")!} />
          <Board id="done" tasks={filterTasks("done")!} />
        </div>
      </Droppable>
    </div>
  );
}
