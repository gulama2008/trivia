import React, { useContext } from 'react'
import styles from "./NewGame.module.scss"
import Categories from '../Category/Categories';
import Level from '../Level/Level';
import { GameService } from '../../services/games-service';
import { TriviaAPI } from '../../services/trivia-api';
import { TriviaContext } from '../../TriviaContextProvider/TriviaContextProvider';
const NewGame = () => {
    const {
      chosenCategory,
      chosenDifficulty,
      currentQuestions,
      setCurrentQuestions,
      showNewGame,
      setShowNewGame,
      showTest,
      setShowTest,
      showGameOverModal,
      currentGameId,
      setCurrentGameId,
    } = useContext(TriviaContext);
    const handleClick = () => {
      const data = {
        category: chosenCategory,
        difficulty: chosenDifficulty,
      };
        console.log(data);
        
      TriviaAPI.getQuestions(data).then((res) => {
        setCurrentQuestions(res.results);
        setShowNewGame(false);
          setShowTest(true);
          GameService.createGame()
            .then((res) => {
              console.log(res);
              setCurrentGameId(res.id);
            })
            .catch((err) => console.error(err));
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
    </div>
  );
}

export default NewGame