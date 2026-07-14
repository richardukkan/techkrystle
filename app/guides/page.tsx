import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { guides } from "@/data/guides";
import { getGuideImage } from "@/lib/images";

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

const CATEGORY_COLOR: Record<string, { bg: string; text: string }> = {
  comparison: { bg: "#EAEFFC", text: "var(--cobalt-dark, #1B3AA8)" },
  situational: { bg: "#FDEEE8", text: "var(--signal-dark, #B23C14)" },
  "how-to": { bg: "var(--steel-light)", text: "var(--text-secondary)" },
};

export default function GuidesHub() {
  return (
    <div>
      <section style={{ background: "var(--ink)" }} className="px-6 pt-14 pb-12">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs tracking-widest mb-4 animate-in" style={{ color: "#8A97AD" }}>
            GUIDES
          </p>
          <h1
            className="font-display font-bold text-3xl sm:text-4xl mb-3 animate-in-delay-1"
            style={{ color: "var(--platinum)" }}
          >
            Comparisons and situational guides
          </h1>
          <p className="text-base max-w-xl leading-relaxed animate-in-delay-2" style={{ color: "#AAB4C4" }}>
            For when the question isn&apos;t about one plan, but how two stack up — or what to do in a specific situation.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-5">
            {guides.map((guide) => {
              const cat = CATEGORY_COLOR[guide.category];
              return (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="flex gap-4 rounded-xl overflow-hidden bg-white hover-lift"
                  style={{ border: "0.5px solid var(--steel)" }}
                >
                  <div className="relative w-28 sm:w-36 flex-shrink-0">
                    <Image src={getGuideImage(guide.slug)} alt="" fill className="object-cover" />
                  </div>
                  <div className="py-4 pr-4 flex-1 min-w-0">
                    <span
                      className="font-mono text-[10px] px-2 py-0.5 rounded"
                      style={{ background: cat.bg, color: cat.text }}
                    >
                      {CATEGORY_LABEL[guide.category]}
                    </span>
                    <h2 className="font-medium text-base mt-2 mb-1.5 leading-snug">{guide.title}</h2>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {guide.dek}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
