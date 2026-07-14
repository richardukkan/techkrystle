import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getGuideBySlug, getAllGuideSlugs } from "@/data/guides";
import { getPlanBySlug } from "@/data/plans";
import VerdictBadge from "@/components/VerdictBadge";
import ComparisonTableView from "@/components/ComparisonTableView";
import { getGuideImage } from "@/lib/images";

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

const CATEGORY_LABEL: Record<string, string> = {
  comparison: "Comparison",
  situational: "Situational",
  "how-to": "How-to",
};

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
      <section style={{ background: "var(--ink)" }} className="relative overflow-hidden px-6 pt-12 pb-10">
        <div className="absolute inset-0">
          <Image src={getGuideImage(guide.slug)} alt="" fill priority className="object-cover opacity-[0.18]" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(100deg, var(--ink) 0%, var(--ink) 50%, rgba(15,22,33,0.5) 100%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <p className="font-mono text-xs tracking-widest mb-4 animate-in" style={{ color: "#8A97AD" }}>
            GUIDE — {guide.category.toUpperCase()}
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4 animate-in-delay-1" style={{ color: "var(--platinum)" }}>
            {guide.title}
          </h1>
          <p className="text-base max-w-xl leading-relaxed animate-in-delay-2" style={{ color: "#AAB4C4" }}>
            {guide.dek}
          </p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-3xl">
          {/* Takeaway callout — the answer, up front */}
          <div
            className="rounded-xl p-5 mb-8 flex gap-4"
            style={{ background: "#EAEFFC", border: "0.5px solid var(--steel)" }}
          >
            <div
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm"
              style={{ background: "var(--cobalt)", color: "white" }}
            >
              !
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-wide mb-1.5" style={{ color: "var(--cobalt-dark, #1B3AA8)" }}>
                THE SHORT ANSWER
              </p>
              <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--cobalt-dark, #1B3AA8)" }}>
                {guide.takeaway}
              </p>
            </div>
          </div>

          <p className="font-mono text-[10px] mb-8" style={{ color: "var(--text-muted)" }}>
            LAST UPDATED {guide.lastUpdated.toUpperCase()}
          </p>

          {guide.comparisonTable && (
            <div className="mb-10 overflow-x-auto">
              <ComparisonTableView table={guide.comparisonTable} />
            </div>
          )}

          <div className="space-y-9 mb-10">
            {guide.body.map((section, i) => (
              <div key={i} className="pl-5 relative">
                <div
                  className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full"
                  style={{ background: i % 2 === 0 ? "var(--cobalt)" : "var(--slate)" }}
                />
                <p
                  className="font-mono text-[10px] mb-2 tracking-wide"
                  style={{ color: "var(--text-muted)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
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

          <div className="mt-10 pt-6 flex flex-wrap gap-3" style={{ borderTop: "0.5px solid var(--steel)" }}>
            <span
              className="font-mono text-[10px] px-2.5 py-1 rounded"
              style={{ background: "var(--steel-light)", color: "var(--text-secondary)" }}
            >
              {CATEGORY_LABEL[guide.category]}
            </span>
            <Link href="/guides" className="text-sm font-medium" style={{ color: "var(--cobalt)" }}>
              ← Back to all guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
