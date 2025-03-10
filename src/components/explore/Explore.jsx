import React, { useEffect, useState } from 'react';
import './explore.css';
import cocktail from '../../assets/cocktail.jpg';
import ordinaryDrink from '../../assets/ordinary_drink.jpg';
import punchPartyDrink from '../../assets/punch.jpg';
import shake from '../../assets/shake.jpg';
import otherUnknown from '../../assets/unknown.jpeg';
import cocoa from '../../assets/cocoa.jpg';
import shot from '../../assets/shot.jpeg';
import coffeeTea from '../../assets/coffee.jpg';
import homemadeLiqueur from '../../assets/Liqueur.jpeg';
import softDrink from '../../assets/softDrink.jpg';
import all from '../../assets/all.jpg';

const Explore = ({ setCategory }) => {
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        const url = `https://cocktails.solvro.pl/api/v1/cocktails?perPage=133`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.data)) {
                    setMenuList(data.data.filter(item => item.imageUrl)); // Filter items with images
                } else {
                    console.error('API response is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const predefinedCategories = [
        { name: 'Cocktail', imageUrl: cocktail },
        { name: 'Ordinary Drink', imageUrl: ordinaryDrink },
        { name: 'Punch / Party Drink', imageUrl: punchPartyDrink },
        { name: 'Shake', imageUrl: shake },
        { name: 'Other / Unknown', imageUrl: otherUnknown },
        { name: 'Cocoa', imageUrl: cocoa },
        { name: 'Shot', imageUrl: shot },
        { name: 'Coffee / Tea', imageUrl: coffeeTea },
        { name: 'Homemade Liqueur', imageUrl: homemadeLiqueur },
        { name: 'Soft Drink', imageUrl: softDrink }
    ];

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our <span>Menu</span></h1>
            <p className='explore-menu-text'>Choose from a diverse menu to end your cravings</p>
            <div className="category-buttons">
                <button onClick={() => setCategory('all')} className='category-button'>
                    <img src={all} alt="All" className="category-image" />
                    <p>All</p>
                </button>
                {predefinedCategories.map((cat, index) => (
                    <button key={index} onClick={() => setCategory(cat.name)} className='category-button'>
                        <img src={cat.imageUrl} alt={cat.name} className="category-image" />
                        <p>{cat.name}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Explore;