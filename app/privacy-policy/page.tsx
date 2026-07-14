import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TechKrystle's privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="px-6 py-14">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display font-bold text-3xl mb-6">Privacy policy</h1>
        <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
          <p>Last updated: July 2026</p>
          <p>
            TechKrystle (&quot;we,&quot; &quot;us&quot;) publishes independent research on device warranty and
            protection plans. This policy explains what information we collect when you visit techkrystle.com
            and how we use it.
          </p>
          <h2 className="font-display font-bold text-lg pt-2">Information we collect</h2>
          <p>
            We use Google Analytics to understand how visitors use the site — pages viewed, general location
            at the country/region level, and device type. We do not collect names, addresses, or payment
            information directly, since the site does not process payments or require accounts.
          </p>
          <h2 className="font-display font-bold text-lg pt-2">Cookies</h2>
          <p>
            Google Analytics uses cookies to distinguish visitors. You can opt out of Google Analytics
            tracking using browser extensions or by adjusting your browser&apos;s cookie settings.
          </p>
          <h2 className="font-display font-bold text-lg pt-2">Affiliate links</h2>
          <p>
            Some links on this site are affiliate links. If you click through and make a purchase, we may
            earn a commission at no additional cost to you. This does not influence our verdicts.
          </p>
          <h2 className="font-display font-bold text-lg pt-2">Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
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
