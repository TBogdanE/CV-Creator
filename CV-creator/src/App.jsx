import "./styles/style.css";
import Header from "./components/Header";
import CVPage from "./components/CVpage";
import personCV from "./functions/data";

function App() {
  return (
    <>
      <Header title="CV Generator" />
      <CVPage data={personCV}></CVPage>
    </>
  );
}

export default App;
