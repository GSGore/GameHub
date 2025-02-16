// import React from 'react';
// import './App.css';
// import GameMenu from './GameMenu';

// function App() {
//   return (
//     <div className="App">
//       <GameMenu />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GameMenu from "./GameMenu";
import TicTacToe from "./Component/TicTacToe/TicTacToe";
import MemoryGame from "./Component/MemoryGame/MemoryGame";
import SnakeGame from "./Component/SnakeGame/SnakeGame";
import RockPaperScissors from "./Component/RockPaperScissors/RockPaperScissors";
import Hangman from "./Component/Hangman/Hangman";
import PuzzleGame from "./Component/PuzzleGame/PuzzleGame";
import Minesweeper from "./Component/Minesweeper/Minesweeper";
import Game2048 from "./Component/2048/Game2048";
import Sudoku from "./Component/Sudoku/Sudoku";
import DoodleJump from "./Component/DoodleJump/DoodleJump";
import NavigationChallenge from "./Component/NavigationChallenge/NavigationChallenge";
import TenziesGame from "./Component/TenziesGame/TenziesGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameMenu />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/memorygame" element={<MemoryGame />} />
        <Route path="/snakegame" element={<SnakeGame />} />
        <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
        <Route path="/hangman" element={<Hangman />} />
        <Route path="/puzzlegame" element={<PuzzleGame />} />
        <Route path="/minesweeper" element={<Minesweeper />} />
        <Route path="/2048" element={<Game2048 />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="/doodlejump" element={<DoodleJump />} />
        <Route path="/NavigationChallenge" element={<NavigationChallenge/>}/>
        <Route path="/TenziesGame" element={<TenziesGame/>}/>
      </Routes>
    </Router>
  );
}

export default App;

