// Component to wrap between project Solution to add functionality for toggel

// Just wrap element want to toggle between <displaySolution> and set inside TinyProject

import React from "react";

const DisplaySolution = (props) => {
  return <div>{props.toggle === true ? <div>{props.children}</div> : null}</div>;
};

export default DisplaySolution;

// import TextlengthChecker from "../tinyProjects/project-textLengthChecker/TextLengthChecker";
// import Layout from "../layout/Layout"

// export const TrueState = React.createContext(true);
// export const FalseState = React.createContext(true);

// const GlobalFunction = (setValue) => {
//   if (setValue === true) {
//     <TrueState.Provider value={true}>
//       <Layout />
//     </TrueState.Provider>;
//   }
//   console.log(state);
//   return state;
// };

// const TextCheck = (props) => {
//   console.log("TextCheck ", props);
//   if (props === true) {
//     return <TextlengthChecker value={false} />;
//   } else if(props === false ) {
//     return <TextlengthChecker value={true} />;
//   }
// };

// export const DisplayButton = () => {
//   const [Button, setButton] = useState(true);

//   // Toggle Project Solution
//   const displayProjectSolution = () => {
//     console.log("Button Clicked");
//     Button === true ? setButton(false) : setButton(true);

//     Button === true ? TextCheck(true) :TextCheck(false);
//   };
//   return (
//     <button type="submit" onClick={displayProjectSolution}>
//       {Button === true ? "Hide Solution" : "Watch Solution"}
//     </button>
//   );
// };
// let value
// export const trueValue = () => {
//   const value = React.createContext(true)
//   return value

// }

// export const falseValue = () => {
//   const value = React.createContext(false)
//   return value
// }
// let Value = false

// export const ToggleValue = () => {
//   if (Value === true) {
//     Value = false;
//   console.log("value = false")
//   } else if (Value === false) {
//     Value = true;

//   console.log("value = true")
//   }
// };
//   const value = React.createContext(false)
// }

// console.log(Display._currentValue)

// const DisplaySolution = (props) => {
//   const [DisplaySol, SetDisplaySol] = useState(true);

//   useEffect(() => {
//     if (props.toggle === true) {
//       SetDisplaySol(true);
//     }
//     if (props.toggle === false) {
//       SetDisplaySol(false);
//     }
//   }, [props.toggle]);

//   return <div>{props.toggle === true ? <div>{props.children}</div> : null}</div>;
// };

// export default DisplaySolution;
