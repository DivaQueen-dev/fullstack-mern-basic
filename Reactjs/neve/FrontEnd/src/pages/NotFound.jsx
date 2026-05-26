import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="not-found page-content">
      <div className="container text-center py-5">
        <h1 className="display-1 mb-4">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="mb-5">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="btn btn-primary">Back to Homepage</Link>
      </div>
    </div>
  );
}

export default NotFound;