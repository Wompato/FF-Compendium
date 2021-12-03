import React from "react";

export default function Character({ characters }) {
  return (
    <div>
      <h1>{characters.name}</h1>
      <img src={characters.pictures[0]}></img>
      <p>{characters.description}</p>
    </div>
  );
}
