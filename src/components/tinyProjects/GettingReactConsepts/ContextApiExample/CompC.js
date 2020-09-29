import React, { useContext } from "react";
import { CreateContext, CreateContextA } from "./CompA";

const CompC = () => {
  // HOOKS USE CONTEXT
  const context = useContext(CreateContext);
  const contextA = useContext(CreateContextA);
  
  return (
    <>
      {/* 1St mtd of Using Context */}
      {/* WITHOUT USE CONTEXT HOOK */}
      <CreateContext.Consumer>
        {(value) => {
          return (
            <CreateContextA.Consumer>
              {(valueA) => {
                return (
                  <h1>
                    {" "}
                    this contextA :{valueA} is nested to Context :{value}{" "}
                  </h1>
                );
              }}
            </CreateContextA.Consumer>
          );
        }}
      </CreateContext.Consumer>

      {/* 2Nd Way of using Context through use Context */}

      {/* WITH USE CONTEXT HOOK */}

      <h1>
        {" "}
        this contextA :{contextA} is nested to Context :{context}{" "}
      </h1>
    </>
  );
};

export default CompC;
