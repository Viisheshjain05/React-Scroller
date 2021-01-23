import React from "react";
import Style from "./ProjectDetail-UserInputOutput.module.css"

const ProjectDetail = () => {
  return (
    <div className={Style.HeadStyle}>
      <h1 className={Style.BodyStyle}> User Input Output (basic) </h1>
      <ol>
        <li>Create TWO new components: UserInput and UserOutput</li>
        <li>UserInput should hold an input element, UserOutput two paragraphs</li>
        <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
        <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
        <li>Add state to the App component (=&gt; the username) and pass the user utput component</li>
        <li>Add a method to manipulate the state (=&gt; an event-handler method)</li>
        <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
        <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
        <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
        <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
      </ol>
    </div>
  );
};
export default ProjectDetail;
