import React, { useReducer } from "react";
import ForwardingRef from "./FocusInput_useRef/ForwardingRef";
import Todos from "./Todos_useReducer/Todos";

const initialState = { projectNumber: 0, content: <ForwardingRef /> };

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
    if (props === 1) return <Todos />;
    if (props === 2) return null;
    // if (props === 3) return null;
    // if (props === 4) return null;
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.content === null) {
    state.projectNumber = initialState.projectNumber;
    state.content = initialState.content;
  }

  return (
    <div>
      {state.projectNumber}
      <button onClick={() => dispatch({ type: "increment" })}> Toggle React Hooks </button>
      {state.content}
    </div>
  );
};

export default ToggleReactConcepts;
