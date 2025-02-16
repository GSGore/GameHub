import React, { useState } from "react";
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
import "./GameMenu.css";

const GameMenu = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    const renderGame = () => {
        switch (selectedGame) {
            case "TicTacToe": return <TicTacToe />;
            case "MemoryGame": return <MemoryGame />;
            case "SnakeGame": return <SnakeGame />;
            case "RockPaperScissors": return <RockPaperScissors />;
            case "Hangman": return <Hangman />;
            case "PuzzleGame": return <PuzzleGame />;
            case "Minesweeper": return <Minesweeper />;
            case "2048": return <Game2048 />;
            case "Sudoku": return <Sudoku />;
            case "DoodleJump": return <DoodleJump />;
            case "NavigationChallenge" : return <NavigationChallenge/>;
            case "TenziesGame" : return <TenziesGame/>
            default: return null;
        }
    };

    return (
        <>
        <h1>Game Hub</h1>
        <div className="game-container">
            {!selectedGame ? (
                <>
                    
                    <div className="menu">
                        <button onClick={() => setSelectedGame('TicTacToe')}>Tic Tac Toe</button>
                        <button onClick={() => setSelectedGame('MemoryGame')}>Memory Game</button>
                        <button onClick={() => setSelectedGame('SnakeGame')}>Snake Game</button>
                        <button onClick={() => setSelectedGame('RockPaperScissors')}>Rock Paper Scissors</button>
                        <button onClick={() => setSelectedGame('Hangman')}>Hangman</button>
                        <button onClick={() => setSelectedGame('PuzzleGame')}>15 Puzzle Game</button>
                        <button onClick={() => setSelectedGame("Minesweeper")}>Minesweeper</button>
                        <button onClick={() => setSelectedGame("2048")}>2048</button>
                        <button onClick={() => setSelectedGame("Sudoku")}>Sudoku</button>
                        <button onClick={() => setSelectedGame("DoodleJump")}>Doodle Jump</button>
                        <button onClick={() => setSelectedGame("NavigationChallenge")}>NavigationChallenge</button>
                        <button onClick={() => setSelectedGame("TenziesGame")}>TenziesGame</button>


                    </div>
                </>
            ) : (
                <>
                    <button className="back-button" onClick={() => setSelectedGame(null)}>⬅ Back to Menu</button>
                    {renderGame()}
                </>
            )}
        </div>
        </>
    );
};

export default GameMenu;
