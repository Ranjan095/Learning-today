import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <div style={{ display: "flex", padding: "0 10px", position: "relative" }}>
            <div className="navbar-title">
                <Link to='/'>
                    Product Dashboard
                </Link>
            </div>
            <div style={{ position: "absolute", right: "30px", top: "12px", display: 'flex', gap: '30px' }}>
                {/* Link the button to the /add route, when the user clicks on the button */}
                <button data-cy="add-product-navbar-button" className='navbar-add-product-btn'>
                    Add Product
                </button>

                <div style={{ position: 'relative' }}>
                    {/* The count should reflect the number of products, which has some cartQuantity value  */}
                    <div data-cy='navbar-cart-count' className='navbar-cart-count'>0</div>
                    <Link to='/cart'>
                        <img data-cy='cart-image-link' src="./shopping-cart.png" alt='cart' width='30px' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
