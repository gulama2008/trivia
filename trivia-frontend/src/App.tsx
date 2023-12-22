import styles from "./App.module.scss";
import TriviaContextProvider from "./TriviaContextProvider/TriviaContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Test from "./components/Test/Test";
import MainContainer from "./containers/MainContainer/MainContainer";

function App() {
  return (
    <TriviaContextProvider>
      <div className={styles.container}>
        <MainContainer />
      </div>
    </TriviaContextProvider>
  );
}

export default App;
