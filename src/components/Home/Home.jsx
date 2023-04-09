import React from 'react';
import {useLoaderData} from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const tShirtData = useLoaderData();
    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
            {
                tShirtData.map(shirt =><TShirt
                key={shirt._id}
                shirt={shirt}
                ></TShirt>)
            }
            </div>
            <div className="cart-container">
                <h1>hello mama</h1>
            </div>
        </div>
    );
};

export default Home;