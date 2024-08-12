import React from 'react';
import Rating from './Rating';

function Cart({ products, handleCart }) {
  return (
    <div>
      <div className="main">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3" key={index}>
              <div className="card" 
                    style={{ width: '18rem'}}>
                <div className="property">
                  <img className="cardimgtop" src={product.image} alt="..." />
                </div>
                <div className="card-body">
                  <h5 style={{ overflow: 'hidden',whiteSpace: 'nowrap',textOverflow: 'ellipsis' }}>
                    <b>{product.title}</b>
                  </h5>
                  <Rating /> 
                  <p className="card-price">
                    ${product.price}
                  </p>
                  <button type="button" className="btn btn-outline-dark" onClick={() => handleCart(index)} style={{ borderRadius: "5px" }}>
                    Add to Cart
                  </button>
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
