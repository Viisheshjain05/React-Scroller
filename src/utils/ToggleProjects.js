import React, { useReducer } from "react";

import ToggleReactConcepts from "../components/GettingReactConsepts/ToggleReactConcepts";
import SearchCountries from "../components/Search/CreatingMySearch";
import WeatherApp from "../components/Weather_App/weatherApp";
import QuizApp from "../components/QuizApp/QuizApp";
import TechSelector from "../components/TechSelector/TechSelector";
import ToggleSmallProjects from "../components/Small_Projects/ToggleSmallProjects";
import MathFunction from "../components/Todo mathFunctions/MathFunctions.jsx";

const initialState = { projectNumber: 0, content: <TechSelector /> };
const ToggleProject = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { projectNumber: state.projectNumber + 1, content: GetData(state.projectNumber + 1) };
      case "decrement":
        let decProjectNumber;
        if (state.projectNumber === 0) {
          // ? Change This Number To Get Previous At zero Position
          decProjectNumber = 5;
        } else {
          decProjectNumber = state.projectNumber - 1;
        }

        return { projectNumber: decProjectNumber, content: GetData(decProjectNumber - 1) };
      default:
        return null;
    }
  };

  const GetData = (props) => {
    // Add your Projects
    if (props === -1) return null;
    if (props === 0) return initialState.content;
    if (props === 1) return <WeatherApp />;
    if (props === 2) return <SearchCountries />;
    if (props === 3) return <QuizApp />;
    if (props === 4) return <MathFunction />;
    if (props === 5) return <ToggleSmallProjects />;
    if (props === 6) return <ToggleReactConcepts />;
    if (props === 7) return null;
    // if (props === 8) return <UserInputOutput />;
    // if (props === 9) return <UserInputOutput />;
    // if (props === 10) return <UserInputOutput />;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.content === null) {
    state.projectNumber = initialState.projectNumber;
    state.content = initialState.content;
  }

  return (
    <>
      <button style={{ margin: "0 10px" }} onClick={() => dispatch({ type: "decrement" })}>
        {" "}
        prev Project{" "}
      </button>
      <button style={{ margin: "0 10px" }} onClick={() => dispatch({ type: "increment" })}>
        {" "}
        next Project{" "}
      </button>
      {state.content}
    </>
  );
};

export default ToggleProject;
