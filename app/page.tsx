import Link from "next/link";
import { plans } from "@/data/plans";
import { guides } from "@/data/guides";
import VerdictBadge from "@/components/VerdictBadge";

export default function Home() {
  const featured = plans.slice(0, 8);
  const featuredGuides = guides.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: "var(--ink)" }} className="px-6 pt-14 pb-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs tracking-widest mb-4" style={{ color: "#8A97AD" }}>
            TECHKRYSTLE.COM — WARRANTY & PROTECTION PLAN DECISIONS
          </p>
          <h1
            className="font-display font-bold text-4xl sm:text-5xl leading-tight max-w-2xl"
            style={{ color: "var(--platinum)" }}
          >
            Skip it or buy it. We&apos;ll tell you straight.
          </h1>
          <p className="mt-5 text-lg max-w-xl leading-relaxed" style={{ color: "#AAB4C4" }}>
            Verdicts on AppleCare, Samsung Care+, Geek Squad, Asurion and every other
            protection plan — built from real repair costs, not marketing copy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/is-it-worth-it"
              className="inline-block px-5 py-3 rounded-lg font-medium text-sm"
              style={{ background: "var(--cobalt)", color: "white" }}
            >
              Browse all verdicts
            </Link>
            <Link
              href="/quiz"
              className="inline-block px-5 py-3 rounded-lg font-medium text-sm border"
              style={{ borderColor: "#3A4557", color: "var(--platinum)" }}
            >
              Take the 60-second quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Docket */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs tracking-widest mb-5" style={{ color: "var(--text-secondary)" }}>
            RECENT VERDICTS
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {featured.map((plan) => (
              <Link
                key={plan.slug}
                href={`/is-it-worth-it/${plan.slug}`}
                className="block rounded-xl p-4 bg-white transition-shadow hover:shadow-md"
                style={{ border: "0.5px solid var(--steel)" }}
              >
                <div className="text-sm font-medium mb-3" style={{ color: "var(--text-primary)" }}>
                  {plan.brand} {plan.device}
                </div>
                <VerdictBadge verdict={plan.verdict} size="sm" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-12" style={{ background: "white", borderTop: "0.5px solid var(--steel)", borderBottom: "0.5px solid var(--steel)" }}>
        <div className="mx-auto max-w-5xl grid sm:grid-cols-3 gap-8">
          <div>
            <div className="font-mono text-xs mb-2" style={{ color: "var(--cobalt)" }}>01</div>
            <h3 className="font-display font-bold text-base mb-2">We check the real numbers</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Plan cost, deductible, and what an out-of-warranty repair actually costs — pulled from the providers&apos; own pricing pages.
            </p>
          </div>
          <div>
            <div className="font-mono text-xs mb-2" style={{ color: "var(--cobalt)" }}>02</div>
            <h3 className="font-display font-bold text-base mb-2">We stamp a verdict</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Worth it, skip it, or depends — with the specific situations that flip the answer either way.
            </p>
          </div>
          <div>
            <div className="font-mono text-xs mb-2" style={{ color: "var(--cobalt)" }}>03</div>
            <h3 className="font-display font-bold text-base mb-2">We keep it current</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Pricing changes. Every page shows a last-updated date, and we refresh the numbers on a regular cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-display font-bold text-xl">Situational guides</h2>
            <Link href="/guides" className="text-sm font-medium" style={{ color: "var(--cobalt)" }}>
              See all guides →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="block rounded-xl p-5 bg-white hover:shadow-md transition-shadow"
                style={{ border: "0.5px solid var(--steel)" }}
              >
                <h3 className="font-medium text-base mb-1.5">{guide.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {guide.dek}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
