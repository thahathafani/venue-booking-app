// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">Airbnb</a>
        </Link>
        <div className="flex space-x-4">
          <Link href="/listings">
            <a className="text-gray-700 hover:text-gray-900">Listings</a>
          </Link>
          <Link href="/host">
            <a className="text-gray-700 hover:text-gray-900">Become a Host</a>
          </Link>
          <Link href="/login">
            <a className="text-gray-700 hover:text-gray-900">Login</a>
          </Link>
          <Link href="/signup">
            <a className="text-gray-700 hover:text-gray-900">Sign Up</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
