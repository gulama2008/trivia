import React, { useContext, useEffect, useState } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import { generateRandomOrderArray } from "../../services/utils";
import styles from "./Question.module.scss"
import Answer from "../Answer/Answer";

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
    setAnswerIndex
  } = useContext(TriviaContext);
  const [answerArr, setAnswerArr] = useState<string[]>();
  useEffect(() => {
    if (currentQuestions.length > 0) {
      setAnswerIndex();
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
    <div className={styles.container}>
      {currentQuestions.length > 0 && (
        <div>
          <div className={styles.question}>{currentQuestions[currentQuestionIndex].question}</div>
          {answerArr?.map((answer: string, index: number) => {
            return (
              <Answer content={ answer} index={index} />
              // <div onClick={handleClick} key={index} className={}>
              //   {answer}
              // </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Question;
