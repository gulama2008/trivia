import React, { useContext, useEffect, useState } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import { generateRandomOrderArray } from "../../services/utils";
import styles from "./Question.module.scss"
import Answer from "../Answer/Answer";
import { QuestionService } from "../../services/questions-service";

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
    setAnswerIndex,
    showGameOverModal,
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
  let questionContainerClass;
  if (showGameOverModal || showWinModal) { 
    questionContainerClass = styles.is_disabled;
  }
  

  return (
    <div className={styles.container}>
      {currentQuestions?.length > 0 && (
        <div className={questionContainerClass}>
          <div className={styles.question}>{currentQuestions[currentQuestionIndex].question}</div>
          {answerArr?.map((answer: string, index: number) => {
            return (
              <Answer content={ answer} index={index} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Question;
