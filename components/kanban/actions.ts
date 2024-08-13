"use server";

import { createClient } from "@/lib/supabase/server";
import { Status } from "@/lib/types";
import { revalidatePath } from "next/cache";

export async function moveTask(id: number, status: Status) {
  console.log(`mvoing task ${id} to ${status}`);
  const supabase = createClient();

  // TODO: error handling
  const { error } = await supabase
    .from("tasks")
    .update({ status })
    .eq("id", id);

  revalidatePath("/");
}
