import  { createContext, useEffect, useState } from 'react'
import { TriviaAPI } from '../services/trivia-api';


export const TriviaContext = createContext<any>(null);
export interface ICategory { 
  id: number,
  name:string
}

export interface IQuestion { 
  category:string,
correct_answer:string,
difficulty:string,
incorrect_answers: string[],
question:string,
type:string
}
const TriviaContextProvider = ({ children }: any) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [chosenCategory, setChosenCategory] = useState<number>(0);
  const [chosenDifficulty, setChosenDifficulty] = useState<string>("");
  const [currentQuestions, setCurrentQuestions] = useState<IQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showHome, setShowHome] = useState<boolean>(true);
  const [showTest, setShowTest] = useState<boolean>(false);
  const [showGameOverModal, setShowGameOverModal] = useState<boolean>(false);
  useEffect(() => { 
    TriviaAPI.getCategories()
      .then(res => { 
        const categories = res.trivia_categories;
        setCategories(categories);
      })
    .catch(err=>console.error(err)
    )
  }, [])
  
  return (
    <TriviaContext.Provider
      value={{
        categories,
        setCategories,
        chosenCategory,
        setChosenCategory,
        chosenDifficulty,
        setChosenDifficulty,
        currentQuestions,
        setCurrentQuestions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        showHome,
        setShowHome,
        showTest,
        setShowTest,
        showGameOverModal,
        setShowGameOverModal,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
}

export default TriviaContextProvider
