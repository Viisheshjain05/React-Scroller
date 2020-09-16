import React, { useState , useEffect} from "react";
import ProjectDetails from "./textLengthChecker/ProjectDetail-TextLengthChecker";
import ProjectSolution from "./textLengthChecker/ProjectSolution-TextLengthChecker";
import Char from "./textLengthChecker/CharSol";



const TextLengthChecker = (props) => {
console.log(props)
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

      {DisplaySol === true
        ? TextValue.text.map((el, ind) => {
            return <Char key={ind} text={el} clicked={() => removeText(ind)} />;
          })
        : null}

      {DisplaySol === true ? <ProjectSolution change={(event) => countLength(event)} text={TextValue.text} /> : null}
    </div>
  );
};

export default TextLengthChecker;
