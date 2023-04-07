import React from 'react';
import {useLoaderData} from 'react-router-dom';
const Home = () => {
    const tShirtData = useLoaderData();
    console.log(tShirtData) 
    return (
        <div>
            
        </div>
    );
};

export default Home;