
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, Activity } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell, LineChart, Line } from 'recharts';

const Charts = () => {
  const barData = [
    { category: 'Mobile Banking', value: 4500, growth: 15 },
    { category: 'Online Shopping', value: 3200, growth: 8 },
    { category: 'Digital Payments', value: 2800, growth: 22 },
    { category: 'Investment', value: 1900, growth: -5 },
    { category: 'Insurance', value: 1200, growth: 12 },
  ];

  const pieData = [
    { name: 'Nairobi', value: 35, color: '#3b82f6' },
    { name: 'Mombasa', value: 20, color: '#10b981' },
    { name: 'Kisumu', value: 15, color: '#f59e0b' },
    { name: 'Nakuru', value: 12, color: '#ef4444' },
    { name: 'Other Cities', value: 18, color: '#8b5cf6' },
  ];

  const lineData = [
    { month: 'Jan', desktop: 3000, mobile: 4500 },
    { month: 'Feb', desktop: 3200, mobile: 4800 },
    { month: 'Mar', desktop: 2800, mobile: 5200 },
    { month: 'Apr', desktop: 3500, mobile: 5500 },
    { month: 'May', desktop: 3200, mobile: 5800 },
    { month: 'Jun', desktop: 3800, mobile: 6200 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Charts</h1>
          <p className="text-gray-600 mt-2">Visual data representations and analytics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <CardTitle className="text-sm font-medium">Bar Charts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-sm text-gray-500">Active visualizations</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <PieChart className="w-5 h-5 text-green-600" />
                <CardTitle className="text-sm font-medium">Pie Charts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">8</p>
              <p className="text-sm text-gray-500">Distribution views</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <CardTitle className="text-sm font-medium">Line Charts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-purple-600">15</p>
              <p className="text-sm text-gray-500">Trend analyses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-orange-600" />
                <CardTitle className="text-sm font-medium">Real-time</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-orange-600">6</p>
              <p className="text-sm text-gray-500">Live dashboards</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Service Usage by Category</CardTitle>
              <CardDescription>Popular financial services in Kenya</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="category" 
                      stroke="#666" 
                      fontSize={12}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis stroke="#666" fontSize={12} />
                    <Tooltip 
                      formatter={(value, name) => [value.toLocaleString(), 'Users']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regional Distribution</CardTitle>
              <CardDescription>User base across major Kenyan cities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Share']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <RechartsPieChart dataKey="value" data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={120}>
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </RechartsPieChart>
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {pieData.map((entry, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="text-sm text-gray-600">{entry.name} ({entry.value}%)</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Platform Usage Trends</CardTitle>
            <CardDescription>Desktop vs Mobile usage over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip 
                    formatter={(value, name) => [value.toLocaleString(), name === 'desktop' ? 'Desktop' : 'Mobile']}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="desktop" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    name="Desktop"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mobile" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                    name="Mobile"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Charts;
