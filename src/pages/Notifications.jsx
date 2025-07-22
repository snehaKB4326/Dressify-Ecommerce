import React, { useState } from 'react';
import {
  FiBell,
  FiTruck,
  FiCheckCircle,
  FiTag,
  FiTrash,
} from 'react-icons/fi';

const notificationsData = [
  {
    id: 1,
    type: 'order',
    message: 'Your order #1234 has been placed successfully.',
    icon: <FiCheckCircle />,
    time: '2 mins ago',
    read: false,
  },
  {
    id: 2,
    type: 'shipping',
    message: 'Your item has been shipped! Track your order.',
    icon: <FiTruck />,
    time: '10 mins ago',
    read: false,
  },
  {
    id: 3,
    type: 'offer',
    message: '🔥 Flash Deal! Up to 60% OFF on women’s collection.',
    icon: <FiTag />,
    time: '1 hour ago',
    read: false,
  },
  {
    id: 4,
    type: 'order',
    message: 'Order #1232 delivered. Rate your experience.',
    icon: <FiCheckCircle />,
    time: '1 day ago',
    read: true,
  },
];

// Settings checkboxes
const defaultSettings = {
  emailOrderUpdates: true,
  smsPromotions: false,
  pushNotifications: true,
  newsletter: true,
};

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [settings, setSettings] = useState(defaultSettings);

  const markAsRead = (id) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );

  const deleteNotification = (id) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  const handleSettingChange = (key) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  const saveSettings = (e) => {
    e.preventDefault();
    alert('Notification settings saved ✅');
    // 📡 Send to API/server if required
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-800 mb-6">
        <FiBell className="text-pink-600" />
        Notifications
      </h1>

      {/* Layout Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* 🔔 Notification List */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>

          {notifications.length === 0 ? (
            <div className="text-gray-500 text-center">All caught up! 🎉</div>
          ) : (
            <ul className="space-y-4">
              {notifications.map((n) => (
                <li
                  key={n.id}
                  className={`flex items-start bg-white shadow rounded p-4 border-l-4 ${
                    n.read ? 'border-gray-300' : 'border-pink-500'
                  }`}
                >
                  <div
                    className={`mr-4 mt-1 text-xl ${
                      n.read ? 'text-gray-400' : 'text-pink-600'
                    }`}
                  >
                    {n.icon}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-sm sm:text-base ${
                        n.read ? 'text-gray-500' : 'text-gray-800 font-medium'
                      }`}
                    >
                      {n.message}
                    </p>
                    <span className="text-xs text-gray-400">{n.time}</span>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    {!n.read && (
                      <button
                        onClick={() => markAsRead(n.id)}
                        className="text-xs text-pink-500 hover:underline"
                      >
                        Mark as read
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(n.id)}
                      className="text-xs text-gray-400 hover:text-red-500"
                      title="Delete"
                    >
                      <FiTrash size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ⚙️ Notification Settings */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
          <form onSubmit={saveSettings} className="space-y-4 bg-white shadow p-6 rounded border">
            {Object.entries(settings).map(([key, value]) => {
              const labelMap = {
                emailOrderUpdates: 'Email me about order updates',
                smsPromotions: 'Send SMS for new deals & sales',
                pushNotifications: 'Enable desktop push notifications',
                newsletter: 'Subscribe to fashion newsletters',
              };
              return (
                <label key={key} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => handleSettingChange(key)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">{labelMap[key]}</span>
                </label>
              );
            })}

            <button
              type="submit"
              className="mt-4 bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition"
            >
              Save Preferences
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
