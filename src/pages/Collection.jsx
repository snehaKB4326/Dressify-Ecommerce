import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Sidebar */}
      <div className='min-w-60'>
        <p 
          className='my-2 text-xl flex items-center cursor-pointer gap-2 sm:cursor-default'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS <span className='text-gray-500 text-sm sm:hidden'>{showFilter ? '▲' : '▼'}</span>
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'><input className='w-3' type="checkbox" value="Men" />Men</label>
            <label className='flex gap-2'><input className='w-3' type="checkbox" value="Women" />Women</label>
            <label className='flex gap-2'><input className='w-3' type="checkbox" value="Kids" />Kids</label>
          </div>
        </div>

        {/* Availability Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>AVAILABILITY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'><input className='w-3' type="checkbox" value="In Stock" />In Stock</label>
            <label className='flex gap-2'><input className='w-3' type="checkbox" value="Out Of Stock" />Out Of Stock</label>
          </div>
        </div>

        {/* Type Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'><input className='w-3' type="checkbox" value="Topwear" />Topwear</label>
            <label className='flex gap-2'><input className='w-3' type="checkbox" value="Bottomwear" />Bottomwear</label>
            <label className='flex gap-2'><input className='w-3' type="checkbox" value="Winterwear" />Winterwear</label>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1='ALL' text2='PRODUCTS' />
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item) => (
              <ProductItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p className='col-span-full text-gray-500'>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
