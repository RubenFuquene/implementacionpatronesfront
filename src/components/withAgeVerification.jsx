import React from 'react';
import { Navigate } from 'react-router-dom';

const withAgeVerification = (WrappedComponent) => {
  return () => {
    const isVerified = localStorage.getItem('ageVerified');

    if (!isVerified) {
      return <Navigate to="/age-verification" />;
    }

    return <WrappedComponent />;
  };
};

export default withAgeVerification;