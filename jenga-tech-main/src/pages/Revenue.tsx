
import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DollarSign, TrendingUp, CreditCard, Banknote } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const revenueData = [
  { month: 'Jan', total: 1950000, mpesa: 1200000, card: 450000, cash: 300000 },
  { month: 'Feb', total: 2160000, mpesa: 1350000, card: 540000, cash: 270000 },
  { month: 'Mar', total: 2340000, mpesa: 1500000, card: 600000, cash: 240000 },
  { month: 'Apr', total: 2550000, mpesa: 1680000, card: 630000, cash: 240000 },
  { month: 'May', total: 2760000, mpesa: 1850000, card: 690000, cash: 220000 },
  { month: 'Jun', total: 2670000, mpesa: 1820000, card: 650000, cash: 200000 },
];

const paymentMethodData = [
  { method: 'M-Pesa', percentage: 68, amount: 1820000 },
  { method: 'Card Payments', percentage: 24, amount: 650000 },
  { method: 'Cash', percentage: 8, amount: 200000 },
];

const Revenue = () => {
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
                <h1 className="text-3xl font-bold text-gray-900">Revenue Analytics</h1>
                <p className="text-gray-600">Financial Performance in KES</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
                    <DollarSign className="w-4 h-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">KES 2,670,000</div>
                    <p className="text-xs text-muted-foreground">+8.5% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">M-Pesa Revenue</CardTitle>
                    <Banknote className="w-4 h-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">KES 1,820,000</div>
                    <p className="text-xs text-muted-foreground">68% of total revenue</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Card Payments</CardTitle>
                    <CreditCard className="w-4 h-4 text-purple-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">KES 650,000</div>
                    <p className="text-xs text-muted-foreground">24% of total revenue</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Growth Rate</CardTitle>
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+15.2%</div>
                    <p className="text-xs text-muted-foreground">Year over year</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="col-span-1 lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Revenue Trend (KES)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={revenueData}>
                          <defs>
                            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis tickFormatter={(value) => `KES ${(value / 1000000).toFixed(1)}M`} />
                          <Tooltip formatter={(value) => [`KES ${value.toLocaleString()}`, 'Revenue']} />
                          <Area type="monotone" dataKey="total" stroke="#3b82f6" fillOpacity={1} fill="url(#colorTotal)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {paymentMethodData.map((method, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500" style={{
                              backgroundColor: index === 0 ? '#3b82f6' : index === 1 ? '#8b5cf6' : '#ef4444'
                            }}></div>
                            <span className="font-medium">{method.method}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">KES {method.amount.toLocaleString()}</div>
                            <div className="text-sm text-gray-500">{method.percentage}%</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Revenue by Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
                          <Tooltip formatter={(value) => [`KES ${value.toLocaleString()}`, 'Revenue']} />
                          <Line type="monotone" dataKey="mpesa" stroke="#3b82f6" name="M-Pesa" strokeWidth={2} />
                          <Line type="monotone" dataKey="card" stroke="#8b5cf6" name="Card" strokeWidth={2} />
                          <Line type="monotone" dataKey="cash" stroke="#ef4444" name="Cash" strokeWidth={2} />
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

export default Revenue;
