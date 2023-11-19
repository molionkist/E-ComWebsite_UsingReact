import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;


    }
    const tax = parseFloat((total * 10 / 100).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Summary of Orders</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $ {total} </p>
            <p>Total Shipping:$ {shipping} </p>
            <p>Tax:$ {tax} </p>
            <h2>Total:$ {grandTotal.toFixed(2)} </h2>
        </div>
    );
};

export default Cart;