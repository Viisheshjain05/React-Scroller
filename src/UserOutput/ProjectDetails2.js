import React from "react";

const ProjectDetails2 = () => {
  return (
    <div style={{ color: "black", padding: "20px", fontSize: "20px", border: "1px solid black", height: "370px" }}>
      <h1 style={{ fontWeight: "200px", textTransform: "uppercase", textAlign: "center" }}>Project details 2</h1>

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

export default ProjectDetails2;
