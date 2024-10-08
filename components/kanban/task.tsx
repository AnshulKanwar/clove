import { TTask } from "@/lib/types";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { deleteTask } from "./actions";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Task({ task }: { task: TTask }) {
  const { isDragging, attributes, listeners, setNodeRef, transform } =
    useDraggable({
      id: task.id,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Link href={`/${task.id}`}>
      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className={cn("bg-background p-5 rounded group", {
          "shadow-2xl": isDragging,
        })}
      >
        <div className="flex justify-between items-center">
          <span className="py-2">{task.title}</span>
          <Button
            variant="outline"
            size="icon"
            className="hidden group-hover:inline-flex"
            onClick={() => deleteTask(task.id)}
          >
            <Trash className="h-4 w-4" color="red" />
          </Button>
        </div>
      </div>
    </Link>
  );
}
