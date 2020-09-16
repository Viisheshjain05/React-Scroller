import React, { useState } from "react";
import ProjectDetails from "./textLengthChecker/ProjectDetail-TextLengthChecker";
import ProjectSolution from "./textLengthChecker/ProjectSolution-TextLengthChecker";
import Char from "./textLengthChecker/CharSol";
import DisplaySolution from "../DisplaySolution";

const TextLengthChecker = (props) => {
  const [TextValue, setTextValue] = useState({ text: [] });

  const countLength = (event) => {
    const text = event.target.value.split(" ");
    setTextValue({ text: text });
  };

  const removeText = (ind) => {
    const arr = TextValue.text.slice();
    arr.splice(ind, 1);
    setTextValue({ text: arr });
  };

  return (
    <div>
      <ProjectDetails />

      <DisplaySolution DisplaySolution={props.DisplaySolution}>
        {TextValue.text.map((el, ind) => {
          return <Char key={ind} text={el} clicked={() => removeText(ind)} />;
        })}

        <ProjectSolution change={(event) => countLength(event)} text={TextValue.text} />
      </DisplaySolution>
    </div>
  );
};

export default TextLengthChecker;
