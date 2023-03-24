import React from 'react'

const CartPage = () => {
    return (
        <div>
            <div className="cart-heading">Cart Page</div>
            <div
                className="cart-product-cards"
            >
                {/* filter out the cart items from the product list (products that has some cartQuantity) and show them here, by rendering it in the ProductCard component */}
            </div>
        </div>
    )
}

export default CartPage