import React, { useState } from "react";
import axios from "axios";

function PlayerForm() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const player = { name };
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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Player Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Add Player</button>
    </form>
  );
}

export default PlayerForm;
