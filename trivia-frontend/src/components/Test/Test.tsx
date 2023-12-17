import React, { useContext, useEffect } from "react";
import Modal from "../Modal/Modal";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import Timer from "../Timer/Timer";
import Question from "../Question/Question";

const Test = () => {
  const { showGameOverModal } = useContext(TriviaContext);
  useEffect(() => {}, [showGameOverModal]);
  return (
    <div>
      <Timer />
      <Question />
      {showGameOverModal && (
        <div>
          <Modal />
        </div>
      )}
    </div>
  );
};

export default Test;
