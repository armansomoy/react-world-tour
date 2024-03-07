import React, { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVsitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  //   console.log(handleVsitedCountry);

  //   const passWithParams = () => {
  //     handleVsitedCountry(country);
  //   }
  return (
    <div className={`country ${visited ? "visited" : "nonVisited "}`}>
      <img src={flags.png} alt="" />
      <h2 style={{ color: visited && "skyBlue" }}>Name: {name?.common}</h2>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Visited Flags
      </button>
      <button onClick={() => handleVsitedCountry(country)}>Mark Visited</button>
      <button onClick={handleVisited}>{visited ? "Visited" : "go"}</button>
      <p> {visited ? "I have visitid this country" : "I want to Visit "}</p>

      <CountryDetail handleVisitedFlags={handleVisitedFlags} handleVsitedCountry={handleVsitedCountry} country={country}></CountryDetail>
    </div>
  );
};

export default Country;
