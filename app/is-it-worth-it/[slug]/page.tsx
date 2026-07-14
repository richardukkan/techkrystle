import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPlanBySlug, getAllPlanSlugs } from "@/data/plans";
import VerdictBadge from "@/components/VerdictBadge";
import CostCompareBar from "@/components/CostCompareBar";
import { CATEGORY_IMAGES } from "@/lib/images";

export async function generateStaticParams() {
  return getAllPlanSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);
  if (!plan) return {};
  return {
    title: plan.title,
    description: plan.metaDescription,
  };
}

export default async function PlanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);
  if (!plan) notFound();

  return (
    <div>
      <section style={{ background: "var(--ink)" }} className="relative overflow-hidden px-6 pt-12 pb-10">
        <div className="absolute inset-0">
          <Image
            src={CATEGORY_IMAGES[plan.category]}
            alt=""
            fill
            priority
            className="object-cover opacity-[0.18]"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(100deg, var(--ink) 0%, var(--ink) 50%, rgba(15,22,33,0.5) 100%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <p className="font-mono text-xs tracking-widest mb-4 animate-in" style={{ color: "#8A97AD" }}>
            {plan.brand.toUpperCase()} — {plan.category.toUpperCase()}
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-5 animate-in-delay-1" style={{ color: "var(--platinum)" }}>
            {plan.title}
          </h1>
          <VerdictBadge verdict={plan.verdict} size="lg" />
          <p className="mt-5 text-base max-w-xl leading-relaxed animate-in-delay-2" style={{ color: "#AAB4C4" }}>
            {plan.verdictSummary}
          </p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-3xl">
          {/* Quick stats */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <StatCard label="Price" value={plan.priceRange} />
            <StatCard label="Deductible" value={plan.deductible} />
            <StatCard label="Enrollment window" value={plan.enrollmentWindow} />
            <StatCard label="Coverage length" value={plan.coverageLength} />
          </div>

          <div className="rounded-xl p-5 mb-10" style={{ background: "white", border: "0.5px solid var(--steel)" }}>
            <p className="text-xs font-medium mb-4" style={{ color: "var(--text-secondary)" }}>
              Typical cost of a single incident
            </p>
            <CostCompareBar
              withoutCost={plan.costWithoutNumeric}
              withCost={plan.costWithNumeric}
              withoutLabel="Without this plan"
              withLabel="With this plan (deductible)"
            />
            <p className="text-xs leading-relaxed mt-4" style={{ color: "var(--text-secondary)" }}>
              {plan.repairCostWithout}
            </p>
            <p className="font-mono text-[10px] mt-3" style={{ color: "var(--text-muted)" }}>
              LAST UPDATED {plan.lastUpdated.toUpperCase()} — SOURCE:{" "}
              <a href={plan.officialUrl} className="underline" target="_blank" rel="noopener noreferrer">
                {new URL(plan.officialUrl).hostname.replace("www.", "")}
              </a>
            </p>
          </div>

          {/* Intro */}
          <div className="space-y-4 mb-10">
            {plan.intro.map((p, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
                {p}
              </p>
            ))}
          </div>

          {/* Covers / doesn't cover */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div>
              <h2 className="font-display font-bold text-sm mb-3" style={{ color: "var(--cobalt-dark, #1B3AA8)" }}>
                What it covers
              </h2>
              <ul className="space-y-2">
                {plan.whatItCovers.map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed flex gap-2">
                    <span style={{ color: "var(--cobalt)" }}>+</span>
                    <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display font-bold text-sm mb-3" style={{ color: "var(--signal-dark, #B23C14)" }}>
                What it doesn&apos;t cover
              </h2>
              <ul className="space-y-2">
                {plan.whatItDoesntCover.map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed flex gap-2">
                    <span style={{ color: "var(--signal)" }}>–</span>
                    <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best for / skip if */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="rounded-xl p-5" style={{ background: "#EAEFFC" }}>
              <h2 className="font-display font-bold text-sm mb-3" style={{ color: "var(--cobalt-dark, #1B3AA8)" }}>
                Buy it if you...
              </h2>
              <ul className="space-y-2">
                {plan.bestFor.map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed" style={{ color: "var(--cobalt-dark, #1B3AA8)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-5" style={{ background: "#FDEEE8" }}>
              <h2 className="font-display font-bold text-sm mb-3" style={{ color: "var(--signal-dark, #B23C14)" }}>
                Skip it if you...
              </h2>
              <ul className="space-y-2">
                {plan.skipIfYou.map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed" style={{ color: "var(--signal-dark, #B23C14)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Body analysis */}
          <div className="space-y-4 mb-10">
            {plan.body.map((p, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
                {p}
              </p>
            ))}
          </div>

          {/* Alternatives */}
          {plan.alternatives.length > 0 && (
            <div className="pt-6" style={{ borderTop: "0.5px solid var(--steel)" }}>
              <h2 className="font-display font-bold text-sm mb-4">Compare against</h2>
              <div className="flex flex-wrap gap-3">
                {plan.alternatives.map((alt) =>
                  alt.slug ? (
                    <Link
                      key={alt.name}
                      href={
                        getPlanBySlug(alt.slug)
                          ? `/is-it-worth-it/${alt.slug}`
                          : `/guides/${alt.slug}`
                      }
                      className="text-sm px-4 py-2 rounded-lg font-medium hover-lift"
                      style={{ border: "0.5px solid var(--steel)", background: "white" }}
                    >
                      {alt.name} →
                    </Link>
                  ) : (
                    <span
                      key={alt.name}
                      className="text-sm px-4 py-2 rounded-lg"
                      style={{ border: "0.5px solid var(--steel)", color: "var(--text-secondary)" }}
                    >
                      {alt.name}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl p-4" style={{ background: "white", border: "0.5px solid var(--steel)" }}>
      <div className="font-mono text-[11px] mb-1.5 tracking-wide" style={{ color: "var(--text-muted)" }}>
        {label.toUpperCase()}
      </div>
      <div className="text-sm font-medium leading-snug">{value}</div>
    </div>
  );
}
