import React from "react";

const TextLength = (props) => {
  let textChecker = null;

  if (props.textBool === true) {
    textChecker = (
      <div>
        <p style={{ color: "red", display: "inline-block", padding: "16px", textAlign: "center", margin: "16px", border: "1px solid black" }}> Your Text Status : {props.textStatus}</p>
      </div>
    );
  } else if (props.textBool === false) {
    textChecker = (
      <div>
        <p style={{ color: "green", display: "inline-block", padding: "16px", textAlign: "center", margin: "16px", border: "1px solid black" }}> Your Text Status : {props.textStatus}</p>
      </div>
    );
  }

  return (
    <div>
      <p>
        Type HERE: <input type="text" onChange={props.change} />{" "}
      </p>

      <p>Your Text Length : {props.textLength}</p>

      <div>{textChecker}</div>
    </div>
  );
};

export default TextLength;
