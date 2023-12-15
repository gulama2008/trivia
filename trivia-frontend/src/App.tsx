import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";
import styles from "./App.module.scss";
import TriviaContextProvider from "./TriviaContextProvider/TriviaContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <TriviaContextProvider>
      <QueryClientProvider client={queryClient}>
        <div className={styles.container}>
          <SideBar />
          <Main />
        </div>
      </QueryClientProvider>
    </TriviaContextProvider>
  );
}

export default App;
