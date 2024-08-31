import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './componentes/Nav';
import Home from './componentes/Home'; 
import Register from './componentes/Register';
import Login from './componentes/Login'; 
import Footer from './componentes/Footer';
import Cart from './componentes/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

