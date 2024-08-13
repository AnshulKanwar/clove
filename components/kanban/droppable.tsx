"use client";

import { createClient } from "@/lib/supabase/client";
import { Status } from "@/lib/types";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { revalidatePath } from "next/cache";
import { moveTask } from "./actions";

export default function Droppable({ children }: { children: React.ReactNode }) {
  const supabase = createClient();

  async function handleDragEnd(event: DragEndEvent) {
    if (event.over != null) {
      const taskId = event.active.id as number;
      const status = event.over?.id as Status;

      moveTask(taskId, status);
    }
  }
  return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>;
}
