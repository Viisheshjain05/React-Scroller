import React from "react";
import Styles from "./ProjectDetail.module.css"

function CharSol(props) {
  const keyVal = props.text.split("");

  return (
    <ul>
    <li key={keyVal} className={Styles.CharStyle} onClick={props.clicked}>
      {props.text}
    </li>
    </ul>
  );
}

export default CharSol;
