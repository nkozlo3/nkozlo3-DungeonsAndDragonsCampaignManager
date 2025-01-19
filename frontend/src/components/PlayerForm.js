import React, { useState } from "react";
import axios from "axios";
import "./PlayerForm.css";

function PlayerForm() {
  const [name, setName] = useState("");

  const [mainstats, setMainStats] = useState({
    STRENGTH: 8,
    DEXTERITY: 8,
    CONSTITUTION: 8,
    INTELLIGENCE: 8,
    WISDOM: 8,
    CHARISMA: 8,
  });

  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const player = { name, mainstats, description };
      console.log("Player object to be sent:", player);
      const response = await axios.post(
        "http://localhost:5500/players",
        player
      );
      console.log("Player added");
      console.log(response);

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleStatChange = (e) => {
    const { name, value } = e.target;
    setMainStats((currStats) => ({
      ...currStats,
      [name]: Number(value),
    }));
  };

  return (
    <div className="submit-new-player-form-container">
      <form className="submit-new-player" onSubmit={handleSubmit}>
        <div className="other-stats">
          <div className="player-name">
            <label>Player Name</label>
            <div className="input-cool-container">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="player-main-stats">
            <label>
              <div className="input-cool-container padding-stats" id="dynamic-input">
                <div className="stat-name">STRENGTH</div>
                <input
                  type="number"
                  name="STRENGTH"
                  min="8"
                  max="16"
                  value={mainstats.STRENGTH}
                  onChange={handleStatChange}
                ></input>
                <div className="dynamic-value" id="dynamic-value">
                  {Math.floor((mainstats.STRENGTH - 10) / 2)}
                </div>
              </div>
            </label>
            <label>
              <div className="input-cool-container padding-stats" id="dynamic-input">
                <div className="stat-name">DEXTERITY</div>
                <input
                  type="number"
                  name="DEXTERITY"
                  min="8"
                  max="16"
                  value={mainstats.DEXTERITY}
                  onChange={handleStatChange}
                ></input>
                <div className="dynamic-value" id="dynamic-value">
                  {Math.floor((mainstats.DEXTERITY - 10) / 2)}
                </div>
              </div>
            </label>
            <label>
              <div className="input-cool-container padding-stats" id="dynamic-input">
                <div className="stat-name">CONSTITUTION</div>
                <input
                  type="number"
                  name="CONSTITUTION"
                  min="8"
                  max="16"
                  value={mainstats.CONSTITUTION}
                  onChange={handleStatChange}
                ></input>
                <div className="dynamic-value" id="dynamic-value">
                  {Math.floor((mainstats.CONSTITUTION - 10) / 2)}
                </div>
              </div>
            </label>
            <label>
              <div className="input-cool-container padding-stats" id="dynamic-input">
                <div className="stat-name">INTELLIGENCE</div>
                <input
                  type="number"
                  name="INTELLIGENCE"
                  min="8"
                  max="16"
                  value={mainstats.INTELLIGENCE}
                  onChange={handleStatChange}
                ></input>
                <div className="dynamic-value" id="dynamic-value">
                  {Math.floor((mainstats.INTELLIGENCE - 10) / 2)}
                </div>
              </div>
            </label>
            <label>
              <div className="input-cool-container padding-stats" id="dynamic-input">
                <div className="stat-name">WISDOM</div>
                <input
                  type="number"
                  name="WISDOM"
                  min="8"
                  max="16"
                  value={mainstats.WISDOM}
                  onChange={handleStatChange}
                ></input>
                <div className="dynamic-value" id="dynamic-value">
                  {Math.floor((mainstats.WISDOM - 10) / 2)}
                </div>
              </div>
            </label>
            <label>
              <div className="input-cool-container padding-stats" id="dynamic-input">
                <div className="stat-name">CHARISMA</div>
                <input
                  type="number"
                  name="CHARISMA"
                  min="8"
                  max="16"
                  value={mainstats.CHARISMA}
                  onChange={handleStatChange}
                ></input>
                <div className="dynamic-value" id="dynamic-value">
                  {Math.floor((mainstats.CHARISMA - 10) / 2)}
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="button-description">
          <div className="player-description">
            <label>Description</label>
            <div className="input-cool-container">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols={89}
              rows={20}
            />
            </div>
          </div>

          <div className="submitButton-container">
            <button className="cButton" type="submit">
              Add Player
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlayerForm;
