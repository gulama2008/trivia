import { useContext } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import styles from "./Home.module.scss";
import { QuestionService } from "../../services/questions-service";

const Home = () => {
  const {
    setShowHome,
    setShowNewGameContainer,
    setShowFailedGame,
    setShowNewGame,
    setCurrentQuestions,
  } = useContext(TriviaContext);

  const onClickNewGame = () => {
    setShowNewGameContainer(true);
    setShowNewGame(true);
    setShowHome(false);
  };

  const onClickFailedGame = () => {
    QuestionService.getByFailureStatus()
      .then((res) => {
        console.log(res);
        const questionArr = res.map((q) => q.question);
        let indexes: number[] = [];
        questionArr.map((q, index) => {
          if (questionArr.indexOf(q) !== index) {
            indexes.push(index);
          }
        });
        const nonDuplicateQuestions = res.filter(
          (e, index) => {
            console.log(e);
            return !indexes.includes(index)
          }
        );
        console.log(nonDuplicateQuestions);
        
        setShowHome(false);
        setShowFailedGame(true);
        setCurrentQuestions(nonDuplicateQuestions);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>Let's Play</div>
      <div className={styles.options}>
        <div onClick={onClickNewGame} className={styles.option_newgame}>
          Start New Game
        </div>
        <div onClick={onClickFailedGame} className={styles.option_failedgame}>
          Replay Failed Questions
        </div>
      </div>
    </div>
  );
};

export default Home;
