
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { metric: 'M-Pesa Success Rate', current: 98.5, previous: 97.2 },
  { metric: 'Customer Retention', current: 78, previous: 75 },
  { metric: 'Average Order Value (KES)', current: 2450, previous: 2180 },
  { metric: 'Mobile App Usage', current: 89, previous: 82 },
  { metric: 'Customer Satisfaction', current: 4.3, previous: 4.0 },
];

export function PerformanceChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis type="number" stroke="#666" fontSize={12} />
          <YAxis 
            type="category" 
            dataKey="metric" 
            stroke="#666" 
            fontSize={12}
            width={140}
          />
          <Tooltip 
            formatter={(value, name) => [value, name === 'current' ? 'Current Period' : 'Previous Period']}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
          />
          <Legend />
          <Bar dataKey="current" fill="#3b82f6" name="Current Period" radius={[0, 4, 4, 0]} />
          <Bar dataKey="previous" fill="#e5e7eb" name="Previous Period" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
