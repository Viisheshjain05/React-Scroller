import React, { useRef, useEffect } from "react";

const ForwardingRef = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  useEffect(() => {
    inputRef1.current.focus();
  }, []);

  const FocusMe = (e) => {
    if (e.key === "Enter") {
      inputRef2.current.remove();
    }
  };

  const KeyEnterFirst = (e) => {
    if (e.key === "Enter") {
      inputRef2.current.focus();
    }
  };
  const KeyEnterNext = (e) => {
    if (e.key === "Enter") {
      inputRef3.current.focus();
    }
  };
  const KeyEnterLast = (e) => {
    if (e.key === "Enter") {
        console.log("key" , e.key) 
      inputRef1.current.focus();
    }
  };

  return (
    <div style={{ color: "lightcoral", textAlign: "center", alignSelf: "center", marginTop: "10rem", fontSize: "2rem" }}>
      <p>
        {" "}
        Select 1 : <input type="text" ref={inputRef1} onKeyDown={KeyEnterFirst} />
      </p>
      <p>
        {" "}
        Select 2 : <input type="text" ref={inputRef2} onKeyDown={KeyEnterNext} />
      </p>
      <p>
        {" "}
        Select 3 : <input type="text" ref={inputRef3} onKeyDown={KeyEnterLast} />
      </p>
      <button type="submit" ref={inputRef4} onClick={(e) => FocusMe(e)}>
        {" "}
        Submit
      </button>
    </div>
  );
};

export default ForwardingRef;
