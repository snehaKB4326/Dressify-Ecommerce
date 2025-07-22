import React, { useState } from 'react';

const Settings = () => {
  // Account
  const [fullName, setFullName] = useState('Jane Doe');
  const [email, setEmail] = useState('jane@example.com');
  const [password, setPassword] = useState('');

  // Store
  const [storeName, setStoreName] = useState('Dressify');
  const [storeStatus, setStoreStatus] = useState(true);

  // Address
  const [shippingAddress, setShippingAddress] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  // Notifications
  const [newsletter, setNewsletter] = useState(true);
  const [orderUpdates, setOrderUpdates] = useState(true);

  // Security
  const [twoFactor, setTwoFactor] = useState(false);
  const [sessionAlerts, setSessionAlerts] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved!');
    // Connect to API/backend here
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-3xl font-bold text-gray-800">⚙️ Settings</h1>

      <form onSubmit={handleSave} className="space-y-10">

        {/* 🔐 Account Settings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">👤 Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border px-3 py-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Change Password</label>
              <input
                type="password"
                className="w-full border px-3 py-2 rounded"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* 🏪 Store Settings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">🏪 Store Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Store Name</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={storeStatus}
                onChange={() => setStoreStatus(!storeStatus)}
                className="w-4 h-4"
              />
              <label className="text-sm">Store is active</label>
            </div>
          </div>
        </section>

        {/* 📦 Address Settings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">📦 Address Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Shipping Address</label>
              <textarea
                className="w-full border px-3 py-2 rounded"
                rows="2"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Billing Address</label>
              <textarea
                className="w-full border px-3 py-2 rounded"
                rows="2"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* 🔔 Notification Preferences */}
       

        {/* 🔒 Security Settings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">🔒 Security Settings</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={() => setTwoFactor(!twoFactor)}
              />
              Enable Two-Factor Authentication (2FA)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={sessionAlerts}
                onChange={() => setSessionAlerts(!sessionAlerts)}
              />
              Send login/session alerts
            </label>
          </div>
        </section>

        {/* Save Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
