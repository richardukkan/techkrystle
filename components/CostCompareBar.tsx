export default function CostCompareBar({
  withoutCost,
  withCost,
  withoutLabel = "Without coverage",
  withLabel = "With coverage",
}: {
  withoutCost: number;
  withCost: number;
  withoutLabel?: string;
  withLabel?: string;
}) {
  const max = Math.max(withoutCost, withCost, 1);
  const withoutPct = Math.max((withoutCost / max) * 100, 4);
  const withPct = Math.max((withCost / max) * 100, 4);

  return (
    <div className="space-y-3">
      <BarRow label={withoutLabel} value={withoutCost} pct={withoutPct} color="var(--signal)" textColor="var(--signal-dark)" />
      <BarRow label={withLabel} value={withCost} pct={withPct} color="var(--cobalt)" textColor="var(--cobalt-dark)" />
    </div>
  );
}

function BarRow({
  label,
  value,
  pct,
  color,
  textColor,
}: {
  label: string;
  value: number;
  pct: number;
  color: string;
  textColor: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
          {label}
        </span>
        <span className="font-mono text-sm font-medium" style={{ color: textColor }}>
          ${value.toLocaleString()}
        </span>
      </div>
      <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "var(--steel-light)" }}>
        <div
          className="h-full rounded-full cost-bar-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}
