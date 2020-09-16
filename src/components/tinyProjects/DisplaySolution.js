// Component to wrap between project Solution to add functionality for toggel

// Just wrap element want to toggle between <displaySolution> and set inside TinyProject

import React, {useState, useEffect} from "react";

const DisplaySolution = (props) => {
  const [DisplaySol, SetDisplaySol] = useState(false);

  useEffect(() => {
    if (props.DisplaySolution === true) {
      SetDisplaySol(true);
      console.log("true");
    }
    if (props.DisplaySolution === false) {
      SetDisplaySol(false);
      console.log("false");
    }
  }, [props.DisplaySolution]);

  return <div>{DisplaySol === true ? <div>{props.children}</div> : null}</div>;
};

export default DisplaySolution;
