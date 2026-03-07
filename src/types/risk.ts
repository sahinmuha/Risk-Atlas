export type RiskSeverity = "critical" | "high" | "medium" | "low" | "info";
export type RiskCategory = "geopolitical" | "weather" | "port-congestion" | "labor" | "cyber";

export interface RiskAlert {
  id: string;
  title: string;
  description: string;
  severity: RiskSeverity;
  category: string;
  region: string;
  timestamp: Date;
  affectedShipments: number;
  source: string;
}
