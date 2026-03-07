import { Shield, Bell, Radio } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 glow-primary">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-foreground">RiskAtlas</h1>
            <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Logistics Risk Intelligence</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-risk-low">
            <Radio className="h-3 w-3 animate-pulse" />
            <span className="font-mono font-medium">LIVE</span>
          </div>
          <div className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-risk-critical text-[9px] font-bold text-foreground">
              4
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
