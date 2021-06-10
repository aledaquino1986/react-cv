import "./App.css";
import MainContainer from "./components/pages/main-container/MainContainer";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  const data = useContext(ThemeContext);
  return <MainContainer />;
}

export default App;
