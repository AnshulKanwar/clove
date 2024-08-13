"use client";
import { TTask } from "@/lib/types";
import Task from "./task";
import { useDroppable } from "@dnd-kit/core";
import { capitalize } from "@/lib/util";

export default function Board({ id, tasks }: { id: string; tasks: TTask[] }) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div ref={setNodeRef} className="bg-zinc-100 rounded-xl p-5">
      <h1 className="text-lg font-bold text-center my-3">{capitalize(id)}</h1>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
