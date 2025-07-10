
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', users: 12000 },
  { month: 'Feb', users: 13500 },
  { month: 'Mar', users: 15200 },
  { month: 'Apr', users: 17800 },
  { month: 'May', users: 19600 },
  { month: 'Jun', users: 21300 },
  { month: 'Jul', users: 23100 },
  { month: 'Aug', users: 24800 },
  { month: 'Sep', users: 26500 },
  { month: 'Oct', users: 28200 },
  { month: 'Nov', users: 29800 },
  { month: 'Dec', users: 31500 },
];

export function UserGrowthChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            stroke="#666"
            fontSize={12}
          />
          <YAxis 
            stroke="#666"
            fontSize={12}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
          />
          <Tooltip 
            formatter={(value) => [`${value.toLocaleString()}`, 'Active Users']}
            labelStyle={{ color: '#666' }}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="users" 
            stroke="#8b5cf6" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorUsers)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
