import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    const url = `https://cocktails.solvro.pl/api/v1/cocktails?perPage=133`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setDrinks(data.data);
        } else {
          console.error('API response is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    
    if (searchTerm) {
      const filtered = drinks.filter(drink =>
        drink.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredDrinks(filtered);
    } else {
      setFilteredDrinks([]);
    }
  }, [searchTerm, drinks]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDrinkClick = (id) => {
    navigate(`/item/${id}`);
    setSearchTerm(''); 
    setFilteredDrinks([]); 
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li><Link to="/" className='a'>Home</Link></li>
          <li><Link to="/cocktails" className='a'>Cocktails</Link></li>
          <li><Link to="/contact" className='a'>Contact</Link></li>
        </ul>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Enter Your Drink Name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {filteredDrinks.length > 0 && (
            <ul className="dropdown">
              {filteredDrinks.map(drink => (
                <li key={drink.id} onClick={() => handleDrinkClick(drink.id)}>
                  <img src={drink.imageUrl} alt={drink.name} className="dropdown-image" />
                  {drink.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;