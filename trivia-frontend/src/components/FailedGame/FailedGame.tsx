import  { useContext } from 'react'
import styles from "./FailedGame.module.scss"
import Correct from '../Correct/Correct';
import Modal from '../Modal/Modal';
import Question from '../Question/Question';
import { TriviaContext } from '../../TriviaContextProvider/TriviaContextProvider';
const FailedGame = () => {
  const {
    showGameOverModal,
    showWinModal,
    showCorrect,
    currentQuestions,
  } = useContext(TriviaContext);
  return (
    <div className={styles.container}>
      {currentQuestions.length == 0 ? (
        <div className={styles.question_container}>
          <div className={styles.no_failed}>No failed questions left!</div>
        </div>
      ) : (
        <div className={styles.question_container}>
          <Question type="failed" />
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
      )}
    </div>
  );
}

export default FailedGame