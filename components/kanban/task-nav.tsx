import { createClient } from "@/lib/supabase/server";
import { TTask } from "@/lib/types";
import Link from "next/link";
import AddTask from "./add-task";

export default async function TaskNav({ task }: { task?: TTask }) {
  const supabase = createClient();

  let parent;

  if (task && task.parent != null) {
    const { data, error } = await supabase
      .from("tasks")
      .select()
      .eq("id", task.parent)
      .single();

    parent = data!;
  }

  return (
    <nav className="flex pb-5 px-5">
      {task && (
        <div className="flex gap-2 items-center">
          <Link
            href={parent ? `${parent.id}` : "/"}
            className="px-2 py-1 rounded hover:bg-muted"
          >
            {parent ? parent.title : "Home"}
          </Link>
          <span>/</span>

          <div className="font-semibold cursor-pointer">{task.title}</div>
        </div>
      )}
      <div className="ml-auto">
        <AddTask parent={task} />
      </div>
    </nav>
  );
}
