import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guides — Comparisons, situational advice, and how-tos",
  description:
    "AppleCare vs Asurion, do you need a laptop warranty, how to cancel AppleCare, and more warranty decision guides.",
};

const CATEGORY_LABEL: Record<string, string> = {
  comparison: "Comparison",
  situational: "Situational",
  "how-to": "How-to",
};

export default function GuidesHub() {
  return (
    <div className="px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest mb-3" style={{ color: "var(--text-secondary)" }}>
          GUIDES
        </p>
        <h1 className="font-display font-bold text-3xl mb-3">Comparisons and situational guides</h1>
        <p className="text-base max-w-xl mb-10" style={{ color: "var(--text-secondary)" }}>
          For when the question isn&apos;t about one plan, but how two stack up — or what to do in a specific situation.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block rounded-xl p-5 bg-white hover:shadow-md transition-shadow"
              style={{ border: "0.5px solid var(--steel)" }}
            >
              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded"
                style={{ background: "var(--steel-light)", color: "var(--text-secondary)" }}
              >
                {CATEGORY_LABEL[guide.category]}
              </span>
              <h2 className="font-medium text-base mt-2.5 mb-1.5">{guide.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {guide.dek}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
