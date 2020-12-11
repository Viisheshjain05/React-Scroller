import React, { useReducer, lazy, Suspense } from "react";
import ToggleReactConcepts from "./tinyProjects/GettingReactConsepts/ToggleReactConcepts";
import TextLengthChecker from "./tinyProjects/project-textLengthChecker/TextLengthChecker";
import SearchCountries from "./tinyProjects/Search/CreatingMySearch";
import WeatherApp from "./tinyProjects/Weather_App/weatherApp";
import QuizApp from "./tinyProjects/QuizApp/QuizApp";
import TechSelector from "./tinyProjects/TechSelector/TechSelector";
const UserInputOutput = lazy(() => import("./tinyProjects/project-userInputoutput/UserInputOutput"));

// class ToggleProject extends Component {

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
    if (props === 1) return <ToggleReactConcepts />;
    if (props === 2) return <SearchCountries />;
    if (props === 3) return <QuizApp />;
    if (props === 4) return <WeatherApp />;
    if (props === 5) return <TextLengthChecker />;
    if (props === 6) {
      return (
        <Suspense fallback={<div>"Loading..."</div>}>
          <UserInputOutput />
        </Suspense>
      );
    }
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
    <div>
      <button onClick={() => dispatch({ type: "increment" })}> next Project </button>
      <button onClick={() => dispatch({ type: "decrement" })}> prev Project </button>
      {state.content}
    </div>
  );
};

export default ToggleProject;
