import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">MyAirbnb</Link>
      </div>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md"
        />
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
