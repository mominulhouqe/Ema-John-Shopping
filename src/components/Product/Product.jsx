import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  const { img, name, seller, ratings, price } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product p-4 border border-gray-300 rounded">
      <img src={img} alt="" className="w-full mb-4" />
      <div className="product-info">
        <h6 className="product-name text-lg font-bold mb-2">{name}</h6>
        <p className="mb-2">Price: ${price}</p>
        <p className="mb-2">Manufacturer: {seller}</p>
        <p className="mb-2">Rating: {ratings} Stars</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart flex items-center py-2 px-4 bg-blue-500 text-white rounded"
      >
        <span className="mr-2">Add to Cart</span>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
