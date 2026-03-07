import { mockShipments } from "@/data/mockData";
import { Ship } from "lucide-react";

const statusStyles: Record<string, string> = {
  critical: "bg-risk-critical/15 text-risk-critical border-risk-critical/30",
  "at-risk": "bg-risk-high/15 text-risk-high border-risk-high/30",
  monitoring: "bg-risk-medium/15 text-risk-medium border-risk-medium/30",
  clear: "bg-risk-low/15 text-risk-low border-risk-low/30",
};

const riskScoreColor = (score: number) => {
  if (score >= 80) return "text-risk-critical";
  if (score >= 60) return "text-risk-high";
  if (score >= 40) return "text-risk-medium";
  return "text-risk-low";
};

export function ShipmentTable() {
  return (
    <div className="rounded-lg border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-5 py-4">
        <Ship className="h-4 w-4 text-muted-foreground" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Shipment Exposure</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              <th className="px-5 py-3">ID</th>
              <th className="px-5 py-3">Route</th>
              <th className="px-5 py-3">Vessel</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Risk</th>
              <th className="px-5 py-3 text-right">ETA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockShipments.map((s) => (
              <tr key={s.id} className="transition-colors hover:bg-accent/50">
                <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{s.id}</td>
                <td className="px-5 py-3">
                  <div className="text-xs text-foreground">{s.origin} → {s.destination}</div>
                  <div className="text-[10px] text-muted-foreground">{s.route}</div>
                </td>
                <td className="px-5 py-3 text-xs text-muted-foreground">{s.vessel}</td>
                <td className="px-5 py-3">
                  <span className={`inline-flex rounded-sm border px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase ${statusStyles[s.status]}`}>
                    {s.status}
                  </span>
                </td>
                <td className={`px-5 py-3 text-right font-mono text-sm font-bold ${riskScoreColor(s.riskScore)}`}>
                  {s.riskScore}
                </td>
                <td className="px-5 py-3 text-right font-mono text-xs text-muted-foreground">{s.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
