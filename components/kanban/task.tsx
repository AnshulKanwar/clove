import { TTask } from "@/lib/types";

export default function Task({ task }: { task: TTask }) {
  return <div className="bg-white p-5 rounded-xl">{task.title}</div>;
}
