import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-900 to-purple-800 text-white px-6">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl mb-2">Page Not Found</p>
      <p className="mb-6 text-center max-w-md">
        Sorry, the page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-white text-indigo-700 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-200 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
