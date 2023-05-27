import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, handleClearCart, children }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = totalPrice * 7 / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart p-4 border border-gray-300 rounded">
      <h4 className="text-xl font-bold">Order Summary</h4>
      <p className="mb-2">Selected Items: {quantity}</p>
      <p className="mb-2">Total Price: ${totalPrice.toFixed(2)}</p>
      <p className="mb-2">Shipping: ${totalShipping.toFixed(2)}</p>
      <p className="mb-2">Tax: ${tax.toFixed(2)}</p>
      <h6 className="text-2xl font-bold mb-4">Grand Total: ${grandTotal.toFixed(2)}</h6>
      <button
        onClick={handleClearCart}
        className="btn-clear-cart flex items-center py-2 px-4 bg-red-500 text-white rounded"
      >
        <span className="mr-2">Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
