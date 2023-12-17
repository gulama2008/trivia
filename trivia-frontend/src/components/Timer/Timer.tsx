import React, { useContext, useEffect, useState } from 'react'
import { TriviaContext } from '../../TriviaContextProvider/TriviaContextProvider';

const Timer = () => {
  const {
    currentQuestions,
    setCurrentQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
  } = useContext(TriviaContext);

  const [countDown, setCountDown] = useState<number>(10);
  useEffect(() => {
    let interval: any;
    console.log(currentQuestions);
    let countDown = 10;
    if (currentQuestions.length > 0 ) {
      interval = setInterval(() => {
        
        setCountDown(countDown--);
        if (countDown < 0) {
          clearInterval(interval);
        }
        
      }, 1000);
      
    } 
    return () => clearInterval(interval);
   },[currentQuestions,currentQuestionIndex])
  return (
    <div>{ countDown}</div>
  )
}

export default Timer