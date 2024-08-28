import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './pages/Countries';
import Places from './pages/Places';

const App: React.FC = () => {
  return (
    <Router>
<Navbar/>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/places/:countryName" element={<Places />} />
      </Routes>
    </Router>
  );
};

export default App;
