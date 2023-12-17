import React, { useContext, useEffect, useState } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import { generateRandomOrderArray } from "../../services/utils";

const Question = () => {
  const {
    currentQuestions,
    setCurrentQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
  } = useContext(TriviaContext);
  const [answerArr, setAnswerArr] = useState<string[]>();
  useEffect(() => {
    console.log("test1");

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

  return (
    <div>
      {currentQuestions.length > 0 && (
        <div>
          <div>{currentQuestions[currentQuestionIndex].question}</div>
          {answerArr?.map((answer: string) => {
            return <div>{answer}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default Question;
