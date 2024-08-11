import React from 'react';

const Item = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id} className="item-container">
                    <div className="image-container">
                        <img
                            src={product.image}
                            alt="Product Image"
                        />
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
                                1 <i className="fa-solid fa-angle-down"></i>
                            </div>
                            <div className="amount">${product.price}</div>
                        </div>
                        <div className="remove-cart">
                            REMOVE
                        </div>
                    </div>
                </div>
            ))}

            <div className="border-line">
                <hr />
            </div>

            <div className="summary">
                <div className="subtotal">
                    <span>SUBTOTAL :</span>
                    <span className="amount-right">${products.reduce((total, product) => total + product.price, 0)}</span> 
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
                    <span className="amount-left">${products.reduce((total, product) => total + product.price, 0)}</span> 
                </div>
                <div className="nespola">
                    <span>Get Daily Cash With Nespola Card</span>
                </div>
            </div>
        </div>
    );
};

export default Item;
