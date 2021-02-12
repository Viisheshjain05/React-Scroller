import React, { useReducer, lazy, Suspense } from "react";
import TextLengthChecker from "./project-textLengthChecker/TextLengthChecker";

const UserInputOutput = lazy(() => import("./project-userInputoutput/UserInputOutput"));

const initialState = { projectNumber: 0, content: <TextLengthChecker /> };

const ToggleReactConcepts = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { projectNumber: state.projectNumber + 1, content: GetData(state.projectNumber + 1) };
      default:
        return null;
    }
  };

  const GetData = (props) => {
    if (props === 0) return initialState.content;
    if (props === 1)
      return (
        <Suspense fallback={<div>"Loading..."</div>}>
          <UserInputOutput />
        </Suspense>
      );
    if (props === 2) return null;
    // if (props === 3) return null;
    // if (props === 4) return null;
    // if (props === 5) return null;
    // if (props === 6) return null;
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.content === null) {
    state.projectNumber = initialState.projectNumber;
    state.content = initialState.content;
  }

  return (
    <div>
      {state.projectNumber}
      <button onClick={() => dispatch({ type: "increment" })}> Toggle Small project </button>
      {state.content}
    </div>
  );
};

export default ToggleReactConcepts;
