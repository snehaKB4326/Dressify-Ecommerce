import React from 'react';

// Example metric data — can be replaced with API/context
const metrics = [
  {
    title: 'Total Orders',
    value: '1,245',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
    description: 'Orders placed since last month',
  },
  {
    title: 'Revenue Today',
    value: '₹ 23,875',
    bgColor: 'bg-green-100',
    textColor: 'text-green-700',
    description: 'Includes all paid, confirmed sales',
  },
  {
    title: 'Conversion Rate',
    value: '4.7%',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-700',
    description: 'From visitors to actual customers',
  },
  {
    title: 'New Customers',
    value: '87',
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-700',
    description: 'Joined your platform today',
  },
];

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">📊 Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Welcome back, Admin! Here's a snapshot of your store's performance today. You can view key KPIs and customer metrics below. Stay informed and keep growing 📈.
      </p>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`rounded shadow p-4 ${metric.bgColor} ${metric.textColor} transition transform hover:scale-[1.02]`}
          >
            <h2 className="text-sm font-medium uppercase tracking-wide mb-1">
              {metric.title}
            </h2>
            <p className="text-2xl font-bold">{metric.value}</p>
            <p className="text-xs mt-2 text-gray-600">{metric.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Insights / Content Section */}
      <div className="mt-4 bg-white shadow rounded p-6 border">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">📌 Quick Overview:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>
            Most orders today came from <strong>Mumbai</strong>, followed by Delhi and Bangalore.
          </li>
          <li>
            Your best-selling category was <strong>Women's Dresses</strong>.
          </li>
          <li>
            3 refund requests were received today.
          </li>
          <li>
            The average order value is ₹1,280.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
