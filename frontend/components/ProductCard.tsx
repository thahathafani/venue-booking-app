import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({ id, title, location, price, imageUrl }: ProductCardProps) => {
  return (
    <div className="border rounded-md shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-lg font-bold">${price} / night</p>
        <Link href={`/product/${id}`}>
          <a className="text-blue-500">View Details</a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
