import Level from '../Level/Level'
import Categories from '../Category/Categories'
import { useContext } from 'react'
import { TriviaContext } from '../../TriviaContextProvider/TriviaContextProvider'
import { TriviaAPI } from '../../services/trivia-api'

const SideBar = () => {
  const { chosenCategory, chosenDifficulty } = useContext(TriviaContext);
  const handleClick = () => {
    const data = {
      category: chosenCategory,
      difficulty:chosenDifficulty
    }
    console.log(data);
    
    TriviaAPI.getQuestions(data)
      .then((res) => { 
        console.log(res);
        
      })
   }
  return (
    <div>
      <div>Select category</div>
      <Categories />
      <div>Choose a level</div>
      <Level title="easy" />
      <Level title="medium" />
      <Level title="hard" />
      <button onClick={handleClick}>Start Game</button>
    </div>
  );
}

export default SideBar