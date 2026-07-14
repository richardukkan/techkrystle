import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "TechKrystle's terms and conditions.",
};

export default function TermsPage() {
  return (
    <div className="px-6 py-14">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display font-bold text-3xl mb-6">Terms &amp; conditions</h1>
        <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
          <p>Last updated: July 2026</p>
          <p>
            By using techkrystle.com, you agree to the terms below. If you don&apos;t agree, please
            discontinue use of the site.
          </p>
          <h2 className="font-display font-bold text-lg pt-2">Not financial or legal advice</h2>
          <p>
            Content on this site is for general informational purposes only. Pricing, deductibles, and
            terms for third-party protection plans are subject to change by the provider at any time —
            always confirm current details on the provider&apos;s official page (linked from each of our
            pages) before purchasing.
          </p>
          <h2 className="font-display font-bold text-lg pt-2">Accuracy</h2>
          <p>
            We work to keep pricing and terms current and note a last-updated date on every page, but we
            cannot guarantee that every detail reflects the provider&apos;s current offering at the moment
            you read it.
          </p>
          <h2 className="font-display font-bold text-lg pt-2">Trademarks</h2>
          <p>
            All product and brand names referenced on this site — including Apple, AppleCare, Samsung,
            Best Buy, Geek Squad, Asurion, SquareTrade, Allstate, Dell, Walmart, and Verizon — are
            trademarks of their respective owners. TechKrystle is not affiliated with or endorsed by any of
            these companies.
          </p>
          <h2 className="font-display font-bold text-lg pt-2">Contact</h2>
          <p>
            Questions can be sent to{" "}
            <a href="mailto:hello@techkrystle.com" className="underline" style={{ color: "var(--cobalt)" }}>
              hello@techkrystle.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
