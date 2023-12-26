import React, { useContext, useState } from "react";
import styles from "./Answer.module.scss";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import { GameService } from "../../services/games-service";
import { QuestionService } from "../../services/questions-service";
import { decode } from "html-entities";
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
    currentGameId,
    showFailedGame,
  } = useContext(TriviaContext);
  const [isCorrect, setIsCorrect] = useState<string>();
  let answerClass = styles.answer;
  if (index == answerIndex && isCorrect == "correct") {
    answerClass = styles.correct_answer;
  }
  if (index == answerIndex && isCorrect == "incorrect") {
    answerClass = styles.incorrect_answer;
  }
  const handleClick = (e: any) => {
    setAnswerIndex(index);
    console.log(currentQuestions[currentQuestionIndex]);
    if (showFailedGame) {
      if (
        e.target.innerText ==
        currentQuestions[currentQuestionIndex].correctAnswer
      ) {
        setIsCorrect("correct");
        if (currentQuestionIndex == currentQuestions.length - 1) {
          setShowWinModal(true);
        } else {
          setShowCorrect(true);
          setTimeout(() => {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setShowCorrect(false);
          }, 1000);
        }
        const data = {
          submittedAnswer: e.target.innerText,
          failureStatus: false,
        };
        QuestionService.updateQuestion(
          currentQuestions[currentQuestionIndex].id,
          data
        )
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
      } else {
        setIsCorrect("incorrect");
        setShowGameOverModal(true);
        const data = {
          submittedAnswer: e.target.innerText,
          failureStatus: true,
        };
        QuestionService.updateQuestion(
          currentQuestions[currentQuestionIndex].id,
          data
        )
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
      }
    } else {
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
        const updateGameData = {
          score: score + 1,
        };
        const createQuestionData = {
          question: currentQuestions[currentQuestionIndex].question,
          correntAnswer: currentQuestions[currentQuestionIndex].correct_answer,
          incorrentAnswer:
            currentQuestions[currentQuestionIndex].incorrect_answers,
          submittedAnswer: e.target.innerText,
          failureStatus: false,
          gameId: currentGameId,
        };
        QuestionService.createQuestion(createQuestionData)
          .then((res) => console.log(res))
          .catch((err) => console.error(err));

        GameService.updateGame(currentGameId, updateGameData)
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
      } else {
        setIsCorrect("incorrect");
        setShowGameOverModal(true);
        setStopTimer(true);
        const createQuestionData = {
          question: currentQuestions[currentQuestionIndex].question,
          correntAnswer: currentQuestions[currentQuestionIndex].correct_answer,
          incorrentAnswer:
            currentQuestions[currentQuestionIndex].incorrect_answers,
          submittedAnswer: e.target.innerText,
          failureStatus: true,
          gameId: currentGameId,
        };
        QuestionService.createQuestion(createQuestionData)
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
      }
    }
  };
  return (
    <div onClick={handleClick} className={answerClass}>
      {decode(content)}
    </div>
  );
};

export default Answer;
