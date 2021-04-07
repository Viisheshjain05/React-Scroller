import React, { useState, useEffect } from "react";
import { auth } from "../firebase.js";

const App = () => {
  // Status of user Signed In Or Not We Can connect it with DB and use to store database on based of user
  const [UserSignnedIn, setUserSignnedIn] = useState(false);

  useEffect(() => {
    //* trigger if user sign in or sign out if user return data.user
    auth.onAuthStateChanged((user) => (user ? setUserSignnedIn(user) : setUserSignnedIn(user)));
    console.log("App ~ UserSignnedIn", UserSignnedIn);
  }, [UserSignnedIn]);

  const [PasswordText, setPasswordText] = useState("");
  const [EmailText, setEmailText] = useState("");

  const handleSignOUT = (el) => {
    el.preventDefault();
    //* sign UP a new user
    auth.createUserWithEmailAndPassword(EmailText, PasswordText);
    // .then((res) => console.log("  flie - App ", res));
  };

  const handleSignIN = (el) => {
    //* sign IN user
    auth.signInWithEmailAndPassword(EmailText, PasswordText);
    // .then((res) => console.log("  SIGN IN WITH  EMAIL ", res));
  };

  return (
    <div>
      <p>
        input Email :
        <input onChange={(e) => setEmailText(e.target.value)} type="text" />
      </p>

      <p>
        password :
        <input onChange={(e) => setPasswordText(e.target.value)} type="text" />
      </p>

      <button onClick={(e) => handleSignOUT(e)}> Sign up</button>

      <button onClick={(e) => handleSignIN(e)}> Sign in </button>

      <button onClick={() => auth.signOut()}> Sign Out </button>
    </div>
  );
};

export default App;
