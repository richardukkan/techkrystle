import type { Verdict } from "@/data/plans";

const VERDICT_CONFIG: Record<
  Verdict,
  { label: string; color: string; colorDark: string; bg: string }
> = {
  "worth-it": {
    label: "Worth it",
    color: "#2952E3",
    colorDark: "#1B3AA8",
    bg: "#EAEFFC",
  },
  "skip-it": {
    label: "Skip it",
    color: "#E5501F",
    colorDark: "#B23C14",
    bg: "#FDEEE8",
  },
  depends: {
    label: "Depends",
    color: "#5B6B85",
    colorDark: "#3E4A5E",
    bg: "#EEF0F3",
  },
};

export default function VerdictBadge({
  verdict,
  size = "md",
}: {
  verdict: Verdict;
  size?: "sm" | "md" | "lg";
}) {
  const config = VERDICT_CONFIG[verdict];
  const sizes = {
    sm: { padding: "3px 9px", fontSize: "11px", borderWidth: "1.5px" },
    md: { padding: "5px 13px", fontSize: "13px", borderWidth: "2px" },
    lg: { padding: "7px 18px", fontSize: "16px", borderWidth: "2.5px" },
  };
  const s = sizes[size];

  return (
    <span
      className="inline-block -rotate-3 rounded-md"
      style={{
        border: `${s.borderWidth} solid ${config.color}`,
        padding: s.padding,
        background: config.bg,
      }}
    >
      <span
        className="font-display font-bold tracking-wide"
        style={{ color: config.colorDark, fontSize: s.fontSize, letterSpacing: "0.03em" }}
      >
        {config.label.toUpperCase()}
      </span>
    </span>
  );
}
