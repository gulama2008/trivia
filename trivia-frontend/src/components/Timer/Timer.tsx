import React, { useContext, useEffect, useState } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import styles from "./Timer.module.scss"
const Timer = () => {
  const {
    currentQuestions,
    setCurrentQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setShowGameOverModal,
    showGameOverModal,
    timerNumber,
    setTimerNumber,
    stopTimer,
    setStopTimer,
  } = useContext(TriviaContext);
console.log("testtest");

  const [countDown, setCountDown] = useState<number>(10);
  useEffect(() => {
    let countdown = 10;
    // let interval: any;

    const interval = setInterval(() => {
      console.log(stopTimer);
      if (countdown <= 1) {
        setShowGameOverModal(true);
        clearInterval(interval);
      }
      if (stopTimer) {
        setShowGameOverModal(true);
        clearInterval(interval);
        console.log(timerNumber);
      }
      setTimerNumber(--countdown);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestions, currentQuestionIndex,stopTimer]);
  return (
    <div className={styles.container}>
      <div>Time Left:</div>
      <div>{timerNumber}</div>
    </div>
  );
};

export default Timer;
