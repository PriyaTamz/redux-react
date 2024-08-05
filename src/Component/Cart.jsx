import React from 'react';
import Rating from './Rating';

function Cart({ items, addedItems, handleCart }) {
  return (
    <div>
      <div className="main">
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <div className="property">
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  {item.sale && <span className="sale-label">Sale</span>}
                </div>
                <div className="card-body">
                  <h5><b>{item.name}</b></h5>
                  {(item.name === "Special Item" || item.name === "Popular Item") ? <Rating /> : <div style={{ height: '24px' }}></div>}
                  <p className="card-price">
                    {item.sale && <span className="text-muted text-decoration-line-through">{item.originalPrice}</span>}
                    {item.price}
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => handleCart(index)}
                    style={{ borderRadius: "5px" }}
                  >
                    {item.name === "Fancy Product" ? 'View Option' : addedItems[index] ? 'Remove from Cart' : 'Add to Cart'}
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
