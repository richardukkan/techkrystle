import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, getAllGuideSlugs } from "@/data/guides";
import { getPlanBySlug } from "@/data/plans";
import VerdictBadge from "@/components/VerdictBadge";
import ComparisonTableView from "@/components/ComparisonTableView";

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.metaDescription,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = (guide.relatedPlans ?? [])
    .map((s) => getPlanBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      <section style={{ background: "var(--ink)" }} className="px-6 pt-12 pb-10">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs tracking-widest mb-4" style={{ color: "#8A97AD" }}>
            GUIDE — {guide.category.toUpperCase()}
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4" style={{ color: "var(--platinum)" }}>
            {guide.title}
          </h1>
          <p className="text-base max-w-xl leading-relaxed" style={{ color: "#AAB4C4" }}>
            {guide.dek}
          </p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-[10px] mb-8" style={{ color: "var(--text-muted)" }}>
            LAST UPDATED {guide.lastUpdated.toUpperCase()}
          </p>

          {guide.comparisonTable && (
            <div className="mb-10 overflow-x-auto">
              <ComparisonTableView table={guide.comparisonTable} />
            </div>
          )}

          <div className="space-y-8 mb-10">
            {guide.body.map((section, i) => (
              <div key={i}>
                <h2 className="font-display font-bold text-lg mb-3">{section.heading}</h2>
                <div className="space-y-3">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {related.length > 0 && (
            <div className="pt-6" style={{ borderTop: "0.5px solid var(--steel)" }}>
              <h2 className="font-display font-bold text-sm mb-4">Related verdicts</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {related.map((plan) => (
                  <Link
                    key={plan.slug}
                    href={`/is-it-worth-it/${plan.slug}`}
                    className="flex items-center justify-between rounded-xl p-4 bg-white hover-lift"
                    style={{ border: "0.5px solid var(--steel)" }}
                  >
                    <span className="text-sm font-medium">
                      {plan.brand} {plan.device}
                    </span>
                    <VerdictBadge verdict={plan.verdict} size="sm" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
