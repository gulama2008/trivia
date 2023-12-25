import styles from "./App.module.scss";
import TriviaContextProvider from "./TriviaContextProvider/TriviaContextProvider";
import Home from "./components/Home/Home";
import HomeContainer from "./containers/HomeContainer/HomeContainer";


function App() {
  return (
    <TriviaContextProvider>
      <div className={styles.container}>
        <HomeContainer />
      </div>
    </TriviaContextProvider>
  );
}

export default App;
