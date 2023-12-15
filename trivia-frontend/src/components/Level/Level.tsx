import { useContext } from "react"
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider"

export interface LevelProps{ 
  title:string
}
const Level = ({ title }: LevelProps) => {
  const { setChosenDifficulty } = useContext(TriviaContext);
  const handleClick = () => { 
    setChosenDifficulty(title);
  }
  return (
    <div onClick={handleClick}>{title}</div>
  )
}

export default Level