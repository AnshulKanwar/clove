import Kanban from "@/components/kanban/kanban";

export default async function Home() {
  return (
    <main className="h-full flex flex-col">
      <div className="grow">
        <Kanban />
      </div>
    </main>
  );
}
