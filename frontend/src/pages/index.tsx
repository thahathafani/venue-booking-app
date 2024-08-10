// pages/index.tsx
import { useState, useEffect } from 'react';
import axios from '../lib/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`/products?page=${page}`);
      const newProducts = response.data;

      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        setFilteredProducts((prevFiltered) => [...prevFiltered, ...newProducts]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Failed to fetch categories', error);
    }
  };

  const handleFilter = (filters: { location: string; priceRange: number[]; category: string }) => {
    const filtered = products.filter((product: any) => {
      return (
        (!filters.location || product.location.includes(filters.location)) &&
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1] &&
        (!filters.category || product.category === filters.category)
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8 text-center">Product Listings</h1>
      <FilterBar onFilter={handleFilter} categories={categories} />
      <InfiniteScroll
        dataLength={filteredProducts.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p className="text-center">You have seen it all!</p>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
