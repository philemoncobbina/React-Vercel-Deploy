import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import ChangePasswordPage from './Pages/ChangePasswordPage';
import ForgetPassword from './Pages/ForgetPassword';
import TeamPostPage from './Pages/TeamPostPage';
import AdmissionPage from './Pages/AdmissionPage';
import BlogPage from './Pages/BlogPage';
import BlogPostPage from './Pages/BlogPostPage';
import ContactPage from './Pages/ContactPage';
import ReservationPage from './Pages/ReservationPage';
import Application from './Pages/Application';
import RequireAuth from './Services/RequireAuth';
import DashboardPage from './Pages/DashboardPage';
import EditAdmission from './layouts/AdmissionReview/EditAdmission';
import RaiseTicketPage from './Pages/RaiseTicketPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact/raiseticket',
    element: <RaiseTicketPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/changepassword',
    element: <ChangePasswordPage />,
  },
  {
    path: '/forgetpassword',
    element: <ForgetPassword />,
  },
  {
    path: '/about/:id',
    element: <TeamPostPage />,
  },
  {
    path: '/admission',
    element: <AdmissionPage />,
  },
  
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/:id',
    element: <BlogPostPage />,
  },
  {
    path: '/admission/apply',
    element: (
      <RequireAuth>
        <Application />
      </RequireAuth>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <RequireAuth>
        <DashboardPage />
      </RequireAuth>
    ),
  },
  {
    path: '/admission/edit/:id',
    element: (
      <RequireAuth>
        <EditAdmission />
      </RequireAuth>
    ),
  },

  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/contact/reservation',
    element: <ReservationPage />,
  },
    // Protected route
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
