import { signUp } from "../../Services/signup";
import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineClose } from 'react-icons/ai';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });

    if (e.target.id === 'password') {
      if (e.target.value.length < 8) {
        setPasswordError('Password must be at least 8 characters long');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error messages
    setSuccessMessage(''); // Clear any previous success messages

    if (!formData.first_name || !formData.last_name) {
      setError('Both first and last names are required');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    try {
      const { success, message, error: errorMessage } = await signUp(formData);

      if (success) {
        setSuccessMessage(message); // Set the success message from backend
      } else {
        setError(errorMessage || 'Something went wrong. Please try again.'); // Display error message from backend or fallback message
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      setError('Something went wrong. Please try again.'); // Fallback error message for unexpected errors
    }
  };

  const closeErrorAlert = () => {
    setError('');
  };

  const closeSuccessAlert = () => {
    setSuccessMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h6 className="text-2xl mb-2 text-center">Sign up for Ridoana</h6>
      <div className="w-full max-w-md mt-2">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-center">
            <span className="flex-grow">{error}</span>
            <button onClick={closeErrorAlert} className="ml-4">
              <AiOutlineClose size={20} />
            </button>
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex items-center">
            <span className="flex-grow">{successMessage}</span>
            <button onClick={closeSuccessAlert} className="ml-4">
              <AiOutlineClose size={20} />
            </button>
          </div>
        )}
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="first_name" className="block text-gray-700 font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="last_name" className="block text-gray-700 font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className={`w-full p-3 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10`}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                >
                  {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                </button>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 ${passwordError ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={passwordError}
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
