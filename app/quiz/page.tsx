import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Should I buy this warranty? Decision quiz",
  description:
    "Answer four quick questions and get a straight worth-it, skip-it, or depends verdict for your specific device and situation.",
};

export default function QuizPage() {
  return (
    <div className="px-6 py-14">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-xs tracking-widest mb-3" style={{ color: "var(--text-secondary)" }}>
          60-SECOND QUIZ
        </p>
        <h1 className="font-display font-bold text-3xl mb-3">Should I buy this warranty?</h1>
        <p className="text-base mb-10" style={{ color: "var(--text-secondary)" }}>
          Four questions about your device and how you use it. No email required.
        </p>
        <QuizClient />
      </div>
    </div>
  );
}
