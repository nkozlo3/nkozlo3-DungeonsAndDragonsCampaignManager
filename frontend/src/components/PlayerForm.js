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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const player = { name, mainstats };
      console.log("Player object to be sent:", player);
      const response = await axios.post(
        "http://localhost:5500/players",
        player
      );
      console.log("Player added");
      console.log(response);
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
    <form className="submit-new-player" onSubmit={handleSubmit}>
      <label>
        Player Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Strength
        <input
          type="number"
          name="STRENGTH"
          min="8"
          max="16"
          value={mainstats.STRENGTH}
          onChange={handleStatChange}
        ></input>
      </label>
      <label>
        Dexterity
        <input
          type="number"
          name="DEXTERITY"
          min="8"
          max="16"
          value={mainstats.DEXTERITY}
          onChange={handleStatChange}
        ></input>
      </label>
      <label>
        Constitution
        <input
          type="number"
          name="CONSTITUTION"
          min="8"
          max="16"
          value={mainstats.CONSTITUTION}
          onChange={handleStatChange}
        ></input>
      </label>
      <label>
        Intelligence
        <input
          type="number"
          name="INTELLIGENCE"
          min="8"
          max="16"
          value={mainstats.INTELLIGENCE}
          onChange={handleStatChange}
        ></input>
      </label>
      <label>
        Wisdom
        <input
          type="number"
          name="WISDOM"
          min="8"
          max="16"
          value={mainstats.WISDOM}
          onChange={handleStatChange}
        ></input>
      </label>
      <label>
        Charisma
        <input
          type="number"
          name="CHARISMA"
          min="8"
          max="16"
          value={mainstats.CHARISMA}
          onChange={handleStatChange}
        ></input>
      </label>
      <button type="submit">Add Player</button>
    </form>
  );
}

export default PlayerForm;
