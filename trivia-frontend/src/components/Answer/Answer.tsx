import React, { useContext, useState } from 'react'
import styles from "./Answer.module.scss"
import { TriviaContext } from '../../TriviaContextProvider/TriviaContextProvider';
export interface AnswerProps { 
    content: string;
    // onClick: (e:any) => any;
    index: number;
}

const Answer = ({ content, index }: AnswerProps) => {
    const {
      currentQuestions,
      currentQuestionIndex,
      setCurrentQuestionIndex,
      score,
      setScore,
      setShowWinModal,
      setShowGameOverModal,
      setStopTimer,
      answerIndex,
      setAnswerIndex,
      setShowCorrect,
    } = useContext(TriviaContext);
    const [isCorrect, setIsCorrect] = useState<string>();
    let answerClass = styles.answer;
    if (index == answerIndex&&isCorrect=="correct") { 
        answerClass = styles.correct_answer;
    }
    if (index == answerIndex && isCorrect == "incorrect") { 
        answerClass = styles.incorrect_answer;
    }
      const handleClick = (e: any) => {
        setAnswerIndex(index);

        
        if (
          e.target.innerText ==
          currentQuestions[currentQuestionIndex].correct_answer
        ) {
          setIsCorrect("correct");
          setScore(score + 1);
          if (currentQuestionIndex == 10) {
            setShowWinModal(true);
          } else {
            setShowCorrect(true);
            setTimeout(() => {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setShowCorrect(false);
            }, 1000);
          }
        } else {
          setIsCorrect("incorrect");
          setShowGameOverModal(true);
          setStopTimer(true);
        }
      };
  return (
      <div onClick={handleClick} className={answerClass}>{ content}</div>
  )
}

export default Answer

