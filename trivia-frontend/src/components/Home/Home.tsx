import { useContext } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import styles from "./Home.module.scss";

const Home = () => {
  const {
    setShowHome,
    setShowNewGameContainer,
    setShowFailedGame,
    setShowNewGame,
  } = useContext(TriviaContext);

  const onClickNewGame = () => {
    setShowNewGameContainer(true);
    setShowNewGame(true);
    setShowHome(false);
  };

  const onClickFailedGame = () => {
    setShowHome(false);
    setShowFailedGame(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>Let's Play</div>
      <div className={styles.options}>
        <div onClick={onClickNewGame} className={styles.option_newgame}>Start New Game</div>
        <div onClick={onClickFailedGame} className={styles.option_failedgame}>Replay Failed Questions</div>
      </div>
    </div>
  );
};

export default Home;
