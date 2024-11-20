import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/first/message")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>DnD Campaign Manager</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
