import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product details based on ID
  // ...

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Product Title</h1>
        <img src="product-image-url.jpg" alt="Product Image" className="w-full h-96 object-cover mt-4" />
        <p className="text-lg mt-4">Product description and details...</p>
        <p className="text-lg font-bold mt-4">$Price / night</p>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
