"use server";

import { createClient } from "@/lib/supabase/server";
import { Status, TTask } from "@/lib/types";
import { revalidatePath } from "next/cache";

export async function createTask(title: string, parent?: TTask) {
  const supabase = createClient();

  // TODO: error handling
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // TODO: error handling
  const { error } = await supabase
    .from("tasks")
    .insert({ title, user_id: user!.id, parent: parent ? parent.id : null });

  revalidatePath("/");
}

export async function moveTask(id: number, status: Status) {
  const supabase = createClient();

  // TODO: error handling
  const { error } = await supabase
    .from("tasks")
    .update({ status })
    .eq("id", id);

  revalidatePath("/");
}

export async function deleteTask(id: number) {
  const supabase = createClient();

  const response = await supabase.from("tasks").delete().eq("id", id);

  revalidatePath("/");
}
