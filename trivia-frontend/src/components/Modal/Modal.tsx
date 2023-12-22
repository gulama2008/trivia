import React, { useContext } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import { TriviaAPI } from "../../services/trivia-api";
import styles from "./Modal.module.scss"
export interface ModalProps {
  title: string;
}
const Modal = ({ title }: ModalProps) => {
  const {
    showHome,
    setShowHome,
    showTest,
    setShowTest,
    setShowGameOverModal,
    chosenCategory,
    chosenDifficulty,
    setCurrentQuestions,
    setCurrentQuestionIndex,
    setStopTimer,
    setScore,
    setAnswerIndex,
  } = useContext(TriviaContext);
  const handleTryAgain = () => {
    const data = {
      category: chosenCategory,
      difficulty: chosenDifficulty,
    };
    TriviaAPI.getQuestions(data)
      .then((res) => {
        setShowGameOverModal(false);
        setStopTimer(false);
        setScore(0);
        setAnswerIndex();
        setCurrentQuestions(res.results);
        setCurrentQuestionIndex(0);
      })
      .catch((err) => console.error(err));
  };
  const handleQuit = () => {
    setShowGameOverModal(false);
    setStopTimer(false);
    setScore(0);
    setAnswerIndex();
    setShowHome(true);
    setShowTest(false);
  };
  return (
    <div>
      <div>{title}</div>
      <button onClick={handleTryAgain} className={styles.btn}>
        Try again
      </button>
      <button onClick={handleQuit} className={styles.btn}>
        Quit
      </button>
    </div>
  );
};

export default Modal;
