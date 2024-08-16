import Board from "./board";
import { Status, TTask } from "@/lib/types";
import Droppable from "./droppable";
import AddTask from "./add-task";
import { createClient } from "@/lib/supabase/server";
import TaskNav from "./task-nav";

export default async function Kanban({ task }: { task?: TTask }) {
  const supabase = createClient();

  async function fetchTasks() {
    let query = supabase.from("tasks").select();

    if (task != null) {
      query = query.eq("parent", task.id);
    } else {
      query = query.is("parent", null);
    }

    // TODO: error handling
    const { data, error } = await query;

    // TODO: error handling
    return data!;
  }

  function filterTasks(status: Status) {
    return tasks.filter((task) => task.status === status);
  }

  const tasks = await fetchTasks();

  return (
    <div className="h-full flex flex-col">
      <div className="flex p-5">
        {task && <TaskNav task={task} />}
        <div className="ml-auto">
          <AddTask />
        </div>
      </div>
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
