import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between p-5">
      <Link href="/">
        <h1 className="text-2xl text-green-500 font-bold">Clove 🍀</h1>
      </Link>
    </nav>
  );
}
