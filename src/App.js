import React from "react";
import "./App.css";
import MainHeader from "./components/header/MainHeader";
import Board from "./components/board/Board";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <main className="lg:px-64 md:px-16 px-0">
          <Board />
        </main>
      </div>
    );
  }
}

export default App;
