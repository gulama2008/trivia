import { useContext, useEffect, useState } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import { generateRandomOrderArray } from "../../services/utils";
import styles from "./Question.module.scss";
import Answer from "../Answer/Answer";
import { decode } from "html-entities";
export interface QuestionProps {
  type: string;
}
const Question = ({ type }: QuestionProps) => {
  const {
    currentQuestions,
    currentQuestionIndex,
    showWinModal,
    setAnswerIndex,
    showGameOverModal,
  } = useContext(TriviaContext);
  const [answerArr, setAnswerArr] = useState<string[]>();
  useEffect(() => {
    if (currentQuestions.length > 0) {
      setAnswerIndex();
      let answerArr:any = [];
      if (type == "failed") {
        answerArr = [
          ...currentQuestions[currentQuestionIndex].incorrectAnswer,
          currentQuestions[currentQuestionIndex].correctAnswer,
        ];
      } else if (type == "new") {
        answerArr = [
          ...currentQuestions[currentQuestionIndex].incorrect_answers,
          currentQuestions[currentQuestionIndex].correct_answer,
        ];
      }

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
          <div className={styles.question}>
            {decode(currentQuestions[currentQuestionIndex].question)}
          </div>
          {answerArr?.map((answer: string, index: number) => {
            return <Answer content={answer} index={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Question;
