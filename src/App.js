import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      {/* <Greet name="Sayed Anawer" age="20" />
      <Greet name="Fahim al huq" age="20" />
      <Greet name="Jonaed hasan" age="22" />
      <Welcome name="Fahim al huq " age="20">
        {" "}
        <p> This is children from class component</p>
      </Welcome> */}

      <Counter />
    </div>
  );
}

export default App;
