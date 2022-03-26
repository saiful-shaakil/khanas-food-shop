import "./App.css";
import Foods from "./Components/Foods/Foods";
import Header from "./Components/Header/Header";
import Qna from "./Components/QnA/Qna";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Foods></Foods>
      <Qna></Qna>
    </div>
  );
}

export default App;
