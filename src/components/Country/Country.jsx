import React from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country);
    const {name, flags} = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Name: {name?.common}</h2>
        </div>
    );
};

export default Country;