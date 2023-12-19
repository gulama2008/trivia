import React, { useContext, useEffect, useState } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import { generateRandomOrderArray } from "../../services/utils";
import Score from "../Score/Score";

const Question = () => {
  const {
    currentQuestions,
    setCurrentQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setShowGameOverModal,
    stopTimer,
    setStopTimer,
    showWinModal,
    setShowWinModal,
    score,
    setScore,
  } = useContext(TriviaContext);
  const [answerArr, setAnswerArr] = useState<string[]>();
  useEffect(() => {
    if (currentQuestions.length > 0) {
      console.log("test2");
      const answerArr = [
        ...currentQuestions[currentQuestionIndex].incorrect_answers,
        currentQuestions[currentQuestionIndex].correct_answer,
      ];
      const randomOrderAnswerArr = generateRandomOrderArray(answerArr);
      setAnswerArr(randomOrderAnswerArr);
    }
  }, [currentQuestionIndex, currentQuestions]);

  const handleClick = (e: any) => {
    if (
      e.target.innerText ==
      currentQuestions[currentQuestionIndex].correct_answer
    ) {
      setScore(score + 1);
      if (currentQuestionIndex == 10) {
        setShowWinModal(true)
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      console.log("come to here");

      setShowGameOverModal(true);
      setStopTimer(true);
    }
  };

  return (
    <div>
      {currentQuestions.length > 0 && (
        <div>
          <div>{currentQuestions[currentQuestionIndex].question}</div>
          {answerArr?.map((answer: string, index: number) => {
            return (
              <div onClick={handleClick} key={index}>
                {answer}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Question;
