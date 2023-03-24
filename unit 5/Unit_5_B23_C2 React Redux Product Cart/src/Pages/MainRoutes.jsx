import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct';
import CartPage from './CartPage';
import Homepage from './Homepage';

const MainRoutes = () => {


    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    );
}

export default MainRoutes