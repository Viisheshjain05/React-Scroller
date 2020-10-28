import React, { Component } from "react";

import "./style.css";
import "./flags.min.css";

import countriesList from "./countries.json";

class App extends Component {
  state = {
    search: ""
  };

  renderCountry = country => {
    const { search } = this.state;
    var code = country.code.toLowerCase();

    if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }

    return (
      <div style={{ marginTop: "20px" }}>
        <>
        
            <p className="">
              <img
                className={"flag flag-" + code}
                alt={country.name}
              />
            </p>
            <div title={country.name}>
              {country.name.substring(0, 15)}
              {country.name.length > 15 && "..."}
            </div>
          
        </>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredCountries = countriesList.filter(country => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
<>
              <div className="col">
                <input
                  label="Search Country"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            
            <div className="row">
              {filteredCountries.map(country => {
                return this.renderCountry(country);
              })}
        <footer color="indigo">
          <p className="footer-copyright mb-0">
            &copy; {new Date().getFullYear()} Copyright
          </p>
        </footer>
      </div>
      </>
    );
  }
}

export default App;
