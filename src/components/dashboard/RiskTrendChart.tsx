import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { riskTrendData } from "@/data/mockData";

export function RiskTrendChart() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Risk Trend — 7 Day</h2>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={riskTrendData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="criticalGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="highGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="medGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(45, 93%, 47%)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="hsl(45, 93%, 47%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 16%)" />
            <XAxis dataKey="date" tick={{ fontSize: 10, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222, 47%, 9%)",
                border: "1px solid hsl(222, 30%, 16%)",
                borderRadius: "8px",
                fontSize: "12px",
                fontFamily: "'JetBrains Mono', monospace",
              }}
              labelStyle={{ color: "hsl(210, 40%, 92%)" }}
            />
            <Area type="monotone" dataKey="critical" stackId="1" stroke="hsl(0, 72%, 51%)" fill="url(#criticalGrad)" strokeWidth={2} />
            <Area type="monotone" dataKey="high" stackId="1" stroke="hsl(25, 95%, 53%)" fill="url(#highGrad)" strokeWidth={2} />
            <Area type="monotone" dataKey="medium" stackId="1" stroke="hsl(45, 93%, 47%)" fill="url(#medGrad)" strokeWidth={1.5} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
