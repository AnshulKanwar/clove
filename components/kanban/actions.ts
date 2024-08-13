"use server";

import { createClient } from "@/lib/supabase/server";
import { Status } from "@/lib/types";
import { revalidatePath } from "next/cache";

export async function createTask(title: string) {
  const supabase = createClient();

  // TODO: error handling
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // TODO: error handling
  const { error } = await supabase
    .from("tasks")
    .insert({ title, user_id: user!.id });

  console.log(error);

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
