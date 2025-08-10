import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [playerChoice, setplayerChoice] = useState("");
  const [computerChoice, setcomputerChoice] = useState("");
  const [playerScore, setplayerScore] = useState(0);
  const [computerScore, setcomputerScore] = useState(0);
  const [round, setround] = useState(1);
  const [winner, setwinner] = useState(null);
  const [gameOver, setgameOver] = useState(false);
  const choices = ["✊", "✋", "✌️"];
  const pairs = {
    "✊": "✌️",
    "✋": "✊",
    "✌️": "✋",
  };
  const handlePlayerChoice = (choice) => {
    const random = Math.floor(Math.random() * 3);
    setcomputerChoice(choices[random]);
    const computer = choices[random];
    setplayerChoice(choice);

    let newplayerScore = playerScore;
    let newcomputerScore = computerScore;

    if (pairs[choice] == computer) {
     newplayerScore++
    } else if (pairs[computer] == choice) {
      newcomputerScore++;
    }

    setplayerScore(newplayerScore);
    setcomputerScore(newcomputerScore);

    if (round == 3) {
      {
        newplayerScore > newcomputerScore ? setwinner("🦸‍♂️") : setwinner("🤖");
      }
      setgameOver(true);
    } else {
      if (choice != computer) setround((prev) => prev + 1);
    }
  };
  const handleNewGame = () => {
    setcomputerChoice("");
    setcomputerScore(0);
    setplayerChoice("");
    setwinner(null);
    setplayerScore(0);
    setround(1);
    setgameOver(false);
  };

  return (
    <div className="pattern">
      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className=" text-7xl drop-shadow-lg font-extrabold"> Stone Paper Scissors </h1>
        {winner ? <h2 className="mt-5 font-bold animate-pulse">{winner} wins the game 🎉</h2>:
        <h2 className=" text-xl mt-5 font-bold">
          Round: {round} / 3 — 🦸‍♂️: {playerScore} | 🤖: {computerScore}
        </h2>
        }
      </div>
      <div className="wrapper">
        <Card title="🦸‍♂️" choice={playerChoice} />
        <Card title="🤖" choice={computerChoice} />
      </div>
      <div className="flex flex-col items-center justify-center mb-10">
      {gameOver ? (
        <button
          className="rounded-xl bg-white h-10 w-50 mx-10 text-10 text-black "
          onClick={() => handleNewGame()}
        >
          New Game
        </button>
      ) : (
        <div>
          {choices.map((choice) => (
            <button
              className=" rounded-2xl bg-black w-40 h-10 mx-10 text-2xl text-amber-50 hover:scale-110 hover:bg-blue-500 transition-all duration-300"
              onClick={() => {
                handlePlayerChoice(choice);
              }}
            >
              {choice}
            </button>
          ))}{" "}
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
