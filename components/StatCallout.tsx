export default function StatCallout({
  stat,
  label,
  tone = "cobalt",
}: {
  stat: string;
  label: string;
  tone?: "cobalt" | "signal";
}) {
  const color = tone === "cobalt" ? "var(--cobalt)" : "var(--signal)";
  const bg = tone === "cobalt" ? "#EAEFFC" : "#FDEEE8";

  return (
    <div
      className="rounded-xl px-6 py-7 my-2 flex flex-col items-start"
      style={{ background: bg, border: "0.5px solid var(--steel)" }}
    >
      <div className="font-display font-bold leading-none" style={{ color, fontSize: "clamp(2.25rem, 5vw, 3rem)" }}>
        {stat}
      </div>
      <div className="text-sm font-medium mt-2" style={{ color: "var(--text-secondary)" }}>
        {label}
      </div>
    </div>
  );
}
