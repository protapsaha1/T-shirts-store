import React from 'react';
import './TShirt.css';

const TShirt = ({ shirt }) => {
    const { price, picture, name, gender, _id } = shirt
    return (
        <div className='shirt-container'>
            <img src={picture} alt="" />
            <div className='shirt-info'>
                <div>
                    <p>{name}</p>
                    <p>{gender}</p>
                </div>
                <div>
                    <p className='price'>${price}</p>
                </div>
            </div>
            <button className='add-cart-btn'>Add Cart</button>
        </div>
    );
};

export default TShirt;