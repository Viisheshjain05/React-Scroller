import React from "react";

const UserInput = (props) => {
  // console.log(props)
  return (
    <div>
      <p>Update your login details</p>

      <p>
        UserName : {props.userName} <br /> <br />
        UserName : <input type="text" onChange={props.changeName}  />
      </p>

      <p>
        UserId : {props.id} <br /> <br />
        Userid : <input type="text" onChange={props.changeId} />
      </p>
    </div>
  );
};

export default UserInput;
