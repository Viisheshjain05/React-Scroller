import React from "react";
import Form from "react-bootstrap/Form";
import style from "./ProjectDetail.module.css";

const TextLength = (props) => {
  let textChecker = null;
  const textLength = props.text.join(" ").length;

  if (textLength <= 11) {
    textChecker = <p className={style.TextChecker}> Your Text Status : limit Short</p>;
  } else if (textLength > 11) {
    textChecker = (
      <p style={{ color: "rgb(20, 233, 55)" }} className={style.TextChecker}>
        Your Text Status : Yeah its Reached
      </p>
    );
  }

  return (
    <div>
      <Form.Control as="textarea" rows="5" size="lg" className={style.FormControl} type="text" placeholder="Readonly input here..." readOnly value={props.text.join(" ")} />

      <p>
        Type HERE: <input type="text" onChange={props.change} />{" "}
      </p>

      <p>Your Text Length : {textLength}</p>

      <div>{textChecker}</div>
    </div>
  );
};

export default TextLength;
