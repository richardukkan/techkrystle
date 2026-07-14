import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TechKrystle",
  description: "Get in touch with TechKrystle.",
};

export default function ContactPage() {
  return (
    <div className="px-6 py-14">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display font-bold text-3xl mb-6">Contact</h1>
        <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
          <p>
            Spotted outdated pricing, a broken link, or a plan we haven&apos;t covered yet? Email us at{" "}
            <a href="mailto:hello@techkrystle.com" className="underline" style={{ color: "var(--cobalt)" }}>
              hello@techkrystle.com
            </a>{" "}
            and we&apos;ll take a look.
          </p>
        </div>
      </div>
    </div>
  );
}
