import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const metrics = [
  {
    title: 'Orders',
    value: '2,891',
    color: 'bg-blue-100 text-blue-700',
    sub: '+12% this week'
  },
  {
    title: 'Revenue',
    value: '₹4,80,200',
    color: 'bg-green-100 text-green-700',
    sub: '+9% this week'
  },
  {
    title: 'Visitors',
    value: '19,874',
    color: 'bg-yellow-100 text-yellow-700',
    sub: '+4.3% this week'
  },
  {
    title: 'Conversion',
    value: '6.1%',
    color: 'bg-pink-100 text-pink-700',
    sub: '+0.5% this week'
  }
];

// Sales trend - demo data
const lineData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Revenue (₹)',
      data: [42000, 57000, 36000, 59000, 67000, 73000, 80000],
      borderColor: '#ec4899',
      backgroundColor: 'rgba(236,72,153,0.1)',
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 7,
    },
  ],
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: { y: { beginAtZero: true } },
};

// Category sales split - demo data
const pieData = {
  labels: ['Women', 'Men', 'Kids', 'Accessories'],
  datasets: [
    {
      label: 'Category sales',
      data: [58, 22, 10, 10],
      backgroundColor: ['#f472b6', '#60a5fa', '#fbbf24', '#6ee7b7'],
    },
  ],
};

export default function Analytics() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📈 Analytics Overview</h1>
        <p className="text-gray-600">
          Comprehensive stats for your store performance.<br className="hidden sm:block" />
          Analyze traffic, revenue, orders, and category performance in real time.
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((m) => (
          <div key={m.title} className={`shadow rounded p-4 flex flex-col ${m.color}`}>
            <div className="text-sm uppercase font-medium">{m.title}</div>
            <div className="text-2xl font-bold ">{m.value}</div>
            <div className="text-xs text-gray-500 mt-1">{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Trend Chart */}
        <div className="p-6 bg-white rounded shadow border">
          <h3 className="text-lg font-semibold mb-3">Sales Trend (This Week)</h3>
          <Line data={lineData} options={lineOptions} />
        </div>
        {/* Pie Chart for category split */}
        <div className="p-6 bg-white rounded shadow border">
          <h3 className="text-lg font-semibold mb-3">Category Performance</h3>
          <Pie data={pieData} />
          <div className="text-xs text-gray-500 mt-3">
            Top performing category: <b>Women</b> — 58% of total sales
          </div>
        </div>
      </div>
      
      {/* Insights Section */}
      <div className="mt-10 bg-gray-50 p-6 rounded shadow border">
        <h4 className="font-semibold text-lg mb-2">Key Insights & Actions</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
          <li>Women's category continues to outperform others; consider highlighting more products in this segment.</li>
          <li>Steady growth in weekly revenue suggests strong repeat customers. Send thank you campaigns for loyalty.</li>
          <li>Work on improving the conversion rate by optimizing your product and checkout pages.</li>
        </ul>
      </div>
    </div>
  );
}
