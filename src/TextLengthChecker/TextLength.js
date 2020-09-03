import React from "react";

const TextLength = (props) => {
  return (
    <div>
      <form>
        <p>
          Type HERE: <input type="text" onChange={props.change} />{" "}
        </p>
      </form>
      <p>Your Text Length : {props.textLength}</p>
    </div>
  );
};

export default TextLength;
