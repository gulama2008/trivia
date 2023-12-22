import React, { useContext, useEffect } from "react";
import Modal from "../Modal/Modal";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import Timer from "../Timer/Timer";
import Question from "../Question/Question";
import styles from "./Test.module.scss";
import Correct from "../Correct/Correct";
import trophy from "../../assets/trophy.png"

const Test = () => {
  const {
    showGameOverModal,
    currentQuestionIndex,
    showWinModal,
    score,
    showCorrect,
    
  } = useContext(TriviaContext);
  useEffect(() => {}, [showGameOverModal]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Timer />
        <div className={styles.score}>
          <div>
            <img src={trophy} alt="" className={ styles.score_img} />
          </div>
          <div className={styles.score_content}>{score}</div>
        </div>
      </div>
      <div className={styles.question_number}>
        {currentQuestionIndex + 1}/10
      </div>
      <div className={styles.question_container}>
        <Question />
        {showCorrect && (
          <div>
            <Correct />
          </div>
        )}
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
    </div>
  );
};

export default Test;
