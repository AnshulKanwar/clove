import { TTask } from "@/lib/types";
import Task from "./task";

export default function Board({
  name,
  tasks,
}: {
  name: string;
  tasks: TTask[];
}) {
  return (
    <div className="bg-zinc-100 rounded-xl p-5">
      <h1 className="text-lg font-bold text-center my-3">{name}</h1>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
