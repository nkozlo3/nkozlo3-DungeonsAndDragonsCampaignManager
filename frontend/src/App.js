import React, { useState, useEffect } from "react";
import axios from "axios";
// import {Link} from "react-router-dom";
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
      <div class="headers-generic">
        <h1>DnD Campaign Manager</h1>
      </div>
      <PlayerForm />
      <div class="headers-generic">
        <h2>Players</h2>
      </div>
      <div className="player-buttons">
        <ul className="horizontal-ul" style={{ listStyle: "none" }}>
          {players.map((player) => (
            <li key={player._id}>
              <a
                className="non-standard-links cButton"
                href="https://google.com"
              >
                {player.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
