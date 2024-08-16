import Kanban from "@/components/kanban/kanban";

export default async function Home() {
  return (
    <main className="h-[calc(100vh-2.5rem-2.0rem)]">
      <Kanban />
    </main>
  );
}
