import React from "react";
import style from "./ProjectDetail.module.css";

const ProjectDetails = () => {
  return (
    <div className={style.HeadStyle}>
      <div className={style.BodyStyle}>
      <h1  >
         Project details 2
      </h1>
      </div>
      <ol>
        <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>

        <li>Create a new component (=&gt; ValidationComponent) which receives the text length as a prop</li>

        <li>Inside the ValidationComponent, either output &quot;Text too short&quot; or &quot; Text long enough&quot; depending on the text length (e.g. take 5 as a minimum length)</li>

        <li>Create another component (=&gt; CharComponent) and style it as an inline box (=&gt; display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>

        <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>

        <li>When you click a CharComponent, it should be removed from the entered text.</li>
      </ol>
      <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
    </div>
  );
};

export default ProjectDetails;
