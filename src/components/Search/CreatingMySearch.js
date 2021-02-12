import React, { useState } from "react";
import CountriesList from "./countries.json";

import "./style.css";
import "./flags.min.css";

const SearchCountries = () => {
  const [Search, setSearch] = useState("");
  const [Option, setOption] = useState("Not Selected");

  const renderCountry = (country) => {
    return (
      <>
        <div style={{ margin: "20px", border: " 2px solid black ", textAlign: "center" }}>
          {/*  eslint-disable-next-line*/} {/* //because alt not used inside img tag */}
          <img className={"flag flag-" + country.code.toLowerCase()} />
          <p>{country.code}</p>
          <p>{country.name}</p>
        </div>
      </>
    );
  };

  const renderSearch = (e) => {
    setSearch(e.target.value);
  };

  const renderOption = (e) => {
    setOption(e.target.value);
  };

  const filteredCountry = CountriesList.filter((country) => {
    if (country.continent.toLowerCase().indexOf(Option.toLowerCase()) !== -1 && country.name.toLowerCase().indexOf(Search.toLowerCase()) !== -1) {
      return country;
    } else if (Option === "Not Selected" && country.name.toLowerCase().indexOf(Search.toLowerCase()) !== -1) {
      return country;
    } else return null;

    // OR 2ND WAY

    // if (country.continent.toLowerCase().indexOf(Option.toLowerCase()) !== -1) {
    //   if (country.name.toLowerCase().indexOf(Search.toLowerCase()) !== -1) {
    //     return country;
    //   } else return null;
    // } else if (Option === "Not Selected") {
    //   if (country.name.toLowerCase().indexOf(Search.toLowerCase()) !== -1) {
    //     return country;
    //   } else return null;
    // }
  });

  return (
    <div>
      <div style={{ textAlign: "end ", paddingTop: "10px", paddingBottom: "20px", paddingRight: "20px", position: "inherit" }}>
        <form>
          {" "}
          {/* onSubmit={(e) => this.handleSubmit(e)}*/}
          <label>
            Continent :{" "}
            <select
              value={Option}
              onChange={(e) => {
                renderOption(e);
              }}>
              <option value={"Not Selected"}> Not Selected </option>
              <option value={"Asia"}> Asia </option>
              <option value={"Africa"}> Africa </option>
              <option value={"North America"}> North America </option>
              <option value={"South America"}> South America </option>
              <option value={"Europe"}> Europe </option>
            </select>
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>

      <p style={{ textAlign: "center ", paddingTop: "10px", paddingBottom: "20px" }}>
        Search :{" "}
        <input
          type={"text"}
          onChange={(e) => {
            renderSearch(e);
          }}
        />
      </p>

      <>
        {filteredCountry.map((country, ind) => (
          <React.Fragment key={ind}>{renderCountry(country)}</React.Fragment>
        ))}
      </>
    </div>
  );
};
export default SearchCountries;
