import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVsitedCountry = (country) => {
    console.log("Add this to your visited Country");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const [visitedFlags, setVisitedFlags] = useState([]);
  const handleVisitedFlags = (flags) => {
    console.log(flags);
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
  };

  //   remove item from an array in a state
  //  use filter to select all element except the one we want

  return (
    <div>
      <h2>Countries: {countries.length} </h2>
      <div className="visited-flags">
        <h2>Visited Flags: {visitedFlags.length} </h2>
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag} />
        ))}
      </div>
      <div className="visited-countries">
        <h5>Visited Countries {visitedCountries.length} </h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="countries">
        {" "}
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedFlags={handleVisitedFlags}
            handleVsitedCountry={handleVsitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
