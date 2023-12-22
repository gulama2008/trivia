import correct from "../../assets/correct.png"
import styles from "./Correct.module.scss"
const Correct = () => {
  return (
    <div className={styles.container}>
      <img src={correct} alt="" className={styles.img} />
      <div className={styles.content}>Your answer is correct!</div>
    </div>
  );
}

export default Correct