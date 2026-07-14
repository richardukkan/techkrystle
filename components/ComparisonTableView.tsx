import type { ComparisonTable } from "@/data/guides";

export default function ComparisonTableView({ table }: { table: ComparisonTable }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: "0.5px solid var(--steel)" }}>
      <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              className="text-left font-medium px-4 py-3"
              style={{ background: "var(--platinum)", color: "var(--text-secondary)", width: "34%" }}
            >
              &nbsp;
            </th>
            <th
              className="text-left font-display font-bold px-4 py-3"
              style={{ background: "#EAEFFC", color: "var(--cobalt-dark, #1B3AA8)" }}
            >
              {table.columnA}
            </th>
            <th
              className="text-left font-display font-bold px-4 py-3"
              style={{ background: "var(--steel-light)", color: "var(--text-primary)" }}
            >
              {table.columnB}
            </th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={row.feature} style={{ background: i % 2 === 0 ? "white" : "var(--platinum)" }}>
              <td
                className="px-4 py-3 font-medium"
                style={{ color: "var(--text-secondary)", borderTop: "0.5px solid var(--steel)" }}
              >
                {row.feature}
              </td>
              <td className="px-4 py-3" style={{ borderTop: "0.5px solid var(--steel)" }}>
                {row.a}
              </td>
              <td className="px-4 py-3" style={{ borderTop: "0.5px solid var(--steel)" }}>
                {row.b}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
