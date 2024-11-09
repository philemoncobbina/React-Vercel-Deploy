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
  const [isLoading, setIsLoading] = useState(false);  // New state for loading

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
    setIsLoading(true);  // Start loading when the form is submitted

    if (!formData.first_name || !formData.last_name) {
      setError('Both first and last names are required');
      setIsLoading(false);  // Stop loading if there's an error
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      setIsLoading(false);  // Stop loading if there's an error
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
    } finally {
      setIsLoading(false);  // Stop loading once the request is completed
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
              className={`w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 ${passwordError || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={passwordError || isLoading}  // Disable the button when password is invalid or loading
            >
              {isLoading ? (
                <div className="flex justify-center items-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path fill="currentColor" d="M4 12a8 8 0 0116 0" />
                  </svg>
                  <span>Signing up...</span>
                </div>
              ) : (
                "Sign Up"
              )}
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
