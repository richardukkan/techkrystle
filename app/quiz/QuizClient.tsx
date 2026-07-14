"use client";

import { useState } from "react";
import Link from "next/link";
import VerdictBadge from "@/components/VerdictBadge";
import type { Verdict } from "@/data/plans";

type Answers = {
  price: "under300" | "300to800" | "over800" | null;
  history: "never" | "once" | "often" | null;
  keep: "under1" | "1to2" | "2plus" | null;
  covered: "yes" | "unsure" | "no" | null;
};

const QUESTIONS: {
  key: keyof Answers;
  question: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "price",
    question: "What did the device cost?",
    options: [
      { value: "under300", label: "Under $300" },
      { value: "300to800", label: "$300–$800" },
      { value: "over800", label: "Over $800" },
    ],
  },
  {
    key: "history",
    question: "How often do you damage devices like this?",
    options: [
      { value: "never", label: "Never — I'm careful" },
      { value: "once", label: "Once in a while" },
      { value: "often", label: "Often — I'm rough on gear" },
    ],
  },
  {
    key: "keep",
    question: "How long will you keep this device?",
    options: [
      { value: "under1", label: "Under 1 year" },
      { value: "1to2", label: "1–2 years" },
      { value: "2plus", label: "2+ years" },
    ],
  },
  {
    key: "covered",
    question: "Does your credit card already cover purchase protection?",
    options: [
      { value: "yes", label: "Yes, I checked" },
      { value: "unsure", label: "Not sure" },
      { value: "no", label: "No" },
    ],
  },
];

function computeVerdict(a: Answers): { verdict: Verdict; reasons: string[] } {
  let score = 0;
  const reasons: string[] = [];

  if (a.price === "over800") {
    score += 2;
    reasons.push("A high device price means a repair is likely to be expensive too.");
  } else if (a.price === "300to800") {
    score += 1;
  } else {
    reasons.push("At this price, a plan often costs more relative to the device than it's worth.");
  }

  if (a.history === "often") {
    score += 2;
    reasons.push("A track record of damage is the single strongest signal a plan will pay off.");
  } else if (a.history === "once") {
    score += 1;
  } else {
    score -= 1;
    reasons.push("If you rarely damage devices, you're likely to pay for coverage you never use.");
  }

  if (a.keep === "2plus") {
    score += 1;
    reasons.push("Keeping a device 2+ years gives a multi-year plan more time to pay for itself.");
  } else if (a.keep === "under1") {
    score -= 1;
    reasons.push("If you'll replace the device within a year, you're unlikely to use most of the coverage.");
  }

  if (a.covered === "yes") {
    score -= 2;
    reasons.push("Your card's purchase protection may already cover the highest-risk early period — check before paying for overlap.");
  } else if (a.covered === "unsure") {
    reasons.push("It's worth five minutes checking your card's benefits guide before buying a plan — you might already have partial coverage.");
  }

  let verdict: Verdict = "depends";
  if (score >= 3) verdict = "worth-it";
  else if (score <= -1) verdict = "skip-it";

  return { verdict, reasons };
}

export default function QuizClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    price: null,
    history: null,
    keep: null,
    covered: null,
  });

  const isComplete = step >= QUESTIONS.length;

  function selectAnswer(key: keyof Answers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value as never }));
    setStep((s) => s + 1);
  }

  function reset() {
    setAnswers({ price: null, history: null, keep: null, covered: null });
    setStep(0);
  }

  if (isComplete) {
    const { verdict, reasons } = computeVerdict(answers);
    return (
      <div className="rounded-xl p-6" style={{ background: "white", border: "0.5px solid var(--steel)" }}>
        <p className="font-mono text-xs mb-4" style={{ color: "var(--text-muted)" }}>
          YOUR VERDICT
        </p>
        <VerdictBadge verdict={verdict} size="lg" />
        <ul className="mt-6 space-y-3">
          {reasons.map((r, i) => (
            <li key={i} className="text-sm leading-relaxed flex gap-2" style={{ color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--cobalt)" }}>—</span>
              {r}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={reset}
            className="text-sm px-4 py-2 rounded-lg font-medium"
            style={{ border: "0.5px solid var(--steel)", background: "white" }}
          >
            Start over
          </button>
          <Link
            href="/is-it-worth-it"
            className="text-sm px-4 py-2 rounded-lg font-medium"
            style={{ background: "var(--cobalt)", color: "white" }}
          >
            See specific brand verdicts →
          </Link>
        </div>
      </div>
    );
  }

  const q = QUESTIONS[step];

  return (
    <div className="rounded-xl p-6" style={{ background: "white", border: "0.5px solid var(--steel)" }}>
      <div className="flex items-center gap-1.5 mb-6">
        {QUESTIONS.map((_, i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full"
            style={{ background: i <= step ? "var(--cobalt)" : "var(--steel)" }}
          />
        ))}
      </div>
      <p className="font-mono text-xs mb-2" style={{ color: "var(--text-muted)" }}>
        QUESTION {step + 1} OF {QUESTIONS.length}
      </p>
      <h2 className="font-display font-bold text-lg mb-5">{q.question}</h2>
      <div className="space-y-2.5">
        {q.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => selectAnswer(q.key, opt.value)}
            className="w-full text-left text-sm font-medium px-4 py-3 rounded-lg transition-colors"
            style={{ border: "0.5px solid var(--steel)", background: "var(--platinum)" }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
