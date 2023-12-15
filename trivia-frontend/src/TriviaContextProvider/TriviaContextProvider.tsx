import  { createContext, useEffect, useState } from 'react'
import { TriviaAPI } from '../services/trivia-api';


export const TriviaContext = createContext<any>(null);
export interface Category { 
  id: number,
  name:string
}
const TriviaContextProvider = ({ children }: any) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [chosenCategory, setChosenCategory] = useState<number>(0);
  const [chosenDifficulty, setChosenDifficulty] = useState<string>("");
  useEffect(() => { 
    TriviaAPI.getCategories()
      .then(res => { 
        const categories = res.trivia_categories;
        setCategories(categories);
      })
    .catch(err=>console.error(err)
    )
  },[])
  return (
    <TriviaContext.Provider
      value={{
        categories,
        setCategories,
        chosenCategory,
        setChosenCategory,
        chosenDifficulty,
        setChosenDifficulty,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
}

export default TriviaContextProvider
