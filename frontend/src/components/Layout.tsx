// components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        Airbnb Clone © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
