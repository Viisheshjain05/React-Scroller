import React, { useState } from "react";
import ProjectDetail from "./userInputOutput/ProjectDetail-UserInputOutput";
import UserOutput from "./userInputOutput/UserOutput";
import UserInput from "./userInputOutput/UserInput";

const UserInputOutput = (props) => {
  const [PersonName, setPersonName] = useState({ personName: "Viishesh Jain", Name: "" });
  const [PersonId, setPersonId] = useState({ personId: "#23Bacd", Id: " " });

  const autoAssignHandler = () => {
    const changeId = Math.round(Math.random() * 100000);
    const changeName = Math.random().toString(36).slice(4, 10);
    setPersonName({ personName: changeName });
    setPersonId({ personId: changeId });
  };

  const updateNameHandler = (event) => {
    setPersonName({ Name: event.target.value });
  };

  const updateIdHandler = (event) => {
    setPersonId({ Id: event.target.value });
  };

  const updateHandler = () => {
    setPersonName({ personName: PersonName.Name });
    setPersonId({ personId: PersonId.Id });
  };

  return (
    <div>
      <ProjectDetail />

      <div>
        <UserOutput name={PersonName.personName} age={PersonId.personId}>
          Hiilet see
        </UserOutput>

        <UserInput
          userName={PersonName.personName || PersonName.Name}
          id={PersonId.personId || PersonId.Id}
          changeName={(e) => updateNameHandler(e)}
          changeId={(e) => updateIdHandler(e)}
        />

        <button type="submit" onClick={autoAssignHandler}>
          Auto Assign
        </button>

        <button type="submit" onClick={updateHandler}>
          Update
        </button>
      </div>
    </div>
  );
};

export default UserInputOutput;
