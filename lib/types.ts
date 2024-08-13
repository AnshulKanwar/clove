import { Database } from "./supabase/database.types";

export type TTask = Database["public"]["Tables"]["tasks"]["Row"];
export type Status = Database["public"]["Enums"]["status"];
