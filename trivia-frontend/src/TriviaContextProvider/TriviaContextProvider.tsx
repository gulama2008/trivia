import { createContext, useEffect, useState } from "react";
import { TriviaAPI } from "../services/trivia-api";

export const TriviaContext = createContext<any>(null);
export interface ICategory {
  id: number;
  name: string;
}

export interface IQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}
const TriviaContextProvider = ({ children }: any) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [chosenCategory, setChosenCategory] = useState<number>(0);
  const [chosenDifficulty, setChosenDifficulty] = useState<string>("");
  const [currentQuestions, setCurrentQuestions] = useState<IQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showNewGame, setShowNewGame] = useState<boolean>(true);
  const [showTest, setShowTest] = useState<boolean>(false);
  const [showGameOverModal, setShowGameOverModal] = useState<boolean>(false);
  const [timerNumber, setTimerNumber] = useState<number>(10);
  const [stopTimer, setStopTimer] = useState<boolean>(false);
  const [showWinModal, setShowWinModal] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [answerIndex, setAnswerIndex] = useState<number>();
  const [showCorrect, setShowCorrect] = useState<boolean>(false);
  const [currentGameId, setCurrentGameId] = useState<number>();
  const [showNewGameContainer, setShowNewGameContainer] =
    useState<boolean>(false);
  const [showFailedGame, setShowFailedGame] = useState<boolean>(false);
  const [showHome, setShowHome] = useState<boolean>(true);
  useEffect(() => {
    TriviaAPI.getCategories()
      .then((res) => {
        const categories = res.trivia_categories;
        setCategories(categories);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log("test if rerender context");
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
        showNewGameContainer,
        setShowNewGameContainer,
        showNewGame,
        setShowNewGame,
        showTest,
        setShowTest,
        showGameOverModal,
        setShowGameOverModal,
        timerNumber,
        setTimerNumber,
        stopTimer,
        setStopTimer,
        showWinModal,
        setShowWinModal,
        score,
        setScore,
        answerIndex,
        setAnswerIndex,
        showCorrect,
        setShowCorrect,
        currentGameId,
        setCurrentGameId,
        showHome,
        setShowHome,
        showFailedGame,
        setShowFailedGame,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export default TriviaContextProvider;
