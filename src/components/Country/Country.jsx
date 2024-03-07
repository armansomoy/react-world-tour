import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? 'visited': "nonVisited "}`}>
      <img src={flags.png} alt="" />
      <h2 style={{color: visited && 'skyBlue'}}>Name: {name?.common}</h2>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={handleVisited}>{visited ? "Visited" : "go"}</button>
      <p> {visited ? "I have visitid this country" : "I want to Visit "}</p>
    </div>
  );
};

export default Country;
