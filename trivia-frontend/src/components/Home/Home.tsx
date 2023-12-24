import Level from "../Level/Level";
import Categories from "../Category/Categories";
import { useContext, useEffect } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import { TriviaAPI } from "../../services/trivia-api";
import styles from "./Home.module.scss";
import { GameService } from "../../services/games-service";

const Home = () => {
  const {
    chosenCategory,
    chosenDifficulty,
    currentQuestions,
    setCurrentQuestions,
    showHome,
    setShowHome,
    showTest,
    setShowTest,
    showGameOverModal,
    currentGameId,
    setCurrentGameId,
  } = useContext(TriviaContext);

  const handleClick = () => {
    GameService.createGame()
      .then((res) => {
        console.log(res);
        setCurrentGameId(res.id)
      })
      .catch((err) => console.error(err));

    const data = {
      category: chosenCategory,
      difficulty: chosenDifficulty,
    };
    TriviaAPI.getQuestions(data).then((res) => {
      setCurrentQuestions(res.results);
      setShowHome(false);
      setShowTest(true);
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>Let's Play</div>
      <div className={styles.options}>
        <div className={styles.title}>Select category</div>
        <Categories />
        <div className={styles.title}>Choose a level</div>
        <div className={styles.level}>
          <Level title="easy" />
          <Level title="medium" />
          <Level title="hard" />
        </div>
        <button onClick={handleClick} className={styles.btn}>
          Start Game
        </button>
      </div>
      <div>
        <div>Or replay failed questions</div>
        <button>Start</button>
      </div>
    </div>
  );
};

export default Home;
