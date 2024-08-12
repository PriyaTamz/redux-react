import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ cart, handleRemove, handleAdd }) => {
  return (
    <div className='item-body'>
      {cart.length === 0 ? (
        <p className="empty-container"><b>Your TrendMart Cart is empty</b>
          <Link to="/" className='empty-container-link'>Continue Shopping </Link>
        </p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="item-container">
            <div className="image-container">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="details-container">
              <h1>{product.title}</h1>
              <div className="details-dropdown">
                <label>Details & Core <i className="fa-solid fa-angle-down"></i></label>
              </div>
              <div className="description">
                <p>{product.description}</p>
              </div>
              <div className="sustainability-dropdown">
                <label>Sustainability <i className="fa-solid fa-angle-down"></i></label>
              </div>
            </div>
            <div className="purchase-container">
              <div className="count-container">
                <div className="count">
                  <button onClick={() => handleRemove(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => handleAdd(product.id)}>+</button>
                </div>
                <div className="amount">
                  ${(product.price * product.quantity).toFixed(2)}
                </div>
              </div>
              <div className="remove-cart" onClick={() => handleRemove(product.id)}>
                REMOVE
              </div>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <>
          <div className="border-line">
            <hr />
          </div>

          <div className="summary">
            <div className="subtotal">
              <span>SUBTOTAL :</span>
              <span className="amount-right">
                ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
              </span>
            </div>
            <div className="ship">
              <span>SHIPPING :</span>
              <span className="amount-right">FREE</span>
            </div>
          </div>

          <div className="border-line">
            <hr />
          </div>

          <div className="total-section">
            <div className="total">
              <span>TOTAL :</span>
              <span className="amount-left">
                ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
              </span>
            </div>
            <div className="nespola">
              <span>Get Daily Cash With Nespola Card</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Items;
