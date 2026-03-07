import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { AlertFeed } from "@/components/dashboard/AlertFeed";
import { RiskTrendChart } from "@/components/dashboard/RiskTrendChart";
import { ShipmentTable } from "@/components/dashboard/ShipmentTable";
import { RegionRisk } from "@/components/dashboard/RegionRisk";
import { mockAlerts } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="mx-auto max-w-[1400px] px-6 py-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Active Risks" value={74} icon="alert" severity="critical" change="+12% vs last week" changeType="up" />
          <StatCard label="Critical Alerts" value={6} icon="shield" severity="critical" change="+2 today" changeType="up" />
          <StatCard label="Shipments At Risk" value={203} icon="ship" severity="high" change="14% of active" changeType="neutral" />
          <StatCard label="Avg Risk Score" value={67} icon="trending" severity="medium" change="-3 pts" changeType="down" />
        </div>

        {/* Main Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left: Alerts */}
          <div className="lg:col-span-1">
            <AlertFeed alerts={mockAlerts} />
          </div>

          {/* Right: Charts + Table */}
          <div className="space-y-6 lg:col-span-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <RiskTrendChart />
              <RegionRisk />
            </div>
            <ShipmentTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
