import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // 🔥 add this

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ⚡ used for redirect

  const togglePanel = () => setIsOpen(!isOpen);

  const menuItems = [
    // { label: 'Home', route: '/' },
    // { label: 'Shop', route: '/collection' },
    // { label: 'Cart', route: '/cart' },
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Customers', route: '/customers' },
    { label: 'Analytics', route: '/analytics' },
    { label: 'Notifications', route: '/notifications' },
    { label: 'Settings', route: '/settings' }
  ];

  const handleNavigation = (route) => {
    navigate(route);
    togglePanel();
  };

  return (
    <div>
      {/* Menu Icon Button */}
      <button
        onClick={togglePanel}
        className="text-1xl p-3 text-gray-700 hover:text-pink-600"
        aria-label="Toggle Side Panel"
      >
        <FiMenu />
      </button>

      {/* Dim Background */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={togglePanel}></div>
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Menu</h3>
          <button onClick={togglePanel} className="text-xl hover:text-pink-600">&times;</button>
        </div>

        {/* Navigation List */}
        <ul className="p-4 space-y-4 text-gray-700">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNavigation(item.route)}
              className="hover:text-pink-600 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
