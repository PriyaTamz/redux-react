import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import Rating from './Rating';

function Cart({ products }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/150'; 
  };

  return (
    <div>
      <div className="main">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <div className="property">
                  <img className="cardimgtop" src={product.images} alt={product.title} onError={handleImageError}/>
                </div>
                <div className="card-body">
                  <h5 style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    <b>{product.title}</b>
                  </h5>
                  <Rating rating={product.rating}/>
                  <p className="card-price">
                    ${product.price}
                  </p>
                  {isProductInCart(product.id) ? (
                    <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(removeFromCart(product.id))} style={{ borderRadius: "5px" }}>
                      Remove from Cart
                    </button>
                  ) : (
                    <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(addToCart(product))} style={{ borderRadius: "5px" }}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
