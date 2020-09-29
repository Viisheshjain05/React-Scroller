import React from "react";
import CompB from "./CompB";

const CreateContext = React.createContext("Default Value");
const CreateContextA = React.createContext("Showes only if not Used as provider");

class CompA extends React.Component {
  state = {
    text: "ContextFromState",
    value: "@nd Context value",
  };
  render() {
    // console.log(CreateContext._currentValue)  _CurrentValue Displays current value of component
    return (
      <div>
        {/* just to highlight context of CompA inside the React Dev Tools */}
        {(CreateContext.displayName = "Display In ReactToolS In React Components")}

        {/* {console.log(CreateContext)} */}
        <CreateContext.Provider value={this.state.text}>
          <CreateContextA.Provider value={this.state.value}>
            <CompB />
          </CreateContextA.Provider>
        </CreateContext.Provider>
      </div>
    );
  }
}

export default CompA;
export { CreateContext, CreateContextA };
