import Link from "next/link";

export default function Header() {
  return (
    <header style={{ background: "var(--ink)" }}>
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <ShieldMark />
          <span className="font-display font-bold text-lg tracking-tight" style={{ color: "var(--platinum)" }}>
            TechKrystle
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm" style={{ color: "#AAB4C4" }}>
          <Link href="/is-it-worth-it" className="nav-link hover:text-white transition-colors">
            Is it worth it?
          </Link>
          <Link href="/guides" className="nav-link hover:text-white transition-colors">
            Guides
          </Link>
          <Link href="/quiz" className="nav-link hover:text-white transition-colors">
            Quiz
          </Link>
          <Link href="/about" className="nav-link hover:text-white transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function ShieldMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2L4 5v6c0 5 3.4 8.7 8 9.9 4.6-1.2 8-4.9 8-9.9V5l-8-3z"
        fill="#2952E3"
      />
      <path
        d="M8.5 12.2l2.3 2.3 4.7-4.9"
        stroke="#F6F7F9"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
