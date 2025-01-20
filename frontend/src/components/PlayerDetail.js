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
          <div className="header-content">
            <h1>{player.name}</h1>
          </div>
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
            <div className="stat-name">DEXTERITY</div>

            <div className="stat-value">{player.mainstats.DEXTERITY}</div>

            <div className="dynamic-value" id="dynamic-value">
              {Math.floor((player.mainstats.DEXTERITY - 10) / 2)}
            </div>
          </div>
        </label>

        <label>
          <div className="input-cool-container-p padding-stats">
            <div className="stat-name">CONSTITUTION</div>

            <div className="stat-value">{player.mainstats.CONSTITUTION}</div>

            <div className="dynamic-value" id="dynamic-value">
              {Math.floor((player.mainstats.CONSTITUTION - 10) / 2)}
            </div>
          </div>
        </label>

        <label>
          <div className="input-cool-container-p padding-stats">
            <div className="stat-name">INTELLIGENCE</div>

            <div className="stat-value">{player.mainstats.INTELLIGENCE}</div>

            <div className="dynamic-value" id="dynamic-value">
              {Math.floor((player.mainstats.INTELLIGENCE - 10) / 2)}
            </div>
          </div>
        </label>

        <label>
          <div className="input-cool-container-p padding-stats">
            <div className="stat-name">WISDOM</div>

            <div className="stat-value">{player.mainstats.WISDOM}</div>

            <div className="dynamic-value" id="dynamic-value">
              {Math.floor((player.mainstats.WISDOM - 10) / 2)}
            </div>
          </div>
        </label>

        <label>
          <div className="input-cool-container-p padding-stats">
            <div className="stat-name">CHARISMA</div>

            <div className="stat-value">{player.mainstats.CHARISMA}</div>

            <div className="dynamic-value" id="dynamic-value">
              {Math.floor((player.mainstats.CHARISMA - 10) / 2)}
            </div>
          </div>
        </label>
      </div>

      <div className="player-description">{player.description}</div>
    </div>
  );
}

export default PlayerDetail;
