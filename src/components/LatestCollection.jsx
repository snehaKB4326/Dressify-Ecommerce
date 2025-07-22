import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const sorted = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setLatestProducts(sorted.slice(0, 12));
  }, [products]);

  return (
    <div className="pt-10 px-4 sm:px-10 lg:px-20">
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <Title text1="TOP SELLING" text2="PRODUCTS" />
        <a href="/collection" className="text-sm sm:text-base text-blue-500 hover:underline">
          View All
        </a>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {latestProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>

      {/* Weekly Sales Trend Section */}
      
      {/* Weekly Sales Trend Section - Decorated */}
<div className="mt-12 relative bg-gradient-to-r from-pink-50 to-white border border-pink-200 rounded-lg shadow-lg p-6">
  {/* Top label */}
  <div className="absolute -top-4 left-4 px-3 py-1 bg-pink-600 text-white rounded-full text-xs font-semibold shadow">
    Weekly Insight
  </div>

  {/* Title */}
  <h2 className="text-2xl font-semibold text-pink-700 mb-3">📊 Weekly Sales Trends</h2>
   <p className="text-gray-700 mb-2">
          Our latest data shows a strong increase in weekend sales. Most conversions are happening between Friday and Sunday,
          with top-performing categories being <strong>Women's Dresses</strong> and <strong>Summer Collection</strong>.
        </p>
        <p className="text-gray-700 mb-2">
          Average order values have risen by <strong>12%</strong> this week, and return rate has remained consistently low. Customers are buying more frequently and spending more per visit.
        </p>
        <p className="text-gray-600 text-sm">
          Tip: Highlight weekend promos and optimize mobile checkout flow to boost conversions.
        </p>

  {/* Trend summary sentences */}
  <p className="text-gray-700 leading-relaxed mb-2">
    Sales have been <strong>steadily increasing</strong> over the last week with a sharp boost during the weekend. 
    Your top-selling day was <span className="font-semibold text-pink-600">Sunday</span> with over <span className="font-semibold">320+ orders</span>.
  </p>

  <p className="text-gray-700 mb-3">
    Average order value increased by <span className="text-green-600 font-semibold">₹540</span>, and over <strong>78%</strong> of purchases 
    came from mobile devices.
  </p>

  {/* Highlights box */}
  <div className="bg-pink-100 border border-pink-300 rounded-lg p-4 mb-3">
    <ul className="list-disc pl-6 text-sm text-pink-900 space-y-1">
      <li><strong>Women's Dresses</strong> and <strong>Summer Tops</strong> led category sales.</li>
      <li><strong>25% increase</strong> in returning customer purchases.</li>
      <li>Best conversion came from <strong>email promos</strong> sent on Friday.</li>
    </ul>
  </div>

  {/* Friendly tip */}
  <div className="mt-4 text-sm text-gray-600 italic border-l-4 border-pink-400 pl-4">
    💡 Tip: Plan your next flash sale around Friday evening to maximize conversions.
  </div>
</div>

    </div>
  );
};

export default LatestCollections;
