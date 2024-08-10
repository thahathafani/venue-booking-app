// components/FilterBar.tsx
import React, { useState } from 'react';

const FilterBar = ({ onFilter, categories }: any) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilter = () => {
    onFilter({ location, priceRange, category: selectedCategory });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
      <select
        className="border p-2 rounded w-full sm:w-auto"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category: string) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Location"
        className="border p-2 rounded w-full sm:w-auto"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="flex items-center space-x-2 w-full sm:w-auto">
        <input
          type="number"
          className="border p-2 rounded w-1/2 sm:w-auto"
          placeholder="Min"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
        />
        <span>-</span>
        <input
          type="number"
          className="border p-2 rounded w-1/2 sm:w-auto"
          placeholder="Max"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
        />
      </div>
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white p-2 rounded w-full sm:w-auto"
      >
        Filter
      </button>
    </div>
  );
};

export default FilterBar;
