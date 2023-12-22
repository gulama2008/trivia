import { useContext } from "react"
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider"
import styles from "./Level.module.scss"
export interface LevelProps{ 
  title:string
}
const Level = ({ title }: LevelProps) => {
  const { chosenDifficulty, setChosenDifficulty } = useContext(TriviaContext);
  let containerClass = styles.container + ` ${styles[title]}`;
  if (chosenDifficulty==title) { 
    containerClass+=` ${styles.chosen}`
  }
  const handleClick = () => { 
    setChosenDifficulty(title);
  }
  return (
    <div onClick={handleClick} className={containerClass}>{title}</div>
  )
}

export default Level