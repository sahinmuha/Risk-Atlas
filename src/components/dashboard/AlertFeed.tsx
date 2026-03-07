import { RiskAlert } from "@/types/risk";
import { formatDistanceToNow } from "date-fns";
import { AlertTriangle, CloudLightning, Anchor, Users, Zap } from "lucide-react";

const severityStyles: Record<string, string> = {
  critical: "bg-risk-critical/15 text-risk-critical border-risk-critical/30",
  high: "bg-risk-high/15 text-risk-high border-risk-high/30",
  medium: "bg-risk-medium/15 text-risk-medium border-risk-medium/30",
  low: "bg-risk-low/15 text-risk-low border-risk-low/30",
};

const categoryIcons: Record<string, typeof AlertTriangle> = {
  geopolitical: AlertTriangle,
  weather: CloudLightning,
  "port-congestion": Anchor,
  labor: Users,
  cyber: Zap,
};

interface AlertFeedProps {
  alerts: RiskAlert[];
}

export function AlertFeed({ alerts }: AlertFeedProps) {
  return (
    <div className="rounded-lg border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Live Risk Alerts</h2>
        <span className="flex items-center gap-1.5 text-xs text-risk-critical">
          <span className="h-2 w-2 animate-pulse rounded-full bg-risk-critical" />
          {alerts.filter(a => a.severity === "critical").length} Critical
        </span>
      </div>
      <div className="max-h-[520px] divide-y divide-border overflow-y-auto">
        {alerts.map((alert) => {
          const Icon = categoryIcons[alert.category] || AlertTriangle;
          return (
            <div key={alert.id} className="px-5 py-4 transition-colors hover:bg-accent/50">
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 rounded p-1.5 ${severityStyles[alert.severity]}`}>
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center rounded-sm border px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase ${severityStyles[alert.severity]}`}>
                      {alert.severity}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{alert.id}</span>
                    <span className="ml-auto text-[10px] text-muted-foreground">
                      {formatDistanceToNow(alert.timestamp, { addSuffix: true })}
                    </span>
                  </div>
                  <h3 className="mt-1 text-sm font-medium text-foreground">{alert.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">{alert.description}</p>
                  <div className="mt-2 flex items-center gap-3 text-[10px] text-muted-foreground">
                    <span>{alert.region}</span>
                    <span>•</span>
                    <span>{alert.affectedShipments} shipments</span>
                    <span>•</span>
                    <span>{alert.source}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
