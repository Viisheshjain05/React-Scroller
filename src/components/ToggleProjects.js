import React, { useReducer } from "react";

import ToggleReactConcepts from "./tinyProjects/GettingReactConsepts/ToggleReactConcepts";
import SearchCountries from "./tinyProjects/Search/CreatingMySearch";
import WeatherApp from "./tinyProjects/Weather_App/weatherApp";
import QuizApp from "./tinyProjects/QuizApp/QuizApp";
import TechSelector from "./tinyProjects/TechSelector/TechSelector";
import ToggleSmallProjects from "./tinyProjects/Small_Projects/ToggleSmallProjects";

const initialState = { projectNumber: 0, content: <TechSelector /> };
const ToggleProject = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { projectNumber: state.projectNumber + 1, content: GetData(state.projectNumber + 1) };
      case "decrement":
        return { projectNumber: state.projectNumber - 1, content: GetData(state.projectNumber - 1) };
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
    if (props === 4) return <ToggleReactConcepts />;
    if (props === 5) return <ToggleSmallProjects />;
    if (props === 6) return null;
    // if (props === 9) return <UserInputOutput />;
    // if (props === 9) return <UserInputOutput />;
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
        <button style={{margin: "0 10px"}} onClick={() => dispatch({ type: "decrement" })}> prev Project </button>
        <button style={{margin: "0 10px"}}  onClick={() => dispatch({ type: "increment" })}> next Project </button>
      {state.content}
    </>
  );
};

export default ToggleProject;
