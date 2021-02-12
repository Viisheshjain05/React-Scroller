import React, { useState } from "react";
import CompoundIntrest from "./interest/CompoundIntrest";

const MathFunction = (props) => {
  const [DisplayCompoundIntrest, setDisplayCompoundIntrest] = useState(false);

  return (
    <>
      <div className="h5 text-xl-center text-capitalize" > list Of All  Math Utilities </div>

      <ul>
        <li className="text-xl-center">
          <div className="h1 fw-bold fs-3 "> Calculate Your Compound Intrest </div>
          <button
            className="btn btn-primary"
            onClick={() => (DisplayCompoundIntrest ? setDisplayCompoundIntrest(false) : setDisplayCompoundIntrest(true))}>
            {" "}
            CompoundIntrest{" "}
          </button>{" "}
          
          {DisplayCompoundIntrest ? <CompoundIntrest /> : null}
        </li>
      </ul>
    </>
  );
};

export default MathFunction;
