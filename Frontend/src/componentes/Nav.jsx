import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const total = 25000;
    const token = false; 

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <a className="navbar-brand p-1" href="/">Pizzeria Mamma Mia</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/">🍕 Home</Link>
                    </li>
                    {token ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/profile">🔓 Profile</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => { /* Lógica de logout aquí */ }}>🔒 Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">🔐 Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">🔐 Register</Link>
                            </li>
                        </>
                    )}
                </ul>
                <span className="navbar-text text-light p-1">
                    <button className="btn btn-secondary"> <Link className="nav-link" to="/cart">🛒 Total: ${total.toLocaleString()}</Link></button>
                    
                </span>
            </div>
        </nav>
    );
}

export default Nav;
