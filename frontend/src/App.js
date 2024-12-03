import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PlayerForm from "./components/PlayerForm";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:5500/players");
        setPlayers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  });

  return (
    <div>
      <h1>DnD Campaign Manager</h1>
      <PlayerForm />
      <h2>Players</h2>
      <ul style={{ listStyle: "none" }}>
        {players.map((player) => (
          <li key={player._id}>
            <button>{player.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
