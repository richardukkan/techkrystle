import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid #263041" }}>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-display font-bold mb-3" style={{ color: "var(--platinum)" }}>
              TechKrystle
            </div>
            <p style={{ color: "#8A97AD" }} className="text-xs leading-relaxed">
              Straight verdicts on warranty and protection plans, backed by real repair costs.
            </p>
          </div>
          <FooterCol
            title="Browse"
            links={[
              { href: "/is-it-worth-it", label: "Is it worth it?" },
              { href: "/guides", label: "Guides" },
              { href: "/quiz", label: "Decision quiz" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { href: "/privacy-policy", label: "Privacy policy" },
              { href: "/terms", label: "Terms" },
            ]}
          />
        </div>
        <div
          className="mt-10 pt-6 text-xs flex flex-col sm:flex-row justify-between gap-2"
          style={{ borderTop: "1px solid #263041", color: "#5B6B85" }}
        >
          <span>© {new Date().getFullYear()} TechKrystle. All product and brand names are trademarks of their respective owners.</span>
          <span className="font-mono">Verdicts reviewed monthly</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <div className="font-medium mb-3" style={{ color: "var(--platinum)" }}>
        {title}
      </div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} style={{ color: "#8A97AD" }} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
