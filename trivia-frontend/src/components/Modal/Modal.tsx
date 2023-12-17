import React, { useContext } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import { TriviaAPI } from "../../services/trivia-api";

const Modal = () => {
  const {
    showHome,
    setShowHome,
    showTest,
    setShowTest,
    showGameOverModal,
    setShowGameOverModal,
    chosenCategory,
    chosenDifficulty,
    setCurrentQuestions,
    setCurrentQuestionIndex,
  } = useContext(TriviaContext);
  const handleTryAgain = () => {
    const data = {
      category: chosenCategory,
      difficulty: chosenDifficulty,
    };
    TriviaAPI.getQuestions(data)
      .then(res => {
        setShowGameOverModal(false)
        setCurrentQuestions(res.results)
        setCurrentQuestionIndex(0);
      })
      .catch((err) => console.error(err));
  };
  const handleQuit = () => {
    setShowGameOverModal(false);
    setShowHome(true);
    setShowTest(false);
  };
  return (
    <div>
      <div>Game Over!</div>
      <button onClick={handleTryAgain}>Try again</button>
      <button onClick={handleQuit}>Quit</button>
    </div>
  );
};

export default Modal;
