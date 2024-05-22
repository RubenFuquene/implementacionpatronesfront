import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgeVerification from './components/AgeVerification';
import AuthPage from './components/Authentication';
import Login from './components/Login'
import Register from './components/Register'
import withAgeVerification from './components/withAgeVerification';
import ProductCatalog from './components/ProductCatalog';
import Admin from './components/Admin'

const App = () => {
  const HomeWithAgeVerification = withAgeVerification(AuthPage);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeWithAgeVerification  />} />
        <Route path="/age-verification" element={<AgeVerification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<ProductCatalog />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
