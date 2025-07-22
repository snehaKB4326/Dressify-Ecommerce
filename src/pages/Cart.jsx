import React, { useState } from 'react';

const CartPage = () => {
  // Dummy cart items (replace with real data or Context/API)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Summer Dress',
      price: 1499,
      quantity: 1,
      image: '/images/dress1.jpg',
    },
    {
      id: 2,
      name: 'Casual Shirt',
      price: 999,
      quantity: 2,
      image: '/images/shirt1.jpg',
    },
    {
      id: 2,
      name: 'Casual Shirt',
      price: 999,
      quantity: 2,
      image: '/images/shirt1.jpg',
    },
    {
      id: 2,
      name: 'Casual Shirt',
      price: 999,
      quantity: 2,
      image: '/images/shirt1.jpg',
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    const updated = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
        : item
    );
    setCartItems(updated);
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">🛒 My Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4"
            >
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h2 className="text-lg font-medium">{item.name}</h2>
                <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2 bg-gray-200 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2 bg-gray-200 rounded">+</button>
                  <button onClick={() => handleRemove(item.id)} className="text-red-500 text-sm ml-4 hover:underline">Remove</button>
                </div>
              </div>
              <div className="font-semibold">₹{item.price * item.quantity}</div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-4">
            <h3 className="text-xl font-semibold">Total: ₹{getTotal()}</h3>
            <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
