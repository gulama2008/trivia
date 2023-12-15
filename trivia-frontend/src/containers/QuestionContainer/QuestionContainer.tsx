import React, { useContext } from 'react'
import { TriviaContext } from '../../TriviaContextProvider/TriviaContextProvider'
import Question from '../../components/Question/Question';
import Timer from '../../components/Timer/Timer';

const QuestionContainer = () => {
    // const {
    //   currentQuestions,
    //   setCurrentQuestions,
    //   currentQuestionIndex,
    //   setCurrentQuestionIndex,
    // } = useContext(TriviaContext);

  return (
      <div>
          <Timer/>
          <Question />
          
    </div>
  )
}

export default QuestionContainer