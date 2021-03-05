import React, { useState } from "react";
import { auth } from '../firebase.js'

const App = (props) => {
  const [PasswordText, setPasswordText] = useState("");
  console.log("App ~ PasswordText", PasswordText);
  const [EmailText, setEmailText] = useState("");

  const handleSubmit = (el) => {
    el.preventDefault();
    console.log("  flie - App ", PasswordText, EmailText, auth);
  

};

  return (
    <div>
      <p>
        input Email
        <input onChange={(e) => setEmailText(e.target.value)} type="text" />
      </p>

      <p>
        password
        <input onChange={(e) => setPasswordText(e.target.value)} type="text" />
      </p>
      <button onClick={(e) => handleSubmit(e)}> Submit</button>
    </div>
  );
};

export default App;
