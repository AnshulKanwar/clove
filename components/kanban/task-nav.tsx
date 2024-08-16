import { createClient } from "@/lib/supabase/server";
import { TTask } from "@/lib/types";
import Link from "next/link";

export default async function TaskNav({ task }: { task: TTask }) {
  const supabase = createClient();

  let parent;

  if (task.parent != null) {
    const { data, error } = await supabase
      .from("tasks")
      .select()
      .eq("id", task.parent)
      .single();

    parent = data!;
  }

  return (
    <nav className="flex gap-2 items-center">
      <Link
        href={parent ? `${parent.id}` : "/"}
        className="px-2 py-1 rounded hover:bg-muted"
      >
        {parent ? parent.title : "Home"}
      </Link>
      <span>/</span>

      <div className="font-semibold cursor-pointer">{task.title}</div>
    </nav>
  );
}
