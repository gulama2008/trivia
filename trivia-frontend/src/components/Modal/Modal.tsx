import { useContext } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import { TriviaAPI } from "../../services/trivia-api";
import styles from "./Modal.module.scss";
import { GameService } from "../../services/games-service";
import { QuestionService } from "../../services/questions-service";
export interface ModalProps {
  title: string;
}
const Modal = ({ title }: ModalProps) => {
  const {
    setShowHome,
    setShowTest,
    setShowGameOverModal,
    chosenCategory,
    chosenDifficulty,
    setCurrentQuestions,
    setCurrentQuestionIndex,
    setStopTimer,
    setScore,
    setAnswerIndex,
    setChosenDifficulty,
    setShowNewGameContainer,
    setCurrentGameId,
    setShowFailedGame,
    showFailedGame,
  } = useContext(TriviaContext);
  const handleTryAgain = () => {
    console.log(showFailedGame);

    if (showFailedGame) {
      QuestionService.getByFailureStatus()
        .then((res) => {
          console.log(res);
          setShowGameOverModal(false);
          setCurrentQuestions(res);
        })
        .catch((err) => console.error(err));
    } else {
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
          GameService.createGame()
            .then((res) => {
              console.log(res);
              setCurrentGameId(res.id);
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    }
  };
  const handleQuit = () => {
    setShowGameOverModal(false);
    setStopTimer(false);
    setScore(0);
    setAnswerIndex();
    setShowHome(true);
    setShowFailedGame(false);
    setShowNewGameContainer(false);
    setShowTest(false);
    setChosenDifficulty();
    setCurrentQuestions([]);
    setCurrentQuestionIndex(0);
  };
  return (
    <div>
      <div className={styles.content}>{title}</div>
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
