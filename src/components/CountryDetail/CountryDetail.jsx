import React from "react";
import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
//   const { handleVisitedFlags, handleVsitedCountry, country } = props;


  return (
    <div>
      <hr />
      <h4> Country Details</h4>
      {/* <CountryData
        handleVisitedFlags={handleVisitedFlags}
        handleVsitedCountry={handleVsitedCountry}
        country={country}
      ></CountryData> */}

      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;
