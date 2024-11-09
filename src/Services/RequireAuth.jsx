import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from './Login';

const RequireAuth = ({ children }) => {
  const [authStatus, setAuthStatus] = useState({
    loading: true,
    loggedIn: false,
  });

  useEffect(() => {
    const checkAuth = async () => {
      const result = await isLoggedIn();
      setAuthStatus({ loading: false, loggedIn: result.loggedIn });
    };

    checkAuth();
  }, []);

  if (authStatus.loading) {
    return <div>Loading...</div>;
  }

  if (!authStatus.loggedIn) {
    console.log('RequireAuth - User not logged in. Redirecting to login page.');
    return <Navigate to="/login" />;
  }

  console.log('RequireAuth - User logged in. Rendering component.');
  return <>{children}</>;
};

export default RequireAuth;
