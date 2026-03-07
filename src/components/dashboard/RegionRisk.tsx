import { regionRiskData } from "@/data/mockData";
import { Globe, TrendingUp, TrendingDown, Minus } from "lucide-react";

const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  stable: Minus,
};

const trendColors = {
  up: "text-risk-critical",
  down: "text-risk-low",
  stable: "text-muted-foreground",
};

export function RegionRisk() {
  return (
    <div className="rounded-lg border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-5 py-4">
        <Globe className="h-4 w-4 text-muted-foreground" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Regional Risk</h2>
      </div>
      <div className="divide-y divide-border">
        {regionRiskData.map((r) => {
          const TrendIcon = trendIcons[r.trend as keyof typeof trendIcons];
          return (
            <div key={r.region} className="flex items-center justify-between px-5 py-3 transition-colors hover:bg-accent/50">
              <div>
                <div className="text-sm font-medium text-foreground">{r.region}</div>
                <div className="mt-0.5 text-[10px] text-muted-foreground">
                  {r.risks} active risks • {r.critical} critical
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-risk-critical"
                    style={{ width: `${(r.critical / r.risks) * 100}%` }}
                  />
                </div>
                <TrendIcon className={`h-3.5 w-3.5 ${trendColors[r.trend as keyof typeof trendColors]}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
