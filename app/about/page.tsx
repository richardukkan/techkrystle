import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TechKrystle",
  description: "Why TechKrystle exists and how we research our warranty verdicts.",
};

export default function AboutPage() {
  return (
    <div className="px-6 py-14">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display font-bold text-3xl mb-6">About TechKrystle</h1>
        <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
          <p>
            Most protection plan content online is written by the companies selling the plans, or by
            affiliates paid to recommend them. TechKrystle exists to answer one question honestly: is this
            specific plan, for this specific device, actually worth the money?
          </p>
          <p>
            We build every verdict from the same starting point — the provider&apos;s own published pricing,
            deductibles, and terms, compared against real out-of-warranty repair costs. Where the terms are
            ambiguous or change often, we say so and link directly to the official pricing page rather than
            guessing.
          </p>
          <p>
            Pricing on protection plans shifts more often than most content on the web accounts for. Every
            page on this site shows a last-updated date, and we run a refresh pass on our numbers every few
            months to keep them current.
          </p>
          <p>
            We may earn a commission if you buy a plan through a link on this site. It never changes the
            verdict — the analysis is written first, independent of any partnership.
          </p>
        </div>
      </div>
    </div>
  );
}
