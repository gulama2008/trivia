import styles from "./Button.module.scss";
export interface ButtonProps {
  content: string;
}
const Button = ({ content }: ButtonProps) => {
  return (
    <div>
      <button className={styles.btn}>{content}</button>
    </div>
  );
};

export default Button;
