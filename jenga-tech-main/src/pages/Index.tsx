
import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { MetricsCards } from "@/components/dashboard/MetricsCards";
import { ChartsGrid } from "@/components/dashboard/ChartsGrid";
import { ReportsSection } from "@/components/dashboard/ReportsSection";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  const [dateRange, setDateRange] = useState("30d");

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 w-full">
        <div className="flex w-full">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header dateRange={dateRange} setDateRange={setDateRange} />
            <main className="flex-1 p-6 space-y-6 overflow-auto">
              <MetricsCards />
              <ChartsGrid />
              <ReportsSection />
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
