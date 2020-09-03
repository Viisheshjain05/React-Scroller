import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <p>Update your login details</p>

      <p>
        UserId : {props.id} <br /> <br />
        Userid : <input type="text" onChange={props.changeId} />
      </p>

      <p>
        UserName : {props.userName} <br /> <br />
        UserName : <input type="text" onChange={props.changeName}  />
      </p>
    </div>
  );
};

export default UserInput;
