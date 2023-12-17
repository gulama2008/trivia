import Level from "../Level/Level";
import Categories from "../Category/Categories";
import { useContext, useEffect } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import { TriviaAPI } from "../../services/trivia-api";
import Modal from "../Modal/Modal";

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
  } = useContext(TriviaContext);
  
  const handleClick = () => {
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
    <div>
      <div>
        <div>Select category</div>
        <Categories />
        <div>Choose a level</div>
        {/* <div>Easy</div>
      <div>Medium</div>
      <div>Hard</div> */}
        <Level title="easy" />
        <Level title="medium" />
        <Level title="hard" />
        <button onClick={handleClick}>Start Game</button>
      </div>
      
    </div>
  );
};

export default Home;
