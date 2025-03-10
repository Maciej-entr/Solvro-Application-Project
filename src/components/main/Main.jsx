
import React, { useEffect, useState } from 'react';
import CocktailItem from '../../components/cocktailItem/CocktailItem';
import './main.css';

const Main = ({ category }) => {
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

    const filteredCocktails = category === 'all' ? cocktails : cocktails.filter(cocktail => cocktail.category === category);

    return (
        <div className="main-container">
            <h2 className="text-center">Our <span className='span'>Cocktails</span></h2>
            <div className="cocktail-list">
                {filteredCocktails.map((cocktail, id) => (
                    <CocktailItem
                        key={id}
                        id={cocktail.id}
                        title={cocktail.name}
                        description={cocktail.instructions}
                        src={cocktail.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Main;