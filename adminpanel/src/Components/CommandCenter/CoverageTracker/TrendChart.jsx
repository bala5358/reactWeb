import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Fallback sample data
const sampleTrend = {
  dates: ["2025-08-01", "2025-08-02", "2025-08-03", "2025-08-04", "2025-08-05"],
  values: [50, 60, 70, 80, 90]
};

export default function TrendChart({ trend }) {
  // Prepare chart data
  let trendData;
  if (trend && Array.isArray(trend.dates) && trend.dates.length > 0) {
    trendData = trend.dates.map((date, idx) => ({
      date,
      coverage: trend.values?.[idx] ?? 0
    }));
  } else {
    trendData = sampleTrend.dates.map((date, idx) => ({
      date,
      coverage: sampleTrend.values[idx]
    }));
  }

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={trendData}
          margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            angle={-30}
            textAnchor="end"
            height={50}
          />
          <YAxis
            label={{ value: 'Coverage %', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip formatter={(value) => `${value}%`} />
          <Line
            type="monotone"
            dataKey="coverage"
            stroke="#1890ff"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
