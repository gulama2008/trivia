import { useContext} from "react";
import {
  ICategory,
  TriviaContext,
} from "../../TriviaContextProvider/TriviaContextProvider";
import styles from "./Categories.module.scss";

const Categories = () => {
  const { categories, chosenCategory, setChosenCategory } =
    useContext(TriviaContext);
  const handleChange = (e: any) => {
    setChosenCategory(parseInt(e.target.value));
  };

  return (
    <div className={styles.container}>
      <select name="" id="" value={chosenCategory} onChange={handleChange} className={styles.category}>
        <option value={0}>Any Category</option>
        {categories.map((category: ICategory) => {
          return (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Categories;
