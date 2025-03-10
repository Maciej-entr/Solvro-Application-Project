import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cocktailitem.css';

const CocktailItem = ({ id, title, description, src }) => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/item/${id}`);
        window.location.reload();
    };

    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img src={src} style={{ height: '200px' }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "A simple instruction for a cocktail"}</p>
                <button onClick={handleReadMore} className="btn btn-primary">Read More</button>
            </div>
        </div>
    );
};

export default CocktailItem;