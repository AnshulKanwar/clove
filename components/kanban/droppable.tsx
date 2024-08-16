"use client";

import { Status } from "@/lib/types";
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { moveTask } from "./actions";

export default function Droppable({ children }: { children: React.ReactNode }) {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 15,
    },
  });

  const sensors = useSensors(mouseSensor);

  async function handleDragEnd(event: DragEndEvent) {
    if (event.over != null) {
      const taskId = event.active.id as number;
      const status = event.over?.id as Status;

      moveTask(taskId, status);
    }
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      {children}
    </DndContext>
  );
}
