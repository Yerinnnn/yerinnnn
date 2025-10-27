import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <h1 className="text-xl font-bold">Yerin</h1>
        <nav className="space-x-4">
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/experience" className="hover:text-blue-600 transition-colors">Experience</Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
