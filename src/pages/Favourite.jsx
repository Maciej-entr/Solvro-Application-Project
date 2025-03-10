import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Foter';
import './Favourite.css';

const Favourite = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        // Retrieve favourite drinks from local storage or API
        const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        setFavourites(storedFavourites);
    }, []);

    const removeFromFavourites = (indexToRemove) => {
        const updatedFavourites = favourites.filter((_, index) => index !== indexToRemove);
        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    };

    return (
        <div>
            <Navbar />
            <div className="favourite">
                <h1>Favourite</h1>
                <p>Here you can find your favourite cocktails</p>
                <div className="favourite-list">
                    {favourites.length > 0 ? (
                        favourites.map((drink, index) => (
                            <div key={index} className="favourite-item">
                                <img src={drink.imageUrl} alt={drink.name} />
                                <h2>{drink.name}</h2>
                                <p>{drink.instructions}</p>
                                <button className="btn-remove" onClick={() => removeFromFavourites(index)}>Remove</button>
                            </div>
                        ))
                    ) : (
                        <p>No favourite drinks found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Favourite;