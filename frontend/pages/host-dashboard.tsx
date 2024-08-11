import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HostDashboardPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Host Dashboard</h1>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Your Listings</h2>
          {/* Display list of host's properties */}
          <div className="mt-4">
            <div className="border p-4 rounded-md">
              <h3 className="font-bold">Property Title</h3>
              <p>Location: City, Country</p>
              <p>Price: $100 / night</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
                Edit Listing
              </button>
            </div>
            {/* Add more listings as needed */}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Bookings</h2>
          {/* Display list of bookings for the host's properties */}
          <div className="mt-4">
            <div className="border p-4 rounded-md">
              <h3 className="font-bold">Booking Title</h3>
              <p>Date: 2024-10-01 to 2024-10-05</p>
              <p>Guest: John Doe</p>
              <p>Price: $500</p>
            </div>
            {/* Add more bookings as needed */}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Availability</h2>
          {/* Calendar for managing property availability */}
          <div className="mt-4">
            <p>Select dates to mark as unavailable:</p>
            <input type="date" className="px-4 py-2 border rounded-md mt-2" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
              Update Availability
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HostDashboardPage;
