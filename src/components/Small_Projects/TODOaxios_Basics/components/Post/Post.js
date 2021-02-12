import React from "react";

import "./Post.css";

const post = (props) => (
  <article className="Post" onClick={props.Clicked}>
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">viishesh</div>
    </div>
  </article>
);

export default post;
