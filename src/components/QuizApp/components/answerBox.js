import React, { useState, useEffect } from "react";

const AnswerBox = (props) => {
  const [showOptions, setShowOptions] = useState(true);
  const [SelectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    return () => {
      setShowOptions(true);
    };
  }, [props.corAns]);


  const userSelectedOption = (ev) => {
    setSelectedAnswer(ev.target.value);
    setShowOptions(false);
    props.selected({ selectedAns: ev.target.value, corAns: props.corAns });
  };

  
  return (
    <>
      {showOptions === true ? (
        props.ans.map((e, index) => (
          <button onClick={(ev) => userSelectedOption(ev)} value={e} key={index}>
            {e}
          </button>
        ))
      ) : (
        <button onClick={() => setShowOptions(true)} value={props.corAns}>
          {" "}
          {SelectedAnswer}{" "}
        </button>
      )}
    </>
  );
};

export default AnswerBox;
