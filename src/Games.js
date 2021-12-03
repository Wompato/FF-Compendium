import React from "react";

export default function Games({ game }) {
  return (
    <div className="game-item">
      <h1>{game.title}</h1>
      <img src={game.picture} />
      <p>{game.description}</p>
    </div>
  );
}
