import  { useContext, useState } from "react";
import {
  Category,
  TriviaContext,
} from "../../TriviaContextProvider/TriviaContextProvider";

const Categories = () => {
  const { categories, chosenCategory, setChosenCategory } =
    useContext(TriviaContext);
  // const [selectedCategory, setSelectedCatetory] = useState<number>(0);
  const handleChange = (e:any) => { 
    setChosenCategory(parseInt(e.target.value));
  }
  
  return (
    <div>
      <select name="" id="" value={chosenCategory} onChange={handleChange}>
        <option value={0}>Any Category</option>
        {categories.map((category: Category) => { 
          return <option value={category.id} key={category.id}>{ category.name}</option>
        })}
      </select>
    </div>
  );
};

export default Categories;
