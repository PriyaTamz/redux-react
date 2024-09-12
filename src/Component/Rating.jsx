import React from 'react';

function Rating({ rating }) {

    const filledStars = Math.round(rating);
    const totalStars = 5;

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => (
                <span
                    key={index}
                    className={`fa fa-star ${index < filledStars ? 'checked' : ''}`}
                ></span>
            ))}
        </div>
    )

}

export default Rating;