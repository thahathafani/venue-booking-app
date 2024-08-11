import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UserProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">User Profile</h1>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Account Details</h2>
          <p>Email: user@example.com</p>
          <p>Name: User Name</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
            Edit Profile
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Your Bookings</h2>
          {/* Display list of user's bookings */}
          <div className="mt-4">
            <div className="border p-4 rounded-md">
              <h3 className="font-bold">Booking Title</h3>
              <p>Date: 2024-09-10 to 2024-09-15</p>
              <p>Location: City, Country</p>
              <p>Price: $200</p>
            </div>
            {/* Add more bookings as needed */}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Your Reviews</h2>
          {/* Display list of reviews made by the user */}
          <div className="mt-4">
            <div className="border p-4 rounded-md">
              <h3 className="font-bold">Property Title</h3>
              <p>Rating: ★★★★☆</p>
              <p>Review: "Great stay, very comfortable!"</p>
            </div>
            {/* Add more reviews as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;