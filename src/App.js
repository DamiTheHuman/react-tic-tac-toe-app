import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/header/MainHeader";
import Board from "./components/board/Board";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main className="py-4 px-64">
        <Board />
      </main>
    </div>
  );
}

export default App;
