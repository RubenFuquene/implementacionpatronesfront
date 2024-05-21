import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AgeVerification from './components/AgeVerification';
import withAgeVerification from './components/withAgeVerification';

const App = () => {
  const HomeWithAgeVerification = withAgeVerification(Home);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeWithAgeVerification  />} />
        <Route path="/age-verification" element={<AgeVerification />} />
      </Routes>
    </Router>
  );
};

export default App;
