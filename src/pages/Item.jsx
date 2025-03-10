import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Item.css';
import Navbar from '../components/navbar/Navbar';
import Foter from '../components/footer/Foter';
import Main from '../components/main/Main';

const Item = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);
    const [isFavourite, setIsFavourite] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://cocktails.solvro.pl/api/v1/cocktails/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('API response:', data); 
                if (data && data.data) {
                    setCocktail(data.data);
                    console.log('Cocktail set:', data.data); 
                    checkIfFavourite(data.data);
                } else {
                    console.error('Cocktail not found:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    const checkIfFavourite = (cocktail) => {
        const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        const isFav = storedFavourites.some(fav => fav.id === cocktail.id);
        setIsFavourite(isFav);
    };

    if (!cocktail) {
        return <div>Loading...</div>;
    }

    const ingredients = cocktail.ingredients || [];

    const addToFavourites = () => {
        const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        const updatedFavourites = [...storedFavourites, cocktail];
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        setIsFavourite(true);
        console.log(`Added ${cocktail.name} to favourites`);
    };

    const removeFromFavourites = () => {
        const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        const updatedFavourites = storedFavourites.filter(fav => fav.id !== cocktail.id);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        setIsFavourite(false);
        console.log(`Removed ${cocktail.name} from favourites`);
    };

    const goToFavourites = () => {
        navigate('/favourite');
    };

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
                        {isFavourite ? (
                            <button className="btn" onClick={removeFromFavourites}>Remove from Favourites</button>
                        ) : (
                            <button className="btn" onClick={addToFavourites}>Add to Favourites</button>
                        )}
                        <button className="btn" onClick={goToFavourites}>Go to Favourites</button>
                    </div>
                </div>
            </div>
            <Main category={cocktail.category}/>
            <Foter />
        </>
    );
};

export default Item;