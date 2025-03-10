import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Foter from '../components/footer/Foter';
import './Cocktails.css';

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    
    const url = `https://cocktails.solvro.pl/api/v1/cocktails?perPage=133`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setCocktails(data.data);
        } else {
          console.error('API response is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="cocktails-container">
        <h1>Check out our full <span>Cocktail List</span></h1>
        {cocktails.map(cocktail => (
          <Link to={`/item/${cocktail.id}`} key={cocktail.id} className="cocktail-link">
            <div className="cocktail-item">
              <img src={cocktail.imageUrl} alt={cocktail.name} className="cocktail-image" />
              <div className="cocktail-details">
                <h2>{cocktail.name}</h2>
                <p>{cocktail.instructions}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Foter />
    </div>
  );
};

export default Cocktails;