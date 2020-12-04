import React from "react";
import "./css/TechMediaTemplete.css";
// import Tech from "../Tech.json";

const TechTemplete = (props) => {
  const RenderTech = (props) => {
    return (
      <div key={props.props.length} className="techMedia">
        <img src={props.props.imagUrl} alt="techImg" className="techMedia-image" />

        <div className="techMedia-body">
          <h3> {props.props.name} </h3>

          <p>
            Lorem ipsum dolor sit amet, consecitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
          {/*           
          <ul className="techMedia-links">
            <a href="#" onClick="#"> {props.props.Links.WebsiteUrl} </a>
            <a href="#" onClick="#"> {props.props.Links.Facebook} </a>
            <a href="#" onClick="#"> {props.props.Links.WebsiteUrl} </a>
            <a href="#" onClick="#"> {props.props.Links.WebsiteUrl} </a>
          </ul> */}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="line"> </div>
      {props.props !== null ? props.props.map((e, index) => <RenderTech props={e} key={index} />) : null}

      <div className="line"> </div>
    </>
  );
};

export default TechTemplete;
