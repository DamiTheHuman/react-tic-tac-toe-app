import React from "react";
import "./App.css";
import MainHeader from "./components/header/MainHeader";
import Board from "./components/board/Board";
import Rules from "./components/rules/Rules";

class App extends React.Component {
  render() {
    return (
      <div className="App font-rubik">
        <MainHeader />
        <main className="lg:px-64 md:px-16 px-0">
          <Board />
        </main>
        <Rules />
      </div>
    );
  }
}

export default App;
