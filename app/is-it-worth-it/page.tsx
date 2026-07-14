import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { plans } from "@/data/plans";
import VerdictBadge from "@/components/VerdictBadge";
import { getPlanImageSmall } from "@/lib/images";

export const metadata: Metadata = {
  title: "Is it worth it? Every warranty and protection plan, verdict by verdict",
  description:
    "Browse straight verdicts on AppleCare, Samsung Care+, Geek Squad, Asurion, SquareTrade, Dell Premium Support and more.",
};

export default function IsItWorthItHub() {
  return (
    <div className="px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest mb-3" style={{ color: "var(--text-secondary)" }}>
          THE DOCKET
        </p>
        <h1 className="font-display font-bold text-3xl mb-3">Is it worth it?</h1>
        <p className="text-base max-w-xl mb-10" style={{ color: "var(--text-secondary)" }}>
          Every brand and device we&apos;ve reviewed, with a plain verdict and the numbers behind it.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <Link
              key={plan.slug}
              href={`/is-it-worth-it/${plan.slug}`}
              className="block rounded-xl overflow-hidden bg-white hover-lift"
              style={{ border: "0.5px solid var(--steel)" }}
            >
              <div className="relative h-28 w-full">
                <Image src={getPlanImageSmall(plan.slug, plan.category)} alt="" fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{plan.brand}</div>
                    <h2 className="font-medium text-base mt-0.5">{plan.device}</h2>
                  </div>
                </div>
                <VerdictBadge verdict={plan.verdict} size="sm" />
                <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--text-secondary)" }}>
                  {plan.verdictSummary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
