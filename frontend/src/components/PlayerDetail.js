import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.js";
import "./PlayerDetail.css";
import { useParams } from "react-router";

function PlayerDetail() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/players/${id}`);
        setPlayer(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayer();
  });

  if (!player) {
    return "REEEE";
  }

  return (
    <div className="player-details-container">
      <div className="headers-generic">
        <h2>{player.name}</h2>
      </div>

      <div className="main-stats-details">
        <label>
          <div className="input-cool-container-p padding-stats">
            <div className="stat-name">STRENGTH</div>
            <div className="stat-value">{player.mainstats.STRENGTH}</div>
            <div className="dynamic-value" id="dynamic-value">
              {Math.floor((player.mainstats.STRENGTH - 10) / 2)}
            </div>
          </div>
        </label>

        <label>
          <div className="input-cool-container-p padding-stats">
            <div className="stat-name">STRENGTH</div>

            <div className="stat-value">{player.mainstats.STRENGTH}</div>

            <div className="dynamic-value" id="dynamic-value">
              {Math.floor((player.mainstats.STRENGTH - 10) / 2)}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default PlayerDetail;
