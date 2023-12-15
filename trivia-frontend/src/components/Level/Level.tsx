import { useContext } from "react"
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider"
import styles from "./Level.module.scss"
export interface LevelProps{ 
  title:string
}
const Level = ({ title }: LevelProps) => {
  const { setChosenDifficulty } = useContext(TriviaContext);
  let containerClass = styles.container + ` ${styles[title]}`;
  
  const handleClick = () => { 
    setChosenDifficulty(title);
  }
  return (
    <div onClick={handleClick} className={containerClass}>{title}</div>
  )
}

export default Level