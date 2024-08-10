// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from '../lib/axios'; // Import axios from the correct path

interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
}

const Home: NextPage = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('/api/listings');
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings', error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Find the best places to stay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-4xl font-bold my-8 text-center">
        Discover Your Next Stay
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing) => (
          <div key={listing.id} className="border p-4 rounded-lg">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">{listing.title}</h2>
            <p className="text-gray-600">{listing.location}</p>
            <p className="text-lg mt-2">${listing.price}/night</p>
            <p className="mt-4">{listing.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
