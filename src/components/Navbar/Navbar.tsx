import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import logo from './logo.png'
import './Navbar.css';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="TravelApp Logo" />
        </Link>
        <div className='search-bar-div'>
          <input
            type="text"
            className="search-bar"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <span className="search-icon">
            <ImSearch/>
          </span>
        </div>
      </div>
      <ul className="navbar-links">
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
