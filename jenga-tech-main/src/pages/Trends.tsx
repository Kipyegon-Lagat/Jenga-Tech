
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Trends = () => {
  const trendData = [
    { month: 'Jan', value: 400, growth: 4.3 },
    { month: 'Feb', value: 450, growth: 12.5 },
    { month: 'Mar', value: 520, growth: 15.6 },
    { month: 'Apr', value: 480, growth: -7.7 },
    { month: 'May', value: 600, growth: 25.0 },
    { month: 'Jun', value: 650, growth: 8.3 },
    { month: 'Jul', value: 720, growth: 10.8 },
    { month: 'Aug', value: 680, growth: -5.6 },
    { month: 'Sep', value: 780, growth: 14.7 },
    { month: 'Oct', value: 820, growth: 5.1 },
    { month: 'Nov', value: 900, growth: 9.8 },
    { month: 'Dec', value: 950, growth: 5.6 },
  ];

  const kpis = [
    {
      title: "Revenue Growth",
      value: "+24.5%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "User Engagement",
      value: "89.2%",
      change: "+5.7%",
      trend: "up",
      icon: Activity,
      color: "text-blue-600"
    },
    {
      title: "Conversion Rate",
      value: "12.8%",
      change: "-1.2%",
      trend: "down",
      icon: Target,
      color: "text-purple-600"
    },
    {
      title: "Market Share",
      value: "34.1%",
      change: "-0.8%",
      trend: "down",
      icon: TrendingDown,
      color: "text-orange-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Trends</h1>
          <p className="text-gray-600 mt-2">Track key performance indicators and market trends</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                  <span className={`text-sm font-medium ${
                    kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {kpi.change}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                  <p className="text-sm text-gray-500">{kpi.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Growth Trend</CardTitle>
              <CardDescription>Monthly growth percentage over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#666" fontSize={12} />
                    <YAxis stroke="#666" fontSize={12} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Growth Rate']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="growth" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Trend</CardTitle>
              <CardDescription>Overall performance metrics progression</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#666" fontSize={12} />
                    <YAxis stroke="#666" fontSize={12} />
                    <Tooltip 
                      formatter={(value) => [value, 'Performance Index']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8b5cf6" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Trend Analysis</CardTitle>
            <CardDescription>Key insights and trend predictions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Market Position</h3>
                <p className="text-sm text-gray-600">Strong growth in Q4 with 24.5% increase in revenue. Market share remains stable despite increased competition.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">User Behavior</h3>
                <p className="text-sm text-gray-600">Engagement rates are at an all-time high. Mobile usage continues to dominate with 78% of interactions.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Future Outlook</h3>
                <p className="text-sm text-gray-600">Projected 15% growth for next quarter based on current trends and seasonal patterns.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Trends;
