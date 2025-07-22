import React, { useState } from 'react';
import { FiSearch, FiTrash2, FiEye, FiMessageSquare } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

const customersData = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'jane@example.com',
    joined: '2024-06-15',
    orders: 12,
  },
  {
    id: 2,
    name: 'John Smith',
    email: 'john.smith@example.com',
    joined: '2024-03-01',
    orders: 5,
  },
  {
    id: 3,
    name: 'Emily Johnson',
    email: 'emily.j@example.com',
    joined: '2023-12-10',
    orders: 22,
  },
  {
    id: 4,
    name: 'Chris Evans',
    email: 'chris.evans@example.com',
    joined: '2023-10-05',
    orders: 8,
  },
];

const feedbackData = [
  {
    id: 101,
    customer: 'Jane Doe',
    comment: 'Great quality product, fast delivery!',
    rating: 5,
    date: '2024-07-20',
  },
  {
    id: 102,
    customer: 'John Smith',
    comment: 'Packaging was not good, but product is fine.',
    rating: 3,
    date: '2024-07-18',
  },
  {
    id: 103,
    customer: 'Emily Johnson',
    comment: 'Loved the design and fabric. Will buy again!',
    rating: 4,
    date: '2024-07-15',
  },
];

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [customers, setCustomers] = useState(customersData);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomers((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">👥 Customers</h1>

      {/* Search */}
      <div className="relative w-full sm:w-1/2 mb-6">
        <FiSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search customers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:border-pink-500 focus:outline-none"
        />
      </div>

      {/* Customer Table */}
      <div className="overflow-auto border rounded-md shadow-sm mb-10">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Joined</th>
              <th className="px-4 py-3">Orders</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 font-medium">{customer.name}</td>
                  <td className="px-4 py-3">{customer.email}</td>
                  <td className="px-4 py-3 text-gray-500">{customer.joined}</td>
                  <td className="px-4 py-3 text-center">{customer.orders}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        title="View"
                        onClick={() => alert(`Viewing ${customer.name}`)}
                      >
                        <FiEye />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        title="Delete"
                        onClick={() => handleDelete(customer.id)}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-5 text-center text-gray-600">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 👏 Feedback Section */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <FiMessageSquare /> Customer Feedback
      </h2>

      <div className="space-y-4">
        {feedbackData.map((f) => (
          <div
            key={f.id}
            className="bg-white border-l-4 border-yellow-400 shadow p-4 rounded"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-800">{f.customer}</span>
              <span className="text-sm text-gray-500">{f.date}</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-500 text-sm mb-1">
              {Array(f.rating)
                .fill(0)
                .map((_, i) => (
                  <AiFillStar key={i} />
                ))}
            </div>
            <p className="text-gray-700 text-sm">{f.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
