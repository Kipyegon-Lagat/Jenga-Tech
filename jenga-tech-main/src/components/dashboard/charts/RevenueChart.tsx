
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', revenue: 1950000, target: 2100000 },
  { month: 'Feb', revenue: 2160000, target: 2250000 },
  { month: 'Mar', revenue: 2340000, target: 2400000 },
  { month: 'Apr', revenue: 2550000, target: 2550000 },
  { month: 'May', revenue: 2760000, target: 2700000 },
  { month: 'Jun', revenue: 2670000, target: 2850000 },
  { month: 'Jul', revenue: 2880000, target: 3000000 },
  { month: 'Aug', revenue: 3090000, target: 3150000 },
  { month: 'Sep', revenue: 2940000, target: 3000000 },
  { month: 'Oct', revenue: 3210000, target: 3300000 },
  { month: 'Nov', revenue: 3360000, target: 3450000 },
  { month: 'Dec', revenue: 3540000, target: 3600000 },
];

export function RevenueChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            stroke="#666"
            fontSize={12}
          />
          <YAxis 
            stroke="#666"
            fontSize={12}
            tickFormatter={(value) => `KES ${(value / 1000000).toFixed(1)}M`}
          />
          <Tooltip 
            formatter={(value, name) => [`KES ${value.toLocaleString()}`, name === 'revenue' ? 'Revenue' : 'Target']}
            labelStyle={{ color: '#666' }}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#3b82f6' }}
            name="Revenue"
          />
          <Line 
            type="monotone" 
            dataKey="target" 
            stroke="#10b981" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
            name="Target"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
