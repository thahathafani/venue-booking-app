import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from '../utils/axios';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('/api/register', { email, password });
      if (response.data.success) {
        router.push('/login');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border rounded-md w-full mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border rounded-md w-full mb-4"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="px-4 py-2 border rounded-md w-full mb-4"
        />
        <button
          onClick={handleRegister}
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
