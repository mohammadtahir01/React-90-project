// import React, { useState } from "react";
import React, { useState } from "react";

const choices = ["Rock", "Paper", "Scissors"];

const getResult = (user, computer) => {
  if (user === computer) return "It's a Tie!";
  if (
    (user === "Rock" && computer === "Scissors") ||
    (user === "Paper" && computer === "Rock") ||
    (user === "Scissors" && computer === "Paper")
  ) {
    return "You Win!";
  }
  return "You Lose!";
};

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (userPick) => {
    const computerPick = choices[Math.floor(Math.random() * 3)];
    const gameResult = getResult(userPick, computerPick);

    setUserChoice(userPick);
    setComputerChoice(computerPick);
    setResult(gameResult);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Rock Paper Scissors</h2>
      <div>
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => playGame(choice)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            {choice}
          </button>
        ))}
      </div>
      {result && (
        <>
          <p>Your choice: <strong>{userChoice}</strong></p>
          <p>Computer's choice: <strong>{computerChoice}</strong></p>
          <h3>{result}</h3>
        </>
      )}
    </div>
  );
};

export default App;