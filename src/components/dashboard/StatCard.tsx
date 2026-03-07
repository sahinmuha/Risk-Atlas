import { Shield, AlertTriangle, TrendingUp, Ship } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: "shield" | "alert" | "trending" | "ship";
  change?: string;
  changeType?: "up" | "down" | "neutral";
  severity?: "critical" | "high" | "medium" | "low" | "info";
}

const iconMap = {
  shield: Shield,
  alert: AlertTriangle,
  trending: TrendingUp,
  ship: Ship,
};

const severityBorder: Record<string, string> = {
  critical: "border-risk-critical risk-glow-critical",
  high: "border-risk-high risk-glow-high",
  medium: "border-risk-medium",
  low: "border-risk-low",
  info: "border-primary glow-primary",
};

export function StatCard({ label, value, icon, change, changeType, severity = "info" }: StatCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className={`rounded-lg border bg-card p-5 ${severityBorder[severity]}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-mono text-3xl font-bold tracking-tight text-foreground">{value}</span>
        {change && (
          <span className={`text-xs font-medium ${changeType === "up" ? "text-risk-critical" : changeType === "down" ? "text-risk-low" : "text-muted-foreground"}`}>
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
