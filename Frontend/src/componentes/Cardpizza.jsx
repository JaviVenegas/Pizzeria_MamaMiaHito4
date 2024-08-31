import React from "react";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => {
    return (
        <div className="card mb-4">
            <img 
                src={pizza.img} 
                alt={pizza.name} 
                className="card-img-top rounded mx-auto d-block" 
            />
            <div className="card-body">
                <h2 className="card-title">{pizza.name}</h2>
                <p className="card-text"><strong>Ingredientes:</strong></p>
                <ul className="card-text list-inline">
                    {pizza.ingredients.map((ingredient, index) => (
                        <li key={index} className="list-group-item"> 🍕{ingredient}</li>
                    ))}
                </ul>
                <h4 className="card-text text-center p-1">
                    <strong>Precio: ${pizza.price.toLocaleString()}</strong>
                </h4>
                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-secondary">👀 Ver más</button>
                    <button className=" btn btn-primary"><Link className="nav-link" to="/cart">🛒<strong>Añadir</strong> </Link> </button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;

