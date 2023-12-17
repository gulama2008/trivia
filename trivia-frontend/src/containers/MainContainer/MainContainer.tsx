import { useContext, useEffect } from "react";
import Home from "../../components/Home/Home";
import Test from "../../components/Test/Test";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";

const MainContainer = () => {
    const { showHome, showTest } = useContext(TriviaContext);
    useEffect(() => {console.log(showHome,showTest);
     },[showHome,showTest])
  return (
    <div>
      {showHome && <Home />}
      {showTest && <Test />}
    </div>
  );
};

export default MainContainer;
