import { useContext, useEffect } from "react";
import Test from "../../components/Test/Test";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import NewGame from "../../components/NewGame/NewGame";

const NewGameContainer = () => {
    const { showNewGame, showTest } = useContext(TriviaContext);
    useEffect(() => {
      console.log(showNewGame, showTest);
    }, [showNewGame, showTest]);
  console.log("test11111");
  
  return (
    <div>
      {showNewGame && <NewGame />}
      {showTest && <Test />}
    </div>
  );
};

export default NewGameContainer;
