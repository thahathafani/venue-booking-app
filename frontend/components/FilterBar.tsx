const FilterBar = () => {
    return (
      <div className="bg-gray-100 p-4 flex space-x-4">
        <input
          type="text"
          placeholder="Location"
          className="px-4 py-2 border rounded-md"
        />
        <input
          type="date"
          className="px-4 py-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Guests"
          className="px-4 py-2 border rounded-md"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </div>
    );
  };
  
  export default FilterBar;
  