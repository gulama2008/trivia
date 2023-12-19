import React, { useContext, useEffect } from "react";
import Modal from "../Modal/Modal";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import Timer from "../Timer/Timer";
import Question from "../Question/Question";
import WinModal from "../WinModal/WinModal";

const Test = () => {
  const { showGameOverModal, currentQuestionIndex, showWinModal, score } =
    useContext(TriviaContext);
  useEffect(() => {}, [showGameOverModal]);
  return (
    <div>
      <div>{currentQuestionIndex + 1}/10</div>
      <div>{ score}</div>
      <Timer />
      <Question />
      {showGameOverModal && (
        <div>
          <Modal title="Game Over!" />
        </div>
      )}
      {showWinModal && (
        <div>
          <Modal title="Congratulations! You win!" />
        </div>
      )}
    </div>
  );
};

export default Test;
