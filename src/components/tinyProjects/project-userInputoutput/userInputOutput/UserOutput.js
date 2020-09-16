import React from "react";

const UserOutput = (props) => {
  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "10px 30rem 0px 0px", margin: "50px" }}> CREATE YOUR OWN EMAIL TEMPLATE </h2>
      <p>
        Hii My Name is {props.name}. <br/>My Id Number is {props.age}. <br /><br /> This is my official project and my idea is to learn react and then work as a freelancer. I want be fully accuiped with latest tech and update my kowledge to work further on my plans
        but before that i need to go through a lot my plan is to be a {props.children}. <br />
        Thank you for reading
      </p>
    </div>
  );
};

export default UserOutput;
