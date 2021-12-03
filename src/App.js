import React, { useState, useEffect } from "react";
import "./App.css";

import ListContainer from "./ListContainer";
import Games from "./Games";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [gameData, setGameData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(20);

  useEffect(() => {
    axios.get("https://www.moogleapi.com/api/v1/games").then((res) => {
      setGameData(res.data);
      console.log(res.data);
    });
  }, []);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header>The Final Fantasy Compendium</Header>
      <Navbar></Navbar>
      <ListContainer>
        {gameData.length === 0 ? (
          <p>No Characters Found</p>
        ) : (
          gameData.map((game) => <Games game={game} />)
        )}
      </ListContainer>
    </>
  );
}

export default App;
