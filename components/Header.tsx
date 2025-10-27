import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 border-b">
      <h1 className="text-xl font-bold">Yerin</h1>
      <nav className="space-x-4">
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
