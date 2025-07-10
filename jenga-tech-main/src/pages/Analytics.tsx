
import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TrendingUp, Users, MapPin, Smartphone } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const regionalData = [
  { region: 'Nairobi', users: 12500, revenue: 1250000 },
  { region: 'Mombasa', users: 8900, revenue: 890000 },
  { region: 'Kisumu', users: 6700, revenue: 670000 },
  { region: 'Nakuru', users: 5400, revenue: 540000 },
  { region: 'Eldoret', users: 4200, revenue: 420000 },
];

const mobileUsageData = [
  { month: 'Jan', smartphones: 78, feature_phones: 22 },
  { month: 'Feb', smartphones: 81, feature_phones: 19 },
  { month: 'Mar', smartphones: 83, feature_phones: 17 },
  { month: 'Apr', smartphones: 85, feature_phones: 15 },
  { month: 'May', smartphones: 87, feature_phones: 13 },
  { month: 'Jun', smartphones: 89, feature_phones: 11 },
];

const Analytics = () => {
  const [dateRange, setDateRange] = useState("30d");

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 w-full">
        <div className="flex w-full">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header dateRange={dateRange} setDateRange={setDateRange} />
            <main className="flex-1 p-6 space-y-6 overflow-auto">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
                <p className="text-gray-600">Kenya Market Insights</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Total Users</CardTitle>
                    <Users className="w-4 h-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">37,700</div>
                    <p className="text-xs text-muted-foreground">Active across Kenya</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Regional Coverage</CardTitle>
                    <MapPin className="w-4 h-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">47 Counties</div>
                    <p className="text-xs text-muted-foreground">Nationwide reach</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Mobile Penetration</CardTitle>
                    <Smartphone className="w-4 h-4 text-purple-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">89%</div>
                    <p className="text-xs text-muted-foreground">Smartphone adoption</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Growth Rate</CardTitle>
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+24%</div>
                    <p className="text-xs text-muted-foreground">Year over year</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Regional Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={regionalData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="region" />
                          <YAxis tickFormatter={(value) => `KES ${(value / 1000).toFixed(0)}K`} />
                          <Tooltip formatter={(value) => [`KES ${value.toLocaleString()}`, 'Revenue']} />
                          <Bar dataKey="revenue" fill="#3b82f6" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Device Usage Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={mobileUsageData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip formatter={(value) => [`${value}%`, 'Usage']} />
                          <Line type="monotone" dataKey="smartphones" stroke="#3b82f6" name="Smartphones" />
                          <Line type="monotone" dataKey="feature_phones" stroke="#ef4444" name="Feature Phones" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;
