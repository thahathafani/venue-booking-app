import Navbar from '../components/Navbar';
import FilterBar from '../components/FilterBar';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <FilterBar />
      <ProductList />
      <Footer />
    </div>
  );
};

export default HomePage;
