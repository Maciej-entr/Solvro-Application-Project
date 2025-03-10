import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Item.css';
import Navbar from '../components/navbar/Navbar';
import Foter from '../components/footer/Foter';
import Main from '../components/main/Main';

const Item = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        const url = `https://cocktails.solvro.pl/api/v1/cocktails/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('API response:', data); 
                if (data && data.data) {
                    setCocktail(data.data);
                    console.log('Cocktail set:', data.data); 
                } else {
                    console.error('Cocktail not found:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!cocktail) {
        return <div>Loading...</div>;
    }

    const ingredients = cocktail.ingredients || [];

    return (
        <>
            <Navbar />
            <div className="item-container">
                <div className="item-content">
                    <div className="item-image">
                        <img src={cocktail.imageUrl} alt={cocktail.name} />
                    </div>
                    <div className="item-details">
                        <h2>{cocktail.name}</h2>
                        <h3>Ingredients</h3>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.name}</li>
                            ))}
                        </ul>
                        <h3>Instructions</h3>
                        <p>{cocktail.instructions}</p>
                    </div>
                </div>
            </div>
            <Main category={cocktail.category}/>
            <Foter />
        </>
    );
};

export default Item;