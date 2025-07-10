
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueChart } from "./charts/RevenueChart";
import { UserGrowthChart } from "./charts/UserGrowthChart";
import { CategoryChart } from "./charts/CategoryChart";
import { PerformanceChart } from "./charts/PerformanceChart";

export function ChartsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">
            Revenue Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RevenueChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">
            User Growth
          </CardTitle>
        </CardHeader>
        <CardContent>
          <UserGrowthChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">
            Sales by Category
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CategoryChart />
        </CardContent>
      </Card>

      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">
            Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PerformanceChart />
        </CardContent>
      </Card>
    </div>
  );
}
