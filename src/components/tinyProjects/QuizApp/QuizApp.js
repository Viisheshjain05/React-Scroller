import React, { useState } from "react";

import QuestionBox from "./components/questionBox";
import AnswerBox from "./components/answerBox";

import { qBank } from "./components/qBank";

const QuizApp = () => {
  const [Questions, setQuestions] = useState("");
  const [QuestionsLength, setQuestionsLength] = useState(5);
  const [Score, setScore] = useState({ wrong: 0, correct: 0 });
  const [SubmitData, setSubmitData] = useState("");

  const GetProjects = () => {
    const arr = [];
    while (arr.length < QuestionsLength) arr.push(qBank[Math.floor(Math.random() * 50)]);
    setQuestions(arr);
  };

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
    };

  const scoreCalculation = (props) => {
    setScore({ wrong: Score.wrong + 1, correct: Score.correct });
    if (props.selectedAns === props.corAns) setScore({ wrong: Score.wrong, correct: Score.correct + 1 });
  };

  const Submit = () => {
    setSubmitData(
      <div>
        Your attempts are : {Score.correct + Score.wrong}
        <br /> Your Correct Ans are : {Score.correct}
      </div>
    );
  };

  console.log(`score`, Score);

  return (
    <>
      <button onClick={GetProjects}>Get Questions </button>
      <button onClick={Submit}> Submit </button>
      <>
        {SubmitData !== "" ? SubmitData : null}
        No. of Questions <input onChange={(e) => setQuestionsLength(e.target.value)} />
      </>

      {/* <button onClick={AddProjects}>Add Questions </button>    //ToDO */}

      <>
        {Questions !== ""
          ? Questions.map((e, index) => (
              <div>
                <QuestionBox ques={e.question} key={e.questionId} />
                <AnswerBox ans={shuffle(e.answers)} selected={(e) => scoreCalculation(e)} corAns={e.correct} key={index + 41} />
              </div>
            ))
          : null}
      </>

      {/* <button onClick={Reset}>Reset </button>  //ToDO */}
    </>
  );
};

export default QuizApp;
